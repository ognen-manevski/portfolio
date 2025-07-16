import React from 'react';
import LinkedinIcon from '../../../imgs/socials/linkedin.svg?react';
import GithubIcon from '../../../imgs/socials/github.svg?react';
import DiscordIcon from '../../../imgs/socials/discord.svg?react';
import PhoneIcon from '../../../imgs/socials/phone.svg?react';



const iconMap = {
    linkedin: LinkedinIcon,
    github: GithubIcon,
    discord: DiscordIcon,
    phone: PhoneIcon,
};

const nameMap = {
    linkedin: "LinkedIn",
    github: "GitHub",
    discord: "Discord",
    phone: "Phone",
};



function SocialBtn({ type = "linkedin", href = "#" }) {

    const Icon = iconMap[type] || LinkedinIcon;
    const label = nameMap[type] || "LinkedIn";

    return (
        <a href={href} target="_blank" className="program-icon-frame socials-icon-w">
            <div className="program-icon-frame-inner socials-icon">
                <Icon />
                <div className="btn">
                    <p>{label}</p>
                    <span className="material-symbols-outlined">
                        arrow_outward
                    </span>
                </div>
            </div>
        </a>
    );
}

export default SocialBtn;