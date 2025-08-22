const plusBtn = document.getElementById("plusBtn");
const plusMenu = document.getElementById("plusMenu");
const joinModal = document.getElementById("joinModal");
const createModal = document.getElementById("createModal");

// toggle dropdown
plusBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  plusMenu.style.display = plusMenu.style.display === "block" ? "none" : "block";
});

// close dropdown when clicking outside
document.addEventListener("click", (e) => {
  if (!plusMenu.contains(e.target) && e.target !== plusBtn) {
    plusMenu.style.display = "none";
  }
});

// open join modal
document.getElementById("joinClassBtn").addEventListener("click", () => {
  joinModal.style.display = "flex";
  plusMenu.style.display = "none";
});

// open create modal
document.getElementById("createClassBtn").addEventListener("click", () => {
  createModal.style.display = "flex";
  plusMenu.style.display = "none";
});

// cancel join
document.getElementById("cancelJoin").addEventListener("click", () => {
  joinModal.style.display = "none";
});

// cancel create
document.getElementById("cancelCreate").addEventListener("click", () => {
  createModal.style.display = "none";
});
