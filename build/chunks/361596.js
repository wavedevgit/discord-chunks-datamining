/** Chunk was on web.js **/
/** chunk id: 361596, original params: e,t,n (module,exports,re quire) **/
var Chunk915646 = require("./915646.js"),
  i = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
  a = /\\(\\)?/g;
module.exports = Chunk915646(function(e) {
  var t = [];
  return 46 === e.charCodeAt(0) && t.push(""), e.replace(i, function(e, n, r, i) {
    t.push(r ? i.replace(a, "$1") : n || e)
  }), t
})