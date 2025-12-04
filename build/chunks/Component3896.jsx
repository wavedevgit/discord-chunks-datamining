/** Chunk was on 384 **/
/** chunk id: 3896, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => m
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk456935 = require("./456935.js"),
  Chunk259580 = require("./259580.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk824804 = require("./824804.js");

function m(e) {
  let {
    guild: t
  } = e, l = t.verificationLevel, m = i.useMemo(() => (0, o.I9)(l), [l]);
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
    className: a()(g.simpleItemWrapper, g.clickable),
    children: [(0, r.jsxs)("div", {
      className: g.itemContent,
      children: [(0, r.jsx)(s.Heading, {
        variant: "text-md/semibold",
        color: "header-primary",
        children: u.intl.string(u.t.DpRdYK)
      }), (0, r.jsx)(s.Text, {
        variant: "text-sm/medium",
        color: "text-default",
        children: u.intl.string(u.t.mA17eD)
      }), (0, r.jsx)("div", {
        className: g.__invalid_pillRow,
        children: (0, r.jsxs)(s.Text, {
          variant: "text-xs/medium",
          color: "interactive-normal",
          className: g.valuePill,
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
          }), m]
        })
      })]
    }), (0, r.jsx)(c.Z, {
      height: 24,
      width: 24,
      direction: c.Z.Directions.RIGHT,
      className: g.caret
    })]
  })
}