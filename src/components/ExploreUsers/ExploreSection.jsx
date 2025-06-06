import "./exploreSection.css";
import { SearchBar } from "./ExploerUsersDrill/SearchBar";
import { PeopleYouMayKnow } from "./ExploerUsersDrill/PeopleYouMayKnow";

export const ExploreSection = () => {
    return (
        <div className="explore-users">
            <div className="fix-top">
                <div className="header">
                    <p>Explore Users</p>
                </div>
                <br />
                <hr />

                <SearchBar />
                <div className="text-info">
                    <i className="ri-information-2-line"></i>
                    <span>people you may know</span>
                </div>
                <PeopleYouMayKnow />
            </div>
        </div>
    );
};
