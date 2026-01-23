/** Chunk was on web.js **/
/** chunk id: 189577, original params: e,t,n (module,exports,re quire) **/
var Chunk687072 = require("./687072.js"),
  Chunk624443 = require("./624443.js"),
  Chunk214272 = require("./214272.js"),
  Chunk280885 = require("./280885.js"),
  Chunk31675 = require("./31675.js"),
  Chunk338036 = require("./338036.js"),
  Chunk429397 = require("./429397.js"),
  u = "[object Map]",
  d = "[object Object]",
  f = "[object Promise]",
  p = "[object Set]",
  _ = "[object WeakMap]",
  h = "[object DataView]",
  m = Chunk429397(Chunk687072),
  g = Chunk429397(Chunk624443),
  E = Chunk429397(Chunk214272),
  y = Chunk429397(Chunk280885),
  b = Chunk429397(Chunk31675),
  O = Chunk338036;
(Chunk687072 && O(new Chunk687072(new ArrayBuffer(1))) != h || Chunk624443 && O(new Chunk624443) != u || Chunk214272 && O(Chunk214272.resolve()) != f || Chunk280885 && O(new Chunk280885) != p || Chunk31675 && O(new Chunk31675) != _) && (O = function(e) {
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
    case y:
      return p;
    case b:
      return _
  }
  return t
}), module.exports = O