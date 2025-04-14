import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import icon from "../public/icons.svg"; 
import Home from "./pages/Home";
import HomeDetail from "./pages/HomeDetail";

const App = () => {

  let data = [
    {
      "id": 1,
      "img": [
        "https://rapimercado.s3.amazonaws.com/HP3LCyTtwLQXFht.jpg",
      ],
      "yulduz": 738,
      "price": 70,
      "oldPrice": false,
      "off": false,
      "name": "TOZO T6 True Wireless Earbuds",
      "description": "Bluetooth Headphones",
      "color": [
        "black",
        "white"
      ]
    },
    {
      "id": 2,
      "img": [
        "https://openshop.uz/storage/uploads/products/thumbnail/202204/C8DDslXPYfp36cXxVEA8puj2AvnqrsZ4uoKuQLO1.jpg",
      ],
      "yulduz": 536,
      "price": 2300,
      "oldPrice": false,
      "off": false,
      "name": "Samsung Electronics Galaxy S21 5G",
      "description": "Smartphone",
      "color": [
        "blue",
        "black"
      ]
    },
    {
      "id": 3,
      "img": [
        "https://i.ebayimg.com/images/g/1hYAAOSwUPpjs7xO/s-l1200.jpg",
      ],
      "yulduz": 423,
      "price": 360,
      "oldPrice": false,
      "off": false,
      "name": "Amazon Basics HDMI Cable",
      "description": "High-Speed 18Gbps 4K/6...",
      "color": [
        "black"
      ]
    },
    {
      "id": 4,
      "img": [
        "https://images.thdstatic.com/productImages/4eba6c6e-9c9d-42dd-b182-332bd72dbf84/svn/white-costway-portable-washing-machines-bxd1684-a-64_600.jpg",
      ],
      "yulduz": 816,
      "price": 80,
      "oldPrice": false,
      "off": false,
      "name": "Portable Washing Machine",
      "description": "11lbs capacity Model 18NMF",
      "color": [
        "black"
      ]
    },
    {
      "id": 5,
      "img": [
        "https://telefonika.com/wp-content/uploads/2021/12/JBL-Quantum-600-Wireless-Over-Ear-Gaming-Headset-Black.jpg",
      ],
      "yulduz": 647,
      "price": 1500,
      "oldPrice": false,
      "off": false,
      "name": "Wired Over-Ear Gaming Headphones",
      "description": "Headphones with USB",
      "color": [
        "black",
        "red"
      ]
    },
    {
      "id": 6,
      "img": [
        "https://m.media-amazon.com/images/I/61cvxr7-8gL._AC_UF1000,1000_QL80_.jpg",
      ],
      "yulduz": 877,
      "off": 25,
      "price": 1200,
      "oldPrice": 1600,
      "name": "Polaroid 57-Inch Smart TV",
      "description": "Deluxe Tripod Camera",
      "color": [
        "black"
      ]
    },
    {
      "id": 7,
      "img": [
        "https://telefonika.com/wp-content/uploads/2021/12/JBL-Quantum-600-Wireless-Over-Ear-Gaming-Headset-Black.jpg",
      ],
      "yulduz": 426,
      "price": 250,
      "oldPrice": false,
      "off": false,
      "name": "Dell Optiplex 7000x7480",
      "description": "All-in-One Computer Monitor",
      "color": [
        "silver",
        "black"
      ]
    },
    {
      "id": 8,
      "img": [
        "https://s3p.kattabozor.uz/ri/7a264fa807cd67146ace886fdae36867c8a2f069f8740a74976cc9ea50b5ef92_HqmjZ9_480l.jpg",
      ],
      "yulduz": 583,
      "price": 220,
      "oldPrice": false,
      "off": false,
      "name": "4K UHD LED Smart TV",
      "description": "Chromecast Built-in",
      "color": [
        "black"
      ]
    },
    {
      "id": 9,
      "img": [
        "https://rapimercado.s3.amazonaws.com/HP3LCyTtwLQXFht.jpg",
      ],
      "yulduz": 738,
      "price": 70,
      "oldPrice": false,
      "off": false,
      "name": "TOZO T6 True Wireless Earbuds",
      "description": "Bluetooth Headphones",
      "color": [
        "black",
        "white"
      ]
    },
    {
      "id": 10,
      "img": [
        "https://openshop.uz/storage/uploads/products/thumbnail/202204/C8DDslXPYfp36cXxVEA8puj2AvnqrsZ4uoKuQLO1.jpg",
      ],
      "yulduz": 536,
      "price": 2300,
      "oldPrice": false,
      "off": false,
      "name": "Samsung Electronics Galaxy S21 5G",
      "description": "Smartphone",
      "color": [
        "blue",
        "black"
      ]
    },
    {
      "id": 11,
      "img": [
        "https://i.ebayimg.com/images/g/1hYAAOSwUPpjs7xO/s-l1200.jpg",
      ],
      "yulduz": 423,
      "price": 360,
      "oldPrice": false,
      "off": false,
      "name": "Amazon Basics HDMI Cable",
      "description": "High-Speed 18Gbps 4K/6...",
      "color": [
        "black"
      ]
    },
    {
      "id": 12,
     "img": [
        "https://images.thdstatic.com/productImages/4eba6c6e-9c9d-42dd-b182-332bd72dbf84/svn/white-costway-portable-washing-machines-bxd1684-a-64_600.jpg",
      ],
      "yulduz": 816,
      "price": 80,
      "oldPrice": false,
      "off": false,
      "name": "Portable Washing Machine",
      "description": "11lbs capacity Model 18NMF",
      "color": [
        "black"
      ]
    },
    {
      "id": 13,
      "img": [
        "https://telefonika.com/wp-content/uploads/2021/12/JBL-Quantum-600-Wireless-Over-Ear-Gaming-Headset-Black.jpg",
      ],
      "yulduz": 647,
      "price": 1500,
      "oldPrice": false,
      "off": false,
      "name": "Wired Over-Ear Gaming Headphones",
      "description": "Headphones with USB",
      "color": [
        "black",
        "red"
      ]
    },
    {
      "id": 14,
     "img": [
        "https://m.media-amazon.com/images/I/61cvxr7-8gL._AC_UF1000,1000_QL80_.jpg",
      ],
      "yulduz": 877,
      "off": 25,
      "price": 1200,
      "oldPrice": 1600,
      "name": "Polaroid 57-Inch Smart TV",
      "description": "Deluxe Tripod Camera",
      "color": [
        "black"
      ]
    },
    {
      "id": 15,
      "img": [
        "https://telefonika.com/wp-content/uploads/2021/12/JBL-Quantum-600-Wireless-Over-Ear-Gaming-Headset-Black.jpg",
      ],
      "stars": 798,
      "oldPrice": 124,
      "price": 80,
      "off": false,
      "name": "Portable Washing Machine",
      "description": "11lbs capacity Model 18NMF",
      "color": [
        "white"
      ]
    },
    {
      "id": 16,
      "img": [
        "https://s3p.kattabozor.uz/ri/7a264fa807cd67146ace886fdae36867c8a2f069f8740a74976cc9ea50b5ef92_HqmjZ9_480l.jpg",
      ],
      "stars": 600,
      "price": 70,
      "oldPrice": false,
      "off": false,
      "name": "TOZO T6 True Wireless Earbuds",
      "description": "Bluetooth Headphones",
      "color": [
        "gold"
      ]
    }
  ];
  return (
    <div>
      <BrowserRouter>
        <nav className='bg-[#1B6392] flex justify-around p-[50px]'>
          <img src={logo} alt="Logo" />
          <input className='bg-white text-[#1B6392] w-[600px] h-[50px] pl-[20px]' placeholder='Search for anything...' type="text" />
          <img src={icon} alt="Icon" />
        </nav>
        <nav className='bg-[#F2F4F5] p-[30px] flex gap-[50px] items-center'>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/home">HomeDetail</NavLink>
        </nav>
        <Routes>
        <Route path="/" element={<Home data={data} />} />
        <Route path="/home/:id" element={<HomeDetail data={data}  />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
