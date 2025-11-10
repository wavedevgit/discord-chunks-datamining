/** Chunk was on 384 **/
/** chunk id: 795145, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => c
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk692547 = require("./692547.js"),
  Chunk481060 = require("./481060.js"),
  Chunk355011 = require("./355011.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk53774 = require("./53774.js");
let c = e => {
  let {
    title: t,
    subtext: n = s.intl.string(s.t.jHpxwo),
    localizedNumber: c,
    isTrendingUp: d,
    isTrendingDown: u,
    tooltipText: g
  } = e, m = null != g ? (0, r.jsx)(l.aML, {
    "data-migration-pending": true,
    text: g,
    position: "top",
    "aria-label": "string" == typeof g ? g : t,
    children: e => {
      var t, n;
      return (0, r.jsx)(l.d3s, (t = function(e) {
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
        size: "xs",
        color: "currentColor"
      }, e), n = n = {
        className: o.infoIcon
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          n.push.apply(n, r)
        }
        return n
      })(Object(n)).forEach(function(e) {
        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
      }), t))
    }
  }) : null;
  return (0, r.jsxs)("div", {
    className: o.analyticsCard,
    children: [(0, r.jsxs)(l.Text, {
      variant: "text-md/medium",
      className: o.analyticsCardTitle,
      children: [t, m]
    }), (0, r.jsx)("div", {
      className: o.analyticsCardContent,
      children: (0, r.jsx)(l.Text, {
        className: null != c ? o.analyticsCardNumber : o.analyticsCardNumberNotAvailable,
        variant: "text-lg/semibold",
        children: null != c ? c : s.intl.string(s.t.jHpxwo)
      })
    }), (0, r.jsxs)("div", {
      className: o.analyticsCardArrowSubText,
      children: [d ? (0, r.jsx)(a.Z, {
        className: o.trendingArrow,
        color: i.Z.unsafe_rawColors.GREEN_360.css,
        "aria-label": s.intl.string(s.t["8mcccd"]),
        width: 14,
        height: 12
      }) : null, u ? (0, r.jsx)(a.Z, {
        className: o.trendingArrowIconDown,
        color: i.Z.unsafe_rawColors.RED_400.css,
        "aria-label": s.intl.string(s.t.NLl6Q3),
        width: 14,
        height: 12
      }) : null, (0, r.jsx)(l.Text, {
        variant: "text-xs/normal",
        children: n
      })]
    })]
  })
}