/** Chunk was on 63141 **/
/** chunk id: 711553, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => h
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk518084 = require("./518084.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk71264 = require("./71264.js");
let h = function(e) {
  let t, {
      title: n,
      header: o,
      children: h,
      renderSettings: p,
      onDragStart: f
    } = e,
    g = r.useRef(null);
  return t = null != n ? (0, i.jsxs)(a.ZP.Bar, {
    className: l()(u.header, u.draggableStartArea),
    onMouseDown: f,
    children: [(0, i.jsx)(a.ZP.Content, {
      className: l()(u.headerTitle, u.draggableStartArea),
      dynamicSize: true,
      children: n
    }), (0, i.jsx)(a.ZP.Content, {
      children: (0, i.jsx)(s.yRy, {
        targetElementRef: g,
        position: "right",
        renderPopout: null != p ? p : c.dG4,
        autoInvert: false,
        children: e => {
          var t, n;
          return (0, i.jsx)(a.ZP.Icon, (t = function(e) {
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
            icon: s.ewm,
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
  }) : o, (0, i.jsxs)("div", {
    className: u.sidebar,
    children: [t, (0, i.jsx)("div", {
      className: u.children,
      children: h
    })]
  })
}