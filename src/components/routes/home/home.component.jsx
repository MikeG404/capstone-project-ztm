import { Outlet } from "react-router-dom";
import Directory from "../../directory/directory.component.jsx";

// Categories is in App.jsx, that ensure that we can reuse this data anywhere else. It also allow every child through Directory to use it.
const categories = [
  {
    "id": 1,
    "title": "hats",
    "imageUrl": "https://i.ibb.co/cvpntL1/hats.png"
  },
  {
    "id": 2,
    "title": "jackets",
    "imageUrl": "https://i.ibb.co/px2tCc3/jackets.png"
  },
  {
    "id": 3,
    "title": "sneakers",
    "imageUrl": "https://i.ibb.co/0jqHpnp/sneakers.png"
  },
  {
    "id": 4,
    "title": "womens",
    "imageUrl": "https://i.ibb.co/GCCdy8t/womens.png"
  },
  {
    "id": 5,
    "title": "mens",
    "imageUrl": "https://i.ibb.co/R70vBrQ/men.png"
  }
]

const Home = () => {
  return (
    // refactored it into 2 smaller components Directory and CategoryItem
    // Directory handle the loop to display categories into a smaller component called CategoryItem that only display datas without specific logic
    <div>
        <Directory categories={categories} />
    </div>
  )
}

export default Home;
