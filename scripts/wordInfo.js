const wordUrl = `${mainUrl}/word/`;
const handleInfoBtn = async (id) => {
    // const infoBtn = document.getElementsByClassName("info-btn");
    const data = await fetchData(`${wordUrl}${id}`);
    const wordInformationContainer = document.getElementById("wordInfo");
    let meaning = data.data.meaning;
    if (meaning === null) {
        meaning = "অর্থ পাওয়া যায়নি";
    }
    6;
    wordInformationContainer.innerHTML = `
    <div class="modal-box">
        <div class="shadow-md rounded p-4 space-y-5">
            <div>
                <h1 class="text-2xl font-semibold">
                    ${data.data.word}
                    <span
                        >(<i class="fa-solid fa-microphone"></i
                    ></span>
                    <span class="bangla-font">
                        : ${data.data.pronunciation}</span
                    >)
                </h1>
            </div>
            <div>
                <p class="font-semibold">Meaning</p>
                <p class="bangla-font font-semibold text-lg">${meaning}</p>
            </div>
            <div>
                <p class="font-semibold">Example</p>
                <p>${data.data.sentence}</p>
            </div>
            <div>
                <p class="bangla-font font-semibold">
                    সমার্থক শব্দ গুলো
                </p>
                <div id="synonyms-container" class="flex gap-2 mt-2">
                </div>
            </div>
        </div>
        <div class="modal-action flex justify-start">
            <form method="dialog">
                <!-- if there is a button in form, it will close the modal -->
                <button class="btn bg-primary text-white">
                    Complete Learning
                </button>
            </form>
        </div>
    </div>
    `;
    const synonymsContainer = document.getElementById("synonyms-container");
    if (data.data.synonyms.length) {
        for (const element of data.data.synonyms) {
            synonymsContainer.innerHTML += `
                <button class="bangla-font btn btn-sm text-base font-normal">
                    ${element}
                </button>
            `;
        }
    }
    wordInformationContainer.showModal();
};

/* 
"data": {
"word": "Eager",
"meaning": "আগ্রহী",
"pronunciation": "ইগার",
"level": 1,
"sentence": "The kids were eager to open their gifts.",
"points": 1,
"partsOfSpeech": "adjective",
"synonyms": [
"enthusiastic",
"excited",
"keen"
],
"id": 5
}
 */
