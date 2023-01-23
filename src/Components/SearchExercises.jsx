import { useState, useEffect } from "react";
import React from 'react';
import { Box, Button, Stack, TextField, Typography } from "@mui/material";

import { exerciseOptions, fetchData } from "../utils";


const SearchExercises = () => {
    const [search, setSearch] = useState("")
    const [exercises, setExercises] = useState([])

    const handleSearch = async () => {
        if (search) {
            const exersicesData = await fetchData("https://exercisedb.p.rapidapi.com/exercises", exerciseOptions);

            const searchedExercises = exersicesData.filter(
                (exercises) => exerciseOptions.name.toLowercase().includes(search)
                    || exerciseOptions.target.toLowercase().includes(search)
                    || exerciseOptions.equipment.toLowercase().includes(search)
                    || exerciseOptions.bodyPart.toLowercase().includes(search)
            )

            setSearch("");
            setExercises(searchedExercises)
        }
    }
    return (
        <Stack alignItems="center" mt="37px" justifyContent="center" py="150px">
            <Typography fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '30px' } }} mb="50px" textAlign="center">
                حرکت های عالی که <br /> باید یاد بگیرید
            </Typography>
            <Box position="relative" mb="72px">
                <TextField
                    sx={{
                        input: { fontWeight: "700", border: 'none', borderRaduis: '4px' },
                        width: { lg: '800px', xs: "300px" },
                        backgroundColor: "#FFFFFF",
                        borderRaduis: "40px"
                    }}
                    height="26px"
                    value={search}
                    onChange={(e) => setSearch(e.target.value.toLowerCase())}
                    placeholder="جستجوی حرکات ..."
                    type="text"
                />
                <Button className="search-btn"
                    sx={{
                        backgroundColor: "#FF2625",
                        color: "#FFF",
                        textTransform: "none",
                        width: { lg: "170px", xs: "80px" },
                        fontSize: { lg: "20px", xs: "14px" },
                        height: "56px",
                        position: "absolute",
                        left: "0"
                    }}
                    onClick={handleSearch}>
                    جستجو
                </Button>
            </Box>
        </Stack>
    );
};

export default SearchExercises;