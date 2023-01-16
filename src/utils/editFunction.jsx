export default function editFunction(e, newObj, setNotes, displayEdit) {
  e.preventDefault();

  function findID(element) {
    if (element.id === newObj.id) return true;
  }

  newObj.labels = newObj.labels.split(",");
  let i = 0;
  newObj.labels.forEach(function (lb) {
    newObj.labels[i] = lb.trim();
    i++;
  });

  setNotes((prev) => {
    let index = prev.findIndex(findID);
    const clone = structuredClone(prev);
    clone[index] = newObj;

    return clone;
  });

  displayEdit(false);
}
