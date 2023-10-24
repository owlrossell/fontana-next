'use client';
import {Box, Container} from "@mui/material";
import Search from "@/components/search";
import {useSearchContext} from "@/components/search/SearchProvider";
import FilterProducts from "../../../components/search/filter-products";

const Page = ({params}: { params: { name: string } }) => {
    const {searchItem} = useSearchContext();
    return (
        <Box>
            CATEGORIA
        </Box>
    )
}
export default Page;