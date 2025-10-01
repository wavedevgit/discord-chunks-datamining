/** Chunk was on 86915 **/
/** chunk id: 668390, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => f
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk780384 = require("./780384.js"),
  Chunk481060 = require("./481060.js"),
  Chunk239091 = require("./239091.js"),
  Chunk741247 = require("./741247.jsx"),
  Chunk75464 = require("./75464.jsx"),
  Chunk884902 = require("./884902.js"),
  Chunk350333 = require("./350333.js");

function p(e) {
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
}

function m(e) {
  let {
    role: t,
    guild: r
  } = e, [a, u] = l.useState(false);
  return (0, d.e)(r, t) ? (0, i.jsx)(o.P3F, {
    onClick: e => {
      u(true), (0, c.jW)(e, async () => {
        let {
          default: e
        } = await Promise.resolve().then(n.bind(n, 741247));
        return n => {
          var l, s;
          return (0, i.jsx)(e, (l = p({}, n), s = s = {
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
        onClose: () => u(false)
      })
    },
    className: s()(g.roleOverflow, {
      [g.open]: a
    }),
    children: (0, i.jsx)(o.xhG, {
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
    children: c,
    isDragging: d,
    selectedItem: f,
    onItemSelect: b,
    itemType: j,
    locked: x,
    lockTooltip: v,
    showContextMenu: y,
    theme: C,
    roleStyle: N,
    onContextMenu: S,
    "aria-label": E
  } = e, O = (0, h._f)(s.id, r, null == r ? true : r.colorStrings);
  return d ? (0, i.jsx)("div", {
    className: g.dragged
  }) : (0, i.jsx)(o.njP.Item, {
    className: g.role,
    id: l,
    selectedItem: f,
    onItemSelect: b,
    itemType: j,
    "aria-label": null != v ? "".concat(E, ", ").concat(v) : E,
    onContextMenu: S,
    children: (0, i.jsxs)("div", {
      className: g.roleContent,
      children: ["dot" === N ? (0, i.jsx)(o.FhE, {
        color: null != t ? t : true,
        colors: O,
        className: g.roleDot,
        background: false,
        tooltip: false
      }) : (0, i.jsx)(o.xko, {
        color: null != t ? t : null,
        colors: O,
        className: g.roleCircle
      }), function() {
        if (!x) return null;
        let e = (0, a.wj)(C) ? n(27377) : n(514811);
        return (0, i.jsx)(o.ua7, {
          text: v,
          color: o.ua7.Colors.RED,
          children: t => (0, i.jsx)(u.Z, p({
            className: g.lock,
            src: e
          }, t))
        })
      }(), (0, i.jsx)("div", {
        className: g.roleInner,
        children: c
      }), y && null != r ? (0, i.jsx)(m, {
        guild: s,
        role: r
      }) : null]
    })
  })
}