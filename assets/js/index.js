$(function () {

    var tooltipTriggerList = [].slice.call(document.querySelectorAll(
        '[data-bs-toggle="tooltip"]'
    ));

    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl)
    });


    $(".card-img-top").click(function () {
        $(".card-text").toggle();

    });
});