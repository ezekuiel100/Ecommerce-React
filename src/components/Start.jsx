import { AiFillStar } from "react-icons/ai";

function Start({ star }) {
  return (
    <div className="flex">
      {Array.from({ length: 5 }, (_, index) => {
        return (
          <AiFillStar
            key={index}
            className={index < star ? `text-yellow-500` : `text-gray-400`}
          />
        );
      })}
    </div>
  );
}

export default Start;
