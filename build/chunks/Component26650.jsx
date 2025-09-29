/** Chunk was on web.js **/
/** chunk id: 26650, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => d
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk481060 = require("./481060.js"),
  Chunk377171 = require("./377171.js"),
  Chunk539271 = require("./539271.js");

function l(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function c(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      l(e, t, n[t])
    })
  }
  return e
}

function u(e, t) {
  let {
    isInventory: n,
    style: i,
    children: l
  } = e;
  return (0, r.jsxs)("div", {
    ref: t,
    className: s.desktopTooltip,
    style: c({
      marginTop: 8 * !!n
    }, i),
    children: [(0, r.jsx)(a.d3s, {
      size: "custom",
      className: s.infoIcon,
      height: n ? 16 : 12,
      width: n ? 16 : 12,
      color: n ? o.Z.TEXT_MUTED : o.Z.WHITE
    }), (0, r.jsx)(a.Text, {
      color: n ? "text-muted" : "always-white",
      variant: n ? "text-xs/normal" : "text-xxs/normal",
      children: l
    })]
  })
}
let d = Chunk647438.forwardRef(u)