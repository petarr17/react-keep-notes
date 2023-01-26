export default function searchFunction(reversedArr, query) {
  return reversedArr.filter((item) => {
    let point = 0;
    if (
      item.title.toLowerCase().includes(query.toLowerCase()) ||
      item.note.toLowerCase().includes(query.toLowerCase())
    )
      point++;

    item.labels.forEach(function (lbl) {
      if (lbl.toLowerCase().includes(query.toLowerCase())) point++;
    });

    if (point > 0) return true;
    else return false;
  });
}
