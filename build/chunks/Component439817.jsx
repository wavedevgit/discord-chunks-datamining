/** Chunk was on 84018 **/
/** chunk id: 439817, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => p
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  l = require.n(Chunk503698),
  Chunk397927 = require("./397927.js"),
  Chunk855790 = require("./855790.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk694869 = require("./694869.js");
let p = function(e) {
  let t, {
      title: n,
      header: s,
      children: p,
      renderSettings: h,
      onDragStart: f
    } = e,
    g = r.useRef(null);
  return t = null != n ? (0, i.jsxs)(a.Ay.Bar, {
    className: l()(u.wx, u.bl),
    onMouseDown: f,
    children: [(0, i.jsx)(a.Ay.Content, {
      className: l()(u.qd, u.bl),
      dynamicSize: true,
      children: n
    }), (0, i.jsx)(a.Ay.Content, {
      children: (0, i.jsx)(o.YNO, {
        targetElementRef: g,
        position: "right",
        renderPopout: null != h ? h : c.tEg,
        autoInvert: false,
        children: e => {
          var t, n;
          return (0, i.jsx)(a.Ay.Icon, (t = function(e) {
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
          }({}, e), n = n = {
            icon: o.Zes,
            label: d.intl.string(d.t["3D5yo/"]),
            ref: g
          }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var i = Object.getOwnPropertySymbols(e);
              n.push.apply(n, i)
            }
            return n
          })(Object(n)).forEach(function(e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
          }), t))
        }
      })
    })]
  }) : s, (0, i.jsxs)("div", {
    className: u.pz,
    children: [t, (0, i.jsx)("div", {
      className: u.Y_,
      children: p
    })]
  })
}