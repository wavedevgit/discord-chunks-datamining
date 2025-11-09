/** Chunk was on 29679 **/
/** chunk id: 553204, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => h
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk477690 = require("./477690.js"),
  Chunk481060 = require("./481060.js"),
  Chunk518738 = require("./518738.js"),
  Chunk208567 = require("./208567.jsx"),
  Chunk48950 = require("./48950.jsx"),
  Chunk624138 = require("./624138.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk105492 = require("./105492.js");
let f = (0, Chunk624138.Mg)(Chunk477690.Z.ROLE_ICON_UPLOADER_ICON_SIZE);

function h(e) {
  let {
    role: t,
    "aria-label": n = m.intl.string(m.t["MsUY/S"]),
    className: l,
    onClick: s,
    disabled: g = false
  } = e, h = i.useRef(null), b = i.useMemo(() => (0, c.Kz)(t, f), [t]), x = null != b ? (0, r.jsx)(u.Z, function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {},
        r = Object.keys(n);
      "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
        return Object.getOwnPropertyDescriptor(n, e).enumerable
      }))), r.forEach(function(t) {
        var r;
        r = n[t], t in e ? Object.defineProperty(e, t, {
          value: r,
          enumerable: true,
          configurable: true,
          writable: true
        }) : e[t] = r
      })
    }
    return e
  }({
    enableTooltip: false,
    className: p.icon
  }, b)) : (0, r.jsx)(o.FmF, {
    size: "md",
    color: "currentColor",
    className: p.icon
  });
  return (0, r.jsx)(o.tEY, {
    ringTarget: h,
    children: (0, r.jsxs)(o.P3F, {
      "aria-label": n,
      className: a()(p.container, l, {
        [p.disabled]: g
      }),
      onClick: g ? true : s,
      "aria-disabled": g,
      children: [(0, r.jsx)("div", {
        ref: h,
        className: p.preview,
        children: x
      }), null != b ? (0, r.jsx)(d.S, {
        className: p.uploaderIcon
      }) : null]
    })
  })
}