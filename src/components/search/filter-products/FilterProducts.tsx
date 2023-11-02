'use client';
import {Box, Chip, Typography} from "@mui/material";
import {useSearchContext} from "@/components/search/SearchProvider";
import {useRouter} from "next/navigation";

const FilterProducts = () => {
    const {searchItem, setSearchItem} = useSearchContext();
    const router = useRouter();
    const label = searchItem?.type === 'category' ? searchItem?.name : searchItem?.type === 'query' ? `Búsqueda: ${searchItem?.name}` : 'Producto único';
    const handleDelete = () => {
        setSearchItem && setSearchItem(null);
        router.push('/');
    }
    return (
        <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems:'center'}}>
            <Typography variant={"body1"} fontWeight={"bold"}>Filtro</Typography>
            <Chip color={'red'} label={label} onDelete={handleDelete}/>
        </Box>
    )
}
export default FilterProducts;