/**
 * @Description sort object key
 * @Param       object , key
 * @Returns     object
 * @Author      Kerem Karadeniz
 */
export function sortObjects(object: any[], key: string) {
  object.sort((a: any, b: any) =>
    a[key] > b[key] ? 1 : b[key] > a[key] ? -1 : 0
  );
  return object;
}

/**
 * @Description  this function select input value according to list
 * @Param       list ,  sortValue
 * @Returns     object
 * @Author      Kerem Karadeniz
 */
export function sortList(list: object[], sortValue: string) {
  let sortedList;
  if (sortValue === "sortYearDesc") {
    sortedList = sortObjects(list, "releaseYear");
    sortedList = sortedList.reverse();
  } else if (sortValue === "sortYearAsc") {
    sortedList = sortObjects(list, "releaseYear");
  } else if (sortValue === "sortTitleDesc") {
    sortedList = sortObjects(list, "title");
    sortedList = sortedList.reverse();
  } else if (sortValue === "sortTitleAsc") {
    sortedList = sortObjects(list, "title");
  }
  return sortedList;
}
