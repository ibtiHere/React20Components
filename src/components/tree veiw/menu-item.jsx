import MenuList from "./munu-list";
import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

const MenuItem = ({ item }) => {
  const [displayCurrentChildren, setDisplayCurrentChildren] = useState({});
  const HandleToggle = (getCurrentlabel) => {
    setDisplayCurrentChildren({
      ...displayCurrentChildren,
      [getCurrentlabel]: !displayCurrentChildren[getCurrentlabel],
    });
  };
  console.log(displayCurrentChildren);
  return (
    <li>
      <div className="menu-item">
        <p>{item.label}</p>
        {item && item.children && item.children.length ? (
          <span onClick={() => HandleToggle(item.label)}>
            {displayCurrentChildren[item.label] ? (
              <FaMinus color="black" size={15} />
            ) : (
              <FaPlus color="black" size={15} />
            )}
          </span>
        ) : null}
      </div>
      {item &&
      item.children &&
      item.children.length > 0 &&
      displayCurrentChildren[item.label] ? (
        <MenuList list={item.children}></MenuList>
      ) : null}
    </li>
  );
};
export default MenuItem;
