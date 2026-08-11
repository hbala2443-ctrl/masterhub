import {
    initializeApp
} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";

import {
    getAuth,
    signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-auth.js";


const firebaseConfig = {
    apiKey: "AIzaSyA5zKsAFe6ZPB7pYzkHGRUa54QI_B9_frQ",
    authDomain: "masterhub-45743.firebaseapp.com",
    projectId: "masterhub-45743",
    storageBucket: "masterhub-45743.firebasestorage.app",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
};


const app = initializeApp(firebaseConfig);

const auth = getAuth(app);


const loginForm = document.getElementById("loginForm");


if (loginForm) {

    loginForm.addEventListener("submit", async function(event) {

        event.preventDefault();

        const email =
            document.getElementById("email").value.trim();

        const password =
            document.getElementById("password").value;

        const message =
            document.getElementById("message");


        message.innerText = "Login हो रहा है...";


        try {

            await signInWithEmailAndPassword(
                auth,
                email,
                password
            );

            message.className =
                "text-success text-center mt-3";

            message.innerText =
                "✅ Login सफल हुआ!";


            setTimeout(function() {

                window.location.href =
                    "dashboard.html";

            }, 1000);


        } catch (error) {

            message.className =
                "text-danger text-center mt-3";

            if (error.code === "auth/invalid-credential") {

                message.innerText =
                    "❌ Email या Password गलत है।";

            } else {

                message.innerText =
                    "❌ Login नहीं हो पाया।";

            }

            console.log(error);

        }

    });

          }
