const searchBar = `
<form class="SearchBar">
    <button class="LocationButton">
        <i class="fas fa-map-marker-alt"></i>
    </button>
    <input
        class="SearchField"
        name="SearchField"
        type="search"
        value="Marseille, France"
    />
    <button class="SearchButton">
        <i class="fas fa-search SearchIcon"></i>
        <span class="SearchButtonText">Rechercher</span>
    </button>
</form>
`;

function renderSearchBar() {
    const searchBarElements = document.getElementsByClassName("SearchBarContainer");
    if (!searchBarElements || searchBarElements.length !== 1) {
        throw new Error("Failed to render searchBar: SearchBarContainer count must be 1");
    }

    let html = ejs.render(searchBar);
    searchBarElements[0].innerHTML = html;
}
