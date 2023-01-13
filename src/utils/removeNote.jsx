export default function removeNote(e, newDisplay) {
  let id = e.target.closest(".note").getAttribute("data-note");
  localStorage.removeItem(id);
  newDisplay((prev) => prev + 1);
}
