import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Map, List} from 'immutable';

const obj = Map({
  foo: 1,
  inner: Map({
    bar: 10
  })
});

const arr = List([
  Map({ foo: 1 }),
  Map({ bar: 2})
]);

////////////////////////////////////////////////////////////////////////////////////
/* set vs update
  1. the value you set does NOT depend on the previous value : use set
  2. the value you set depends on the previous value: use update
*/

////////////////////////////////////////////////////////////////////////////////////

/* set
  Returns a 'copy' of the collection with the value at key set to the provided value.
*/
let nextObj = obj.set('foo', 5);
console.log(nextObj.toJS());


/* setIn
  Returns a copy of the collection with the value at the key path set to the provided value.

  ['inner', 'bar'] is key path
*/
nextObj = obj.setIn(['inner', 'bar'], 20);
console.log(nextObj.toJS());


/* update
  Returns a copy of the collection with the value at key set 
  to the result of providing the existing value to the updating function.
*/
nextObj = nextObj.update('foo', value => value + 1);
console.log(nextObj.toJS());


/* delete
 */
nextObj = arr.delete('foo');

///////////////////////////////////////////////////////////////////////////////

let nextArr = arr.setIn([0, 'foo'], 10);

nextArr = arr.push(Map({ qaz: 3}));

/* filter
  Returns a 'new List' with only the values for which the predicate function returns true.
*/
nextArr = arr.filter(item => item.get('foo') === 1);

nextArr = nextArr.delete(0);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
