export default function removeNote(id, setNotes) {
  function findID(element) {
    if (element.id === id) return true;
  }

  setNotes((prev) => {
    let index = prev.findIndex(findID);
    const clone = structuredClone(prev);
    clone.splice(index, 1);

    return clone;
  });
}
