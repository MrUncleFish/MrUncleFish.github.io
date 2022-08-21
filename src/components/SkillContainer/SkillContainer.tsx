import React, {FC} from "react";
import './SkillContainer.scss';

interface SkillContainerProps {
    title: string;
    children: React.ReactNode;
}

const SkillContainer: FC<SkillContainerProps> = ({title, children}) => {


    return (
        <div className="skill_container">
            <div className="skill_title">{title}</div>
            <div className="skill_text">
                {children}
            </div>
        </div>
    )
}

export default SkillContainer