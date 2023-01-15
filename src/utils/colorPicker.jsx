export default function colorPicker(e, id, setNotes) {
  const color = e.target.getAttribute("color-name");

  console.log(typeof color);

  function findID(element) {
    if (element.id === id) return true;
  }

  setNotes((prev) => {
    let index = prev.findIndex(findID);
    const clone = structuredClone(prev);
    clone[index].color = color;
    return clone;
  });
}
