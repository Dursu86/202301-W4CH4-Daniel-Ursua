import { useContext } from "react";
import { PhoneContext } from "../../../../core/components/context/phone.context";

export function Key() {
  const { handleClickNumber } = useContext(PhoneContext);

  return (
    <>
      <li>
        <button className="key" onClick={() => handleClickNumber("1")}>
          1
        </button>
      </li>
      <li>
        <button className="key" onClick={() => handleClickNumber("2")}>
          2
        </button>
      </li>
      <li>
        <button className="key" onClick={() => handleClickNumber("3")}>
          3
        </button>
      </li>
      <li>
        <button className="key" onClick={() => handleClickNumber("4")}>
          4
        </button>
      </li>
      <li>
        <button className="key" onClick={() => handleClickNumber("5")}>
          5
        </button>
      </li>
      <li>
        <button className="key" onClick={() => handleClickNumber("6")}>
          6
        </button>
      </li>
      <li>
        <button className="key" onClick={() => handleClickNumber("7")}>
          7
        </button>
      </li>
      <li>
        <button className="key" onClick={() => handleClickNumber("8")}>
          8
        </button>
      </li>
      <li>
        <button className="key" onClick={() => handleClickNumber("9")}>
          9
        </button>
      </li>
      <li>
        <button className="key" onClick={() => handleClickNumber("0")}>
          0
        </button>
      </li>
      <li>
        <button className="key big">delete</button>
      </li>
    </>
  );
}
