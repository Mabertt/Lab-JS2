// =======================
// Завдання 1
// =======================
// small.js виконається другим, навіть якщо завантажиться швидше,
// тому що браузер виконує <script> послідовно зверху вниз (синхронно).

// =======================
// Завдання 2
// =======================

// a *= 2 => a = 4, тому x = 1 + 4 = 5
var a = 2;
var x = 1 + (a *= 2);
console.log("x =", x);

// alert з'явиться, тому що "0" — це непорожній рядок
if ("0") {
    alert('Привіт');
}

var admin;
var name = "Василь";
admin = name;
console.log(admin);

// Завдання 3 (Fetch API)

async function getCounties() {
    const res = await fetch("https://api.census.gov/data/2020/acs/acs5/profile?get=NAME&for=county:*");
    const data = await res.json();

    return data.slice(1).map(row => ({
        name: row[0],
        state: row[1],
        county: row[2],
        code: row[1] + row[2]
    }));
}

async function findCountyCode(name) {
    const counties = await getCounties();
    const found = counties.find(c => c.name === name);
    return found ? found.code : null;
}

const input = document.createElement("input");
input.placeholder = "Введіть округ";

const button = document.createElement("button");
button.textContent = "Знайти код";

document.body.append(input, button);

button.addEventListener("click", async () => {
    const code = await findCountyCode(input.value);

    if (code) {
        console.log("Code:", code);
    } else {
        console.log("Не знайдено");
    }
});

// Завдання 4 (Валідація)

const form = document.createElement("form");

const first = document.createElement("input");
first.placeholder = "First name";

const last = document.createElement("input");
last.placeholder = "Last name";

const email = document.createElement("input");
email.placeholder = "Email";

const submit = document.createElement("button");
submit.textContent = "Submit";

form.append(first, last, email, submit);
document.body.append(form);

form.addEventListener("submit", (e) => {
    if (!first.value || !last.value || !email.value) {
        alert("Заповніть всі поля!");
        e.preventDefault(); // скасування
    } else {
        alert(`${first.value} ${last.value}, ${email.value}`);
    }
});

// Завдання 5 (Анімація)

const box = document.createElement("div");
box.style.width = "100px";
box.style.height = "100px";
box.style.background = "blue";
box.style.position = "relative";
box.style.left = "0px";
box.style.transition = "left 0.3s";

document.body.append(box);

const leftBtn = document.createElement("button");
leftBtn.textContent = "Вліво";

const rightBtn = document.createElement("button");
rightBtn.textContent = "Вправо";

document.body.append(leftBtn, rightBtn);

let pos = 0;

leftBtn.addEventListener("click", () => {
    pos -= 100;
    box.style.left = pos + "px";
});

rightBtn.addEventListener("click", () => {
    pos += 100;
    box.style.left = pos + "px";
});