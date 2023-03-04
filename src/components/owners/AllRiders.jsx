import React, { useEffect, useState } from "react";
import { allRiders } from "../../api/owner/owner";
import { Typography, Stack, Avatar, Box, LinearProgress } from "@mui/material";
import CustomTable from "../common/CustomTable";

function AllRiders() {
  const [loading, setLoading] = useState(false);
  const [ridersData, setRidersData] = useState([]);
  const fetchRiders = () => {
    setLoading(true);
    allRiders().then((res) => {
      setRidersData(res.data)
      setLoading(false);
    });    
  };

  useEffect(() => {
    fetchRiders();
  }, []);
  const columns = [
    {
      field: "first_name",
      headerName: "First Name",
      width: 250,
      renderCell: (params) => {
        return (
          <>
            <Avatar sx={{ mr: 2 }} src={params.value} alt={params.value} />
            {params.value}
          </>
        );
      },
    },
    {
      field: "last_name",
      headerName: "Surname",
      width: 150,
      
    },
    {
      field: "location",
      headerName: "Location",
      width: 150,
    },
    {
      field: "phone_number",
      headerName: "Telephone",
      width: 150,
    },
    {
      field: "email",
      headerName: "Email",
      width: 150,
    },
  ]
  return (
    <>
      <Stack
        direction="row"
        justifyContent="flex-start"
        alignItems="flex-start"
        sx={{ p: 2 }}
      >
        <Typography>These are the verified Riders on the platform</Typography>
      </Stack>
      <Box
        sx={{
          mt: 5,
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: "primary.lightest_gray",
            fontSize: 16,
          },
        }}
      >
        {loading && <LinearProgress/>}
        {!loading && <CustomTable rows={ridersData} columns={columns}/>}
      </Box>
    </>
  );
}

export default AllRiders;
