/** Chunk was on 87337 **/
/** chunk id: 785232, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  Z: () => o
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk289823 = require("./289823.jsx"),
  Chunk594174 = require("./594174.js");
let o = function(t) {
  var {
    recipients: e,
    size: n,
    status: o,
    isTyping: u,
    className: c
  } = t, _ = function(t, e) {
    if (null == t) return {};
    var n, i, r = function(t, e) {
      if (null == t) return {};
      var n, i, r = {},
        s = Object.keys(t);
      for (i = 0; i < s.length; i++) n = s[i], e.indexOf(n) >= 0 || (r[n] = t[n]);
      return r
    }(t, e);
    if (Object.getOwnPropertySymbols) {
      var s = Object.getOwnPropertySymbols(t);
      for (i = 0; i < s.length; i++) n = s[i], !(e.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(t, n) && (r[n] = t[n])
    }
    return r
  }(t, ["recipients", "size", "status", "isTyping", "className"]);
  let d = s.ny6[n],
    A = (0, r.Wu)([l.default], () => e.slice(0, 2).map(t => {
      let e = l.default.getUser(t);
      if (null != e) return e.getAvatarURL(true, d.size, false)
    }), [e, d.size]);
  return (0, i.jsx)(a.Z, {
    "aria-label": _["aria-label"],
    "aria-hidden": _["aria-hidden"],
    backSrc: A[0],
    frontSrc: A[1],
    size: n,
    status: o,
    isTyping: null != u && u,
    className: c
  })
}