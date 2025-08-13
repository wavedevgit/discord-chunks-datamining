/** Chunk was on 60458 **/
/** chunk id: 3896, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => g
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk456935 = require("./456935.js"),
  Chunk259580 = require("./259580.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk889400 = require("./889400.js");

function g(e) {
  let {
    guild: t
  } = e, l = t.verificationLevel, g = i.useMemo(() => (0, o.I9)(l), [l]);
  return (0, r.jsxs)(s.P3F, {
    onClick: () => (0, s.ZDy)(async () => {
      let {
        default: e
      } = await n.e("72458").then(n.bind(n, 694278));
      return n => {
        var i, l;
        return (0, r.jsx)(e, (i = function(e) {
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
        }({}, n), l = l = {
          guild: t,
          hideColors: true
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(l)) : (function(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            n.push.apply(n, r)
          }
          return n
        })(Object(l)).forEach(function(e) {
          Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(l, e))
        }), i))
      }
    }),
    className: a()(m.simpleItemWrapper, m.clickable),
    children: [(0, r.jsxs)("div", {
      className: m.itemContent,
      children: [(0, r.jsx)(s.X6q, {
        variant: "text-md/semibold",
        color: "header-primary",
        children: u.intl.string(u.t.DpRdYG)
      }), (0, r.jsx)(s.Text, {
        variant: "text-sm/medium",
        color: "header-secondary",
        children: u.intl.string(u.t.mA17eH)
      }), (0, r.jsx)("div", {
        className: m.__invalid_pillRow,
        children: (0, r.jsxs)(s.Text, {
          variant: "text-xs/medium",
          color: "interactive-normal",
          className: m.valuePill,
          children: [l === d.sFg.VERY_HIGH ? (0, r.jsx)(s.AtH, {
            size: "custom",
            color: "currentColor",
            width: 16,
            height: 16
          }) : (0, r.jsx)(s._XJ, {
            size: "custom",
            color: "currentColor",
            width: 16,
            height: 16
          }), g]
        })
      })]
    }), (0, r.jsx)(c.Z, {
      height: 24,
      width: 24,
      direction: c.Z.Directions.RIGHT,
      className: m.caret
    })]
  })
}