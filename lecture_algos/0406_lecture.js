// OFFICE HOUR NOTES]

// Aaron at this point has his browser + console open
// minHeight -> this doesn't work since it's an object
// you'll need the value the user puts in.

// STEP 1
// function refine_results(event) {
//     event.preventDefault();
//     // BUT how do we make the pop up disappear after we add the search results
//     popup.style.display='none'
//         // this comes from our HTML!
//         // SAME attribute used for our close search button of the popup

//   // need to build a local variable array of the results of the refined list -> will be an empty list
//   let search_results = []
//   for (let i = 0; i < people.length; i++) {
//     if(people[i].height >= minHeight.value){
//         // this will add each person that falls under the value of minHeight -> will add people to the empty search_result list
//         search_results.push(people[i])
//     }
//   }
//   console.log(minHeight.value);
// }
// this currently returns the search_results list in the console

// STEP 2
function refine_results(event) {
  event.preventDefault();

  popup.style.display = "none";

  let search_results = [];
  for (let i = 0; i < people.length; i++) {
    // LIST OF CONDITIONS FOR RESULTS
    if (people[i].height < minHeight.value) {
      continue;
      // using each if statement as *disqualifications* for the list, THEN afterwards, you'll pass whom ever is left
    }
    if (people[i].height < maxHeight.value) {
      continue;
      // using each if statement as *disqualifications* for the list, THEN afterwards, you'll pass whom ever is left
    }
    if (people[i].age > minAge.value) {
      continue;
    }
    if (people[i].age < maxAge.value) {
      continue;
    }
    if (people[i].money > minMoney.value) {
      continue;
    }
    search_results.push(people[i]);
  }
  console.log(minHeight.value);
}

//TRUTHING + FALSING

// MAIN LECTURE
// What is OOP?
// it's DRY code
// creating non-repetitive code
// example:
// having a car line and just chaning the car.name (class) instead of changing each model individually
// What are primitive structures?
// name, string, number, etc
// What are compound structures?
// What are abstract data structures?
