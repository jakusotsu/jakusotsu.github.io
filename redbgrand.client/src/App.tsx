import { useEffect, useState } from 'react';
import React from 'react';
import './App.css';
/*import './index.css';*/

/*interface Forecast {
    date: string;
    temperatureC: number;
    temperatureF: number;
    summary: string;
}*/




/*function App() {
    const [forecasts, setForecasts] = useState<Forecast[]>();

    useEffect(() => {
        populateWeatherData();
    }, []);

    const contents = forecasts === undefined
        ? <p><em>Loading... Please refresh once the ASP.NET backend has started. See <a href="https://aka.ms/jspsintegrationreact">https://aka.ms/jspsintegrationreact</a> for more details.</em></p>
        : <table className="table table-striped" aria-labelledby="tabelLabel">
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Temp. (C)</th>
                    <th>Temp. (F)</th>
                    <th>Summary</th>
                </tr>
            </thead>
            <tbody>
                {forecasts.map(forecast =>
                    <tr key={forecast.date}>
                        <td>{forecast.date}</td>
                        <td>{forecast.temperatureC}</td>
                        <td>{forecast.temperatureF}</td>
                        <td>{forecast.summary}</td>
                    </tr>
                )}
            </tbody>
        </table>;

    return (
        <div>
            <h1 id="tabelLabel">Weather forecast</h1>
            <p>This component demonstrates fetching data from the server.</p>
            {contents}
        </div>
    );

    async function populateWeatherData() {
        const response = await fetch('weatherforecast');
        const data = await response.json();
        setForecasts(data);
    }
}*/
interface Cardd {
	name: string;
	filepath: string;
	type: string;
	set: string;
	cost: number;
	description: string;
}
function App() {
	const defaultCard: CardProps = {
		type: 'Item',
		name: 'Green Herb',
		cost: 20,
		set: 'Base'
	}
	useEffect(() => {
		populateCardsData();
	}, []);
	async function populateCardsData() {
		const response = await fetch('cards');
		const data = await response.json();
		setCards(data);
	}
	const [cards, setCards] = useState<Cardd[]>([]);
	const cardRows = cards === undefined ? [] : cards.reduce((resultArray, item, index) => {
		const rowIndex = Math.floor(index / 6);

		if (!resultArray[rowIndex]) {
			resultArray[rowIndex] = []; // start a new chunk
		}
		const cardProps: CardProps = { type: item.type, name: item.name, cost: item.cost, set: item.set }

		resultArray[rowIndex].push(cardProps);

		return resultArray;
	} , []);
	return (
        <>
            <div className="container">
                <div className="content">
                    <table className="table">
                        <tbody>
                            {cardRows.map((row, rowIndex) => (
                                <tr key={rowIndex}>
                                    {row.map((cell: CardProps, _cellIndex: number) => (
                                        <Card {...cell} />
                                    ))}
                                </tr>
                            ))}
                        </tbody>

                    </table>
                    <Panel />
                </div>
            </div>
        </>
	);



/*	const [forecasts, setForecasts] = useState<Forecast[]>();*/




}

interface CardProps {
	type: string;
	name: string;
	cost: number;
	set: string;
}

function Panel() {
	const tenOptions: string[] = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];

	const itemInput: SelectInputProps = {
		id: 'itemInput',
		options: ['0', '1', '2', '3', '4'],
		selected: 1
	}
    return (
        <>
            <div className="panel-container">
                <div className="randomize-container">
                    <button className="randomize-button"><span className="red-letter">R</span>andomiz<span className="red-letter">E</span></button>
                </div>
                <div className="panel">
                    <h2>Sets</h2>
                    <label className="bold-label"><input type="checkbox" name="option1" /> Base</label><br />
                    <label className="bold-label"><input type="checkbox" name="option2" /> Alliance</label><br />
                    <label className="bold-label"><input type="checkbox" name="option3" /> Outbreak</label><br />
                    <label className="bold-label"><input type="checkbox" name="option4" /> Nightmare</label><br />
                    <label className="bold-label"><input type="checkbox" name="option5" /> Mercenaries</label><br />
                    <h2>Number of Cards</h2>
                    <label className="bold-label">
                        <SelectInput {...itemInput} />
                        # of Items
                    </label><br /><br />
                    <label className="bold-label">
                        <SelectInput id='weaponsInput' options={tenOptions} selected={6} />
                        # of Weapons
                    </label><br /><br />
                    <label className="bold-label">
                        <SelectInput id='actionsInput' options={tenOptions} selected={6} />
                        # of Actions
                    </label><br /><br />
                    <h2>Exclusions</h2>
                    <label className="bold-label"><input type="checkbox" name="option1" /> Exclude Standard Weapons</label><br />
                    <label className="bold-label"><input type="checkbox" name="option1" /> Exclude Partners Mechanic</label><br />
                    <label className="bold-label"><input type="checkbox" name="option1" /> Exclude Infection Mechanic</label><br />
                </div>
            </div>
        </>
    );
}

function Card({ type, name, cost, set } : CardProps) {
	return (
		<td className="card">
			<div className="type">{type}</div>
			<div className="name">{name}</div>
			<div className="cost">{cost}</div>
			<div className="set">{set}</div>
		</td>
	);
}
// Define the Props interface
interface SelectInputProps {
	options: string[];
	selected: number;
	id: string;
}

// Functional component SelectInput
const SelectInput: React.FC<SelectInputProps> = ({id, options, selected }) => {
	return (
		<select id={id}>
			{options.map((option, index) => {
				if (index === selected) {
					return <option key={index} value={option} selected>{option}</option>;
				} else {
					return <option key={index} value={option}>{option}</option>;
				}
			})}
		</select>
	);
};
/*function CardTable() {

	return (
		<table class="table">
			{
				for(let r = 0; r < 3; r++) {
					for (let c = 0; c < 6; c++) {

					}
				}
			}

		</table>
	)
}*/
/*
function onInit(): void {
    try {
        if (!localStorage) {
            updateStatus("Error: localStorage not supported. You need to use an HTML5 supported browser that supports the HTML5 localstorage API.");
        } else {
            createCardSets();
            onGetCards();
        }
    } catch (e) {
        updateStatus("Error: Unknown error " + e + ".");
    }
    return;
}

function createCardSets(): void {
    if (!localStorage.original) {
        updateStatus("Creating CardSets.........");
        createOrginalSet();
        createAllianceSet();
        createOutBreakSet();
        createNightmareSet();
        createMercenariesSet();
        replaceStatus("Creating CardSets. Done.");
    } else {
        replaceStatus("");
        //updateStatus("CardSets already exist in local storage. No need to create em!");
    }
}

function onClearStorage(): void {
    localStorage.clear();
    window.location.reload();
}

function onGetCards(): void {
    *//*validate and get the cardSets Selected*//*
    const setsSelected: string[] = [];
    for (let i = 0; i < document.selectionsForm.cardSet.length; i++) {
        if (document.selectionsForm.cardSet[i].checked) {
            setsSelected.push(document.selectionsForm.cardSet[i].value);
        }
    }

    let gotData = 0;
    if (setsSelected == "") {
        replaceStatus("You need to select at least 1 set!");
    } else {
        gotData = 1;
    }

    if (gotData) {
        getCards(
            setsSelected,
            document.selectionsForm.weaponCount.value,
            document.selectionsForm.actionCount.value,
            document.selectionsForm.itemCount.value,
            document.selectionsForm.mansionCount.value
        );
    }
}

// Utility functions remain the same

// Card sets object creation functions remain the same


function getCards(setsSelected: string[], weaponCount: number, actionCount: number, itemCount: number, mansionCount: number): void {
	//example to return a random integer between 0 and 10
	//document.write(Math.floor(Math.random()*11));
	//var randomnumber=Math.floor(Math.random()*11)
	replaceWeapons("");
	replaceActions("");
	replaceItems("");
	replaceMansionCards("");
	replaceAmmo("");
	var theSet;
	var cardList;
	var mercDefRsrcCardList = new Array();
	var defRsrcCardList = new Array();
	var defAmmoCardList = new Array();
	var card;
	var hasOriginal = false;
	var hasMerc = false;
	var weaponCards = new Array();
	var actionCards = new Array();
	var itemCards = new Array();
	var mansionCards = new Array();

	//initalize vars needed to remove duplicate green herbs but randomize the 2 of them for variety
	var greenHerbDuplicate = 0;
	var addGreenHerb = Math.floor(Math.random() * (2));
	//updateStatus(setsSelected.length);
	for (var i = 0; i < setsSelected.length; i++) {
		//updateStatus(setsSelected[i] + " was selected");
		if (setsSelected[i] == 'original') {

			theSet = JSON.parse(localStorage.original);
			hasOriginal = true;
		}
		if (setsSelected[i] == 'alliance') {
			theSet = JSON.parse(localStorage.alliance);
		}
		if (setsSelected[i] == 'outbreak') {
			theSet = JSON.parse(localStorage.outbreak);
		}
		if (setsSelected[i] == 'nightmare') {
			theSet = JSON.parse(localStorage.nightmare);
		}
		if (setsSelected[i] == 'mercenaries') {
			theSet = JSON.parse(localStorage.mercenaries);
			hasMerc = true;
		}
		cardList = theSet.cardList

		for (var j = 0; j < cardList.length; j++) {
			//updateStatus("loop: " + j);
			card = cardList[j];

			if (document.selectionsForm.exclusions[0].checked) {
				if ((card.name == "Handgun & Burst-Fire Handgun") ||
					(card.name == "Combat Knife & Survival Knife") ||
					(card.name == "Reliable Blade") ||
					(card.name == "Custom Standard Sidearm")) {
					//updateStatus("skipped: " + card.name);
					if (setsSelected[i] == 'original') {
						defRsrcCardList.push(card);
					}
					if (setsSelected[i] == 'mercenaries') {
						mercDefRsrcCardList.push(card);
					}
					continue;
				}
			}

			if (document.selectionsForm.exclusions[1].checked) {
				if (card.name == "Gatling Gun & Rocket Launcher") {
					//updateStatus("skipped: " + card.name);
					continue;
				}
			}

			//remove 2 appearances of Green Herb but randomly add the one from either the base set or alliance
			if (card.name == "Green Herb") {
				if (greenHerbDuplicate == 0) {
					if (addGreenHerb == 1) {
						greenHerbDuplicate = 1;
					} else {
						addGreenHerb = 1;
						continue;
					}
				} else {
					continue;
				}
			}

			if (card.type == "Weapon") {
				weaponCards.push(card);
			}
			if (card.type == "Action") {
				actionCards.push(card);
			}
			if (card.type == "Item") {
				itemCards.push(card);
			}
			if ((card.type == "Mansion Item") || (card.type == "Mansion Event")) {
				//updateStatus(card.name);
				mansionCards.push(card);
			}
			//updateStatus("Card in this set: " + card.name + ", Type: " + card.type);
		}
	}

	var ammox10 = new Card("Ammo x 10", "", 0, "Ammo", "Mercenaries");
	var ammox20 = new Card("Ammo x 20", "", 0, "Ammo", "Mercenaries");
	var ammox30 = new Card("Ammo x 30", "", 0, "Ammo", "Mercenaries");

	defAmmoCardList.push(ammox10);
	defAmmoCardList.push(ammox20);
	defAmmoCardList.push(ammox30);

	//do some magic! no duplicates!
	updateAmmo('<font class="ammo"><b>Ammo</b></font>');
	showNonRandomCards(defAmmoCardList);
	updateWeapons('<font class="weapon"><b>Weapons</b></font>');
	//force add basic weapons from merc set
	var defaultWeapsAdded = document.selectionsForm.exclusions[0].checked;
	if (defaultWeapsAdded) {
		if (hasMerc) {
			showNonRandomCards(mercDefRsrcCardList);
		}
		else if (hasOriginal) {
			showNonRandomCards(defRsrcCardList);
		}
	}

	if (!hasMerc && !hasOriginal) {
		updateStatusStatic("Warning: You do not have a base set selected (Base or Mercenaries).");
	}

	randomize(weaponCards, weaponCount);
	updateActions('<font class="action"><b>Actions</b></font>');
	randomize(actionCards, actionCount);
	updateItems('<font class="item"><b>Items</b></font>');
	randomize(itemCards, itemCount);
	updateMansionCards('<font class="mansionCards"><b>Mansion Cards</b></font>');
	randomize(mansionCards, mansionCount);
	updateWeapons("");
	updateActions("");
	updateItems("");
	updateMansionCards("");
	updateAmmo("");
	updateTotals(actionCount, weaponCount, itemCount);
}
// 3. misc utility functions

function randomize(listOfCards, numberOfCards) {
	var availableCards = listOfCards.length;
	for (var r = 0; r < numberOfCards; r++) {
		if (r > listOfCards.length - 1) {
			break;
		}
		var randomnumber = Math.floor(Math.random() * (availableCards))
		var card = listOfCards[randomnumber];

		displayCard(card);

		//invalidate chosen card by taking last card and moving it to the randomcard just taken
		if (randomnumber == availableCards) {
			//last element was chosen so remove it
			//listOfCards.pop();
			availableCards = availableCards - 1;
		} else {
			listOfCards[randomnumber] = listOfCards[availableCards - 1];
			availableCards = availableCards - 1;
		}
	}
}



function displayCard(card) {
	//add font family depending on set
	var set = "";
	if (card.set == "Original") {
		set = '<font class="original"><b>B</b></font>';
	}
	if (card.set == "Alliance") {
		set = '<font class="alliance"><b>A</b></font>';
	}
	if (card.set == "Outbreak") {
		set = '<font class="outbreak"><b>O</b></font>';
	}
	if (card.set == "Nightmare") {
		set = '<font class="nightmare"><b>N</b></font>';
	}
	if (card.set == "Mercenaries") {
		set = '<font class="mercenaries"><b>M</b></font>';
	}

	//show the selected card
	if (card.type == "Weapon") {
		updateWeapons(card.name + ' (' + set + ')');
	} else if (card.type == "Action") {
		updateActions(card.name + ' (' + set + ')');
	} else if (card.type == "Item") {
		updateItems(card.name + ' (' + set + ')');
	} else if (card.type == "Ammo") {
		updateAmmo(card.name + ' (' + set + ')');
	}
	else {
		updateMansionCards(card.name + ' (' + set + ')');
	}
}


function showNonRandomCards(cards) {
	for (var i = 0; i < cards.length; i++) {
		displayCard(cards[i]);
	}
}


// update view functions
function updateStatus(status) {
	document.getElementById('status').innerHTML = document.getElementById('status').innerHTML + "<br>" + status;
}

function updateStatusStatic(status) {
	document.getElementById('status').innerHTML = status;
}

function updateAmmo(showAmmo) {
	document.getElementById('showAmmo').innerHTML = document.getElementById('showAmmo').innerHTML + showAmmo + "<br>";
}

function updateWeapons(showWeapons) {
	document.getElementById('showWeapons').innerHTML = document.getElementById('showWeapons').innerHTML + showWeapons + "<br>";
}

function updateActions(showActions) {
	document.getElementById('showActions').innerHTML = document.getElementById('showActions').innerHTML + showActions + "<br>";
}

function updateItems(showItems) {
	document.getElementById('showItems').innerHTML = document.getElementById('showItems').innerHTML + showItems + "<br>";
}

function updateMansionCards(showMansionCards) {
	document.getElementById('showMansionCards').innerHTML = document.getElementById('showMansionCards').innerHTML + showMansionCards + "<br>";
}

function updateTotals(actionsCount, weaponsCount, itemsCount) {
	var ammoCount = 3;
	var defaultWeapsAdded = document.selectionsForm.exclusions[0].checked;

	if (defaultWeapsAdded) {
		weaponsCount = (weaponsCount * 1) + 2;
	}
	document.getElementById('ammoCount').innerHTML = ammoCount;
	document.getElementById('actionCount').innerHTML = actionsCount;
	document.getElementById('weaponCount').innerHTML = weaponsCount;
	document.getElementById('itemCount').innerHTML = itemsCount;
	document.getElementById('cardCount').innerHTML = (itemsCount * 1 + actionsCount * 1 + weaponsCount * 1 + ammoCount * 1);
}

function replaceStatus(status) {
	document.getElementById('status').innerHTML = status;
}

function replaceWeapons(showWeapons) {
	document.getElementById('showWeapons').innerHTML = showWeapons;
}

function replaceActions(showActions) {
	document.getElementById('showActions').innerHTML = showActions;
}

function replaceItems(showItems) {
	document.getElementById('showItems').innerHTML = showItems;
}

function replaceMansionCards(showMansionCards) {
	document.getElementById('showMansionCards').innerHTML = showMansionCards;
}

function replaceAmmo(showAmmo) {
	document.getElementById('showAmmo').innerHTML = showAmmo;
}
//Card sets objrcts
function cardSet(name, cardList) {
	this.name = name;
	this.cardList = cardList;
	this.addCard = addCard;
}

function addCard(name, filename, cost, type, set) {
	var newCard = new Card(name, filename, cost, type, set);
	this.cardList.push(newCard);
}

function Card(name, filename, cost, type, set) {
	this.name = name;
	this.filename = filename;
	this.cost = cost;
	this.type = type;
	this.set = set;
}

//card sets
function createOrginalSet() {
	var original = new cardSet('original', new Array());
	original.addCard("Deadly Aim", "", 0, "Action", "Original");
	original.addCard("Escape from the Dead City", "", 0, "Action", "Original");
	original.addCard("Mansion Foyer", "", 0, "Action", "Original");
	original.addCard("Reload", "", 0, "Action", "Original");
	original.addCard("The Merchant", "", 0, "Action", "Original");
	original.addCard("Umbrella Corporation", "", 0, "Action", "Original");
	original.addCard("Ominous Battle", "", 0, "Action", "Original");
	original.addCard("Shattered Memories", "", 0, "Action", "Original");
	original.addCard("Master of Unlocking", "", 0, "Action", "Original");
	original.addCard("Back to Back", "", 0, "Action", "Original");
	original.addCard("Struggle for Survival ", "", 0, "Action", "Original");
	original.addCard("Grenade", "", 0, "Weapon", "Original");
	original.addCard("Longbow", "", 0, "Weapon", "Original");
	original.addCard("Submission", "", 0, "Weapon", "Original");
	original.addCard("Combat Knife & Survival Knife", "", 0, "Weapon", "Original");
	original.addCard("Six Shooter", "", 0, "Weapon", "Original");
	original.addCard("Gatling Gun & Rocket Launcher", "", 0, "Weapon", "Original");
	original.addCard("Handgun & Burst-Fire Handgun", "", 0, "Weapon", "Original");
	original.addCard("Assault Machine Gun & Full Bore Machine Gun", "", 0, "Weapon", "Original");
	original.addCard("Pump-Action Shotgun & Automatic Shotgun", "", 0, "Weapon", "Original");
	original.addCard("Bolt-Action Rifle & Semi-Automatic Rifle", "", 0, "Weapon", "Original");
	original.addCard("Gatling Gun Case", "", 0, "Mansion Item", "Original");
	original.addCard("Rocket Launcher Case", "", 0, "Mansion Item", "Original");
	original.addCard("Green Herb", "", 0, "Item", "Original");
	original.addCard("Yellow Herb", "", 0, "Mansion Item", "Original");
	original.addCard("First Aid Spray", "", 0, "Item", "Original");
	localStorage.original = JSON.stringify(original);
}
function createAllianceSet() {
	var alliance = new cardSet('alliance', new Array());
	alliance.addCard("Great Ambition", "", 0, "Action", "Alliance");
	alliance.addCard("Uroboros Injection", "", 0, "Action", "Alliance");
	alliance.addCard("Desperate Escape", "", 0, "Action", "Alliance");
	alliance.addCard("Fierce Battle", "", 0, "Action", "Alliance");
	alliance.addCard("Gathering Forces", "", 0, "Action", "Alliance");
	alliance.addCard("Archrival", "", 0, "Action", "Alliance");
	alliance.addCard("Quirk of Fate", "", 0, "Action", "Alliance");
	alliance.addCard("Partners", "", 0, "Action", "Alliance");
	alliance.addCard("Cornered", "", 0, "Action", "Alliance");
	alliance.addCard("Star-Crossed Duo", "", 0, "Action", "Alliance");
	alliance.addCard("Combat Knife & Survival Knife", "", 0, "Weapon", "Alliance");
	alliance.addCard("Handgun & Burst-Fire Handgun", "", 0, "Weapon", "Alliance");
	alliance.addCard("Flash Grenade & Grenade Launcher", "", 0, "Weapon", "Alliance");
	alliance.addCard("Telescopic Sight Rifle", "", 0, "Weapon", "Alliance");
	alliance.addCard("Riot Shotgun & Triple-Barreled Shotgun", "", 0, "Weapon", "Alliance");
	alliance.addCard("Russian Assault Rifle & Signature Special", "", 0, "Weapon", "Alliance");
	alliance.addCard("Flamethrower", "", 0, "Weapon", "Alliance");
	alliance.addCard("Blowback Pistol", "", 0, "Weapon", "Alliance");
	alliance.addCard("Green Herb", "", 0, "Item", "Alliance");
	alliance.addCard("Red Herb", "", 0, "Item", "Alliance");
	alliance.addCard("Explosive Barrel", "", 0, "Mansion Event", "Alliance");
	alliance.addCard("Collapsing Floor Traps", "", 0, "Mansion Event", "Alliance");
	alliance.addCard("Laser Targeting Device ", "", 0, "Mansion Event", "Alliance");
	localStorage.alliance = JSON.stringify(alliance);
}
function createOutBreakSet() {
	var outbreak = new cardSet('outbreak', new Array());
	outbreak.addCard("Injection", "", 0, "Action", "Outbreak");
	outbreak.addCard("Wesker's Secret", "", 0, "Action", "Outbreak");
	outbreak.addCard("Returned Favor", "", 0, "Action", "Outbreak");
	outbreak.addCard("'I Have This...'", "", 0, "Action", "Outbreak");
	outbreak.addCard("Higher Priorities", "", 0, "Action", "Outbreak");
	outbreak.addCard("Parting Ways", "", 0, "Action", "Outbreak");
	outbreak.addCard("By Any Means Neccesary", "", 0, "Action", "Outbreak");
	outbreak.addCard("Power of the t-Virus ", "", 0, "Action", "Outbreak");
	outbreak.addCard("Standard Sidearm & Samurai Edge", "", 0, "Weapon", "Outbreak");
	outbreak.addCard("Lightning Hawk & Hand Cannon", "", 0, "Weapon", "Outbreak");
	outbreak.addCard("Stun Rod", "", 0, "Weapon", "Outbreak");
	outbreak.addCard("Night Scope Rocket Launcher", "", 0, "Weapon", "Outbreak");
	outbreak.addCard("Antivirus", "", 0, "Mansion Item", "Outbreak");
	outbreak.addCard("Kevlar Vest", "", 0, "Mansion Item", "Outbreak");
	outbreak.addCard("Laser Trap", "", 0, "Mansion Event", "Outbreak");
	outbreak.addCard("Rock Trap", "", 0, "Mansion Event", "Outbreak");
	localStorage.outbreak = JSON.stringify(outbreak);
}
function createNightmareSet() {
	var nightmare = new cardSet('nightmare', new Array());
	nightmare.addCard("Lonewolf", "", 0, "Action", "Nightmare");
	nightmare.addCard("Raccoon City Police Department", "", 0, "Action", "Nightmare");
	nightmare.addCard("High Value Targets", "", 0, "Action", "Nightmare");
	nightmare.addCard("PDA", "", 0, "Action", "Nightmare");
	nightmare.addCard("Toe to Toe", "", 0, "Action", "Nightmare");
	nightmare.addCard("A Gift?", "", 0, "Action", "Nightmare");
	nightmare.addCard("Mind Control", "", 0, "Action", "Nightmare");
	nightmare.addCard("Long Awaited Dawn", "", 0, "Action", "Nightmare");
	nightmare.addCard("Vengeful Intention", "", 0, "Action", "Nightmare");
	nightmare.addCard("Symbol of Evil ", "", 0, "Action", "Nightmare");
	nightmare.addCard("Silver Ghost & Punisher", "", 0, "Weapon", "Nightmare");
	nightmare.addCard("Mine Thrower", "", 0, "Weapon", "Nightmare");
	nightmare.addCard("Broken Butterfly", "", 0, "Weapon", "Nightmare");
	nightmare.addCard("Single Shot Rifle w/ Scope & Special Ops Rifle", "", 0, "Weapon", "Nightmare");
	nightmare.addCard("Machine Pistol w/ Stock & Gangster's Machine Gun", "", 0, "Weapon", "Nightmare");
	nightmare.addCard("Flashbang", "", 0, "Weapon", "Nightmare");
	nightmare.addCard("HE Grenade", "", 0, "Weapon", "Nightmare");
	nightmare.addCard("Incendiary Grenade", "", 0, "Weapon", "Nightmare");
	nightmare.addCard("Treasure Map", "", 0, "Mansion Item", "Nightmare");
	nightmare.addCard("Hidden Treasure ", "", 0, "Mansion Item", "Nightmare");
	nightmare.addCard("P.R.L. 412", "", 0, "Mansion Event", "Nightmare");
	localStorage.nightmare = JSON.stringify(nightmare);
}

function createMercenariesSet() {
	var mercenaries = new cardSet('mercenaries', new Array());
	mercenaries.addCard("Custom Standard Sidearm", "", 0, "Weapon", "Mercenaries");
	mercenaries.addCard("Reliable Blade", "", 0, "Weapon", "Mercenaries");
	mercenaries.addCard("First Aid Spray", "", 0, "Item", "Mercenaries");
	mercenaries.addCard("Fight or Flight", "", 0, "Action", "Mercenaries");
	mercenaries.addCard("The Mercenaries", "", 0, "Action", "Mercenaries");
	mercenaries.addCard("Boundless Battlefield", "", 0, "Action", "Mercenaries");
	mercenaries.addCard("Coup de Grace", "", 0, "Action", "Mercenaries");
	mercenaries.addCard("Melee", "", 0, "Action", "Mercenaries");
	mercenaries.addCard("Anticipation", "", 0, "Action", "Mercenaries");
	mercenaries.addCard("Backstab", "", 0, "Action", "Mercenaries");
	mercenaries.addCard("Battle Hardened", "", 0, "Action", "Mercenaries");
	mercenaries.addCard("Resuscitate", "", 0, "Action", "Mercenaries");
	mercenaries.addCard("Tear Gas", "", 0, "Action", "Mercenaries");
	mercenaries.addCard("Ibex Standard", "", 0, "Weapon", "Mercenaries");
	mercenaries.addCard("Custom Pump-Action Shotgun", "", 0, "Weapon", "Mercenaries");
	mercenaries.addCard("Custom Full-Bore Machine Gun", "", 0, "Weapon", "Mercenaries");
	mercenaries.addCard("Custom Lightning Hawk", "", 0, "Weapon", "Mercenaries");
	mercenaries.addCard("Custom Bolt-Action Rifle", "", 0, "Weapon", "Mercenaries");
	mercenaries.addCard("Hunting Bow", "", 0, "Weapon", "Mercenaries");

	localStorage.mercenaries = JSON.stringify(mercenaries);
}
*/
export default App;
