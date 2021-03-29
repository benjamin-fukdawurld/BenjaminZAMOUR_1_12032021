const filterList = `
<p class="FilterListLabel">Filtres</p>
<div class="FilterList">
    <p class="Filter">
        <i class="FilterIcon fas fa-money-bill-wave"></i>
        Économique
    </p>
    <p class="Filter">
        <i class="FilterIcon fas fa-child"></i>
        Familial
    </p>
    <p class="Filter">
        <i class="FilterIcon fas fa-heart"></i>
        Romantique
    </p>
    <p class="Filter">
        <i class="FilterIcon fas fa-dog"></i>
        Animaux autorisés
    </p>
</div>
`;

function renderFilterList() {
    const filterListElements = document.getElementsByClassName("FilterContainer");
    if (!filterListElements || filterListElements.length !== 1) {
        throw new Error("Failed to render filterList: FilterContainer count must be 1");
    }

    let html = ejs.render(filterList);
    filterListElements[0].innerHTML = html;
}
