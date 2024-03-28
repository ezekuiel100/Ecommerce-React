import Brand from "./Brand";
import Price from "./Price";

function Sidebar() {
  return (
    <div className="w-60 flex flex-col gap-8 items-center border-r-2 border-gray-200">
      <Brand />
      <Price />
    </div>
  );
}

export default Sidebar;
