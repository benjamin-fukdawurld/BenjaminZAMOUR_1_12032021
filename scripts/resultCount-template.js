const resultCount = `
<p class="ResultCount">
    <i class="InfoIcon fas fa-info-circle text-blue"></i>
    Plus de 500 logements sont disponibles dans cette ville
</p>
`;

function renderResultCount() {
    const mainElement = document.getElementsByTagName("main");
    if (!mainElement || mainElement.length !== 1) {
        throw new Error("Failed to render result count: main count must be 1");
    }

    let html = ejs.render(resultCount);
    let elm = document.createElement("div");
    elm.innerHTML = html;

    mainElement[0].prepend(elm);
}
