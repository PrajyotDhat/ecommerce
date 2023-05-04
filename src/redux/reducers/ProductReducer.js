const initialState = {
    products: [
        {
            id: 1,
            name: 'ACER',
            image: 'https://pim-media.intel.com/pub-api/v1/imageservice/customize?url=https://images.icecat.biz/img/gallery/108164961_5572909393.jpg&height=225&width=225',
            price:  65000,
            quantity: 1,
            rating:3.5,
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt facere quam in, id maiores nisi praesentium corrupti molestiae voluptatum laudantium tenetur rerum alias. Rem repudiandae vel culpa eius at esse.",
        },
        {
            id: 2,
            name: 'DELL',
            image: 'https://pim-media.intel.com/pub-api/v1/imageservice/customize?url=https://images.icecat.biz/img/gallery/97449979_8691053889.jpg&height=225&width=225',
            price:  72000,
            quantity: 1,
            rating:3.5,
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt facere quam in, id maiores nisi praesentium corrupti molestiae voluptatum laudantium tenetur rerum alias. Rem repudiandae vel culpa eius at esse.",
        },
        {
            id: 3,
            name: 'LENOVO',
            image: 'https://pim-media.intel.com/pub-api/v1/imageservice/customize?url=https://images.icecat.biz/img/gallery/108164961_5572909393.jpg&height=225&width=225',
            price:  71000,
            quantity: 1,
            rating:3.7,
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt facere quam in, id maiores nisi praesentium corrupti molestiae voluptatum laudantium tenetur rerum alias. Rem repudiandae vel culpa eius at esse.",
        },
        {
            id: 4,
            name: 'APPLE',
            image: 'https://pim-media.intel.com/pub-api/v1/imageservice/customize?url=https://images.icecat.biz/img/gallery/97449979_8691053889.jpg&height=225&width=225',
            price: 105000,
            quantity: 1,
            rating:4.5,
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt facere quam in, id maiores nisi praesentium corrupti molestiae voluptatum laudantium tenetur rerum alias. Rem repudiandae vel culpa eius at esse.",
        },
        {
            id: 5,
            name: 'HP',
            image: 'https://pim-media.intel.com/pub-api/v1/imageservice/customize?url=https://images.icecat.biz/img/gallery/108164961_5572909393.jpg&height=225&width=225',
            price: 68000,
            quantity: 1,
            rating:3.4,
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt facere quam in, id maiores nisi praesentium corrupti molestiae voluptatum laudantium tenetur rerum alias. Rem repudiandae vel culpa eius at esse.",
        },
        {
            id: 6,
            name: 'ASUS',
            image: 'https://pim-media.intel.com/pub-api/v1/imageservice/customize?url=https://images.icecat.biz/img/gallery/97449979_8691053889.jpg&height=225&width=225',
            price:  80000,
            quantity: 1,
            rating:4.8,
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt facere quam in, id maiores nisi praesentium corrupti molestiae voluptatum laudantium tenetur rerum alias. Rem repudiandae vel culpa eius at esse.",
        },
        {
            id: 7,
            name: 'SAMSUNG',
            image: 'https://pim-media.intel.com/pub-api/v1/imageservice/customize?url=https://images.icecat.biz/img/gallery/108164961_5572909393.jpg&height=225&width=225',
            price:  79000,
            quantity: 1,
            rating:3.4,
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt facere quam in, id maiores nisi praesentium corrupti molestiae voluptatum laudantium tenetur rerum alias. Rem repudiandae vel culpa eius at esse.",
        },
        {
            id: 8,
            name: 'SONY',
            image: 'https://pim-media.intel.com/pub-api/v1/imageservice/customize?url=https://images.icecat.biz/img/gallery/97449979_8691053889.jpg&height=225&width=225',
            price:  82000,
            quantity: 1,
            rating:4.5,
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt facere quam in, id maiores nisi praesentium corrupti molestiae voluptatum laudantium tenetur rerum alias. Rem repudiandae vel culpa eius at esse.",
        },
    ],
    product: {

    }
}



const ProductReducer = (state = initialState, action) => {
    // console.log(typeof action.id)
    switch (action.type) {
        case "PRODUCT":
            return {
                ...state, product: state.products.find(product => product.id === parseInt(action.id))
            }
        default:
            return state;
    }
}
export default ProductReducer