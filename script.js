document.querySelector("#yes").addEventListener("click", handleYes);
document.querySelector("#no").addEventListener("click", handleNo);

function handleYes() {
  document.querySelector(".message-box").innerHTML = `
                <p id="msg" style="font-size: 16px;">You wanna know Something?</p>
                <div class="options-box">
                    <button id="yes" class="options" onclick="handleHemaYes()">Yes</button>
                    <button id="no" class="options" onclick="handleHemaNo()">No</button>
                </div>
            `;
}

function handleNo() {
  document.querySelector(".message-box").innerHTML = `
                <p>Muskoni Yes Nokku</p>
                <div class="options-box">
                    <button id="yes" class="options" onclick="handleHemaYes()">Yes</button>
                    <button id="no" class="options" onclick="handleHemaAgainNo()">No</button>
                </div>
            `;
}

function handleHemaYes(){
    document.querySelector(".message-box").innerHTML = `
                <p id="msg" style="font-size: 40px;">You are short!!</p>
            `;
}

function handleHemaNo(){
    document.querySelector(".message-box").innerHTML = `
                <p id="msg" style="font-size: 16px;">Muskoni Yes Nokku</p>
                <div class="options-box">
                    <button id="yes" class="options" onclick="handleHemaYes()">Yes</button>
                    <button id="no" class="options" onclick="handleHemaNo()">No</button>
                </div>
            `;
}

function handleHemaAgainNo(){
    document.querySelector(".message-box").innerHTML = `
                <p id="msg" style="font-size: 20px;">5 chances istunna Yes nokuuu..</p>
                <div class="options-box">
                    <button id="yes" class="options" onclick="handleHemaYes()">Yes</button>
                    <button id="no" class="options" onclick="handleHemaNo4()">No</button>
                </div>
            `;
}

function handleHemaNo4(){
    document.querySelector(".message-box").innerHTML = `
                <p id="msg" style="font-size: 20px;">4 chances remaining..</p>
                <div class="options-box">
                    <button id="yes" class="options" onclick="handleHemaYes()">Yes</button>
                    <button id="no" class="options" onclick="handleHemaNo3()">No</button>
                </div>
            `;
}

function handleHemaNo3(){
    document.querySelector(".message-box").innerHTML = `
                <p id="msg" style="font-size: 20px;">3 unnay anthe..</p>
                <div class="options-box">
                    <button id="yes" class="options" onclick="handleHemaYes()">Yes</button>
                    <button id="no" class="options" onclick="handleHemaNo2()">No</button>
                </div>
            `;
}

function handleHemaNo2(){
    document.querySelector(".message-box").innerHTML = `
                <p id="msg" style="font-size: 20px;">2nd last chance -_-</p>
                <div class="options-box">
                    <button id="yes" class="options" onclick="handleHemaYes()">Yes</button>
                    <button id="no" class="options" onclick="handleHemaNo1()">No</button>
                </div>
            `;
}

function handleHemaNo1(){
    document.querySelector(".message-box").innerHTML = `
                <p id="msg" style="font-size: 20px;">Last chance ra buddoda</p>
                <div class="options-box">
                    <button id="yes" class="options" onclick="handleHemaYes()">Yes</button>
                    <button id="no" class="options" onclick="handleHemaNoFinal()">No</button>
                </div>
            `;
}

function handleHemaNoFinal(){
    document.querySelector(".message-box").innerHTML = `
                <p id="msg" style="font-size: 25px;">Dengey 🖕</p>
            `;
}
