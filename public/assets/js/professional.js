$(document).ready(function () {
    const searchForm = $("#search-form");

    $('select').formSelect();
    $('#specialty-input').autocomplete({
        data: {
            "Depression": null,
            "Anxiety": null,
            "PTSD": null
        },
    });
    $('#insurance-input').autocomplete({
        data: {
            "Aetna": null,
            "BlueCross": null,
            "Cigna": null
        },
    });
    $('#language-input').autocomplete({
        data: {
            "English": null,
            "Spanish": null,
            "Chinese": null
        },
    });

    searchForm.on("submit", handleSearch);

    function handleSearch(event) {
        event.preventDefault();
        const cityInput = $("#city-input").val().trim();
        const stateInput = $("#state-input").val().trim();
        const specialtyInput = $("#specialty-input").val().trim();
        const insuranceInput = $("#insurance-input").val().trim();
        const languageInput = $("#language-input").val().trim();
        const genderInput = $("#gender-input").find(":selected").text();
        const yearsInput = $("#years-input").find(":selected").text();
        // Wont submit the post if we are missing a body, title, or author
        // if (!titleInput.val().trim() || !bodyInput.val().trim() || !authorSelect.val()) {
        //     return;
        // }
        // Constructing a newPost object to hand to the database
        var newSearch = {
            city: cityInput,
            state: stateInput,
            specialty: specialtyInput,
            insurance: insuranceInput,
            language: languageInput,
            gender: genderInput,
            years: yearsInput
        };
        console.log(newSearch);
        submitSearch(newSearch);
    }

    function submitSearch(newSearch) {
        let query = `/api/professionals/&city=${newSearch.city}/&state=${newSearch.state}/&specialty=${newSearch.specialty}/&insurance=${newSearch.insurance}/&gender=${newSearch.gender}/&years=${newSearch.years}`;
        console.log(query);
        $.get(query, function () {
            window.location.href = query;
        });
    }
});
