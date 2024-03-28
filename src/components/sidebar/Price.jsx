import { useContext } from "react";
import RadioInput from "../RadioInput";
import { Context } from "../../App";

function Price() {
  const { price, setPrice } = useContext(Context);

  function handlePreço(e) {
    setPrice(e.target.value);
  }

  return (
    <div>
      <h3 className="text-xl mb-2">Preço</h3>
      <div className="flex flex-col gap-2">
        <RadioInput
          text={"Todos"}
          name={"price"}
          value={"Todos"}
          handleClick={handlePreço}
          selected={price}
        />
        <RadioInput
          text={"R$0-R$300"}
          name={"price"}
          value={"0"}
          handleClick={handlePreço}
          selected={price}
        />
        <RadioInput
          text={"R$300-R$500"}
          name={"price"}
          value={"300"}
          handleClick={handlePreço}
          selected={price}
        />
        <RadioInput
          text={"Mais de R$500"}
          name={"price"}
          value={"500"}
          handleClick={handlePreço}
          selected={price}
        />
      </div>
    </div>
  );
}

export default Price;
