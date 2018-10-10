$(document).ready(function () {
    const resultsContainer = $("#results-container");

    function getResults() {
        $.get("/api/results", function (data) {
            console.log("Results", data);
        });
    }
});
