import "./Card.css";
import 'antd/dist/antd.css';
import Mike from "./Mike.png"

import { StarOutlined } from '@ant-design/icons';
import Image1 from './Image1.jpg'
// import image4 from './image4.jpg'

const CardItem = (props) => {
  const { Mike,Image,Name} = props;
  return (
    
    <div className="Sub-Container">
            <img src={Mike} style={{position:"relative",top:"9px",left:"310px",width:"30px",height:"30px",backgroundColor:"white",color:"white",borderRadius:"50%"}}></img>
               <center><img src={Image} style={{ width: "155px",height: "155px",borderRadius:"50%",position:"relative"}}></img></center>
               <div className="text">{Name}</div>

     
   
    </div>
  




  );
};
export default CardItem;
