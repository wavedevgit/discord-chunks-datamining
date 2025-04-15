/** Chunk was on 13368 **/
n.d(t, {
  Z: () => d
}), n(388685);
var r = n(200651),
  a = n(192379),
  i = n(120356),
  o = n.n(i),
  l = n(393903),
  c = n(448986),
  s = n(353093),
  u = n(979264),
  _ = n(464271);
let d = a.memo(function(e) {
  var t, n, {
      children: i,
      isOverlay: d,
      contextGuildId: f
    } = e,
    p = function(e, t) {
      if (null == e) return {};
      var n, r, a = function(e, t) {
        if (null == e) return {};
        var n, r, a = {},
          i = Object.keys(e);
        for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || (a[n] = e[n]);
        return a
      }(e, t);
      if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        for (r = 0; r < i.length; r++) n = i[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n])
      }
      return a
    }(e, ["children", "isOverlay", "contextGuildId"]);
  let [m, g] = a.useState({
    maskImage: "none"
  }), h = a.useRef(null), v = (0, c.Z)(() => {
    var e, t, n, r;
    let a = null != (n = null == (e = b.current) ? void 0 : e.getBoundingClientRect()) ? n : null,
      i = null != (r = null == (t = h.current) ? void 0 : t.getBoundingClientRect()) ? r : null;
    if (d || null == a || null == i) return void g({
      maskImage: "none"
    });
    let o = i.right - a.right,
      l = i.width - o;
    if (l > i.width) return void g({
      maskImage: "none"
    });
    g({
      maskImage: "linear-gradient(to right, rgba(0, 0, 0, 1) 0, rgba(0, 0, 0, 0) ".concat(l, "px)")
    })
  }), b = (0, l.y)(v), I = (0, s.p0)(p.userId, f);
  return (0, r.jsxs)("div", {
    className: o()(_.container, d && _.isOverlayContainer),
    ref: b,
    children: [(0, r.jsx)("div", {
      className: _.usernameContainer,
      children: i
    }), (0, r.jsx)("div", {
      className: _.chipletParent,
      children: (0, r.jsx)("span", {
        className: o()(_.chipletContainer, !I && d && _.noPadding),
        ref: h,
        style: m,
        children: (0, r.jsx)(u.ZP, (t = function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
              r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
              return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
              var r;
              r = n[t], t in e ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
              }) : e[t] = r
            })
          }
          return e
        }({}, p), n = n = {
          contextGuildId: f,
          className: o()(p.className, d && _.isOverlayTag)
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            n.push.apply(n, r)
          }
          return n
        })(Object(n)).forEach(function(e) {
          Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
        }), t))
      })
    })]
  })
})