function pattern(n) {
  let str = [];
  for (let i = 1; i <= n; i++) {
    str.push(i);
    if (str.length > 1) {
      str.unshift(i);
    }
    console.log(str.join(""));
  }
  for (let j = 0; j < n * 2 + 1; j++) {
    str.pop();
    str.shift();
    console.log(str.join(""));
    if (str.length === 1) {
      return;
    }
  }
}

pattern(5);
console.log("/////////////////");
const PaginationUtil = class {
  constructor(items, itemsOnPage) {
    this.items = items;
    this.tempItems = [...items];
    this.itemsOnPage = itemsOnPage;
    this.pages = [];
  }
  pageCount() {
    return Math.ceil(this.items.length / this.itemsOnPage);
  }
  itemCount() {
    return this.items.length;
  }

  pageItemCount(index) {
    for (let i = 0; i < this.pageCount(); i++) {
      this.pages.push([]);
    }
    for (let j = 0; j < this.pages.length; j++) {
      for (let i = 0; i < this.items.length && i < this.itemsOnPage; i++) {
        this.pages[j].push(this.items[i]);
      }
      for (let f = 0; f < this.itemsOnPage; f++) {
        this.items.shift();
      }
    }
    if (!this.pages[index]) {
      return -1;
    }

    return this.pages[index].length;
  }

  pageIndex(index) {
    if (index > this.tempItems.length || index < 0) {
      return -1;
    }
    return Math.ceil((index + 1) / this.itemsOnPage) - 1;
  }
};

const page = new PaginationUtil(["a", "b", "c", "d", "e", "f"], 4);
console.log(page.pageCount());
console.log(page.itemCount());
console.log(page.pageItemCount(0));
console.log(page.pageItemCount(1));
console.log(page.pageItemCount(2));
console.log(page.pageIndex(5));
console.log(page.pageIndex(2));
console.log(page.pageIndex(20));
console.log(page.pageIndex(-10));
