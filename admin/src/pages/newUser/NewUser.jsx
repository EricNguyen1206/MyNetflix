import "./newUser.css";

export default function NewUser() {
    function createToast() {
        let toast = document.createElement("div");
        toast.className = `toast success`;

        toast.innerHTML = `
    <span class="msg">Tính năng đang phát triển!</span>
    <span class="countdown"></span>
    `;
        document.querySelector("#toasts").appendChild(toast);

        setTimeout(() => {
            toast.style.animation = "hide_slide 1s ease forwards";
        }, 4000);
        setTimeout(() => {
            toast.remove();
        }, 6000);
    }
    return (
        <div className="newUser">
            <h1 className="newUserTitle">New User</h1>
            <form className="newUserForm">
                <div className="newUserItem">
                    <label>Username</label>
                    <input type="text" placeholder="john" />
                </div>
                <div className="newUserItem">
                    <label>Full Name</label>
                    <input type="text" placeholder="John Smith" />
                </div>
                <div className="newUserItem">
                    <label>Email</label>
                    <input type="email" placeholder="john@gmail.com" />
                </div>
                <div className="newUserItem">
                    <label>Password</label>
                    <input type="password" placeholder="password" />
                </div>
                <div className="newUserItem">
                    <label>Phone</label>
                    <input type="text" placeholder="+1 123 456 78" />
                </div>
                <div className="newUserItem">
                    <label>Address</label>
                    <input type="text" placeholder="New York | USA" />
                </div>
                <div className="newUserItem">
                    <label>Gender</label>
                    <div className="newUserGender">
                        <input
                            type="radio"
                            name="gender"
                            id="male"
                            value="male"
                        />
                        <label for="male">Male</label>
                        <input
                            type="radio"
                            name="gender"
                            id="female"
                            value="female"
                        />
                        <label for="female">Female</label>
                        <input
                            type="radio"
                            name="gender"
                            id="other"
                            value="other"
                        />
                        <label for="other">Other</label>
                    </div>
                </div>
                <div className="newUserItem">
                    <label>Active</label>
                    <select className="newUserSelect" name="active" id="active">
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </div>
                <button className="newUserButton" onClick={createToast}>
                    Create
                </button>
            </form>
            <div id="toasts"></div>
        </div>
    );
}
