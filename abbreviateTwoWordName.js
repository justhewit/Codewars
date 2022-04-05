/*Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

The output should be two capital letters with a dot separating them.

*/

function abbrevName(name){
    let initials = name.split(' ').map(word => word[0]).join('');
    return initials[0].toUpperCase() + '.' + initials[1].toUpperCase();
  }