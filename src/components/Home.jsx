import { CartState } from "../context/Context";
import SingleProduct from "./SingleProduct";

const Home = () => {
  const { products } = CartState();

  return (
    <div>
      <span>Products Page</span>
      <div className="productContainer">
        {products.map((prod) => (
          <SingleProduct prod={prod} key={prod.id} />
        ))}
      </div>
    </div>
  );
};

export default Home;
