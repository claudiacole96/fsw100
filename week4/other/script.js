function start() {
    var race=getElementByClass("race");
    if (race.style.display === "none") {
        race.style.display = "bloack";
    } else {
        race.style.display = "none";
    }
}