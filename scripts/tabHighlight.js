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