/** Chunk was on 87337 **/
/** chunk id: 785232, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => o
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk289823 = require("./289823.jsx"),
  Chunk594174 = require("./594174.js");
let o = function(e) {
  var {
    recipients: t,
    size: n,
    status: o,
    isTyping: c,
    className: u
  } = e, d = function(e, t) {
    if (null == e) return {};
    var n, r, s = function(e, t) {
      if (null == e) return {};
      var n, r, s = {},
        i = Object.keys(e);
      for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || (s[n] = e[n]);
      return s
    }(e, t);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(e);
      for (r = 0; r < i.length; r++) n = i[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (s[n] = e[n])
    }
    return s
  }(e, ["recipients", "size", "status", "isTyping", "className"]);
  let _ = i.ny6[n],
    A = (0, s.Wu)([l.default], () => t.slice(0, 2).map(e => {
      let t = l.default.getUser(e);
      if (null != t) return t.getAvatarURL(true, _.size, false)
    }), [t, _.size]);
  return (0, r.jsx)(a.Z, {
    "aria-label": d["aria-label"],
    "aria-hidden": d["aria-hidden"],
    backSrc: A[0],
    frontSrc: A[1],
    size: n,
    status: o,
    isTyping: null != c && c,
    className: u
  })
}