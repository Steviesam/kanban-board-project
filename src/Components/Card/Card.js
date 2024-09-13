import React from 'react';

import inProgressIcon from '../../Assets/Images/in-progress.svg'
import backlogIcon from '../../Assets/Images/Backlog.svg'
import todoIcon from '../../Assets/Images/To-do.svg'
import doneIcon from '../../Assets/Images/Done.svg'
import cancelledIcon from '../../Assets/Images/Cancelled.svg'
import noPriorityIcon from '../../Assets/Images/No-priority.svg'
import lowPriorityIcon from '../../Assets/Images/Img - Low Priority.svg'
import medPriorityIcon from '../../Assets/Images/Img - Medium Priority.svg'
import highPriorityIcon from '../../Assets/Images/Img - High Priority.svg'
import urgentPriorityIcon from '../../Assets/Images/SVG - Urgent Priority colour.svg'

import './Card.css';

export default function Card(props) {
    return (
        <>
            <div className="card-container">
                <div className="card-id-wrapper">
                    <div className="card-id">{props.cardDetails.id}</div>
                    {props.groupValue !== 'user' && (
                        <div className="card-profile">
                            <div className="card-profile-initial">
                                {props.cardDetails.userObj.name[0]}{props.cardDetails.userObj.name[1]}
                            </div>
                            <div
                                className={
                                    props.cardDetails.userObj.available
                                        ? 'card-profile-initial-available card-profile-initial-available-true'
                                        : 'card-profile-initial-available'
                                }
                            ></div>
                        </div>
                    )}
                </div>

                <div className="card-title-wrapper">
                    {props.groupValue !== 'status' && (
                        <div className="card-status-icon">
                            {
                                {
                                    'In progress': <img src={inProgressIcon} alt="icon" />,
                                    'Backlog': <img src={backlogIcon} alt="icon" />,
                                    'Todo': <img src={todoIcon} alt="icon" />,
                                    'Done': <img src={doneIcon} alt="icon" />,
                                    'Cancelled': <img src={cancelledIcon} alt="icon" />
                                }[props.cardDetails.status]
                            }
                        </div>
                    )}

                    <div className="card-title">{props.cardDetails.title}</div>
                </div>

                <div className="card-tag">
                    {props.groupValue !== 'priority' && (
                        <>
                            {
                                {
                                    0: (
                                        <div className="card-tag-icon">
                                            <img src={noPriorityIcon} alt="icon" />
                                        </div>
                                    ),
                                    1: (
                                        <div className="card-tag-icon">
                                            <img src={lowPriorityIcon} alt="icon" />
                                        </div>
                                    ),
                                    2: (
                                        <div className="card-tag-icon">
                                            <img src={medPriorityIcon} alt="icon" />
                                        </div>
                                    ),
                                    3: (
                                        <div className="card-tag-icon">
                                            <img src={highPriorityIcon} alt="icon" />
                                        </div>
                                    ),
                                    4: (
                                        <div className="card-tag-icon">
                                            <img src={urgentPriorityIcon} alt="icon" />
                                        </div>
                                    ),
                                }[props.cardDetails.priority]
                            }
                        </>
                    )}

                    {props.cardDetails.tag.map((tag, index) => (
                        <div key={index} className="card-tag-box">
                            <div className="card-tag-title">{tag}</div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
