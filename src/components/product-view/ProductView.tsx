'use client';
import {Container, Grid, Pagination, Typography} from "@mui/material";
import ProductItem from "@/components/product-view/product-item";
import {useDataContext} from "@/global/DataProvider";
import {ProductLocal} from "@/api/models/product";
import {useEffect, useState} from "react";
import {useSearchContext} from "@/components/search/SearchProvider";

const ProductView = () => {
    const {products} = useDataContext();
    const {searchItem} = useSearchContext();

    const [productsToShow, setProductsToShow] = useState(products);
    const [countProducts, setCountProducts] = useState(0);
    const [limit, setLimit] = useState(10);
    const [pageNumber, setPageNumber] = useState(1);

    const [isFirstRender, setIsFirstRender] = useState(true);

    // useEffect(() => {
    //     setCountProducts(products?.length || 0);
    // }, [products]);

    useEffect(() => {
        let middleProducts = products;
        if (searchItem && searchItem.type === 'category') {
            if (isFirstRender) {
                setPageNumber(1);
                setIsFirstRender(false);
            }
            middleProducts = products?.filter((product: ProductLocal) => product.category.id === searchItem.id);
        }
        setCountProducts(middleProducts?.length || 0)
        setProductsToShow(middleProducts?.slice((pageNumber - 1) * limit, pageNumber * limit) || []);

        return function () {
            if (!searchItem)
                setIsFirstRender(true);
        }
    }, [pageNumber, limit, products, searchItem]);


    const handlePagination = (_: any, page: number) => {
        setPageNumber(page);
        window.scrollTo({behavior: 'instant', top: 0});
    }
    return (
        <Container>
            <Pagination
                count={Math.ceil(countProducts / limit)}
                showFirstButton
                showLastButton
                sx={{
                    padding: '1rem 0',
                    '& .MuiPagination-ul': {
                        justifyContent: 'center'
                    }
                }}
                page={pageNumber}
                onChange={handlePagination}
            />
            <Grid container spacing={{xs: 2, sm: 4}}>
                {productsToShow && productsToShow.map((product: ProductLocal) => (
                    <Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>
                        <ProductItem
                            product={product}
                        />
                    </Grid>
                ))}
                {productsToShow && productsToShow.length === 0 && (
                    <Grid key={'dont'} item xs={12}>
                        <Typography
                            align={'center'}
                        >
                            No se encontraron productos, pruebe realizando otra búsqueda
                        </Typography>
                    </Grid>
                )}
            </Grid>
            <Pagination
                count={Math.ceil(countProducts / limit)}
                showFirstButton
                showLastButton
                sx={{
                    padding: '1rem 0',
                    '& .MuiPagination-ul': {
                        justifyContent: 'center'
                    }
                }}
                page={pageNumber}
                onChange={handlePagination}
            />
        </Container>
    )
}
export default ProductView;