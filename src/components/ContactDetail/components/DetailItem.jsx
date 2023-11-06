import { Typography, Grid, Icon } from "@mui/material";

const DetailItem = ({ icon, label, value }) => (
  <Grid item xs={12} md={4} sx={{ padding: "1.5rem", borderRadius: "8px" }}>
    <Icon>{icon}</Icon>
    <Typography
      sx={{
        color: "#333",
        fontSize: "1.2rem",
        fontWeight: "600",
        marginBottom: 1,
      }}
    >
      {label}:
    </Typography>
    <Typography component="span" sx={{ fontWeight: "400", color: "#555" }}>
      {value}
    </Typography>
  </Grid>
);

export default DetailItem;
