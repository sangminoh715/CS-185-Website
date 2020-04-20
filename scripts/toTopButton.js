function scrollListener() {
    $(window).on("scroll", function() {
        if($(window).scrollTop() > (document.body.clientHeight / 4)) {
            const button = document.createElement("img");
            button.setAttribute("class", "toTopButton");
            button.setAttribute("src", "images/toTopButton.png");
            button.setAttribute("onclick", "moveBackToTop()");
            
            document.body.appendChild(button);
        } else {
            const button = $(".toTopButton");
            if(button != null) {
                button.remove();
            }
        }
    });
}

function moveBackToTop() {
    window.scrollTo(0, 0);
}