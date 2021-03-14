let lodgeImage = `
<a href="#" class="<%= imgcontainer_class %>">
    <picture>
        <source srcset="images/hebergements/1_xlarge/<%= img_src %>" media="(min-width: 1200px)">
        <source srcset="images/hebergements/2_large/<%= img_src %>" media="(min-width: 992px)">
        <source srcset="images/hebergements/3_medium/<%= img_src %>" media="(min-width: 768px)">
        <img
            src="images/hebergements/4_small/<%= img_src %>"
            alt="<%= img_alt %>"
            class="<%= img_class %>"
        />
    </picture>
</a>
`;

let lodgeScore = `
<p class="LodgeScore">
    <%-
        [0, 1, 2, 3, 4].map(i => {
            if (i < lodge_score) {
                return '<i id="starTemplate" class="fas fa-star text-blue"></i>';
            } else {
                return '<i id="starTemplate" class="fas fa-star text-grey"></i>';
            }
        }).join('');
    %>
</p>
`;

const lodge = `
${lodgeImage}
<div class="LodgeText">
    <h2 class="LodgeName"><%= lodge_name %></h2>
    <p class="LodgeCostP">Nuit à partir de <span class="LodgeCost"><%= lodge_cost %>€</span></p>
    ${lodgeScore}
</div>
`;

const famousLodge = `
${lodgeImage}
<div class="FamousLodgeText">
    <h2 class="FamousLodgeName"><%= lodge_name %></h2>
    <p class="LodgeCostP">Nuit à partir de <span class="LodgeCost"><%= lodge_cost %>€</span></p>
    ${lodgeScore}
</div>
`;

function _private_renderLodge(lodges, lodgeListElement, lodgeTemplate, classNames) {
    for (lodgeData of lodges) {
        let articleElm = document.createElement("article");
        articleElm.classList.add(classNames.article);
        let html = ejs.render(lodgeTemplate, {
            img_src: lodgeData.image,
            img_alt: lodgeData.name,
            lodge_name: lodgeData.name,
            lodge_cost: lodgeData.cost,
            lodge_score: lodgeData.score,
            img_class: classNames.img,
            imgcontainer_class: classNames.imgContainer
        });

        articleElm.innerHTML = html;
        lodgeListElement.append(articleElm);
    }
}

function renderLodges(lodges) {
    const lodgeListElements = document.getElementsByClassName("LodgeFlexBox");
    if (!lodgeListElements || lodgeListElements.length !== 1) {
        throw new Error("Failed to render lodgeList: LodgeFlow count must be 1");
    }

    _private_renderLodge(lodges, lodgeListElements[0], lodge, {
        article: "lodge",
        img: "LodgeImage",
        imgContainer: "LodgeImageContainer"
    });
}

function renderFamousLodges(lodges) {
    const lodgeListElements = document.getElementsByClassName("FamousLodgeFlexBox");
    if (!lodgeListElements || lodgeListElements.length !== 1) {
        throw new Error("Failed to render famousLodgeList: LodgeSection count must be 1");
    }

    _private_renderLodge(lodges, lodgeListElements[0], famousLodge, {
        article: "famousLodge",
        img: "FamousLodgeImage",
        imgContainer: "FamousLodgeImageContainer"
    });
}
