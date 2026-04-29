const baseText = [
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
  "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.",
  "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia."
];

const form = document.getElementById("gen-form");
const paraInput = document.getElementById("para");
const result = document.getElementById("result");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const n = Math.max(1, Math.min(10, Number(paraInput.value) || 1));
  const type = form.elements["type"].value;

  if (type === "paras") {
    const paras = [];
    for (let i = 0; i < n; i++) {
      paras.push(baseText[i % baseText.length]);
    }
    result.value = paras.join("\n\n");
  } else {
    const words = baseText.join(" ").split(" ");
    result.value = words.slice(0, n * 20).join(" ");
  }
});
