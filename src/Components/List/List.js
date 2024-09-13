import React from 'react'

import './List.css'
import Card from '../Card/Card'

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
import addIcon from '../../Assets/Images/add.svg'
import menuIcon from '../../Assets/Images/3 dot menu.svg'

let cardCount = 0;

export default function List(props) {
    return (
        <>
            <div className="list-container">
                <div className="list-header">
                    <div className="list-header-left">
                        {
                            {
                                'status': <>{
                                    {
                                        'Backlog': <div className="list-icon">
                                            <img src={backlogIcon} alt="icon" />
                                        </div>,
                                        'Todo': <div className="list-icon">
                                            <img src={todoIcon} alt="icon" />
                                        </div>,
                                        'In progress': <div className="list-icon">
                                            <img src={inProgressIcon} alt="icon" />
                                        </div>,
                                        'Done': <div className="list-icon">
                                            <img src={doneIcon} alt="icon" />
                                        </div>,
                                        'Cancelled': <div className="list-icon">
                                            <img src={cancelledIcon} alt="icon" />
                                        </div>
                                    }[props.listTitle]
                                } </>,
                                'user': <>{
                                    <div className="list-card-profile">
                                        <div className="list-card-profile-initial">
                                            {props.listTitle[0]}{props.listTitle[1]}
                                        </div>
                                        <div
                                            className={
                                                props.ticketDetails.some(ticket => ticket.userObj.name === props.listTitle && ticket.userObj.available)
                                                    ? 'list-card-profile-initial-available list-card-profile-initial-available-true'
                                                    : 'list-card-profile-initial-available'
                                            }
                                        ></div>
                                    </div>
                                } </>,
                                'priority': <>{
                                    {
                                        0: <div className="card-tag-icon"><img src={noPriorityIcon} alt="icon" /></div>,
                                        1: <div className="card-tag-icon"><img src={lowPriorityIcon} alt="icon" /></div>,
                                        2: <div className="card-tag-icon"><img src={medPriorityIcon} alt="icon" /></div>,
                                        3: <div className="card-tag-icon"><img src={highPriorityIcon} alt="icon" /></div>,
                                        4: <div className="card-tag-icon"><img src={urgentPriorityIcon} alt="icon" /></div>
                                    }[props.listTitle]
                                } </>
                            }[props.groupValue]
                        }

                        <div className="list-title">
                            {
                                {
                                    'priority': <>{
                                        props.priorityList
                                            ? props.priorityList.map(priorityProperty => (
                                                priorityProperty.priority === props.listTitle
                                                    ? <>{priorityProperty.name}</>
                                                    : null
                                            ))
                                            : null
                                    }</>,
                                    'status': <>{props.listTitle}</>,
                                    'user': <>{props.listTitle}</>
                                }[props.groupValue]
                            }
                        </div>
                        <div className="list-sum">{cardCount}</div>
                    </div>
                    <div className="list-header-right">
                        <div className="list-add-item">
                            <img src={addIcon} alt="icon" />
                        </div>
                        <div className="list-option-item">
                            <img src={menuIcon} alt="icon" />
                        </div>
                    </div>
                </div>

                <div className="list-card-items">
                    {
                        props.ticketDetails.map(ticket => {
                            if (ticket.status === props.listTitle) {
                                cardCount++;
                                return (<Card cardDetails={ticket} groupValue={props.groupValue} />)
                            }
                            else if (ticket.priority === props.listTitle) {
                                cardCount++;
                                return (<Card cardDetails={ticket} groupValue={props.groupValue} />)
                            }
                            else if (ticket.userObj.name === props.listTitle) {
                                cardCount++;
                                return (<Card cardDetails={ticket} groupValue={props.groupValue} />)
                            }
                            return null
                        }, cardCount = 0)
                    }
                </div>
            </div>
        </>
    )
}
