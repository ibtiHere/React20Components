import MenuList from "./munu-list";
import "./style.css";

const TreeVeiw = ({ menus = [] }) => {
  return (
    <div className="tree-container">
      <MenuList list={menus} />
    </div>
  );
};
export default TreeVeiw;
