/** Chunk was on web.js **/
/** chunk id: 53919, original params: e,t,n (module,exports,re quire) **/
var Chunk762378 = require("./762378.js"),
  Chunk481062 = require("./481062.js"),
  Chunk34775 = require("./34775.js"),
  Chunk79568 = require("./79568.js"),
  Chunk221286 = require("./221286.js"),
  Chunk903425 = require("./903425.js"),
  Chunk785775 = require("./785775.js"),
  u = "[object Map]",
  d = "[object Object]",
  f = "[object Promise]",
  p = "[object Set]",
  _ = "[object WeakMap]",
  h = "[object DataView]",
  m = Chunk785775(Chunk762378),
  g = Chunk785775(Chunk481062),
  E = Chunk785775(Chunk34775),
  b = Chunk785775(Chunk79568),
  y = Chunk785775(Chunk221286),
  O = Chunk903425;
(Chunk762378 && O(new Chunk762378(new ArrayBuffer(1))) != h || Chunk481062 && O(new Chunk481062) != u || Chunk34775 && O(Chunk34775.resolve()) != f || Chunk79568 && O(new Chunk79568) != p || Chunk221286 && O(new Chunk221286) != _) && (O = function(e) {
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