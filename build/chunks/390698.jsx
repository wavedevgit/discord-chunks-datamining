/** Chunk was on 45620 **/
/** chunk id: 390698, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  U: () => c
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk44615 = require("./44615.js");
let c = e => {
  let {
    className: t,
    isPartiallyPurchased: n
  } = e;
  return n ? <i.ua7 tooltipClassName={s.partiallyOwnedDisclaimer} position={"top"} align={"left"} text={o.intl.string(o.t.y1VWkZ)}>{e => {
      var n, l;
      return (0, r.jsxs)("div", (n = function(e) {
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
        className: a()(s.partialOwnStateContainer, t)
      }, e), l = l = {
        children: [(0, r.jsx)("span", {
          className: s.iconWrapper,
          children: (0, r.jsx)(i.d3s, {
            size: "md",
            color: "currentColor",
            className: s.infoIcon
          })
        }), (0, r.jsx)(i.Text, {
          variant: "text-md/semibold",
          children: o.intl.string(o.t.BEjTio)
        })]
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(l)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          n.push.apply(n, r)
        }
        return n
      })(Object(l)).forEach(function(e) {
        Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(l, e))
      }), n))
    }}</i.ua7> : <i.Text variant={"text-md/semibold"} className={t}>{o.intl.string(o.t["6cfuDg"])}</i.Text>
}