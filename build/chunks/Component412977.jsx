/** Chunk was on 47841 **/
/** chunk id: 412977, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => g
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk397927 = require("./397927.js"),
  Chunk118001 = require("./118001.js"),
  Chunk147925 = require("./147925.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk690450 = require("./690450.js");

function g(e) {
  let {
    guild: t
  } = e, l = t.verificationLevel, g = i.useMemo(() => (0, c.RU)(l), [l]);
  return (0, r.jsxs)(a.DUT, {
    onClick: () => (0, a.mMO)(async () => {
      let {
        default: e
      } = await n.e("70232").then(n.bind(n, 313003));
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
    className: s()(f.ph, f.vk),
    children: [(0, r.jsxs)("div", {
      className: f.Ly,
      children: [(0, r.jsx)(a.Heading, {
        variant: "text-md/semibold",
        color: "text-strong",
        children: u.intl.string(u.t.DpRdYK)
      }), (0, r.jsx)(a.Text, {
        variant: "text-sm/medium",
        color: "text-default",
        children: u.intl.string(u.t.mA17eD)
      }), (0, r.jsx)("div", {
        className: f.__invalid_pillRow,
        children: (0, r.jsxs)(a.Text, {
          variant: "text-xs/medium",
          color: "interactive-text-default",
          className: f.Lp,
          children: [l === d.PvD.VERY_HIGH ? (0, r.jsx)(a.u6o, {
            size: "custom",
            color: "currentColor",
            width: 16,
            height: 16
          }) : (0, r.jsx)(a.u6c, {
            size: "custom",
            color: "currentColor",
            width: 16,
            height: 16
          }), g]
        })
      })]
    }), (0, r.jsx)(o.A, {
      height: 24,
      width: 24,
      direction: o.A.Directions.RIGHT,
      className: f.OW
    })]
  })
}