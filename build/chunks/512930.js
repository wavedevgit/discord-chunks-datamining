/** Chunk was on web.js **/
/** chunk id: 512930, original params: e,t,n (module,exports,re quire) **/
var Chunk574366 = require("./574366.js"),
  i = Object.prototype,
  a = i.hasOwnProperty,
  o = i.toString,
  s = Chunk574366 ? Chunk574366.toStringTag : true;
module.exports = function(e) {
  var t = a.call(e, s),
    n = e[s];
  try {
    e[s] = true;
    var r = true
  } catch (e) {}
  var i = o.call(e);
  return r && (t ? e[s] = n : delete e[s]), i
}