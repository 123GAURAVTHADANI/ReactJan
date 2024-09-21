import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";

function Child(props) {
  //   let { gaurav, isValid } = props;
  //   console.log(gaurav, isValid);
  return (
    <Sidebar>
      <Menu>
        <SubMenu label="Charts">
          <MenuItem> Pie charts </MenuItem>
          <MenuItem> Line charts </MenuItem>
        </SubMenu>
        <MenuItem> Documentation </MenuItem>
        <MenuItem> Calendar </MenuItem>
      </Menu>
    </Sidebar>
  );
}

export default Child;
