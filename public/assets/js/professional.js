$(document).ready(function () {
    const searchForm = $("#search-form");
    const clear = $("#clear");

    getSpecialties();
    getInsurances();
    getLanguages();

    $('#state-input').autocomplete({
        data: {
            "AL": null,
            "AK": null,
            "AZ": null,
            "AR": null,
            "CA": null,
            "CO": null,
            "CT": null,
            "DC": null,
            "DE": null,
            "FL": null,
            "GA": null,
            "HI": null,
            "ID": null,
            "IL": null,
            "IN": null,
            "IA": null,
            "KS": null,
            "KY": null,
            "LA": null,
            "ME": null,
            "MD": null,
            "MA": null,
            "MI": null,
            "MN": null,
            "MS": null,
            "MO": null,
            "MT": null,
            "NE": null,
            "NV": null,
            "NH": null,
            "NJ": null,
            "NM": null,
            "NY": null,
            "NC": null,
            "ND": null,
            "OH": null,
            "OK": null,
            "OR": null,
            "PA": null,
            "RI": null,
            "SC": null,
            "SD": null,
            "TN": null,
            "TX": null,
            "UT": null,
            "VT": null,
            "VA": null,
            "WA": null,
            "WV": null,
            "WI": null,
            "WY": null
        }
    });

    $('#city-input').autocomplete({
        data: {
            "Washington": null
        }
    })

    $('select').formSelect();

    clear.on("click", clearSearch);
    searchForm.on("submit", handleSearch);

    const cityInput = $("#city-input");
    const stateInput = $("#state-input");
    const specialtyInput = $("#specialty-input");
    const insuranceInput = $("#insurance-input");
    const languageInput = $("#language-input");
    const genderInput = $("#gender-input");
    const yearsInput = $("#years-input");

    function clearSearch(event) {
        event.preventDefault();
        cityInput.val("");
        stateInput.val("");
        specialtyInput.val("");
        insuranceInput.val("");
        languageInput.val("");
        genderInput.val("");
        yearsInput.val("");
    }

    function handleSearch(event) {
        event.preventDefault();
        const cityInputVal = cityInput.val().trim();
        const stateInputVal = stateInput.val().trim();
        const specialtyInputVal = specialtyInput.val().trim();
        const insuranceInputVal = insuranceInput.val().trim();
        const languageInputVal = languageInput.val().trim();
        const genderInputVal = genderInput.find(":selected").text();
        const yearsInputVal = yearsInput.find(":selected").text();
        // Wont submit the post if we are missing a body, title, or author
        // if (!titleInput.val().trim() || !bodyInput.val().trim() || !authorSelect.val()) {
        //     return;
        // }
        // Constructing a newPost object to hand to the database
        var newSearch = {
            city: cityInputVal,
            state: stateInputVal,
            specialty: specialtyInputVal,
            insurance: insuranceInputVal,
            language: languageInputVal,
            gender: genderInputVal,
            years: yearsInputVal
        };
        console.log(newSearch);
        submitSearch(newSearch);
    }

    function submitSearch(newSearch) {
        let query = `/api/professionals/city=${newSearch.city}/state=${newSearch.state}/specialty=${newSearch.specialty}/insurance=${newSearch.insurance}/language=${newSearch.language}/gender=${newSearch.gender}/years=${newSearch.years}`;
        console.log(query);
        $.get(query, function () {
            window.location.href = query;
        });
    }

    function getSpecialties() {
        $.get("/api/specialties", function (res) {
            // let specialties = [];
            // res.forEach(element => {
            //     specialties.push(element);
            // });
            $('#specialty-input').autocomplete({
                data: res
            });
        });
    }

    function getInsurances() {
        $.get("/api/insurances", function (res) {
            // let specialties = [];
            // res.forEach(element => {
            //     specialties.push(element);
            // });
            $('#insurance-input').autocomplete({
                data: res
            });
        });
    }

    function getLanguages() {
        $.get("/api/languages", function (res) {
            // let specialties = [];
            // res.forEach(element => {
            //     specialties.push(element);
            // });
            $('#language-input').autocomplete({
                data: res
            });
        });
    }
});
