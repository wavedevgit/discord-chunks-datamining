/** Chunk was on web.js **/
/** chunk id: 627335, original params: e,t,n (module,exports,re quire) **/
var Chunk50613 = require("./50613.js"),
  i = Object.prototype,
  a = i.hasOwnProperty,
  o = i.toString,
  s = Chunk50613 ? Chunk50613.toStringTag : true;
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