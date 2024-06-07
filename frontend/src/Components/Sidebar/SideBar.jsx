import { NavLink } from "react-router-dom";
import { FaBars, FaWind, FaWater} from "react-icons/fa";
import { SiGooglemaps } from "react-icons/si";
import { GiZigzagLeaf } from "react-icons/gi";
import React, { useContext, useState } from "react";
import { AnimatePresence} from "framer-motion";
import { motion } from "framer-motion"
import SidebarMenu from "./SidebarMenu";
import { ThemeContext } from "./../../App";
import {
  SDivider,
  STheme,
  SThemeLabel,
  SThemeToggler,
  SToggleThumb,
} from "./styles";

const routes = [
  {
    path: "/Air",
    name: "Air Data",
    icon: <FaWind />,
  },
  {
    path: "/Water",
    name: "Water data",
    icon: <FaWater />,
  },
  {
    path: "/Leaf",
    name: "Vegetation data",
    icon: <GiZigzagLeaf />,
    subRoutes: [
      {
        path: "/Leaf/Pura Pura",
        name: "Pura Pura",
        icon: <SiGooglemaps />,
      }
    ]
  }
];

const SideBar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const { setTheme, theme } = useContext(ThemeContext);

  const showAnimation = {
    hidden: {
      width: 0,
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
    show: {
      opacity: 1,
      width: "auto",
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <>
      <div className="main-container" >
        <motion.div
          animate={{
            width: isOpen ? "250px" : "65px",

            transition: {
              duration: 0.5,
              type: "spring",
              damping: 10,
            },
          }}
          className={`sidebar `}
        >
          <div className="top_section" >
          <a href="/dashboard">
          <svg
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M11.6603 5L3 20H20.3205L11.6603 5ZM11.6603 11L8.19615 17H15.1244L11.6603 11Z"
              fill="red"
            />
            
          </svg>
          </a>
            <AnimatePresence>
              {isOpen && (
                <motion.h1
                  variants={showAnimation}
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  className="logo"
                >
                  AEI
                </motion.h1>
              )}
            </AnimatePresence>

            <div className="bars" >
              <FaBars onClick={toggle} />
            </div>
          </div>
          
          <section className="routes" >
            
            {routes.map((route, index) => {
              if (route.subRoutes) {
                return (
                  <SidebarMenu
                    setIsOpen={setIsOpen}
                    route={route}
                    showAnimation={showAnimation}
                    isOpen={isOpen}
                  />
                  
                );
                
              }

              return (
                <NavLink
                  to={route.path}
                  key={index}
                  className="link"
                  activeClassName="active"
                >
                  <div className="icon">{route.icon}</div>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        variants={showAnimation}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        className="link_text"
                      >
                        {route.name}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </NavLink>
                
              );
            })}
            <SDivider></SDivider>
            <STheme>
                {isOpen && <SThemeLabel>Light Mode</SThemeLabel>}
                <SThemeToggler
                    isActive={theme === "dark"}
                    onClick={() => setTheme((p) => (p === "light" ? "dark" : "light"))}
                >
                    <SToggleThumb style={theme === "dark" ? { right: "1px" } : {}} />
                </SThemeToggler>
      </STheme>
          </section>
        </motion.div>

        <main>{children}</main>
      </div>
    </>
  );
};

export default SideBar;
