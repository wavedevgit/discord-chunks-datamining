/** Chunk was on 24358 **/
r.d(t, {
  Z: () => p
}), r(388685);
var n = r(255367),
  l = r(73800),
  i = r(120356),
  a = r.n(i),
  o = r(393903),
  c = r(448986),
  s = r(731722),
  u = r(172751),
  b = r(842747);
let p = l.memo(function(e) {
  var t, r, {
      children: i,
      isOverlay: p,
      contextGuildId: f
    } = e,
    O = function(e, t) {
      if (null == e) return {};
      var r, n, l = function(e, t) {
        if (null == e) return {};
        var r, n, l = {},
          i = Object.keys(e);
        for (n = 0; n < i.length; n++) r = i[n], t.indexOf(r) >= 0 || (l[r] = e[r]);
        return l
      }(e, t);
      if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        for (n = 0; n < i.length; n++) r = i[n], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r])
      }
      return l
    }(e, ["children", "isOverlay", "contextGuildId"]);
  let [y, d] = l.useState({
    maskImage: "none"
  }), j = l.useRef(null), g = (0, c.Z)(() => {
    var e, t, r, n;
    let l = null != (r = null == (e = m.current) ? void 0 : e.getBoundingClientRect()) ? r : null,
      i = null != (n = null == (t = j.current) ? void 0 : t.getBoundingClientRect()) ? n : null;
    if (p || null == l || null == i) return void d({
      maskImage: "none"
    });
    let a = i.right - l.right,
      o = i.width - a;
    if (o > i.width) return void d({
      maskImage: "none"
    });
    d({
      maskImage: "linear-gradient(to right, rgba(0, 0, 0, 1) 0, rgba(0, 0, 0, 0) ".concat(o, "px)")
    })
  }), m = (0, o.y)(g), P = (0, s.yF)(O.userId, f);
  return (0, n.jsxs)("div", {
    className: a()(b.container, p && b.isOverlayContainer),
    ref: m,
    children: [(0, n.jsx)("div", {
      className: b.usernameContainer,
      children: i
    }), (0, n.jsx)("div", {
      className: b.chipletParent,
      children: (0, n.jsx)("span", {
        className: a()(b.chipletContainer, !P && p && b.noPadding),
        ref: j,
        style: y,
        children: (0, n.jsx)(u.ZP, (t = function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = null != arguments[t] ? arguments[t] : {},
              n = Object.keys(r);
            "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
              return Object.getOwnPropertyDescriptor(r, e).enumerable
            }))), n.forEach(function(t) {
              var n;
              n = r[t], t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
              }) : e[t] = n
            })
          }
          return e
        }({}, O), r = r = {
          contextGuildId: f,
          className: a()(O.className, p && b.isOverlayTag),
          disableGuildProfile: !0
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : (function(e, t) {
          var r = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e);
            r.push.apply(r, n)
          }
          return r
        })(Object(r)).forEach(function(e) {
          Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
        }), t))
      })
    })]
  })
})