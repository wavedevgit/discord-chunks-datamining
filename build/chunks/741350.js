/** Chunk was on web.js **/
/** chunk id: 741350, original params: e,t,n (module,exports,re quire) **/
var Chunk384332 = require("./384332.js"),
  i = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
  a = /\\(\\)?/g;
module.exports = Chunk384332(function(e) {
  var t = [];
  return 46 === e.charCodeAt(0) && t.push(""), e.replace(i, function(e, n, r, i) {
    t.push(r ? i.replace(a, "$1") : n || e)
  }), t
})