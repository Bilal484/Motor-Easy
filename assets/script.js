const buttons = document.querySelectorAll('.toggle-btn');
const sections = document.querySelectorAll('.section');
const images = document.querySelectorAll('.toggle-image');
let activeButton = document.querySelector('.button-active');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        if (activeButton) {
            activeButton.classList.remove('button-active');
        }
        button.classList.add('button-active');
        activeButton = button;

        const targetId = button.getAttribute('data-target');
        const targetImageId = button.getAttribute('data-img');

        images.forEach(image => {
            if (image.id === targetImageId) {
                image.classList.remove('hidden');
            } else {
                image.classList.add('hidden');
            }
        });

        sections.forEach(section => {
            section.style.display = 'none';
        });

        document.getElementById(targetId).style.display = 'block';
    });
});

// Show the "about_us_section" by default
document.getElementById('about_us_section').style.display = 'block';



// ////////////////////// Slider
document.addEventListener('DOMContentLoaded', function () {
    let carouselElement = document.querySelector('#carouselExample');
    let carousel = new bootstrap.Carousel(carouselElement, {
        interval: false
    });

    let items = carouselElement.querySelectorAll('.carousel-item');
    let totalItems = items.length;
    let currentIndex = 0;

    function moveNext() {
        let direction = 1; // 1 for next, -1 for previous
        let nextIndex = (currentIndex + direction) % totalItems;

        if (nextIndex < 0) {
            nextIndex = totalItems - 1;
        }

        items[currentIndex].classList.remove('active');
        items[nextIndex].classList.add('active');
        currentIndex = nextIndex;
    }

    function movePrev() {
        let direction = -1; // 1 for next, -1 for previous
        let nextIndex = (currentIndex + direction) % totalItems;

        if (nextIndex < 0) {
            nextIndex = totalItems - 1;
        }

        items[currentIndex].classList.remove('active');
        items[nextIndex].classList.add('active');
        currentIndex = nextIndex;
    }

    carouselElement.querySelector('.carousel-control-next').addEventListener('click', function () {
        moveNext();
    });

    carouselElement.querySelector('.carousel-control-prev').addEventListener('click', function () {
        movePrev();
    });
});


// ///////////////// Counter ////////////////////////
$('.counter-count').each(function () {
    $(this).prop('Counter', 0).animate({
        Counter: $(this).text()
    }, {

        //chnage count up speed here
        duration: 4000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
});

// ////////////// Collapes ///////////////

$(document).ready(function () {
    $(".service_button").click(function () {
        var target = $(this).data("target");
        $(".row[id$='_content']").hide();
        $("#" + target).show();

        // Remove the active class from all buttons
        $(".service_button").removeClass("button-active");
        // Add the active class to the clicked button
        $(this).addClass("button-active");
    });

    // Trigger click event on the first button
    $(".service_button:first").trigger("click");
});
$(document).ready(function () {
    $(".service_button").click(function () {
        var target = $(this).data("target");
        $(".row[id$='_content']").hide();
        $("#" + target).show();
    });

    // Trigger click event on the first button
    $(".service_button:first").trigger("click");
});

