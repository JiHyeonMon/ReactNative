import fectchMock from 'fetch-mock';
import querystring from 'querystring';

/* fetching 예시
const items = new Array(100).fill(null).map((v,i)=>`Item ${i}`);

const filterAndSort = (data, text, asc) => 
    data
            .filter(i => text.length === 0 || i.includes(text))
            .sort(
                    asc 
                    ? (a,b) => (b > a ? -1: a === b ? 0:1)
                    : (a,b) => (a > b ? -1: a === b ? 0:1)
            );

export const fetchItems = (filter, asc) => 
        new Promise(resolve => {
            resolve({
                json: () =>
                    Promise.resolve({
                        items: filterAndSort(items, filter, asc)
                    })
            });
        });
*/

// Items...keep'em coming!
function* genItems() {
    let cnt = 0;
  
    while (true) {
      yield `Item ${cnt++}`;
    }
  }
  
  const items = genItems();
  
  export const fetchItems = () =>
    Promise.resolve({
      json: () =>
        Promise.resolve({
          items: new Array(40).fill(null).map(() => items.next().value)
        })
    });
  