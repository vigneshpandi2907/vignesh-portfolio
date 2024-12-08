import React, { useEffect} from "react";
import  "./menu.css"
import { Link } from "react-scroll";

const Menu = () => {
    const firstActive=1;

    useEffect(()=>{
        const list = document.querySelectorAll('.list');
        console.log(list);
        function activeLink(){
            list.forEach((item)=>item.classList.remove('active'));
            this.classList.add('active');
        }
        list.forEach((item)=>item.addEventListener('click',activeLink))
    });
    const links = [
        { id: 1, link: "home",content:"Home" ,logo:'home-outline'},
        { id: 2, link: "about",content:"About" ,logo:'person-outline'},
        { id: 3, link: "education",content:"Education", logo:'book-outline' },
        { id: 4, link: "skills",content:"Skills",logo:'code-working-outline'},
        { id: 6, link: "contact",content:"Contact" ,logo:'chatbubble-outline'},
    ];
    return (
        <div className="parent">
            <div className="navigation"> 
                <ul>
                {links.map(({ id, link,content,logo }) => (
                    <li key={id}
                    className={`list ${firstActive === id ? "active" : ""}`}>
                    <Link
                            to={link}
                            spy={true}
                            smooth={true}
                            offset={-90}
                            duration={500}
                        >
                            <a >
                                <span className="icon">
                                    <ion-icon name={logo}></ion-icon>
                                </span>
                                <span className="text">{content}</span>
                            </a>
                        </Link>
                    </li>
                ))}
                <div className="indicator"></div>
                </ul>
            </div>
        </div>
)}
export default Menu;
