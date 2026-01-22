/** Chunk was on web.js **/
/** chunk id: 512930, original params: e,t,n (module,exports,re quire) **/
var Chunk574366 = require("./574366.js"),
  i = Object.prototype,
  a = i.hasOwnProperty,
  s = i.toString,
  o = Chunk574366 ? Chunk574366.toStringTag : true;
module.exports = function(e) {
  var t = a.call(e, o),
    n = e[o];
  try {
    e[o] = true;
    var r = true
  } catch (e) {}
  var i = s.call(e);
  return r && (t ? e[o] = n : delete e[o]), i
}