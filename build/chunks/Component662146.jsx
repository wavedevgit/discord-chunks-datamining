/** Chunk was on 64271 **/
/** chunk id: 662146, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => u
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk657955 = require("./657955.js");

function c(e) {
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
}

function u(e) {
  let {
    children: t,
    text: n,
    disableWrapper: l = false,
    disabled: u = false,
    hideOnClick: d = true,
    shouldShow: f,
    forceOpen: h,
    selected: p = false
  } = e;
  return (0, r.jsx)(a.aML, {
    "data-migration-pending": true,
    shouldShow: f,
    forceOpen: h,
    spacing: 12,
    hideOnClick: d,
    text: u ? null : n,
    position: "right",
    "aria-label": false,
    tooltipClassName: s.listItemTooltip,
    children: e => {
      var n, a;
      return l ? i.cloneElement(i.Children.only(t), c({}, e)) : (0, r.jsx)("div", (n = c({
        className: o()(s.listItemWrapper, {
          [s.selected]: p
        })
      }, e), a = a = {
        children: t
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(a)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          n.push.apply(n, r)
        }
        return n
      })(Object(a)).forEach(function(e) {
        Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(a, e))
      }), n))
    }
  })
}