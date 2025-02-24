/** Chunk was on web (https://canary.discord.comweb.895a2488cd77ea6e.js.js) **/
var r = n(605905),
  i = n(779882),
  o = n(580495),
  a = RegExp("['’]", "g");

function s(e) {
  return function(t) {
    return r(o(i(t).replace(a, "")), e, "")
  }
}
e.exports = s