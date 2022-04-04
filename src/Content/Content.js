import React from "react";
import Card from "../Card/Card";
import "./Content.css";
import Toy1 from "./Toy1.jpg"
import Toy2 from "./Toy2.webp"
import Toy3 from "./Toy3.jpg"
import Toy4 from "./Toy4.jpg"
import Mike from "./Mike.png"
import Person from "./Person.png"
import Caption from "./Caption.png"
import { AudioMutedOutlined } from '@ant-design/icons';
import { VideoCameraOutlined } from '@ant-design/icons';
import { EllipsisOutlined } from '@ant-design/icons';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import { TeamOutlined } from '@ant-design/icons';
import { PhoneOutlined } from '@ant-design/icons';
import { MessageOutlined } from '@ant-design/icons';
// import { EllipsisOutlined } from '@ant-design/icons';

const Content = () => {
    const ToyList = [
        { Mike: Mike, Image: Person, Name: "Indumathi" },
        { Mike: Mike, Image: Person, Name: "Vidhursha" },
        { Mike: Mike, Image: Person, Name: "Abi" },
        { Mike: Mike, Image: Person, Name: "Nathiya" },
        { Mike: Mike, Image: Person, Name: "Lucia" },
        { Mike: Mike, Image: Person, Name: "Nikitha" },
        { Mike: Mike, Image: Person, Name: "Ajitha" },
        { Mike: Mike, Image: Person, Name: "Vidhya" }

    ]
    return (
        <div className="Container">

            <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"></link>
            <div className="Top-Container">



                {

                    ToyList.map((userData) => {
                        const { Mike, Image, Name } = userData;
                        return (<Card Mike={Mike} Image={Image} Name={Name} ></Card>);
                    })

                }
            </div>

            <div className="Bottom-Container">
                <span className="Bottom-text">TOPNOTCH V2<AudioMutedOutlined style={{ width: "50px", height: "50px", backgroundColor: "red", color: "white", position: "relative", left: "400px", fontSize: "40px", borderRadius: "50%" }} />
                    <VideoCameraOutlined style={{ width: "52px", height: "50px", backgroundColor: "red", color: "white", position: "relative", left: "405px", fontSize: "40px", borderRadius: "50%" }} />
                    <img src={Caption} style={{ width: "52px", height: "50px", backgroundColor: "gray", color: "white", position: "relative", left: "410px", fontSize: "40px", borderRadius: "50%" }} />
                    <i class="material-icons" style={{ width: "52px", height: "50px", backgroundColor: "gray", color: "black", position: "relative", left: "415px", fontSize: "45px", borderRadius: "50%" }}>computer</i>
                    <EllipsisOutlined style={{ transform: "rotate(90deg)", width: "52px", height: "50px", backgroundColor: "gray", color: "black", position: "relative", left: "420px", fontSize: "50px", borderRadius: "50%" }} />
                    <PhoneOutlined style={{ width: "51px", height: "48px", backgroundColor: "red", color: "white", position: "relative", left: "425px", fontSize: "39px", borderRadius: "50%", transform: "rotate(-130deg)" }} />
                    <ExclamationCircleOutlined style={{ width: "45px", height: "45px", color: "white", position: "relative", left: "750px", fontSize: "35px", borderRadius: "50%" }} />
                    <TeamOutlined style={{ width: "45px", height: "45px", color: "white", position: "relative", left: "755px", fontSize: "35px", borderRadius: "50%" }} />

                    <MessageOutlined style={{ width: "45px", height: "45px", color: "white", position: "relative", left: "760px", fontSize: "35px", borderRadius: "50%" }} /></span>


            </div>

        </div>

    );
};

export default Content;


