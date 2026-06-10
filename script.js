const destinations = [
    {
        name: "Singapore",
        description: "Gardens by the Bay, Sentosa, Universal Studios, Marina Bay Sands, Jewel Changi Airport."
    },
    {
        name: "Malaysia",
        description: "Kuala Lumpur, Petronas Twin Towers, Batu Caves, Genting Highlands."
    },
    {
        name: "Thailand",
        description: "Bangkok, Phuket, Krabi, Pattaya and beautiful beaches."
    },
    {
        name: "Dubai",
        description: "Burj Khalifa, Dubai Mall, Desert Safari and Palm Jumeirah."
    },
    {
        name: "Bali",
        description: "Ubud, Tanah Lot Temple, beaches and rice terraces."
    },
    {
        name: "Paris",
        description: "Eiffel Tower, Louvre Museum and Seine River."
    }
];

function searchDestination() {
    const searchText = document
        .getElementById("searchInput")
        .value
        .toLowerCase();

    const result = document.getElementById("result");

    const destination = destinations.find(
        d => d.name.toLowerCase() === searchText
    );

    if (destination) {
        result.innerHTML = `
            <h2>${destination.name}</h2>
            <p>${destination.description}</p>
        `;
    } else {
        result.innerHTML = "<h2>Destination not found</h2>";
    }
}
