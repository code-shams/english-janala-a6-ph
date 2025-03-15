const inactive = document.getElementsByClassName("inactive");
const name = document.getElementById("name");
const password = document.getElementById("logincode");
const logInBtn = document.getElementById("logInBtn");
const logoutBtn = document.getElementById("logoutBtn");
logInBtn.addEventListener("click", function () {
    if (name.value) {
        if (password.value) {
            if (password.value === "123456") {
                handleLogin();
            } else {
                Swal.fire({
                    icon: "error",
                    text: "Wrong Password. Contact admin to get your Login Code.",
                });
            }
        } else {
            Swal.fire({
                icon: "error",
                text: "Wrong Password. Contact admin to get your Login Code.",
            });
        }
    } else {
        Swal.fire({
            icon: "error",
            text: "Please tell your name first",
        });
    }
});

logoutBtn.addEventListener("click", () => {
    handleLogout();
    displayLessonBtn();
    displayLessonContents();
});
