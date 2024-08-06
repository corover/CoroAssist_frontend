import styled from "styled-components";
import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";



const LoadingContainer = styled.div`
  display: flex;
  flex-direction: row;
  min-width: 10%;
  align-items: flex-end;
  padding: 5px 0px 0px 5px;
  justify-content: flex-start;
  max-width: 50%;
`;

export default function Loading() {
  return (
    <div style={{display:"flex"}}>
      <img
        src="bot.png"
        alt="icon"
        width="30px"
        height="30px"
        style={{ marginRight: "5px" }}
      />
      <LoadingContainer className={"LoadingContainer"}>
        <Box sx={{ width: 300 }}>
          <Skeleton animation="wave" />
          <Skeleton animation="wave" />
          <Skeleton animation="wave" />
        </Box>
      </LoadingContainer>
    </div>
  );
}
