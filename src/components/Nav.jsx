import { CgProfile } from "react-icons/cg";
import { AiOutlineShoppingCart, AiOutlineHeart } from "react-icons/ai";
import { useContext } from "react";
import { Context } from "../App";

function Nav() {
  const { query, setQuery, setBrand, setPrice } = useContext(Context);

  function handleChange(e) {
    setQuery(e.target.value);
    setBrand("Todas");
    setPrice("Todos");
  }

  return (
    <nav className="flex justify-around items-center p-3 border-b-2 border-gray-200">
      <h1 className="font-bold text-xl">Logo</h1>
      <input
        type="text"
        placeholder="Buscar"
        className="bg-gray-200 w-60 rounded-md p-2 outline-none"
        value={query}
        onChange={(e) => handleChange(e)}
      />

      <div className="flex gap-2">
        <a href="#">
          <AiOutlineHeart className="w-6 h-6 " />
        </a>
        <a href="#">
          <AiOutlineShoppingCart className="w-6 h-6 " />
        </a>
        <a href="#">
          <CgProfile className="w-6 h-6 " />
        </a>
      </div>
    </nav>
  );
}

export default Nav;
