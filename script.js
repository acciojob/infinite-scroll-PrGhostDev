//your code here!
const infiList = document.getElementById('infi-list');
const itemsPerPage = 8; 
let currentPage = 1;

function createListItem(index) {
  const li = document.createElement('li');
  li.textContent = `Item ${index}`;
  return li;
}

function addItemsToInfiList(startIndex, endIndex) {
  for (let i = startIndex; i <= endIndex; i++) {
    const listItem = createListItem(i);
    infiList.appendChild(listItem);
  }
}
addItemsToInfiList(1, itemsPerPage);

infiList.addEventListener('scroll', () => {
  const isAtBottom = infiList.scrollTop + infiList.clientHeight >= infiList.scrollHeight;

  if (isAtBottom) {
    const startIndex = (currentPage * itemsPerPage) + 1;
    const endIndex = startIndex + itemsPerPage - 1;
    addItemsToInfiList(startIndex, endIndex);
    currentPage++;
  }
});

