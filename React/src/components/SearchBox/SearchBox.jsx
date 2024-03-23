import "./SearchBox.css";
export function SearchBox() {
    return (
        <div class="searchBox">
            <input
                class="searchInput"
                type="text"
                name=""
                placeholder="Search"
            />
            <button class="searchButton" href="#">
                <i class="material-icons">
                    <img src="src\assets\search.png" alt="Search" />
                </i>
            </button>
        </div>
    );
}
