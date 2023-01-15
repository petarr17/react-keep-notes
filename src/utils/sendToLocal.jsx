export default function sendToLocal(
  title,
  note,
  labels,
  titleEl,
  noteEl,
  labelsEl,
  setNotes
) {
  if (title === "" && note === "") alert("Fill out title or note form!");
  else {
    titleEl.value = "";
    noteEl.value = "";
    labelsEl.value = "";

    labels = labels.split(",");
    for (let i = 0; i < labels.length; i++) labels[i] = labels[i].trim();

    let data = {
      title: title,
      note: note,
      labels: labels,
      color: "blue",
    };

    setNotes((prev) => {
      if (prev.length === 0) data.id = 0;
      else {
        let max = Math.max(...prev.map((o) => o.id));
        data.id = max + 1;
      }
      return [...prev, data];
    });
  }
}
