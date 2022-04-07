/*Clock shows h hours, m minutes and s seconds after midnight.

Your task is to write a function which returns the time since midnight in milliseconds.*/

function past(h, m, s){
  let result = (s * 1000) + (m * 60000) + (h * (60000 * 60))
  return result
}