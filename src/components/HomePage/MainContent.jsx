import { useEffect, useState } from "react";
import { Container, Grid, Box, Typography } from "@mui/material";
import CompanyCardContent from "./CardContent";
import { useFilter } from "../ContextData/FilterContext";

const MainContent = ({ config }) => {

    const {filteredData, setFilteredData } = useFilter();

    useEffect(() => {
        setFilteredData(config.CompaniesData || []);
    }, [config]);

    return (
        <div>
            <Box>

            </Box>
            <Box
                component="main"
                sx={{
                    flex: 1,
                    height: "70vh",
                    overflowY: "auto",
                    px: 2,
                    py: 3,
                    backgroundColor: "white",
                    scrollbarWidth: "thin",
                    "&::-webkit-scrollbar": {
                        width: "8px",
                    },
                    "&::-webkit-scrollbar-thumb": {
                        backgroundColor: "#bbb",
                        borderRadius: "4px",
                    },
                    "&::-webkit-scrollbar-thumb:hover": {
                        backgroundColor: "#888",
                    },
                }}
            >
                <Container maxWidth="xl">

                    <Grid
                        container
                        spacing={3}
                        justifyContent="center"
                        alignItems="stretch"
                    >
                        {filteredData.map((data, index) => (
                            <Grid
                                item
                                key={index}
                                xs={12}
                                sm={6}
                                md={4}
                                lg={3}
                                xl={2.4}
                                sx={{
                                    display: "flex",
                                    justifyContent: "center",
                                }}
                            >
                                <CompanyCardContent CmpData={data} />
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Box>
        </div>

    );
};

export default MainContent;
