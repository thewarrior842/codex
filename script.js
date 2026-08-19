/* =========================================
   LIFELINE SECURITY
   JAVASCRIPT
========================================= */


/* ---------- SCREENS ---------- */

let previousScreen = null;

const welcomeScreen =
    document.getElementById("welcomeScreen");

const dashboardScreen =
    document.getElementById("dashboardScreen");

const contactsScreen =
    document.getElementById("contactsScreen");

const confirmScreen =
    document.getElementById("confirmScreen");

const successScreen =
    document.getElementById("successScreen");


/* ---------- BUTTONS ---------- */

const getStarted =
    document.getElementById("getStarted");

const sosButton =
    document.getElementById("sosButton");

const contactsButton =
    document.getElementById("contactsButton");

const backContacts =
    document.getElementById("backContacts");

const addContact =
    document.getElementById("addContact");

const sendSOS =
    document.getElementById("sendSOS");

const cancelSOS =
    document.getElementById("cancelSOS");

const backDashboard =
    document.getElementById("backDashboard");

const refreshLocation =
    document.getElementById("refreshLocation");

const backWelcome =
    document.getElementById("backWelcome");   

/* ---------- TEXT ELEMENTS ---------- */

const selectedEmergency =
    document.getElementById("selectedEmergency");

const locationText =
    document.getElementById("locationText");

const confirmLocation =
    document.getElementById("confirmLocation");

const contactsList =
    document.getElementById("contactsList");


/* =========================================
   SHOW SCREEN
========================================= */

function showScreen(screen) {

    const currentScreen =
        document.querySelector(".screen.active");

    if (currentScreen && currentScreen !== screen) {
        previousScreen = currentScreen;
    }

    const screens =
        document.querySelectorAll(".screen");

    screens.forEach(function (item) {
        item.classList.remove("active");
    });

    screen.classList.add("active");

    window.scrollTo(0, 0);
}
function goBack() {

    if (previousScreen) {

        const currentScreen =
            document.querySelector(".screen.active");

        currentScreen.classList.remove("active");

        previousScreen.classList.add("active");

        previousScreen = null;

        window.scrollTo(0, 0);
    }
}


/* =========================================
   GET STARTED
========================================= */

getStarted.addEventListener("click", function () {

    showScreen(dashboardScreen);

});


/* =========================================
   OPEN CONTACTS
========================================= */

contactsButton.addEventListener("click", function () {

    showScreen(contactsScreen);

});


/* =========================================
   BACK FROM CONTACTS
========================================= */

backContacts.addEventListener("click", function () {

    showScreen(dashboardScreen);

});


/* =========================================
   ADD CONTACT
========================================= */

addContact.addEventListener("click", function () {

    const contactName =
        prompt("Enter trusted contact name:");

    if (
        contactName === null ||
        contactName.trim() === ""
    ) {
        return;
    }


    const contact =
        document.createElement("div");

    contact.classList.add("contact-card");


    contact.innerHTML = `

        <div class="contact-avatar">
            👤
        </div>

        <div class="contact-info">

            <h3>
                ${contactName}
            </h3>

            <p>
                Trusted Contact
            </p>

        </div>

        <button class="call-btn">
            📞
        </button>

    `;


    contactsList.appendChild(contact);

});


/* =========================================
   EMERGENCY BUTTONS
========================================= */

const helpCards =
    document.querySelectorAll(".help-card");


helpCards.forEach(function (card) {

    card.addEventListener("click", function () {

        const emergency =
            card.dataset.emergency;

        openEmergency(emergency);

    });

});


/* =========================================
   MAIN SOS
========================================= */

sosButton.addEventListener("click", function () {

    openEmergency(
        "General Emergency Assistance"
    );

});


/* =========================================
   OPEN EMERGENCY CONFIRMATION
========================================= */

function openEmergency(emergencyType) {

    selectedEmergency.textContent =
        emergencyType;

    showScreen(confirmScreen);

    detectLocation();

}


/* =========================================
   LOCATION DETECTION
========================================= */

function detectLocation() {

    locationText.textContent =
        "Detecting your location...";

    confirmLocation.textContent =
        "Detecting your location...";


    if (navigator.geolocation) {

        navigator.geolocation.getCurrentPosition(

            function (position) {

                const latitude =
                    position.coords.latitude.toFixed(4);

                const longitude =
                    position.coords.longitude.toFixed(4);


                const location =
                    `Location detected: ${latitude}, ${longitude}`;


                locationText.textContent =
                    location;

                confirmLocation.textContent =
                    location;

            },


            function () {

                const message =
                    "Location unavailable. Please enable location permission.";


                locationText.textContent =
                    message;

                confirmLocation.textContent =
                    message;

            }

        );

    } else {

        const message =
            "Location is not supported on this device.";


        locationText.textContent =
            message;

        confirmLocation.textContent =
            message;

    }

}


/* =========================================
   REFRESH LOCATION
========================================= */

refreshLocation.addEventListener("click", function () {

    refreshLocation.textContent = "⟳";

    detectLocation();

});


/* =========================================
   SEND SOS WITH COUNTDOWN
========================================= */

sendSOS.addEventListener("click", function () {

    let countdown = 3;


    sendSOS.disabled = true;


    const timer =
        setInterval(function () {

            sendSOS.textContent =
                `SENDING SOS IN ${countdown}...`;


            countdown--;


            if (countdown < 0) {

                clearInterval(timer);

                sendSOS.textContent =
                    "SEND SOS";


                sendSOS.disabled = false;


                showScreen(successScreen);

            }

        }, 1000);

});


/* =========================================
   CANCEL SOS
========================================= */

cancelSOS.addEventListener("click", function () {

    showScreen(dashboardScreen);

});


/* =========================================
   BACK TO DASHBOARD
========================================= */

backDashboard.addEventListener("click", function () {

    showScreen(dashboardScreen);

});

const backConfirm =
    document.getElementById("backConfirm");

backConfirm.addEventListener("click", function () {

    goBack();

});
/* BACK TO WELCOME SCREEN */

backWelcome.addEventListener("click", function () {

    showScreen(welcomeScreen);

});