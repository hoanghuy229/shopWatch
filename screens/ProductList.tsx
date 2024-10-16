import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity, TextInput,FlatList  } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Ionicons } from '@expo/vector-icons';
import Popover from 'react-native-popover-view';
import Header from "./Header";
import { getAllCategory, getAllProduct } from "../apis/ProductApi";
import { Category } from "../models/Category";
import { Product } from "../models/Product";
import { addtoCart } from "../services/CartService";


const ProductList = (props:any) => {
    const [categories,setCategories] = useState<Category[]>([]);
    const [products,setProducts] = useState<Product[]>([]);
    const [isCatePopoverVisible, setIsCatePopoverVisible] = useState(false);
    const [isPricePopoverVisible, setIsPricePopoverVisible] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState(0);
    const [selectedPriceBetween,setSelectedPriceBetWeen] = useState(0);
    const [minPrice,setMinPrice] = useState(0);
    const [maxPrice,setMaxPrice] = useState(0);
    const [keyword,setkeyword] = useState('');
    const [currentPage, setCurrentPage] = useState(0);
    const [totalPages, setTotalPages] = useState(0);

    useEffect(() => {
        getAllCategory()
        .then(
            (data) => setCategories(data)
        )
        .catch(error => console.log(`${error}`))
    },[])

    useEffect(() => {
        getAllProduct(currentPage, selectedCategory, keyword, minPrice, maxPrice)
            .then((data) => {
                setProducts([...products, ...data.result]);
                setTotalPages(data.totalPage);
            })
            .catch(error => console.log(`${error}`))
    },[currentPage,selectedCategory,keyword,minPrice,maxPrice])

    useEffect(() => {
        const unsubscribe = props.navigation.addListener('focus', () => {
            setSelectedCategory(0);
            setSelectedPriceBetWeen(0);
            setkeyword('');
            setCurrentPage(0);
            setProducts([]);
        });
    
        // Xóa sự kiện khi component bị unmount
        return unsubscribe;
    }, [props.navigation]);
    

    const closeCategoryPopover = (categoryId: number) => {
        const selectedCate = categories.find(cate => cate.category_id === categoryId);
        setSelectedCategory(selectedCate ? selectedCate.category_id : 0);
        setIsCatePopoverVisible(false);
    };
    

    const closePriceBetweenPopover = (priceBetween: number) => {
        setSelectedPriceBetWeen(priceBetween);
        setIsPricePopoverVisible(false);

        const priceRanges: {[key: number]: number[]} = 
        {
            0: [0, 0],
            1: [50, 100],
            2: [100, 200],
            3: [200, 300],
            4: [300, 400],
        };

        const [min, max] = priceRanges[priceBetween];
        setMinPrice(min);
        setMaxPrice(max);
    };

    const addThisToCart = async (productId:number) => {
        try{
            await addtoCart(productId);
            alert(`thêm thành công`)
        }
        catch(error){
            console.log(`${error}`)
        }
    }


    const renderItem = ({ item }: { item: Product }) => (
            <TouchableOpacity style={styles.productCard}>
            <Image source={{ uri: `http://10.0.2.2:8080/api/v1/products/images/${item.image}` }} style={styles.productImage} />
            <Text style={styles.productName}>{item.name}</Text>
            <Text style={styles.productPrice}>{item.price} $</Text>
            {
                item.quantity > 0 ? 
                (
                    <View style={styles.buttonsContainer}>
                        <TouchableOpacity style={styles.cart}>
                            <Ionicons name="cart" size={20} color="darkorange" onPress={() => addThisToCart(item.product_id)}/>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.detail}>
                            <Ionicons name="eye" size={20} color="green" onPress={() => props.navigation.navigate('ProductDetail', { productId: item.product_id })}/>
                        </TouchableOpacity>
                    </View>
                ) 
                : 
                (
                    <View style={styles.buttonsContainer}>
                        <Text style={{fontSize:20, fontStyle:"italic"}}>liên hệ đặt hàng</Text>
                    </View>
                )
            }
        </TouchableOpacity>
    );

    const handleLoadMore = () => {
        if (currentPage < totalPages - 1) {
            setCurrentPage(currentPage + 1);
        }
    };

return (
    <View style={styles.container}>
        <Header navigation={props.navigation}></Header>
          <View style={styles.header}>
            <View style={styles.searchContainer}>
                <Ionicons name="search" size={20} color="black" style={styles.icon} />
                <TextInput
                    style={styles.inputSearch}
                    placeholder="Tìm kiếm"
                    placeholderTextColor="#888"
                    value={keyword}
                    onChangeText={setkeyword}
                />
            </View>
           
            <Popover
                isVisible={isCatePopoverVisible}
                onRequestClose={() => setIsCatePopoverVisible(false)}
                from={(
                    <TouchableOpacity onPress={() => setIsCatePopoverVisible(true)} style={styles.button}>
                        {
                            selectedCategory == 0 ? (
                                <Text style={styles.buttonText}>Danh mục</Text>
                            ) : 
                            (
                                <Text style={styles.buttonText}>
                                    {categories.find(cate => cate.category_id === selectedCategory)?.name}
                                </Text>
                            )
                        }
                        
                    </TouchableOpacity>
                )}
            >
                <TouchableOpacity onPress={() => closeCategoryPopover(0)}>
                    <Text>tất cả</Text>
                </TouchableOpacity>
                {
                    categories.map(category => (
                        <TouchableOpacity key={category.category_id} onPress={() => closeCategoryPopover(category.category_id)}>
                            <Text>Đồng hồ {category.name}</Text>
                        </TouchableOpacity>
                    ))
                }
            </Popover>

            <Popover
                isVisible={isPricePopoverVisible}
                onRequestClose={() => setIsPricePopoverVisible(false)}
                from={(
                    <TouchableOpacity onPress={() => setIsPricePopoverVisible(true)} style={styles.button}>
                        {
                            selectedPriceBetween == 0 ? (
                                <Text style={styles.buttonText}>khoản giá</Text>
                            ) : 
                            (
                                <Text style={styles.buttonText}>{`${minPrice} đến ${maxPrice} $`}</Text>
                            )
                        }
                        
                    </TouchableOpacity>
                )}
            >
                <TouchableOpacity onPress={() => closePriceBetweenPopover(0)}>
                    <Text>tất cả</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => closePriceBetweenPopover(1)}>
                    <Text>50 đến 100 $</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => closePriceBetweenPopover(2)}>
                    <Text>100 đến 200 $</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => closePriceBetweenPopover(3)}>
                    <Text>200 đến 300 $</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => closePriceBetweenPopover(4)}>
                    <Text>300 đến 400 $</Text>
                </TouchableOpacity>
            </Popover>
          </View>
          <FlatList
                data={products}
                renderItem={renderItem}
                keyExtractor={(item, index) => index.toString()}
                onEndReached={handleLoadMore}
                onEndReachedThreshold={0.1}
                numColumns={2}
            />
    </View>
);
};

const styles = StyleSheet.create({
container: {
    flex: 1,
    marginTop:50,
    marginBottom:50,
    backgroundColor: '#fff',
},

header:{
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginTop: 50,
    marginBottom: 20,
},
searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    paddingHorizontal: 15,
    marginHorizontal: 10,
    marginVertical: 10,
    width:150
},
button: {
    backgroundColor: 'lightblue',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginRight:10
},
icon: {
    marginRight: 10,
},
inputSearch: {
    flex: 1,
    height: 40,
    fontSize: 16,
    width:90,
},
filter:{
    flexDirection:"row",
    marginTop:50,
    marginBottom:20,
},
input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 20,
    paddingHorizontal: 10,
    marginBottom: 20,
    height: 40,
    marginLeft:5,
    width:150,
},
titles: {
    marginTop: 40,
    marginLeft: 10,
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20
},
productContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
},
productCard: {
    width: '45%',
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 10,
    marginLeft:10
},
productImage: {
    width: '100%',
    height: 150,
    resizeMode: 'cover',
    borderRadius: 10,
},
productName: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: 'bold',
},
productPrice: {
    marginTop: 5,
    fontSize: 16,
},
buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
},
cart: {
    backgroundColor: 'transparent',
    borderWidth: 1, // Độ rộng của viền
    borderColor: 'darkorange', // Màu viền
    borderRadius: 5, // Độ cong của góc
    paddingVertical: 10, // Khoảng cách dọc của phần padding
    paddingHorizontal: 20, // Khoảng cách ngang của phần padding
    width: '45%',
    alignItems: 'center',
},
detail: {
    backgroundColor: 'transparent',
    borderWidth: 1, // Độ rộng của viền
    borderColor: '#28a745', // Màu viền
    borderRadius: 5, // Độ cong của góc
    paddingVertical: 10, // Khoảng cách dọc của phần padding
    paddingHorizontal: 20, // Khoảng cách ngang của phần padding
    width: '45%',
    alignItems: 'center',
},
buttonText: {
    color: 'white',
    fontWeight: 'bold',
},
});

export default ProductList;