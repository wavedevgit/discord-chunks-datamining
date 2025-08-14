/** Chunk was on 86031 **/
/** chunk id: 390698, original params: e,t,r (module,exports,require) **/
"use strict";
require.d(exports, {
  U: () => c
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk863577 = require("./863577.js");
let c = e => {
  let {
    className: t,
    isPartiallyPurchased: r
  } = e;
  return r ? (0, n.jsx)(l.ua7, {
    tooltipClassName: s.partiallyOwnedDisclaimer,
    position: "top",
    align: "left",
    text: o.intl.string(o.t.y1VWkZ),
    children: e => {
      var r, a;
      return (0, n.jsxs)("div", (r = function(e) {
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
      }({
        className: i()(s.partialOwnStateContainer, t)
      }, e), a = a = {
        children: [(0, n.jsx)("span", {
          className: s.iconWrapper,
          children: (0, n.jsx)(l.d3s, {
            size: "md",
            color: "currentColor",
            className: s.infoIcon
          })
        }), (0, n.jsx)(l.Text, {
          variant: "text-md/semibold",
          children: o.intl.string(o.t.BEjTio)
        })]
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(a)) : (function(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          r.push.apply(r, n)
        }
        return r
      })(Object(a)).forEach(function(e) {
        Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(a, e))
      }), r))
    }
  }) : (0, n.jsx)(l.Text, {
    variant: "text-md/semibold",
    className: t,
    children: o.intl.string(o.t["6cfuDg"])
  })
}