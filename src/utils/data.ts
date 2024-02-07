import moment from "moment";


export const languageList = [
  { name: "English", id: "en", color: "#006E7F", firstLetter: "A" },
  { name: "हिंदी", id: "hi", color: "#6895D2", firstLetter: "अ" },
  // { name: "ಕನ್ನಡ", id: "kn", color: "#F3B95F", firstLetter: "అ" },
  // { name: "தமிழ்", id: "ta", color: "#872341", firstLetter: "அ" },
  // { name: "తెలుగు", id: "te", color: "#1B9C85", firstLetter: "అ" },
  // { name: "മലയാളം", id: "ml", color: "#BB6464", firstLetter: "അ" },
  // { name: "বাঙালি", id: "bn", color: "#BB6464", firstLetter: "অ" },
  // { name: "اردو", id: "ur", color: "#994D1C", firstLetter: "الف" },
  // { name: "मराठी", id: "mr", color: "#BB6464", firstLetter: "आ" },
  // { name: "ગુજરાતી", id: "gu", color: "#1D5B79", firstLetter: "અ" },
  // { name: "ਪੰਜਾਬੀ", id: "pa", color: "#4C4C6D", firstLetter: "ਪ" },
  // { name: "ଓଡିଆ", id: "or", color: "#5F8670", firstLetter: "ଓ" },
  // { name: "অসমীয়া", id: "as", color: "#FF9551", firstLetter: "অ" },
];

export const playAudioURL = (
  audioURLs: string[],
  isSpeechRecognitionSupported: any,
  startRecognition: any,
  requestPermission: any
) => {
  let currentAudioIndex = 0;
  const audios: HTMLAudioElement[] = audioURLs
    .filter((item) => item !== undefined && item !== null && item.length > 0)
    .map((url) => new Audio(url));

  const handleAudioEnded = () => {
    currentAudioIndex++;
    if (currentAudioIndex < audios.length) {
      playNextAudio();
    } else {
      // Perform actions when all audios finish playing
      isSpeechRecognitionSupported() ? startRecognition() : requestPermission();
    }
  };

  const playNextAudio = () => {
    if (currentAudioIndex < audios.length) {
      const audio = audios[currentAudioIndex];
      audio.play().catch((error) => {
        console.error("Error playing audio:", error);
      });

      audio.addEventListener("ended", handleAudioEnded);
    }
  };

  playNextAudio();

  return () => {
    audios.forEach((audio) => {
      if (!audio.paused) {
        audio.pause();
      }
      audio.currentTime = 0;
      audio.removeEventListener("ended", handleAudioEnded);
    });
  };
};
