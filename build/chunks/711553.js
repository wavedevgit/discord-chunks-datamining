/** Chunk was on 45585 (b90461f187d1c1d2.js) **/
n.d(t, {
  Z: () => u
});
var i = n(200651);
n(192379);
var r = n(120356),
  s = n.n(r),
  o = n(481060),
  l = n(518084),
  a = n(981631),
  c = n(388032),
  d = n(969855);
let u = function(e) {
  let t;
  let {
    title: n,
    header: r,
    children: u,
    renderSettings: h,
    onDragStart: p
  } = e;
  return t = null != n ? (0, i.jsxs)(l.ZP.Bar, {
    className: s()(d.header, d.draggableStartArea),
    onMouseDown: p,
    children: [(0, i.jsx)(l.ZP.Content, {
      className: s()(d.headerTitle, d.draggableStartArea),
      dynamicSize: !0,
      children: n
    }), (0, i.jsx)(l.ZP.Content, {
      children: (0, i.jsx)(o.yRy, {
        position: "right",
        renderPopout: null != h ? h : a.dG4,
        autoInvert: !1,
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
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
                }) : e[t] = i
              })
            }
            return e
          }({}, e), n = n = {
            icon: o.ewm,
            label: c.NW.string(c.t["3D5yo6"])
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
  }) : r, (0, i.jsxs)("div", {
    className: d.sidebar,
    children: [t, (0, i.jsx)("div", {
      className: d.children,
      children: u
    })]
  })
}