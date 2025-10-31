import { useEffect, useState } from "react";
import { Card, CardMedia, CardContent, CardActions, Typography, Button } from "@mui/material";

const CompanyCardContent = (props) => {
    const companyRawData = props.CmpData
    const [companyData, setCompanyData] = useState({})


    useEffect(() => {
        setCompanyData(companyRawData)

    }, [])


    return (
        <>
            <Card sx={{ maxWidth: 345, m: 2, boxShadow: 3 }}>
                <CardMedia
                    sx={{ height: 140 }}
                    image={companyRawData.image}
                    title={companyData.name || "Company"}
                />
                <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                        {companyData.name || "Company Name"}
                    </Typography>

                    <Typography variant="body2" color="text.secondary">
                        <strong>Industry:</strong> {companyData.industry || "N/A"}
                    </Typography>

                    <Typography variant="body2" color="text.secondary">
                        <strong>Founded:</strong> {companyData.founded || "—"}
                    </Typography>

                    <Typography variant="body2" color="text.secondary">
                        <strong>Employees:</strong> {companyData.employees || "—"}
                    </Typography>

                    {companyData.headquarters && (
                        <Typography variant="body2" color="text.secondary">
                            <strong>HQ:</strong> {companyData.headquarters.city}, {companyData.headquarters.country}
                        </Typography>
                    )}

                    {companyData.services && (
                        <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                            <strong>Services:</strong> {companyData.services.join(", ")}
                        </Typography>
                    )}
                </CardContent>

                <CardActions>
                    <Button size="small" href={companyData.website} target="_blank" rel="noopener noreferrer">
                        Visit Website
                    </Button>
                    <Button size="small" onClick={() => alert(`Contact: ${companyData.contact?.email}`)}>
                        Contact
                    </Button>
                </CardActions>
            </Card>

        </>
    )

}

export default CompanyCardContent;