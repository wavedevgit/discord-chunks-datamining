/** Chunk was on web (https://canary.discord.comweb.38a06e56c3da3c7f.js.js) **/
"use strict";
var r = n(192853),
  i = n(690244),
  o = n(148025),
  a = r("RegExp.prototype.exec"),
  s = i("%TypeError%");
e.exports = function(e) {
  if (!o(e)) throw new s("`regex` must be a RegExp");
  return function(t) {
    return null !== a(e, t)
  }
}