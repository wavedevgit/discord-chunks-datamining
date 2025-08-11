/** Chunk was on web.js **/
/** chunk id: 440960, original params: e,t,n (module,exports,re quire) **/
var Chunk709998 = require("./709998.js"),
  i = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
  o = /\\(\\)?/g;
module.exports = Chunk709998(function(e) {
  var t = [];
  return 46 === e.charCodeAt(0) && t.push(""), e.replace(i, function(e, n, r, i) {
    t.push(r ? i.replace(o, "$1") : n || e)
  }), t
})