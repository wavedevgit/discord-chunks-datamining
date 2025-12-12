/** Chunk was on 63141 **/
/** chunk id: 711553, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => f
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk518084 = require("./518084.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk74739 = require("./74739.js");
let f = function(e) {
  let t, {
      title: n,
      header: a,
      children: f,
      renderSettings: h,
      onDragStart: p
    } = e,
    g = r.useRef(null);
  return t = null != n ? (0, i.jsxs)(l.ZP.Bar, {
    className: s()(u.header, u.draggableStartArea),
    onMouseDown: p,
    children: [(0, i.jsx)(l.ZP.Content, {
      className: s()(u.headerTitle, u.draggableStartArea),
      dynamicSize: true,
      children: n
    }), (0, i.jsx)(l.ZP.Content, {
      children: (0, i.jsx)(o.yRy, {
        targetElementRef: g,
        position: "right",
        renderPopout: null != h ? h : c.dG4,
        autoInvert: false,
        children: e => {
          var t, n;
          return (0, i.jsx)(l.ZP.Icon, (t = function(e) {
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
            icon: o.ewm,
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
  }) : a, (0, i.jsxs)("div", {
    className: u.sidebar,
    children: [t, (0, i.jsx)("div", {
      className: u.children,
      children: f
    })]
  })
}