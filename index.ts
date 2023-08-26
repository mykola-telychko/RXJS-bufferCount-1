import { interval } from 'rxjs';
import { bufferCount } from 'rxjs/operators';

// https://www.learnrxjs.io/learn-rxjs/operators/transformation/buffercount

// Example 1: Collect buffer and emit after specified number of values
//Create an observable that emits a value every second
const srcInterval$ = interval(1000);
//After three values are emitted, pass on as an array of buffered values
const bufferThree = srcInterval$.pipe(bufferCount(3));
//Print values to console
//ex. output [0,1,2]...[3,4,5]
const subscribe = bufferThree.subscribe((val) =>
  console.log('Buffered Values:', val)
);
