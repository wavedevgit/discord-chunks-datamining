/** Chunk was on 56049 **/
/** chunk id: 338991, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  default: () => p
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk481060 = require("./481060.js"),
  Chunk239091 = require("./239091.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk714447 = require("./714447.jsx"),
  Chunk439827 = require("./439827.jsx"),
  Chunk388032 = require("./388032.jsx");

function b(e) {
  let {
    guildId: t,
    onSelect: r,
    onPickerClose: l,
    onInteraction: i
  } = e, b = (0, u.Z)(t, l), p = (0, a.Z)();
  return (0, n.jsx)(o.v2r, {
    navId: "user-context",
    onClose: c.Zy,
    "aria-label": s.intl.string(s.t.liqwPJ),
    onSelect: r,
    onInteraction: i,
    children: (0, n.jsxs)(o.kSQ, {
      children: [p, b]
    })
  })
}

function p(e) {
  let {
    analyticsLocations: t
  } = (0, i.ZP)(e.sourceAnalyticsLocations, l.Z.SOUNDBOARD_CONTEXT_MENU);
  return (0, n.jsx)(i.Gt, {
    value: t,
    children: (0, n.jsx)(b, function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {},
          n = Object.keys(r);
        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
          return Object.getOwnPropertyDescriptor(r, e).enumerable
        }))), n.forEach(function(t) {
          var n;
          n = r[t], t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: true,
            configurable: true,
            writable: true
          }) : e[t] = n
        })
      }
      return e
    }({}, e))
  })
}