/** Chunk was on 88448 **/
r.d(t, {
  Z: () => f
}), r(388685);
var n = r(255367),
  l = r(73800),
  a = r(120356),
  i = r.n(a),
  c = r(393903),
  o = r(448986),
  s = r(731722),
  u = r(172751),
  b = r(842747);
let f = l.memo(function(e) {
  var t, r, {
      children: a,
      isOverlay: f,
      contextGuildId: p
    } = e,
    d = function(e, t) {
      if (null == e) return {};
      var r, n, l = function(e, t) {
        if (null == e) return {};
        var r, n, l = {},
          a = Object.keys(e);
        for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) >= 0 || (l[r] = e[r]);
        return l
      }(e, t);
      if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (n = 0; n < a.length; n++) r = a[n], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r])
      }
      return l
    }(e, ["children", "isOverlay", "contextGuildId"]);
  let [O, y] = l.useState({
    maskImage: "none"
  }), g = l.useRef(null), m = (0, o.Z)(() => {
    var e, t, r, n;
    let l = null != (r = null == (e = j.current) ? void 0 : e.getBoundingClientRect()) ? r : null,
      a = null != (n = null == (t = g.current) ? void 0 : t.getBoundingClientRect()) ? n : null;
    if (f || null == l || null == a) return void y({
      maskImage: "none"
    });
    let i = a.right - l.right,
      c = a.width - i;
    if (c > a.width) return void y({
      maskImage: "none"
    });
    y({
      maskImage: "linear-gradient(to right, rgba(0, 0, 0, 1) 0, rgba(0, 0, 0, 0) ".concat(c, "px)")
    })
  }), j = (0, c.y)(m), P = (0, s.yF)(d.userId, p);
  return (0, n.jsxs)("div", {
    className: i()(b.container, f && b.isOverlayContainer),
    ref: j,
    children: [(0, n.jsx)("div", {
      className: b.usernameContainer,
      children: a
    }), (0, n.jsx)("div", {
      className: b.chipletParent,
      children: (0, n.jsx)("span", {
        className: i()(b.chipletContainer, !P && f && b.noPadding),
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
          className: i()(d.className, f && b.isOverlayTag),
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