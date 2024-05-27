import MenuItem from "./menu-item";
const MenuList = ({ list = [] }) => {
  return (
    <ul className="menu-container">
      {list && list.length
        ? list.map((listItem) => <MenuItem item={listItem}></MenuItem>)
        : null}
    </ul>
  );
};
export default MenuList;
