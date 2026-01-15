/** Chunk was on web.js **/
/** chunk id: 65064, original params: e,t,n (module,exports,re quire) **/
var Chunk135839 = require("./135839.js"),
  Chunk117973 = require("./117973.js"),
  Chunk780712 = require("./780712.js"),
  Chunk400353 = require("./400353.js"),
  Chunk653180 = require("./653180.js"),
  Chunk657398 = require("./657398.js"),
  Chunk19235 = require("./19235.js"),
  u = "[object Map]",
  d = "[object Object]",
  f = "[object Promise]",
  p = "[object Set]",
  _ = "[object WeakMap]",
  h = "[object DataView]",
  m = Chunk19235(Chunk135839),
  g = Chunk19235(Chunk117973),
  E = Chunk19235(Chunk780712),
  b = Chunk19235(Chunk400353),
  y = Chunk19235(Chunk653180),
  O = Chunk657398;
(Chunk135839 && O(new Chunk135839(new ArrayBuffer(1))) != h || Chunk117973 && O(new Chunk117973) != u || Chunk780712 && O(Chunk780712.resolve()) != f || Chunk400353 && O(new Chunk400353) != p || Chunk653180 && O(new Chunk653180) != _) && (O = function(e) {
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