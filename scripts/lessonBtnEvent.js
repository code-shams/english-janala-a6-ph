// ? Toggles active state for clicked buttons
const toggleActiveStatus = (btnId) => {
    const clickedBtnId = `lesson-btn-${btnId}`;
    const activeBtn = document.getElementById(clickedBtnId);
    const lessonBtns = document.getElementsByClassName("lessonBtn");
    for (const btn of lessonBtns) {
        btn.classList.remove("bg-primary", "text-white");
    }
    activeBtn.classList.add("bg-primary", "text-white");
};

// ? Onclick functions for lesson buttons
const handleLessonBtnEvent = (id) => {
    // ? Displays dynamic data when each lesson button is clicked. Creates a 3 column grid card layout.
    getLessonData(id);
    toggleActiveStatus(id);
};

// ? Handles log in
const handleLogin = () => {
    for (const section of inactive) {
        section.classList.remove("hidden");
    }
    document.getElementById("banner-sec").classList.add("hidden");

};
// ? Handles Log out
const handleLogout = () => {
    for (const section of inactive) {
        section.classList.add("hidden");
    }
    document.getElementById("banner-sec").classList.remove("hidden");
    name.value = "";
    password.value = "";
};
