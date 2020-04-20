function highlightCurrentTab() {
    var targetButton;
    switch(parseInt(document.querySelector("meta[name='pageID']").getAttribute("content"))) {
        default:
        case 0:
            targetButton = document.getElementById("homeTab");
            break;
        case 1:
            targetButton = document.getElementById("projectsTab");
            break;
        case 2:
            targetButton = document.getElementById("picturesTab");
            break;
        case 3:
            targetButton = document.getElementById("videosTab");
            break;
    }
    
    targetButton.style.backgroundColor = "#23272b";
    targetButton.style.border = "1px solid black";
}

function displayImage(imageSrcPath) {
    document.body.classList.add("fixedView");
    
    const image = document.createElement("img");
    image.setAttribute("class", "largeContentImage");
    image.setAttribute("src", imageSrcPath);
    
    const viewer = document.createElement("div");
    viewer.setAttribute("id", "viewer");
    viewer.setAttribute("onclick", "removeViewerAndContent()");
    viewer.appendChild(image);
    
    document.body.appendChild(viewer);
}

function removeViewerAndContent() {
    const viewer = document.getElementById("viewer");
    if(viewer != null) {
        viewer.remove();
    }
    
    document.body.classList.remove("fixedView");
}

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