function displayImage(imageSrcPath) {
    document.body.classList.add("fixedView");
    
    const image = document.createElement("img");
    image.setAttribute("class", "largeContentImage");
    image.setAttribute("src", imageSrcPath);
    
    const viewer = document.createElement("div");
    viewer.setAttribute("id", "viewer");
    viewer.appendChild(image);
    
    document.body.appendChild(viewer);
    
    $("#viewer").on("click", function(event) {
        // Ensure that clicking on the enlarged image doesn't close the viewer
        if(event.target === this) {
            removeViewerAndContent();
        }
    });
}

function removeViewerAndContent() {
    const viewer = document.getElementById("viewer");
    if(viewer != null) {
        viewer.remove();
    }
    
    document.body.classList.remove("fixedView");
}