import React from "react";
import 'antd/dist/antd.css';
import "./Header.css"
import { SearchOutlined } from '@ant-design/icons';
import { ShoppingCartOutlined} from '@ant-design/icons';
const Header = () => {
    return (<div><center>
        <h1 className="outer-div"></h1>
        <div className="top-div">
            <span className="company-font"><b>Company Name</b></span>
            <span><input className="input-font" type="text" placeholder="Search" ></input>
            <SearchOutlined style={{backgroundColor:"blue",width:"35px",height:"40px",fontSize:"30px",border:"solid 1px black",borderLeft:"hidden"}} />
            <ShoppingCartOutlined 
             style={{width:"35px",height:"40px",fontSize:"33px",border:"solid 1px black",borderRadius:"50%",position:"relative",left:"25px"}} />
            </span>
            </div>
            </center>
            </div>
            );
};

export default Header;
