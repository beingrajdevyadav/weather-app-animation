const searchBtn = document.querySelector("#searchBtn");
searchBtn.onclick = function () {

    const cityName = document.querySelector("#cityName").value;
    const citySpan = document.querySelector("#city");
    citySpan.innerHTML = cityName;


    const stages = document.querySelectorAll('.stage');
    let currentStage = 0;
    function showStage(index) {
        stages.forEach((stage, idx) => {
            stage.classList.remove('active');
            if (idx === index) {
                stage.classList.add('active');
            }
        });
    }

    function nextStage() {
        if (currentStage < stages.length - 1) {
            currentStage++;
            showStage(currentStage);
        }
    };

    showStage(currentStage);
    setTimeout(() => nextStage(), 2000); // Show "Weather in [City Name]" for 2 seconds
    setTimeout(() => nextStage(), 4000); // Show "Fetching Data..." for 2 seconds
    setTimeout(() => nextStage(), 6000); // Show "Successful" for 2 seconds
};