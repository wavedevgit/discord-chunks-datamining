/** Chunk was on 87294 **/
r.d(t, {
  Z: () => f
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
let f = l.memo(function(e) {
  var t, r, {
      children: i,
      isOverlay: f,
      contextGuildId: p
    } = e,
    d = function(e, t) {
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
  let [O, y] = l.useState({
    maskImage: "none"
  }), g = l.useRef(null), j = (0, c.Z)(() => {
    var e, t, r, n;
    let l = null != (r = null == (e = m.current) ? void 0 : e.getBoundingClientRect()) ? r : null,
      i = null != (n = null == (t = g.current) ? void 0 : t.getBoundingClientRect()) ? n : null;
    if (f || null == l || null == i) return void y({
      maskImage: "none"
    });
    let a = i.right - l.right,
      o = i.width - a;
    if (o > i.width) return void y({
      maskImage: "none"
    });
    y({
      maskImage: "linear-gradient(to right, rgba(0, 0, 0, 1) 0, rgba(0, 0, 0, 0) ".concat(o, "px)")
    })
  }), m = (0, o.y)(j), P = (0, s.yF)(d.userId, p);
  return (0, n.jsxs)("div", {
    className: a()(b.container, f && b.isOverlayContainer),
    ref: m,
    children: [(0, n.jsx)("div", {
      className: b.usernameContainer,
      children: i
    }), (0, n.jsx)("div", {
      className: b.chipletParent,
      children: (0, n.jsx)("span", {
        className: a()(b.chipletContainer, !P && f && b.noPadding),
        ref: g,
        style: O,
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
        }({}, d), r = r = {
          contextGuildId: p,
          className: a()(d.className, f && b.isOverlayTag),
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