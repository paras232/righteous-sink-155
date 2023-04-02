const wrapper=document.querySelector(".sliderWrapper")
const menuItems=document.querySelectorAll('.menuItem')

const products=[
    {
        id: 1,
        title: "Air Force",
        price: 119,
        colors:[
            {
            code: 'black',
            img: 'https://wallpaperaccess.com/full/4511138.jpg'
           },
           {
            code: 'wheate',
            img: "https://wallpaperset.com/w/full/8/5/c/208873.jpg"
           }
        ]
    },
    {
        id: 2,
        title: "Jordan",
        price: 299,
        colors:[
            {
                code: 'red',
                img: 'https://cdn.wallpapersafari.com/24/60/EyXl8J.jpg'
            },
            {
                code: 'blue',
                img: "https://images.solecollector.com/complex/images/c_crop,h_1125,w_2000,x_0,y_495/xm9rglof4zdoej1zskdw/air-jordan-1-sail-obsidian-university-blue-555088-140-pair.jpg"
            }
        ]
    },
    {
        id: 3,
        title: "Blazer",
        price: 110,
        colors:[
            {
                code: 'grey',
                img: 'https://wallpapercave.com/wp/wp2005982.jpg'
            },
            {
                code: 'brown',
                img: "https://media.karousell.com/media/photos/products/2023/1/2/adidas_yeezy_boost_350_v2_mono_1672655617_129d4b02.jpg"
            }
        ]
    },
    {
        id: 4,
        title: "Crater",
        price: 119,
        colors:[
            {
                code: 'black',
                img: 'https://wallpaperaccess.com/full/4511138.jpg'
            },
            {
                code: 'wheate',
                img: "https://wallpaperset.com/w/full/8/5/c/208873.jpg"
            }
        ]
    },
    {
        id: 5,
        title: "Low Ride",
        price: 200,
        colors:[
            {
                code: 'yellow',
                img: 'https://i0.wp.com/justfreshkicks.com/wp-content/uploads/2021/12/FFbwSyLWUAA5Zf9.jpg?ssl=1'
            },
            {
                code: 'red',
                img: "https://e0.pxfuel.com/wallpapers/481/130/desktop-wallpaper-nike-sb-dunk-low-chicago-unveiled-release-info-nike-dunk.jpg"
            }
        ]
    },
    {
        id: 6,
        title: "High Ankel",
        price: 225,
        colors:[
            {
                code: 'red',
                img: 'https://wallpapercave.com/wp/wp9710333.jpg'
            },
            {
                code: 'black',
                img: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/ptxy4m33guxhewvlbnyy/air-max-270-react-mens-shoe-zPRv3k.png"
            }
        ]
    },
]

let choosenProduct = products[0]

const crrentproductImg = document.querySelector('.productImg')
const crrentproductTitle = document.querySelector('.productTitle')
const crrentproductPrice = document.querySelector('.productPrice')
const crrentproductColors = document.querySelectorAll('.color')
const crrentproductSizes = document.querySelectorAll('.size')


menuItems.forEach((item,index) => {
    item.addEventListener('click', ()=>{
        wrapper.style.transform = `translatex(${-100 * index}vw)`;

        choosenProduct = products[index]

        crrentproductTitle.textContent = choosenProduct.title
        crrentproductPrice.textContent = "$" + choosenProduct.price
        crrentproductImg.src = choosenProduct.colors[0].img

        crrentproductColors.forEach((color, index)=>{
            color.style.backgroundColor = choosenProduct.colors[index].code
        })
    })
});


crrentproductColors.forEach((color, index)=>{
    color.addEventListener('click', ()=>{
        crrentproductImg.src = choosenProduct.colors[index].img
    })
})

crrentproductSizes.forEach((size, index)=>{
    size.addEventListener('click', ()=>{
        crrentproductSizes.forEach((size)=>{
            size.style.backgroundColor="white"
            size.style.color='black'
        })
        size.style.backgroundColor="black"
        size.style.color='white'
    })
    
})


const productButton = document.querySelector('.productButton')
const payment = document.querySelector('.payment')
const close = document.querySelector('.close')

productButton.addEventListener('click',()=>{
    payment.style.display="flex"
})

close.addEventListener("click",()=>{
    payment.style.display="none"
})