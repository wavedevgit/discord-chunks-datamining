/** Chunk was on 91173 **/
/** chunk id: 785232, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => s
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk289823 = require("./289823.jsx"),
  Chunk594174 = require("./594174.js");
let s = function(e) {
  var {
    recipients: t,
    size: n,
    status: s,
    isTyping: c,
    className: u
  } = e, d = function(e, t) {
    if (null == e) return {};
    var n, r, i = function(e, t) {
      if (null == e) return {};
      var n, r, i = {},
        l = Object.keys(e);
      for (r = 0; r < l.length; r++) n = l[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
      return i
    }(e, t);
    if (Object.getOwnPropertySymbols) {
      var l = Object.getOwnPropertySymbols(e);
      for (r = 0; r < l.length; r++) n = l[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
    }
    return i
  }(e, ["recipients", "size", "status", "isTyping", "className"]);
  let p = l.ny6[n],
    m = (0, i.Wu)([o.default], () => t.slice(0, 2).map(e => {
      let t = o.default.getUser(e);
      if (null != t) return t.getAvatarURL(true, p.size, false)
    }), [t, p.size]);
  return (0, r.jsx)(a.Z, {
    "aria-label": d["aria-label"],
    "aria-hidden": d["aria-hidden"],
    backSrc: m[0],
    frontSrc: m[1],
    size: n,
    status: s,
    isTyping: null != c && c,
    className: u
  })
}