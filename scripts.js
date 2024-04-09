/**
    This is my first time coding in vanilla JS. I used react for a previous project but that's it.
 */


const entries = [
    {
        _title: "P-51 Mustang",
        URL: "https://247wallst.com/wp-content/uploads/2022/05/imageForEntry45-4Ku.jpg",
        information: "Arguably the most iconic American fighter of WWII, the Mustang is a testament to American ingenuity and industrial capability. The Mustang was designed in 1940, with the first flying prototype built in just 120 days. Before the Mustang model came into service, the bomber units of the 8th Air Force took 77% casualties from 1942 through 1944. The P-51 completely reversed that trend and mission requirements for bomber crews actually went up as the Mustangs went to work eliminating the Luftwaffe from the skies over Europe. Their work defending the bomber formations earned the escorts the nickname “Little Friends.”"
    },
    {
        _title: "Boeing B-17 Flying Fortress",
        URL: "https://247wallst.com/wp-content/uploads/2022/06/imageForEntry7-ueB.jpg",
        information: "The Boeing B-17 Flying Fortress is an American four-engined heavy bomber aircraft developed in the 1930s for the United States Army Air Corps (USAAC). A fast and high-flying bomber of its era, the B-17 was used primarily in the European Theater of Operations and dropped more bombs than any other aircraft during World War II. It is the third-most produced bomber of all time, behind the American four-engined Consolidated B-24 Liberator and the German multirole, twin-engined Junkers Ju 88. It was also employed as a transport, antisubmarine aircraft, drone controller, and search-and-rescue aircraft."
    },
    {
        _title: "Vought F4U Corsair",
        URL: "https://upload.wikimedia.org/wikipedia/commons/6/66/Vought_F4U_Corsair_%28USMC%29.jpg",
        information: "The Vought F4U Corsair is an American fighter aircraft that saw service primarily in World War II and the Korean War. Designed and initially manufactured by Chance Vought, the Corsair was soon in great demand; additional production contracts were given to Goodyear, whose Corsairs were designated FG, and Brewster, designated F3A."
    },
    {
        _title: "Grumman F6F Hellcat",
        URL: "https://www.cafsocal.com/wp-content/uploads/2015/02/IMGP0463-scaled.jpg",
        information: "The Grumman F6F Hellcat is an American carrier-based fighter aircraft of World War II. Designed to replace the earlier F4F Wildcat and to counter the Japanese Mitsubishi A6M Zero, it was the United States Navy's dominant fighter in the second half of the Pacific War."
    },
    {
        _title: "Douglas SBD Dauntless",
        URL: "https://www.thoughtco.com/thmb/TOQ2VJwWr-IlIm9HzvszT5CZW3M=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/sbd-dauntless-1-large-56a61bf23df78cf7728b6268.jpg",
        information: "The Douglas SBD Dauntless is a World War II American naval scout plane and dive bomber that was manufactured by Douglas Aircraft from 1940 through 1944. The SBD was the United States Navy's main carrier-based scout/dive bomber from mid-1940 through mid-1944."
    },
    {
        _title: "Supermarine Spitfire",
        URL:   "https://upload.wikimedia.org/wikipedia/commons/5/55/Spitfire_-_Season_Premiere_Airshow_2018_%28cropped%29.jpg",
        information: "The Supermarine Spitfire is a British single-seat fighter aircraft used by the Royal Air Force and other Allied countries before, during, and after World War II. Many variants of the Spitfire were built, from the Mk 1 to the Rolls-Royce Griffon-engined Mk 24 using several wing configurations and guns. It was the only British fighter produced continuously throughout the war. The Spitfire remains popular among enthusiasts; around 70 remain airworthy, and many more are static exhibits in aviation museums throughout the world."
    },
    {
        _title: "Hawker Hurricane",
        URL: "https://upload.wikimedia.org/wikipedia/commons/d/de/Hawker_Hurricane%2C_Battle_of_Britain_Memorial_Flight_Members%27_day_2018_%28cropped%29.jpg",
        information: "The Hawker Hurricane is a British single-seat fighter aircraft of the 1930s–40s which was designed and predominantly built by Hawker Aircraft Ltd. for service with the Royal Air Force (RAF). It was overshadowed in the public consciousness by the Supermarine Spitfire during the Battle of Britain in 1940, but the Hurricane inflicted 60% of the losses sustained by the Luftwaffe in the campaign, and fought in all the major theatres of the Second World War."
    },
    {
        _title: "Junkers Ju 87",
        URL: "https://nationalinterest.org/sites/default/files/main_images/Ju%2087%20Stuka.jpg",
        information: "The Junkers Ju 87, popularly known as the 'Stuka',[b] is a German dive bomber and ground-attack aircraft. Designed by Hermann Pohlmann, it first flew in 1935. The Ju 87 made its combat debut in 1937 with the Luftwaffe's Condor Legion during the Spanish Civil War of 1936–1939 and served the Axis in World War II from beginning to end (1939–1945)."
    },
    {
        _title: "Douglas C-47 Skytrain",
        URL: "https://lyonairmuseum.org/wp-content/uploads/2020/08/IMG2_2146.jpg",
        information: "The Douglas C-47 Skytrain or Dakota (RAF designation) is a military transport aircraft developed from the civilian Douglas DC-3 airliner. It was used extensively by the Allies during World War II. During the war the C-47 was used for troop transport, cargo, paratrooper, for towing gliders and military cargo parachute drops. The C-47 remained in front-line service with various military operators for many years.[2] It was produced in approximately triple the numbers as the larger, much heavier payload Curtiss C-46 Commando, which filled a similar role for the U.S. military."
    },
    {
        _title: "Mistibushi A6M Zero",
        URL: "https://upload.wikimedia.org/wikipedia/commons/4/4d/Mitsubishi_A6M_Zero_%28AIII29%29.jpg",
        information: "The Mitsubishi A6M 'Zero' is a long-range carrier-based fighter aircraft formerly manufactured by Mitsubishi Aircraft Company, a part of Mitsubishi Heavy Industries. It was operated by the Imperial Japanese Navy (IJN) from 1940 to 1945. The A6M was designated as the Mitsubishi Navy Type 0 carrier fighter[1] (零式艦上戦闘機, rei-shiki-kanjō-sentōki), or the Mitsubishi A6M Rei-sen. The A6M was usually referred to by its pilots as the Reisen (零戦, zero fighter), '0' being the last digit of the imperial year 2600 (1940) when it entered service with the Imperial Navy. The official Allied reporting name was 'Zeke', although the name 'Zero' was used colloquially as well."
    },
    {
        _title: "Messerschmitt Me 262",
        URL: "https://hips.hearstapps.com/hmg-prod/images/messerschmitt-me-262-schwalbe-the-first-german-jet-fighter-news-photo-1696370132.jpg?crop=1xw:0.96528xh;center,top&resize=980:*",
        information: "The Messerschmitt Me 262, nicknamed Schwalbe (German: 'Swallow') in fighter versions, or Sturmvogel (German: 'Storm Bird') in fighter-bomber versions, is a fighter aircraft and fighter-bomber that was designed and produced by the German aircraft manufacturer Messerschmitt. It was the world's first operational jet-powered fighter aircraft."
    },
    {
        _title: "Curtiss SB2C Helldiver",
        URL: "https://aerosoft-shop.com/shop-rd/bilder/screenshots/fsx/aeroplane-heaven-curtiss-sb2c/curtiss-sb2c%20(25).jpg",
        information: "The Curtiss SB2C Helldiver is a dive bomber developed by Curtiss-Wright during World War II. As a carrier-based bomber with the United States Navy (USN), in Pacific theaters, it supplemented and replaced the Douglas SBD Dauntless. A few survivors are extant."
    },
    {
        _title: "De Havilland Mosquito",
        URL: "https://www.militaryaviationmuseum.org/wp-content/uploads/583-1-809x540.jpg",
        information: "The de Havilland DH.98 Mosquito is a British twin-engined, multirole combat aircraft, introduced during the Second World War. Unusual in that its airframe was constructed mostly of wood, it was nicknamed the 'Wooden Wonder',[4] or 'Mossie'.[5] Lord Beaverbrook, Minister of Aircraft Production, nicknamed it 'Freeman's Folly', alluding to Air Chief Marshal Sir Wilfrid Freeman, who defended Geoffrey de Havilland and his design concept against orders to scrap the project.[6] In 1941, it was one of the fastest operational aircraft in the world.[7]"
    },
    {
        _title: "Douglas Havoc",
        URL: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Douglas_A-20G_Havoc.jpg/600px-Douglas_A-20G_Havoc.jpg",
        information: "The Douglas A-20 Havoc (company designation DB-7) is an American light bomber, attack aircraft, night intruder, night fighter, and reconnaissance aircraft of World War II. Designed to meet an Army Air Corps requirement for a bomber, it was ordered by France for their air force before the USAAC decided it would also meet their requirements. French DB-7s were the first to see combat; after the fall of France, the bomber served with the Royal Air Force under the service name Boston. From 1941, night fighter and intruder versions were given the service name Havoc. In 1942 USAAF A-20s saw combat in North Africa."
    },
    {
        _title: "PBY Catalina",
        URL: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/RIHB_2022_PBY_Catalina.jpg/600px-RIHB_2022_PBY_Catalina.jpg",
        information: "The Consolidated Model 28, more commonly known as the PBY Catalina (US Navy designation), is a flying boat and amphibious aircraft designed by Consolidated Aircraft in the 1930s and 1940s. In US Army service it was designated the OA-10, in Canadian service as the Canso and it later got the NATO reporting name Mop.[3] It was one of the most widely used seaplanes of World War II. Catalinas served with every branch of the United States Armed Forces and in the air forces and navies of many other nations. The last military PBYs served until the 1980s. As of 2021, 86 years after its first flight, the aircraft continues to fly as a waterbomber (or airtanker) in aerial firefighting operations in some parts of the world."
    }
]

//filters
const fighters = [
    "P-51 Mustang",
    "Corsair",
    "Hellcat",
    "Spitfire",
    "Hurricane",
    "A6M",
    "Messerschmitt",
    "Mosquito"
]

const bombers = [
    "Flying Fortress",
    "Dauntless",
    "Junkers",
    "Helldiver",
    "Havoc"
]

const transport = [
    "C-47",
    "PBY Catalina",
    "Flying Fortress"
]

// This function adds cards the page to display the data in the array
function showCards() {
    const cardContainer = document.getElementById("card-container");
    cardContainer.innerHTML = "";
    const templateCard = document.querySelector(".card");
    
    for (let i = 0; i < entries.length; i++) {
        let title = entries[i]._title;

        imageURL = entries[i].URL;

        imageCaption = entries[i].information;

        const nextCard = templateCard.cloneNode(true); // Copy the template card
        editCardContent(nextCard, title, imageURL, imageCaption); // Edit title and image
        cardContainer.appendChild(nextCard); // Add new card to the container
    }
}

function editCardContent(card, newTitle, newImageURL, newImageCaption) {
    card.style.display = "block";

    const cardHeader = card.querySelector("h2");
    cardHeader.textContent = newTitle;

    const cardImage = card.querySelector("img");
    cardImage.src = newImageURL;
    cardImage.alt = newTitle + " Poster";

    const cardImageCaption = card.querySelector("p");
    cardImageCaption.textContent = newImageCaption;

    console.log("new card:", newTitle, "- html: ", card);
}

// This calls the addCards() function when the page is first loaded
document.addEventListener("DOMContentLoaded", showCards);
const searchInput = document.querySelector("input");
searchInput.addEventListener("input", (e) => {
    list.innerHTML = ""; //reset search for every new letter that is typed
    let value = e.target.value; //declare and assign value of event's target to a variable

    if(value && value.trim().length > 0){ //check if input exists and is larger than 0
        //value = value.trim(); //trim results
        setList(entries.filter(entry => {
            //only return results if the value entered by the user is in the title
            return entry._title.includes(value);
        }))
    
    } else { //return nothing
        //input is invalid
        clearList();
    }
}
)

//filter for fighters
const fighterFilter = document.getElementById("filter_fighter");
fighterFilter.addEventListener("click", (e) => {
    for(i = 0; i < fighters.length; i++){
        setList(entries.filter(entry => {
            e.preventDefault(); //prevent page from refreshing immediately
            return entry._title.includes(fighters[i])
        }))
    }
})

//filter for bombers
const bomberFilter = document.getElementById("filter_bomber");
bomberFilter.addEventListener("click", (e) => {
    for(i = 0; i < bombers.length; i++){
        setList(entries.filter(entry => {
            e.preventDefault(); //prevent page from refreshing immediately
            return entry._title.includes(bombers[i])
        }))
    }
})

// filter for search and rescue/transport
const transportFilter = document.getElementById("filter_transport");
transportFilter.addEventListener("click", (e) => {
    for(i = 0; i < transport.length; i++){
        setList(entries.filter(entry => {
            e.preventDefault(); //prevent page from refreshing immediately
            return entry._title.includes(transport[i])
        }))
    }
})

const clearButton = document.getElementById("clear");

clearButton.addEventListener("click", (e) => {
    e.preventDefault(); //don't jump below the clear button, like with the other buttons
    clearList();
}
)

function clearList(){
    while(list.firstChild){
        list.removeChild(list.firstChild);
    }
}

function setList(results){
    for(const entry of results){
        //assign two anchor elements
        var a = document.createElement( "a");
        //create a li for each result
        const resultItem = document.createElement('li');
        //add an id to each result
        resultItem.setAttribute('id', 'result-item');
        //grab _title from entries
        const text = document.createTextNode(entry._title);
        //append the text to an anchor element
        a.appendChild(text);
        //open in a new tab
        a.target = "_blank";
        //append the anchor element to the result item
        resultItem.appendChild(a);
        //set the anchors href to the entry's URL
        a.href = entry.URL;
        //append the result item to our list
        list.appendChild(resultItem);
    }
}


function quoteAlert() {
    console.log("Button Clicked!")
    alert("War Never Changes - Fallout 4");
}

function removeLastCard() {
    entries.pop(); // Remove last item in titles array
    showCards(); // Call showCards again to refresh
}
