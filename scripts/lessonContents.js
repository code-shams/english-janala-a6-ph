const lessonUrl = `${mainUrl}/level/`;
const lessonContainer = document.getElementById("lesson-container");
// ? Displays initial message inside the Lesson Contents Container when none of the lesson buttons are clicked
const displayLessonContents = async () => {
    const lessonContainer = document.getElementById("lesson-container");
    lessonContainer.innerHTML = `
        <div class="text-center space-y-3 p-3 col-span-full">
            <p class="bangla-font text-gray-500">আপনি এখনো কোন Lesson Select করেন নি</p>
            <h2 class="bangla-font text-3xl font-semibold">একটি Lesson Select করুন।</h2>
        </div>
    `;
};

// ? Displays dynamic data when each lesson button is clicked. Creates a 3 column grid card layout.
const getLessonData = async (id) => {
    const lessonData = await fetchData(`${lessonUrl}${id}`);
    lessonContainer.innerHTML = "";
    if (!lessonData.data.length) {
        lessonContainer.innerHTML = `
        <div class="text-center space-y-3 p-3 col-span-full">
            <div class="flex justify-center">
                <img
                    class="border-dashed border-gray-300 border-2 p-2"
                    src="./assets/alert-error.png"
                    alt=""
                />
            </div>
            <p class="bangla-font text-gray-500">
                এই Lesson এ এখনো কোন Vocabulary যুক্ত করা হয়নি।
            </p>
            <h2 class="bangla-font text-3xl font-semibold">
                নেক্সট Lesson এ যান
            </h2>
        </div>
    `;
    }
    lessonData.data.forEach((element) => {
        lessonContainer.innerHTML += `
        <!-- *Vocabulary Card -->
        <div
            class="p-8 bg-white rounded-lg flex flex-col items-center justify-center"
        >
            <!-- Text Contents -->
            <div class="text-center">
                <h2 class="font-bold text-xl">${element.word}</h2>
                <p class="mt-1 font-medium">
                    Meaning / Pronunciation
                </p>
                <h2 class="bangla-font text-xl font-semibold mt-3">
                    "${element.meaning} / ${element.pronunciation}"
                </h2>
            </div>
            <!-- Button Container -->
            <div class="flex justify-between w-full mt-14">
                <button
                    class="p-3 rounded-xl bg-[#1A91FF1A] cursor-pointer"
                >
                    <img src="./assets/fi-sr-info.png" alt="" />
                </button>
                <button
                    class="p-3 rounded-xl bg-[#1A91FF1A] cursor-pointer"
                >
                    <img src="./assets/fi-sr-volume.png" alt="" />
                </button>
            </div>
        </div>
        `;
    });
};

displayLessonContents();
