import {IconButton, Stack, Typography} from "@mui/material";
import {AddCircle, RemoveCircle} from "@mui/icons-material";
import {useCartContext} from "@/components/cart/CartProvider";

const Quantity = ({productId}: { productId: number }) => {
    const {selectedProducts, setSelectedProducts, quantityArray, setQuantityArray} = useCartContext();

    const currentIndex = selectedProducts?.findIndex((product) => product.id === productId) || 0;
    const onPlusQuantity = () => {
        if(quantityArray && selectedProducts && quantityArray[currentIndex] !== selectedProducts[currentIndex].stock) {
            const newArray = quantityArray ? [...quantityArray] : [];
            newArray[currentIndex]++;
            setQuantityArray && setQuantityArray(newArray);
        }
    }

    const onMinusQuantity = () => {
        if(quantityArray && quantityArray[currentIndex] !== 1 ){
            const newArray = quantityArray ? [...quantityArray] : [];
            newArray[currentIndex]--;
            setQuantityArray && setQuantityArray(newArray);
        } else {
            setQuantityArray && setQuantityArray((prevArray) => {
                const newArray = [...prevArray];
                newArray.splice(currentIndex, 1);
                return newArray;
            });
            setSelectedProducts && setSelectedProducts((prevArray) => {
                const newArray = [...prevArray];
                newArray.splice(currentIndex, 1);
                return newArray;
            });
        }
    }

    return (
        <Stack direction={'row'} alignItems={'center'} width={'100%'}>
            <IconButton color={'graySpace'} onClick={onMinusQuantity}
                // sx={{opacity: quantity === 1 ? '0%' : '100%'}}
            >
                <RemoveCircle/>
            </IconButton>
            <Typography
                variant={'h5'}
                component={'p'}
                fontWeight={'semiBold'}
                color={'text.primary'}
            >
                {quantityArray ? quantityArray[currentIndex] : 0}
            </Typography>
            <IconButton
                color={'graySpace'}
                onClick={onPlusQuantity}
                // hidden={quantityArray[currentIndex] === selectedProducts[currentIndex].stock}
            >
                <AddCircle/>
            </IconButton>
        </Stack>
    )
}

export default Quantity;