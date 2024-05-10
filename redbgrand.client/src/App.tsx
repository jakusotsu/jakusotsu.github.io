import { useEffect, useState } from 'react';
import './App.css';

interface Cardd {
	name: string;
	filepath: string;
	type: string;
	set: string;
	cost: number;
	description: string;
}

function App() {
	const [cards, setCards] = useState<any[]>([]);
	const populateCardsData = async () => {
		const response = await fetch('cards');
		const data = await response.json();
		setCards(data);
	}
	useEffect(() => {
		populateCardsData();
	}, []);

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
                            {cardRows.map((row: Cardd[], rowIndex: number) => (
                                <tr key={rowIndex}>
                                    {row.map((cell: CardProps, cellIndex: number) => (
										<Card key={cellIndex} {...cell} />
                                    ))}
                                </tr>
                            ))}
                        </tbody>

                    </table>
					<Panel setCards={setCards} />
                </div>
            </div>
        </>
	);
}

interface CardProps {
	type: string;
	name: string;
	cost: number;
	set: string;
}
interface PopulateProps {
	setCards: (data:any) => void;
}
function Panel({ setCards }: PopulateProps) {
	const [checkboxes, setCheckboxes] = useState<{ [key: string]: boolean }>({
		includeBase: true,
		includeAlliance: false,
		includeOutbreak: false,
		includeNightmare: false,
		includeMercenaries: false,
		excludeStdWpns: false,
		excludePartners: false,
		excludeInfection: false,
	});
	const [amounts, setAmounts] = useState<{ [key: string]: string }>({
		numWeapons: '7',
		numActions: '9',
		numItems: '2',
	});
	function handleCheckboxChange(event: React.ChangeEvent<HTMLInputElement>) {
		const { name, checked } = event.target;
		setCheckboxes(prevState => ({
			...prevState,
			[name]: checked
		}));
	}

	function handleAmountChange(event: React.ChangeEvent<HTMLSelectElement>, key: string) {
		const value = event.target.value;
		setAmounts(prevState => ({
			...prevState,
			[key]: value
		}));
		const totalCount = Number(amounts.numWeapons) + Number(amounts.numItems) + Number(amounts.numActions);

		if (totalCount != 18) {
			if (key === 'numWeapons' || key === 'numItems') {
				// Calculate the remaining count for actions
				const remainingActions = 18 - (Number(amounts.numItems) + Number(amounts.numWeapons));
				// Update the state with the new count for actions
				setAmounts(prevState => ({
					...prevState,
					numActions: String(remainingActions)
				}));
			} else if (key === 'numActions') {
				// Calculate the remaining count for weapons
				const remainingWeapons = 18 - (Number(amounts.numItems) + Number(amounts.numActions));
				// Update the state with the new count for weapons
				setAmounts(prevState => ({
					...prevState,
					numWeapons: String(remainingWeapons)
				}));
			}
		}
	}
	async function sendData() {
		const data = {
			...amounts,
			...checkboxes,
		};

		try {
			const responseData = await postData('cards', data);
			console.log('Response data:', responseData);
			setCards(responseData);
		} catch (error) {
			console.error('Error sending data:', error);
		}
	}

    return (
        <>
            <div className="panel-container">
                <div className="randomize-container">
					<button className="randomize-button" onClick={sendData}><span className="red-letter">R</span>andomiz<span className="red-letter">E</span></button>
                </div>
                <div className="panel">
                    <h2>Sets</h2>
					<label className="bold-label"><input type="checkbox" checked={checkboxes.includeBase} onChange={handleCheckboxChange} name="includeBase" /> Base</label><br />
					<label className="bold-label"><input type="checkbox" checked={checkboxes.includeAlliance} onChange={handleCheckboxChange} name="includeAlliance" /> Alliance</label><br />
					<label className="bold-label"><input type="checkbox" checked={checkboxes.includeOutbreak} onChange={handleCheckboxChange} name="includeOutbreak" /> Outbreak</label><br />
					<label className="bold-label"><input type="checkbox" checked={checkboxes.includeNightmare} onChange={handleCheckboxChange} name="includeNightmare" /> Nightmare</label><br />
					<label className="bold-label"><input type="checkbox" checked={checkboxes.includeMercenaries} onChange={handleCheckboxChange} name="includeMercenaries" /> Mercenaries</label><br />
					<h2>Amounts</h2>
					<label className="bold-label">
						<SelectInput id='itemsInput' options={['1', '2', '3', '4', '5']} onChange={(value) => handleAmountChange(value, 'numItems')} selectedValue={amounts.numItems} />
						# of Items
					</label><br /><br />
					<label className="bold-label">
						<SelectInput id='weaponsInput' options={['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']} onChange={(value) => handleAmountChange(value, 'numWeapons')} selectedValue={amounts.numWeapons} />
						# of Weapons
					</label><br /><br />
					<label className="bold-label">
						<SelectInput id='actionsInput' options={['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']} onChange={(value) => handleAmountChange(value, 'numActions')} selectedValue={amounts.numActions} />
						# of Actions
                    </label><br /><br />
                    <h2>Exclusions</h2>
					<label className="bold-label"><input type="checkbox" checked={checkboxes.excludeStdWpns} onChange={handleCheckboxChange} name="excludeStdWpns" /> Exclude Standard Weapons</label><br />
					<label className="bold-label"><input type="checkbox" checked={checkboxes.excludePartners} onChange={handleCheckboxChange} name="excludePartners" /> Exclude Partners Mechanic</label><br />
					<label className="bold-label"><input type="checkbox" checked={checkboxes.excludeInfection} onChange={handleCheckboxChange} name="excludeInfection" /> Exclude Infection Mechanic</label><br />
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
interface SelectInputProps {
	options: string[];
	id: string;
	onChange: any;
	selectedValue: string;
}

function SelectInput({ id, options, onChange, selectedValue }: SelectInputProps) {
	return (
		<select id={id} onChange={(e) => onChange(e, id)} value={selectedValue}>
			{options.map((option, index) => {
				return <option key={index} value={option}>{option}</option>;
			})}
		</select>
	);
};
async function postData(url: string, data: Object) {
	try {
		const response = await fetch(url, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(data)
		});
		if (!response.ok) {
			throw new Error('Network response was not ok.');
		}
		const responseData = await response.json();
		return responseData;
	} catch (error) {
		console.error('Error:', error);
		throw error;
	}
}

export default App;


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

*/
