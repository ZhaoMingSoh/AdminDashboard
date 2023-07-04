const { Box } = require("@mui/material");
const { styled } = require("@mui/system");

// Can reuse this style
const FlexBetween = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

export default FlexBetween;
