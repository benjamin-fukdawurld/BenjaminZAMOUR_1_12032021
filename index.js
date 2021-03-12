const lodges = [
    {
        name: "Auberge la Cannebière",
        image: "marcus-loke-WQJvWU_HZFo-unsplash.jpg",
        cost: 25,
        score: 4
    },
    {
        name: "Hôtel du port",
        image: "fred-kleber-gTbaxaVLvsg-unsplash.jpg",
        cost: 52,
        score: 5
    },
    {
        name: "Hôtel les mouettes",
        image: "reisetopia-B8WIgxA_PFU-unsplash.jpg",
        cost: 76,
        score: 4
    },
    {
        name: "Hôtel de la mer",
        image: "annie-spratt-Eg1qcIitAuA-unsplash.jpg",
        cost: 25,
        score: 3
    },
    {
        name: "Auberge le Panier",
        image: "nicate-lee-kT-ZyaiwBe0-unsplash.jpg",
        cost: 25,
        score: 4
    },
    {
        name: "Hôtel chez Amina",
        image: "febrian-zakaria-M6S1WvfW68A-unsplash.jpg",
        cost: 25,
        score: 5
    }
];

const famousLodges = [
    {
        name: "Hôtel le soleil du matin",
        image: "emile-guillemot-Bj_rcSC5XfE-unsplash.jpg",
        cost: 128,
        score: 5
    },
    {
        name: "Au cœur de l'eau Chambres d'hôtes",
        image: "aw-creative-VGs8z60yT2c-unsplash.jpg",
        cost: 71,
        score: 4
    },
    {
        name: "Hôtel Tout bleu et Blanc",
        image: "febrian-zakaria-sjvU0THccQA-unsplash.jpg",
        cost: 68,
        score: 4
    }
];

const activities = [
    {
        name: "Vieux Port",
        image: "reno-laithienne-QUgJhdY5Fyk-unsplash.jpg"
    },
    {
        name: "Fort de Pomègues",
        image: "paul-hermann-QFTrLdQIRhI-unsplash.jpg"
    },
    {
        name: "Île du Frioul",
        image: "kevin-hikari-rV_Qd1l-VXg-unsplash.jpg"
    },
    {
        name: "Parc National des Calanques",
        image: "kilyan-sockalingum-NR8-cBCN3aI-unsplash.jpg"
    },
    {
        name: "Notre-Dame-de-la-Garde",
        image: "florian-wehde-xW9e8gdotxI-unsplash.jpg"
    },
    {
        name: "Parc Longchamp",
        image: "lena-paulin-wH2-EJoDcV0-unsplash.jpg"
    }
];

const starTemplate = document.getElementById("starTemplate");
if (!starTemplate) {
    throw new Error("Cannot find star template element");
}

const lodgeList = document.getElementById("lodgeList");
if (!lodgeList) {
    throw new Error("Cannot hydrate lodges: lodgeList not found");
}

const famousLodgeList = document.getElementById("famousLodgeList");
if (!famousLodgeList) {
    throw new Error("Cannot hydrate lodges: famousLodgeList not found");
}

const activityList = document.getElementById("activityList");
if (!activityList) {
    throw new Error("Cannot hydrate lodges: activityList not found");
}

const lodgeTemplate = document.getElementById("lodgeTemplate");
if (!lodgeTemplate) {
    throw new Error("Cannot hydrate lodges: lodgeTemplate not found");
}

const famousLodgeTemplate = document.getElementById("famousLodgeTemplate");
if (!famousLodgeTemplate) {
    throw new Error("Cannot hydrate lodges: famousLodgeTemplate not found");
}

const activityTemplate = document.getElementById("activityTemplate");
if (!activityTemplate) {
    throw new Error("Cannot hydrate lodges: activityTemplate not found");
}

function hydrateLodges(lodgeList, lodgeTemplate, lodges) {
    for (let lodge of lodges) {
        let element = lodgeTemplate.cloneNode(true);
        element.classList.remove("hidden");
        element.id = "";

        const images = element.getElementsByClassName("lodge-image");
        if (images.length !== 1) {
            throw new Error(
                `Cannot hydrate lodges: 'lodge-image' count must be 1 (current : ${images.length})`
            );
        }

        let image = images[0];
        image.src = `images/hebergements/4_small/${lodge.image}`;
        image.alt = lodge.name;

        const names = element.getElementsByClassName("lodge-name");
        if (names.length !== 1) {
            throw new Error(
                `Cannot hydrate lodges: 'lodge-name' count must be 1 (current : ${names.length})`
            );
        }

        names[0].innerText = lodge.name;

        const costs = element.getElementsByClassName("lodge-cost");
        if (costs.length !== 1) {
            throw new Error(
                `Cannot hydrate lodges: 'lodge-cost' count must be 1 (current : ${costs.length})`
            );
        }

        costs[0].innerText = lodge.cost;

        const scores = element.getElementsByClassName("lodge-score");
        if (scores.length !== 1) {
            throw new Error(
                `Cannot hydrate lodges: 'lodge-score' count must be 1 (current : ${scores.length})`
            );
        }

        let i = 0;
        for (; i < 5; ++i) {
            let star = starTemplate.cloneNode(true);
            star.classList.remove("hidden");

            if (i >= lodge.score) {
                star.classList.replace("text-blue", "text-grey");
            }
            scores[0].appendChild(star);
        }

        lodgeList.appendChild(element);
    }
}

function hydrateActivities(activityList, activityTemplate, activities) {
    for (let activity of activities) {
        let element = activityTemplate.cloneNode(true);
        element.classList.remove("hidden");
        element.id = "";

        const images = element.getElementsByClassName("activity-image");
        if (images.length !== 1) {
            throw new Error(
                `Cannot hydrate activities: 'activity-image' count must be 1 (current : ${images.length})`
            );
        }

        let image = images[0];
        image.src = `images/activites/4_small/${activity.image}`;
        image.alt = activity.name;

        const names = element.getElementsByClassName("activity-name");
        if (names.length !== 1) {
            throw new Error(
                `Cannot hydrate activities: 'activity-name' count must be 1 (current : ${names.length})`
            );
        }

        names[0].innerText = activity.name;

        activityList.appendChild(element);
    }
}

hydrateLodges(lodgeList, lodgeTemplate, lodges);
hydrateLodges(famousLodgeList, famousLodgeTemplate, famousLodges);
hydrateActivities(activityList, activityTemplate, activities);
