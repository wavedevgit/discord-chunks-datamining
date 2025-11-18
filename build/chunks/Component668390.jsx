/** Chunk was on 86915 **/
/** chunk id: 668390, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => f
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk28664 = require("./28664.jsx"),
  Chunk780384 = require("./780384.js"),
  Chunk481060 = require("./481060.js"),
  Chunk239091 = require("./239091.js"),
  Chunk741247 = require("./741247.jsx"),
  Chunk75464 = require("./75464.jsx"),
  Chunk884902 = require("./884902.js"),
  Chunk350333 = require("./350333.js");

function m(e) {
  let {
    role: t,
    guild: r
  } = e, [a, o] = l.useState(false);
  return (0, u.e)(r, t) ? (0, i.jsx)(c.P3F, {
    onClick: e => {
      o(true), (0, d.jW)(e, async () => {
        let {
          default: e
        } = await Promise.resolve().then(n.bind(n, 741247));
        return n => {
          var l, s;
          return (0, i.jsx)(e, (l = function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = null != arguments[t] ? arguments[t] : {},
                i = Object.keys(n);
              "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
              }))), i.forEach(function(t) {
                var i;
                i = n[t], t in e ? Object.defineProperty(e, t, {
                  value: i,
                  enumerable: true,
                  configurable: true,
                  writable: true
                }) : e[t] = i
              })
            }
            return e
          }({}, n), s = s = {
            role: t,
            guild: r
          }, Object.getOwnPropertyDescriptors ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(s)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var i = Object.getOwnPropertySymbols(e);
              n.push.apply(n, i)
            }
            return n
          })(Object(s)).forEach(function(e) {
            Object.defineProperty(l, e, Object.getOwnPropertyDescriptor(s, e))
          }), l))
        }
      }, {
        onClose: () => o(false)
      })
    },
    className: s()(p.roleOverflow, {
      [p.open]: a
    }),
    children: (0, i.jsx)(c.xhG, {
      size: "custom",
      color: "currentColor",
      width: 20,
      height: 20
    })
  }) : null
}

function f(e) {
  let {
    color: t,
    id: l,
    role: r,
    guild: s,
    children: d,
    isDragging: u,
    selectedItem: f,
    onItemSelect: b,
    itemType: x,
    locked: j,
    lockTooltip: v,
    showContextMenu: y,
    theme: C,
    roleStyle: S,
    onContextMenu: N,
    "aria-label": O
  } = e, Z = (0, g._f)(s.id, r, null == r ? true : r.colorStrings);
  return u ? (0, i.jsx)("div", {
    className: p.dragged
  }) : (0, i.jsx)(c.njP.Item, {
    className: p.role,
    id: l,
    selectedItem: f,
    onItemSelect: b,
    itemType: x,
    "aria-label": null != v ? "".concat(O, ", ").concat(v) : O,
    onContextMenu: N,
    children: (0, i.jsxs)("div", {
      className: p.roleContent,
      children: ["dot" === S ? (0, i.jsx)(c.FhE, {
        color: null != t ? t : true,
        colors: Z,
        className: p.roleDot,
        background: false,
        tooltip: false
      }) : (0, i.jsx)(c.xko, {
        color: null != t ? t : null,
        colors: Z,
        className: p.roleCircle
      }), function() {
        if (!j) return null;
        let e = (0, o.wj)(C) ? n(27377) : n(514811);
        return (0, i.jsx)(a.u, {
          text: v,
          children: (0, i.jsx)(h.Z, {
            className: p.lock,
            src: e
          })
        })
      }(), (0, i.jsx)("div", {
        className: p.roleInner,
        children: d
      }), y && null != r ? (0, i.jsx)(m, {
        guild: s,
        role: r
      }) : null]
    })
  })
}