/** Chunk was on web.js **/
/** chunk id: 261010, original params: e,t,n (module,exports,re quire) **/
var Chunk739595 = require("./739595.js"),
  Chunk585022 = require("./585022.js"),
  Chunk546809 = require("./546809.js"),
  Chunk34524 = require("./34524.js"),
  Chunk538826 = require("./538826.js"),
  Chunk514119 = require("./514119.js"),
  Chunk731214 = require("./731214.js"),
  u = "[object Map]",
  d = "[object Object]",
  f = "[object Promise]",
  p = "[object Set]",
  _ = "[object WeakMap]",
  h = "[object DataView]",
  m = Chunk731214(Chunk739595),
  g = Chunk731214(Chunk585022),
  E = Chunk731214(Chunk546809),
  b = Chunk731214(Chunk34524),
  y = Chunk731214(Chunk538826),
  O = Chunk514119;
(Chunk739595 && O(new Chunk739595(new ArrayBuffer(1))) != h || Chunk585022 && O(new Chunk585022) != u || Chunk546809 && O(Chunk546809.resolve()) != f || Chunk34524 && O(new Chunk34524) != p || Chunk538826 && O(new Chunk538826) != _) && (O = function(e) {
  var t = l(e),
    n = t == d ? e.constructor : true,
    r = n ? c(n) : "";
  if (r) switch (r) {
    case m:
      return h;
    case g:
      return u;
    case E:
      return f;
    case b:
      return p;
    case y:
      return _
  }
  return t
}), module.exports = O