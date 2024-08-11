window.addEventListener("load", ()=>{
    if(!localStorage.getItem("user")){
        window.location.replace("./signup.html")
    }
})



import { auth, signInWithEmailAndPassword } from "./fb.js";

const btn = document.querySelector("#loginUser")
btn.addEventListener("click", async () => {
    try {
        const email = document.getElementById('email');
        const password = document.getElementById('password');

        // Validate input values
        if (!email.value || !password.value) {
            alert("Please enter both email and password");
            return;
        }

        const res = await signInWithEmailAndPassword(auth, email.value, password.value);
        console.log("Login successfully:", res);
        localStorage.setItem("user", res.user.uid)
        window.location.href = "../index.html"        

    } catch (error) {
        alert(`This user can not exist: ${error.message}`);

    }
})
