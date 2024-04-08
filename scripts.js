/**
 * Data Catalog Project Starter Code - SEA Stage 2
 *
 * This file is where you should be doing most of your work. You should
 * also make changes to the HTML and CSS files, but we want you to prioritize
 * demonstrating your understanding of data structures, and you'll do that
 * with the JavaScript code you write in this file.
 * 
 * The comments in this file are only to help you learn how the starter code
 * works. The instructions for the project are in the README. That said, here
 * are the three things you should do first to learn about the starter code:
 * - 1 - Change something small in index.html or style.css, then reload your 
 *    browser and make sure you can see that change. 
 * - 2 - On your browser, right click anywhere on the page and select
 *    "Inspect" to open the browser developer tools. Then, go to the "console"
 *    tab in the new window that opened up. This console is where you will see
 *    JavaScript errors and logs, which is extremely helpful for debugging.
 *    (These instructions assume you're using Chrome, opening developer tools
 *    may be different on other browsers. We suggest using Chrome.)
 * - 3 - Add another string to the titles array a few lines down. Reload your
 *    browser and observe what happens. You should see a fourth "card" appear
 *    with the string you added to the array, but a broken image.
 * 
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
        _title: "Vought F4U Corsair URL",
        URL: "https://upload.wikimedia.org/wikipedia/commons/6/66/Vought_F4U_Corsair_%28USMC%29.jpg",
        information: "The Vought F4U Corsair is an American fighter aircraft that saw service primarily in World War II and the Korean War. Designed and initially manufactured by Chance Vought, the Corsair was soon in great demand; additional production contracts were given to Goodyear, whose Corsairs were designated FG, and Brewster, designated F3A."
    },
    {
        _title: "Grumman F6F Hellcat",
        URL: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Hellcats_F6F-3%2C_May_1943.jpg/300px-Hellcats_F6F-3%2C_May_1943.jpg",
        information: "The Grumman F6F Hellcat is an American carrier-based fighter aircraft of World War II. Designed to replace the earlier F4F Wildcat and to counter the Japanese Mitsubishi A6M Zero, it was the United States Navy's dominant fighter in the second half of the Pacific War."
    },
    {
        _title: "Douglas SBD Dauntless",
        URL: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Douglas_SBD_Dauntless_dropping_a_bomb%2C_circa_in_1942.jpg/300px-Douglas_SBD_Dauntless_dropping_a_bomb%2C_circa_in_1942.jpg",
        information: "The Douglas SBD Dauntless is a World War II American naval scout plane and dive bomber that was manufactured by Douglas Aircraft from 1940 through 1944. The SBD was the United States Navy's main carrier-based scout/dive bomber from mid-1940 through mid-1944."
    },
    {
        _title: "Supermarine Spitfire",
        URL:   "https://upload.wikimedia.org/wikipedia/commons/5/55/Spitfire_-_Season_Premiere_Airshow_2018_%28cropped%29.jpg",
        information: "r"
    },
    {
        _title: "Hawker Hurricane",
        URL: "https://upload.wikimedia.org/wikipedia/commons/d/de/Hawker_Hurricane%2C_Battle_of_Britain_Memorial_Flight_Members%27_day_2018_%28cropped%29.jpg",
        information: "r"
    },
    {
        _title: "Junkers Ju 87",
        URL: "https://nationalinterest.org/sites/default/files/main_images/Ju%2087%20Stuka.jpg",
        information: "r"
    },
    {
        _title: "Douglas C-47 Skytrain",
        URL: "https://lyonairmuseum.org/wp-content/uploads/2020/08/IMG2_2146.jpg",
        information: "r"
    },
    {
        _title: "Mistibushi A6M Zero",
        URL: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/A6M3_Zero_N712Z_1.jpg/300px-A6M3_Zero_N712Z_1.jpg",
        information: "r"
    },
    {
        _title: "Messerschmitt Me 262",
        URL: "https://hips.hearstapps.com/hmg-prod/images/messerschmitt-me-262-schwalbe-the-first-german-jet-fighter-news-photo-1696370132.jpg?crop=1xw:0.96528xh;center,top&resize=980:*",
        information: "r"
    },
    {
        _title: "Curtiss SB2C Helldiver",
        URL: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Curtiss_SB2C-5_Helldiver_warbird_in_flight.jpg/300px-Curtiss_SB2C-5_Helldiver_warbird_in_flight.jpg",
        information: "r"
    },
    {
        _title: "De Havilland Mosquito",
        URL: "https://www.militaryaviationmuseum.org/wp-content/uploads/583-1-809x540.jpg",
        information: "r"
    },
    {
        _title: "Douglas Havoc",
        URL: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Douglas_A-20G_Havoc.jpg/600px-Douglas_A-20G_Havoc.jpg",
        information: "r"
    },
    {
        _title: "PBY Catalina",
        URL: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/RIHB_2022_PBY_Catalina.jpg/600px-RIHB_2022_PBY_Catalina.jpg",
        information: "r"
    }
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

    // You can use console.log to help you debug!
    // View the output by right clicking on your website,
    // select "Inspect", then click on the "Console" tab
    console.log("new card:", newTitle, "- html: ", card);
}

// This calls the addCards() function when the page is first loaded
document.addEventListener("DOMContentLoaded", showCards);

const searchInput = document.querySelector('.input');
searchInput.addEventListener("input", (e) => {
    let value = e.target.value; //declare and assign value of event's target to a variable

    if(value && value.trim().length > 0){ //check if input exists and is larger than 0
        value = value.trim().toLowerCase(); //trim results

        setList(entries.filter(entry => {
            //only return results if the value entered by the user is in the title
            return entry._title.includes(value);
        }))
    } else { //return nothing
        //input is invalid
    }
}
)

const clearButton = document.getElementById("clear");

clearButton.addEventListener("click", () => {
    
}
)

function setList(results){
    for(const entry of entries){
        //create a li for each result
        const resultItem = document.createElement('li');
        //add a class to each result
        resultItem.classList.add('result-item')
        //grab _title from entries
        const text = document.createTextNode(entry._title);
        //append the text to the result item
        resultItem.appendChild(text);
        //append the result item to our list
        list.appendChild(resultItem);
    }
}


function quoteAlert() {
    console.log("Button Clicked!")
    alert("I guess I can kiss heaven goodbye, because it got to be a sin to look this good!");
}

function removeLastCard() {
    entries.pop(); // Remove last item in titles array
    showCards(); // Call showCards again to refresh
}
