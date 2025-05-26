import React, { useState, useMemo, useRef } from "react"
import { TransitionGroup, CSSTransition } from "react-transition-group"
import {motion} from 'framer-motion'
import './Skills.css'

const tabs = [
    { name: "All", category: "all" },
    { name: "Programming", category: "programming" },
    { name: "Frameworks", category: "frameworks" },
    { name: "CMS", category: "cms" },
    { name: "Database", category: "database" },
    { name: "Conception", category: "conception" },
    { name: "Devops", category: "devops" },
    { name: "Design", category: "design" },
    { name: "Divers", category: "divers" },
  ];
  
  const items = [
    { id: 1, category: "programming", label: "PHP" },
    { id: 2, category: "programming", label: "PL/SQL" },
    { id: 3, category: "programming", label: "JAVA" },
    { id: 4, category: "programming", label: "Python" },
    { id: 5, category: "programming", label: "HTML/CSS/JS" },


    { id: 6, category: "frameworks", label: "Laravel" },
    { id: 7, category: "frameworks", label: "Vue js" },
    { id: 8, category: "frameworks", label: "React" },
    { id: 9, category: "frameworks", label: "Jquery" },
    { id: 10, category: "frameworks", label: "SASS" },
    { id: 11, category: "frameworks", label: "TailwindCSS" },
    { id: 12, category: "frameworks", label: "Bootstrap" },

    { id: 13, category: "cms", label: "Wordpress" },
    { id: 14, category: "cms", label: "Prestashop" },
    { id: 15, category: "cms", label: "Drupal" },
    
    { id: 16, category: "database", label: "MySQL" },
    { id: 17, category: "database", label: "SQL" },
    { id: 18, category: "database", label: "MongoDB" },
    { id: 19, category: "database", label: "PostgreSQL" },

    { id: 20, category: "conception", label: "UML" },
    { id: 21, category: "conception", label: "Merise" },
    { id: 22, category: "conception", label: "BPMN" },
    { id: 23, category: "conception", label: "IFML" },
    
    { id: 24, category: "devops", label: "Docker" },
    { id: 25, category: "devops", label: "Git" },
    { id: 26, category: "devops", label: "Github" },
    { id: 27, category: "devops", label: "Gitlab" },
    { id: 28, category: "devops", label: "CI/CD" },
    { id: 29, category: "devops", label: "Jenkins" },

    { id: 30, category: "design", label: "Adobe Photoshop" },
    { id: 31, category: "design", label: "Adobe XD" },
    { id: 32, category: "design", label: "Adobe Ilustrator" },
    { id: 33, category: "design", label: "Figma" },
    { id: 34, category: "design", label: "Web design" },
    { id: 35, category: "design", label: "UI/UX" },

    { id: 36, category: "divers", label: "Scrum" },
    { id: 37, category: "divers", label: "Méthodes agiles" },
    { id: 38, category: "divers", label: "cPanel" },
    { id: 39, category: "divers", label: "Gestion de projet" },
    
  ];
  
  export default function FilterTabs() {
    const [activeTab, setActiveTab] = useState("all");
  
    const nodeRefs = useMemo(() => {
      const refs = {};
      items.forEach(item => {
        refs[item.id] = React.createRef();
      });
      return refs;
    }, []);
  
    const filteredItems =
      activeTab === "all"
        ? items
        : items.filter(item => item.category === activeTab);
  
    return (
      <div id="skills" className="skills-container">
        <motion.h2 
        whileInView={{opacity:1, y: 0}}
      initial={{opacity:1, y: -100}}
      transition={{duration:0.5}}
        >MY TECHNICAL STACK</motion.h2>
        <div>
          <ul className="tabs">
            {tabs.map(tab => (
              <li
                key={tab.category}
                className={activeTab === tab.category ? "active" : ""}
                onClick={() => setActiveTab(tab.category)}
              >
                {tab.name}
              </li>
            ))}
          </ul>
        </div>
        
  
        <TransitionGroup className="tab-content">
          {filteredItems.map(item => (
            <CSSTransition
              key={item.id}
              nodeRef={nodeRefs[item.id]}
              timeout={300}
              classNames="fade-slide"
            >
              <div ref={nodeRefs[item.id]} className="tab-item">
                {item.label}
              </div>
            </CSSTransition>
          ))}
        </TransitionGroup>
      </div>
    );
  }