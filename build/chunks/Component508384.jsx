/** Chunk was on 78888 **/
/** chunk id: 508384, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => p
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk990078 = require("./990078.jsx"),
  Chunk582754 = require("./582754.js"),
  Chunk397927 = require("./397927.js"),
  Chunk442433 = require("./442433.js"),
  Chunk665013 = require("./665013.jsx"),
  Chunk246199 = require("./246199.jsx"),
  Chunk967144 = require("./967144.js"),
  Chunk881762 = require("./881762.js");

function f(e) {
  let {
    role: t,
    guild: r
  } = e, [a, o] = i.useState(false);
  return (0, u.x)(r, t) ? (0, l.jsx)(c.DUT, {
    onClick: e => {
      o(true), (0, d.L3)(e, async () => {
        let {
          default: e
        } = await Promise.resolve().then(n.bind(n, 665013));
        return n => {
          var i, s;
          return (0, l.jsx)(e, (i = function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = null != arguments[t] ? arguments[t] : {},
                l = Object.keys(n);
              "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
              }))), l.forEach(function(t) {
                var l;
                l = n[t], t in e ? Object.defineProperty(e, t, {
                  value: l,
                  enumerable: true,
                  configurable: true,
                  writable: true
                }) : e[t] = l
              })
            }
            return e
          }({}, n), s = s = {
            role: t,
            guild: r
          }, Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(s)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var l = Object.getOwnPropertySymbols(e);
              n.push.apply(n, l)
            }
            return n
          })(Object(s)).forEach(function(e) {
            Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(s, e))
          }), i))
        }
      }, {
        onClose: () => o(false)
      })
    },
    className: s()(m.X2, {
      [m.ho]: a
    }),
    children: (0, l.jsx)(c.jNK, {
      size: "custom",
      color: "currentColor",
      width: 20,
      height: 20
    })
  }) : null
}

function p(e) {
  let {
    color: t,
    id: i,
    role: r,
    guild: s,
    children: d,
    isDragging: u,
    selectedItem: p,
    onItemSelect: b,
    itemType: x,
    locked: j,
    lockTooltip: A,
    showContextMenu: y,
    theme: v,
    roleStyle: O,
    onContextMenu: C,
    "aria-label": N
  } = e, E = (0, g.X_)(s.id, r, null == r ? true : r.colorStrings);
  return u ? (0, l.jsx)("div", {
    className: m.rz
  }) : (0, l.jsx)(c.VQ0.Item, {
    className: m.JC,
    id: i,
    selectedItem: p,
    onItemSelect: b,
    itemType: x,
    "aria-label": null != A ? "".concat(N, ", ").concat(A) : N,
    onContextMenu: C,
    children: (0, l.jsxs)("div", {
      className: m.yl,
      children: ["dot" === O ? (0, l.jsx)(c.WYI, {
        color: null != t ? t : true,
        colors: E,
        className: m.m4,
        background: false,
        tooltip: false
      }) : (0, l.jsx)(c.RYH, {
        color: null != t ? t : null,
        colors: E,
        className: m.Ni
      }), function() {
        if (!j) return null;
        let e = (0, o.Mw)(v) ? n(454554) : n(470474);
        return (0, l.jsx)(a.m, {
          text: A,
          children: (0, l.jsx)(h.A, {
            className: m.s2,
            src: e
          })
        })
      }(), (0, l.jsx)("div", {
        className: m.dD,
        children: d
      }), y && null != r ? (0, l.jsx)(f, {
        guild: s,
        role: r
      }) : null]
    })
  })
}