/** Chunk was on 96758 **/
/** chunk id: 954376, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  A: () => u
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk478063 = require("./478063.jsx"),
  Chunk287809 = require("./287809.js");
let u = function(e) {
  let {
    recipients: t,
    size: r,
    status: u,
    isTyping: o,
    className: c
  } = e, A = function(e, t) {
    if (null == e) return {};
    var r, n, l, s = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
      for (l = 0, r = Reflect.ownKeys(e); l < r.length; l++) n = r[l], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (s[n] = e[n]);
      return s
    }
    if (s = function(e, t) {
        if (null == e) return {};
        var r, n, l = {},
          s = Object.getOwnPropertyNames(e);
        for (n = 0; n < s.length; n++) r = s[n], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
        return l
      }(e, t), Object.getOwnPropertySymbols)
      for (l = 0, r = Object.getOwnPropertySymbols(e); l < r.length; l++) n = r[l], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (s[n] = e[n]);
    return s
  }(e, ["recipients", "size", "status", "isTyping", "className"]), f = s.vCh[r], h = (0, l.yK)([a.default], () => t.slice(0, 2).map(e => {
    let t = a.default.getUser(e);
    if (null != t) return t.getAvatarURL(true, f.size, false)
  }), [t, f.size]);
  return (0, n.jsx)(i.A, {
    "aria-label": A["aria-label"],
    "aria-hidden": A["aria-hidden"],
    backSrc: h[0],
    frontSrc: h[1],
    size: r,
    status: u,
    isTyping: null != o && o,
    className: c
  })
}