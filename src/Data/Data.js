import Women from '../images/women_suit.png';
import Men from '../images/mens_cotton_jacket.png';
import Jewellery from '../images/white_gold_ring.png';
import Electronics from '../images/samsung_TV.png';
export const NavList = [
    {
        id : 'NML0',
        menu : 'Home',
        link : '/',
        // class : 'active'
    },
    {
        id : 'NML1',
        menu : 'Women', 
        link : "/producthome/womensClothing"
    },
    {
        id : 'NML2',
        menu : 'Men', 
        link : "/producthome/mensClothing"
    },
    {
        id : 'NML3',
        menu : 'Electronics', 
        link : "/producthome/electronics" 
    },
    {
        id : 'NML4',
        menu : 'Jewellery',
        link : "/producthome/jwellery"
    },

];

export const Categories = [
    {
        id : 'cat1',
        img : Women,
        heading : 'Shop Women',
        subinfo : 'Lorem ipsum dolor sit amet',
        alt : 'Women Suit',
    },
    {
        id : 'cat2',
        img :Men,
        heading : 'Shop Men',
        subinfo : 'Lorem ipsum dolor sit amet',
        alt : 'Mens Cotton Jacket'
    },
    {
        id : 'cat3',
        img :Jewellery,
        heading : 'Jewellery',
        subinfo : 'Lorem ipsum dolor sit amet',
        alt : 'White Gold ring'
    },
    {
        id : 'cat4',
        img :Electronics,
        heading : 'Electronics',
        subinfo : 'Lorem ipsum dolor sit amet',
        alt : 'Samsung TV'
    }
];
export const Filtercolor = [
    {
        id: 'fc1',
        className: 'filter-color',
        color: '#172026',
        border: '',
    },
    {
        id: 'fc2',
        className: 'filter-color',
        color: '#FFFFFF',
        border: '2px solid #DFE1E2 '
    },
    {
        id: 'fc3',
        className: 'filter-color',
        color: '#2D9D78',
        border: ''
    },
    {
        id: 'fc4',
        className: 'filter-color',
        color: '#FDBA5E',
        border: ''
    },
    {
        id: 'fc5',
        className: 'filter-color',
        color: '#336DFF',
        border: ''
    },
    {
        id: 'fc6',
        className: 'filter-color',
        color: '#E34850',
        border: ''
    },
    {
        id: 'fc7',
        className: 'filter-color',
        color: '#6408D3',
        border: ''
    },
    {
        id: 'fc8',
        className: 'filter-color',
        color: '#F9009A',
        border: ''
    },
    {
        id: 'fc9',
        className: 'filter-color',
        color: '#EB7327',
        border: ''
    },
    {
        id: 'fc10',
        className: 'filter-color',
        color: 'filter-gradient',
        border: ''
    }


]
export const filterCategories=[
    {
        id:"chk1-label",
        name:"jewelery",
        label:"Jewelery",
    },
    {
        id:"chk2-label",
        name:"electronics",
        label:"Electronics",
    },
    {
        id:"chk3-label",
        name:"men's clothing",
        label:"Men's Clothing",
    },
    {
        id:"chk4-label",
        name:"women's clothing",
        label:"Women's Clothing",
    },
]