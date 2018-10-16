$(document).ready(function () {
    const searchForm = $("#search-form");
    const clear = $("#clear");
    const cityInput = $("#city-input");
    const stateInput = $("#state-input");
    const specialtyInput = $("#specialty-input");
    const insuranceInput = $("#insurance-input");
    const languageInput = $("#language-input");
    const genderInput = $("#gender-input");
    const yearsInput = $("#years-input");
    const submitReview = $(".submit-review");
    const addReviewButton = $(".add-review");
    const reviewForm = $(".review-form");

    $('.collapsible').collapsible();

    $(".reviews").on("click", function () {
        $(".collapsible-header").addClass("active");
    })

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
            "Washington": null,
            "Arlington": null,
            "McLean": null,
            "Fairfax": null
        }
    })

    $('select').formSelect();

    clear.on("click", clearSearch);
    searchForm.on("submit", handleSearch);
    submitReview.on("click", handleReview);
    addReviewButton.on("click", toggleReviewForm);

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

    function toggleReviewForm(event) {
        event.preventDefault();

        const reviewFormActive = $(".active > .row > .review-form");
        reviewFormActive.toggleClass("display-none");
    }

    function handleReview(event) {
        event.preventDefault();
        reviewForm.addClass("display-none");
        const profID = $(".result-item.active").data("profid");
        console.log(profID);
        const firstNameActive = $(".active > .row > .review-form > form > .row > .input-field > .first-name-input");
        const lastNameActive = $(".active > .row > .review-form > form > .row > .input-field > .last-name-input");
        const ratingActive = $(".active > .row > .review-form > form > .row > .input-field > .rating-input");
        const reviewActive = $(".active > .row > .review-form > form > .row > .input-field > .review-input");
        console.log(profID);

        var newReview = {
            firstName: firstNameActive.val().trim(),
            lastName: lastNameActive.val().trim(),
            rating: ratingActive.val().trim(),
            review: reviewActive.val().trim(),
            profID: profID
        };
        console.log(newReview);
        firstNameActive.val("");
        lastNameActive.val("");
        ratingActive.val("");
        reviewActive.val("");
        addReview(newReview);
    }

    function addReview(newReview) {
        $.post("/api/add-review", newReview, function () {
            console.log(newReview);
            window.location.reload();
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
