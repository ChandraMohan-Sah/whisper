import "./chatsHeader.css"


export const ChatsHeader = () => {
    return (
        <>
            <div className="searchBar">
                <input type="text" placeholder="Search by username" autocomplete="off" />
            </div>

            <div className="filter">
                <button class="all">All</button>
                <button class="groups">Users</button>
                <button class="groups">Groups</button>
            </div>
        </>
    )
};

