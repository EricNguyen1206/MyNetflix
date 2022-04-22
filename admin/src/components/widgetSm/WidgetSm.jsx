import "./widgetSm.css";
import { Visibility } from "@material-ui/icons";
import { useUsers } from "../../context";
import { useEffect } from "react";

export default function WidgetSm() {
    const [state, dispatch] = useUsers();
    let users = state.users ? state.users.reverse().slice(0, 5) : [];
    console.log("check render");
    return (
        <div className="widgetSm">
            <span className="widgetSmTitle">New Join Members</span>
            <ul className="widgetSmList">
                {users ? (
                    users.map((user, index) => (
                        <li key={index} className="widgetSmListItem">
                            <img
                                src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
                                alt=""
                                className="widgetSmImg"
                            />
                            <div className="widgetSmUser">
                                <span className="widgetSmUsername">
                                    {user.username}
                                </span>
                                <span className="widgetSmUserTitle">
                                    {user.email}
                                </span>
                            </div>
                            <button className="widgetSmButton">
                                <Visibility className="widgetSmIcon" />
                                Display
                            </button>
                        </li>
                    ))
                ) : (
                    <>{console.log("Don't have any user!!!")}</>
                )}
            </ul>
        </div>
    );
}
