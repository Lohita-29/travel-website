const destinations = {
    singapore: {
        name: "Singapore",
        info: "Gardens by the Bay, Sentosa Island, Universal Studios, Marina Bay Sands and Jewel Changi Airport."
    },

    malaysia: {
        name: "Malaysia",
        info: "Kuala Lumpur, Petronas Twin Towers, Batu Caves, Genting Highlands and Langkawi."
    },

    thailand: {
        name: "Thailand",
        info: "Bangkok, Phuket, Krabi, Pattaya and beautiful beaches."
    },

    dubai: {
        name: "Dubai",
        info: "Burj Khalifa, Dubai Mall, Palm Jumeirah and Desert Safari."
    },

    bali: {
        name: "Bali",
        info: "Ubud, Tanah Lot Temple, rice terraces and beaches."
    },

    paris: {
        name: "Paris",
        info: "Eiffel Tower, Louvre Museum and Seine River."
    }
};

function searchDestination() {

    let input = document
        .getElementById("searchInput")
        .value
        .trim()
        .toLowerCase();

    let result = document.getElementById("result");

    if (destinations[input]) {

        result.innerHTML = `
            <h2>${destinations[input].name}</h2>
            <p>${destinations[input].info}</p>
        `;

    } else {

        result.innerHTML = `
            <h2>Destination Not Found</h2>
            <p>Please search for Singapore, Malaysia, Thailand, Dubai, Bali or Paris.</p>
        `;
    }
}
