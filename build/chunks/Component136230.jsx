/** Chunk was on 47841 **/
/** chunk id: 136230, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => b
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk319060 = require("./319060.js"),
  Chunk397927 = require("./397927.js"),
  Chunk201275 = require("./201275.js"),
  Chunk342298 = require("./342298.jsx"),
  Chunk657048 = require("./657048.jsx"),
  Chunk240248 = require("./240248.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk802652 = require("./802652.js");
let f = (0, Chunk240248.xI)(Chunk319060.A.ROLE_ICON_UPLOADER_ICON_SIZE);

function b(e) {
  let {
    role: t,
    "aria-label": n = m.intl.string(m.t["MsUY/S"]),
    className: l,
    onClick: a,
    disabled: g = false
  } = e, b = i.useRef(null), h = i.useMemo(() => (0, c.ox)(t, f), [t]), x = null != h ? (0, r.jsx)(u.A, function(e) {
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
    className: p.Kk
  }, h)) : (0, r.jsx)(o.XGR, {
    size: "md",
    color: "currentColor",
    className: p.Kk
  });
  return (0, r.jsx)(o.vN3, {
    ringTarget: b,
    children: (0, r.jsxs)(o.DUT, {
      "aria-label": n,
      className: s()(p.kL, l, {
        [p.r9]: g
      }),
      onClick: g ? true : a,
      "aria-disabled": g,
      children: [(0, r.jsx)("div", {
        ref: b,
        className: p.VH,
        children: x
      }), null != h ? (0, r.jsx)(d.L, {
        className: p.Sl
      }) : null]
    })
  })
}