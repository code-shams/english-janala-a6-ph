// ? Creates Lesson wise Buttons and adds a onclick function to handle several onclick function.
const allLevelsUrl = `${mainUrl}levels/all`;
const displayLessonBtn = async () => {
    const data = await fetchData(allLevelsUrl);
    const lessonBtnContainer = document.getElementById("lesson-btn-container");
    for (let i = 1; i <= data.data.length; i++) {
        lessonBtnContainer.innerHTML += `
        <div>
        <button onclick = 'handleLessonBtnEvent(${i})'
        id="lesson-btn-${i}"
        class="btn btn-sm btn-outline btn-primary lessonBtn">
            <span class="hover:text-white">
                <i class="fa-solid fa-book-open"></i>
            </span>
            <span class="text-sm">Lesson - ${i}</span>
        </button>
        </div>
    `;
    }
};

displayLessonBtn();
