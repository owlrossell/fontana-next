'use client';
import {Box, Container} from "@mui/material";
import Search from "@/components/search";
import {useFilterContext} from "@/global/FilterProvider";
import FilterProducts from "@/components/filter-products";

const Page = ({params}: { params: { name: string } }) => {
    const {filter} = useFilterContext();
    return (
        <Box>
            <Container maxWidth={'sm'}>
                <FilterProducts/>
            </Container>
        </Box>
    )
}
export default Page;