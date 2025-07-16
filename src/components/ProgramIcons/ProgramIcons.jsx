import React from 'react';

import "./programIcons.css"


import max3 from '../../imgs/skill-cards/program-icons/3max.png';
import ae from '../../imgs/skill-cards/program-icons/ae.png';
import ai from '../../imgs/skill-cards/program-icons/ai.png';
import an from '../../imgs/skill-cards/program-icons/an.png';
import bs from '../../imgs/skill-cards/program-icons/bs.png';
import c4d from '../../imgs/skill-cards/program-icons/c4d.png';
import css from '../../imgs/skill-cards/program-icons/css.png';
import tailwind from '../../imgs/skill-cards/program-icons/tailwind.png';
import react from '../../imgs/skill-cards/program-icons/react.png';
import gsap from '../../imgs/skill-cards/program-icons/gsap.png';
import figma from '../../imgs/skill-cards/program-icons/figma.png';
import html from '../../imgs/skill-cards/program-icons/html.png';
import id from '../../imgs/skill-cards/program-icons/id.png';
import js from '../../imgs/skill-cards/program-icons/js.png';
import maya from '../../imgs/skill-cards/program-icons/maya.png';
import pr from '../../imgs/skill-cards/program-icons/pr.png';
import ps from '../../imgs/skill-cards/program-icons/ps.png';
import sw from '../../imgs/skill-cards/program-icons/sw.png';
import vite from '../../imgs/skill-cards/program-icons/vite.png';
import wp from '../../imgs/skill-cards/program-icons/wordpress.png';


const programIcons = {
  max3,
  ae,
  ai,
  an,
  bs,
  c4d,
  css,
  tailwind,
  react,
  gsap,
  figma,
  html,
  id,
  js,
  maya,
  pr,
  ps,
  sw,
  vite,
  wp,
};

const programNames = {
  max3: "3ds Max",
  ae: "Adobe After Effects",
  ai: "Adobe Illustrator",
  an: "Adobe Animate",
  bs: "Bootstrap",
  c4d: "Cinema 4D",
  css: "CSS3",
  tailwind: "Tailwind CSS",
  react: "React.js",
  gsap: "GSAP",
  figma: "Figma",
  html: "HTML5",
  id: "Adobe InDesign",
  js: "JavaScript",
  maya: "Autodesk Maya",
  pr: "Adobe Premiere Pro",
  ps: "Adobe Photoshop",
  sw: "SolidWorks",
  vite: "Vite",
  wp: "WordPress",
};

const programShadowColors = {
  max3: "#3ec2e0",
  ae: "#a259ff",
  ai: "#ff9a00",
  an: "#ff4f00",
  bs: "#7952b3",
  c4d: "#4b8bbe",
  css: "#264de4",
  tailwind: "#38bdf8",
  react: "#61dafb",
  gsap: "#8be53f",
  figma: "#a259ff",
  html: "#e44d26",
  id: "#ff3366",
  js: "#f7df1e",
  maya: "#3ec2e0",
  pr: "#ea77ff",
  ps: "#001e36",
  sw: "#e60012",
  vite: "#646cff",
  wp: "#21759b",
};

export default function ProgramIcon({
  name,
  alt,
  template = "raw", // ili frame
  sh_color,
  className,
  ...props
}) {
  const src = programIcons[name];
  const fullName = programNames[name] || name;
  const shadowColor = sh_color || programShadowColors[name] || "#000";
  if (!src) return null;

  // @hover
  const tooltip =
    <span className="hover-tooltip opacity-0 group-hover:opacity-100 pointer-events-none whitespace-nowrap z-10 transition">
      {fullName}
    </span>;

  // so frame
  if (template === "frame") {
    return (
      <div className={`relative group program-icon-frame ${className}` }>
        <div className='program-icon-frame-inner'>
          <img src={src} alt={alt || name} className="program-img" {...props}/>
        </div>
        {tooltip}
      </div>
    );
  }

  // default -> samo image
  return (
    <div className={`${className}`} >
      <div
        className="relative group ico-bg-shadow"
        style={{ "--sh-color": shadowColor }}
      >
        <img src={src} alt={alt || name} className="program-img"  {...props} />
        {tooltip}
      </div>
    </div>
  );
}