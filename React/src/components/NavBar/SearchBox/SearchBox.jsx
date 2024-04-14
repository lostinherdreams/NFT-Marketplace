import "./SearchBox.css";
export function SearchBox() {
    return (
        <div className="searchBox">
            <input
                className="searchInput"
                type="text"
                name=""
                placeholder="Search"
            />
            <button className="searchButton" href="#">
                <i className="material-icons">
                    <img src="src\assets\search.png" alt="Search" />
                </i>
            </button>
        </div>
    );
}
