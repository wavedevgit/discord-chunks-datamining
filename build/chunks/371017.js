/** Chunk was on web (https://canary.discord.comweb.a4687b32e07d48ae.js.js) **/
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