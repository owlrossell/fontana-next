'use client';
import {Box, Chip, Typography} from "@mui/material";
import {useFilterContext} from "@/global/FilterProvider";
import {useRouter} from "next/navigation";

const FilterProducts = () => {
    const {filter, setFilter} = useFilterContext();
    const router = useRouter();
    const handleDelete = () => {
        setFilter && setFilter(null);
        router.push('/');
    }
    return (
        <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems:'center'}}>
            <Typography variant={"body1"} fontWeight={"bold"}>Filtro</Typography>
            <Chip color={'red'} label={filter?.name || 'None'} onDelete={handleDelete}/>
        </Box>
    )
}
export default FilterProducts;