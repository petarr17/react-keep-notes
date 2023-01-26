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
    labels = labels.split(",");
    for (let i = 0; i < labels.length; i++) labels[i] = labels[i].trim();

    const filteredLabels = labels.filter(function (el) {
      return el != "";
    });

    if (filteredLabels.length > 6) alert("You can have maximum 6 labels!");
    else {
      titleEl.value = "";
      noteEl.value = "";
      labelsEl.value = "";

      let data = {
        title: title,
        note: note,
        labels: filteredLabels,
        color: "blue",
      };

      setNotes((prev) => {
        if (prev.length === 0) data.id = 0;
        else {
          let max = Math.max(...prev.map((o) => o.id));
          data.id = max + 1;
        }

        const newNotes = [...prev, data].sort((a, b) => b.id - a.id);
        return newNotes;
      });
    }
  }
}
