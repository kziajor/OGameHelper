// Wyliczanie transporterów

const calculateTransportersButton = document.createElement('button');
calculateTransportersButton.textContent = "Calc transporters";
calculateTransportersButton.id = "calculate-transporters-button"
calculateTransportersButton.style.position = "fixed";
calculateTransportersButton.style.top = "5px";
calculateTransportersButton.style.left = "5px";
calculateTransportersButton.style.zIndex = "10000";
calculateTransportersButton.style.cursor = "pointer";
calculateTransportersButton.onclick = calculateTransporters;

document.body.appendChild(calculateTransportersButton);

function calculateTransporters() {
    let spyReportResourcesValues = document.querySelectorAll(".msgFilteredHeaderCell_resources");

    if (!spyReportResourcesValues || spyReportResourcesValues.length == 0) return;

    for (let i = 0; i < spyReportResourcesValues.length; i++) {
        let element = spyReportResourcesValues[i];
        let elementValueTxt = element.textContent;
        let elementValue;
        if (elementValueTxt.endsWith('m')) {
            elementValue =  parseFloat(element.textContent.replace(",", "").replace("m", "").padEnd(4, '0')) * 1000;
        } else {
            elementValue = parseFloat(element.textContent.replace(".", ""));
        }

        let transportersNumber = Math.ceil(elementValue / 25000 / 2);

        element.innerText = `${element.textContent} (t:${transportersNumber})`;
    }
}


// Farmy

const farmSpyListButton = document.createElement('button');
farmSpyListButton.textContent = "Farm list to spy";
farmSpyListButton.id = "farm-spy-list-button"
farmSpyListButton.style.position = "fixed";
farmSpyListButton.style.top = "25px";
farmSpyListButton.style.left = "5px";
farmSpyListButton.style.zIndex = "10000";
farmSpyListButton.style.cursor = "pointer";
farmSpyListButton.onclick = prepareListToSpy;

document.body.appendChild(farmSpyListButton);

function prepareListToSpy() {
    const farmList = document.createElement('div');
    farmList.textContent = "";
    farmList.id = "farm-spy-list"
    farmList.style.position = "fixed";
    farmList.style.top = "60px";
    farmList.style.left = "5px";
    farmList.style.zIndex = "10000";
    farmList.style.width = "150px";
    farmList.style.backgroundColor = "white";
    
    //var coordinates = document.querySelectorAll('textarea[name="noticeText"]')[0].value.split('\n');
    var coordinates = [
        '1:350:7',
        '1:352:7',
        '1:353:7',
        '1:355:7',
        '1:357:6',
        '3:355:8',
        '2:361:7',
        '2:362:5',
        '2:362:8',
        '2:362:12',
        '2:363:3',
        '2:363:4',
        '2:363:7',
        '2:363:9',
        '2:375:6',
        '2:384:7',
        '2:384:10',
        '2:384:11'
    ];
    
    for (var i = 0; i < coordinates.length; i++) {
        
        let farmListElement = document.createElement('button');
        
        farmListElement.setAttribute("onclick", `sendSpyFleet('${coordinates[i]}')`);
        farmListElement.style.display = "block";
        farmListElement.textContent = coordinates[i];
        farmListElement.style.cursor = "pointer";
        
        farmList.appendChild(farmListElement);
    }
    
    document.body.appendChild(farmList);
}

function sendSpyFleet(coordinates) {
    let coordinate = coordinates.split(":");
    console.log(coordinate[0]);
    console.log(coordinate[1]);
    console.log(coordinate[2]);
    sendShipsWithPopup(6,coordinate[0],coordinate[1],coordinate[2],1,5);
}