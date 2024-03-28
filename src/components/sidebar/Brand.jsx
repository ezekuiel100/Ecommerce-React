import { useContext } from "react";
import RadioInput from "../RadioInput";
import { Context } from "../../App";

function Brand() {
  const { brand, setBrand, setQuery } = useContext(Context);

  function handleCategory(e) {
    setBrand(e.target.value);
    setQuery("");
  }

  return (
    <div>
      <h3 className="text-xl my-2 mr-14">Marcas</h3>
      <div className="flex flex-col gap-2">
        <RadioInput
          text={"Todas"}
          name={"category"}
          handleClick={handleCategory}
          value={"Todas"}
          selected={brand}
        />
        <RadioInput
          text={"Nike"}
          name={"category"}
          handleClick={handleCategory}
          value={"Nike"}
          selected={brand}
        />
        <RadioInput
          text={"Adidas"}
          name={"category"}
          handleClick={handleCategory}
          value={"Adidas"}
          selected={brand}
        />
        <RadioInput
          text={"Puma"}
          name={"category"}
          handleClick={handleCategory}
          value={"Puma"}
          selected={brand}
        />
        <RadioInput
          text={"Reebok"}
          name={"category"}
          handleClick={handleCategory}
          value={"Reebok"}
          selected={brand}
        />
        <RadioInput
          text={"Penalty"}
          name={"category"}
          handleClick={handleCategory}
          value={"Penalty"}
          selected={brand}
        />
        <RadioInput
          text={"Olympikus"}
          name={"category"}
          handleClick={handleCategory}
          value={"Olympikus"}
          selected={brand}
        />
      </div>
    </div>
  );
}

export default Brand;
