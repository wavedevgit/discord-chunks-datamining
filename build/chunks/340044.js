/** Chunk was on 93239 **/
r.d(t, {
  Z: () => _
}), r(388685);
var n = r(255367),
  i = r(73800),
  s = r(120356),
  a = r.n(s),
  c = r(393903),
  l = r(448986),
  o = r(731722),
  u = r(172751),
  d = r(842747);
let _ = i.memo(function(e) {
  var t, r, {
      children: s,
      isOverlay: _,
      contextGuildId: p
    } = e,
    h = function(e, t) {
      if (null == e) return {};
      var r, n, i = function(e, t) {
        if (null == e) return {};
        var r, n, i = {},
          s = Object.keys(e);
        for (n = 0; n < s.length; n++) r = s[n], t.indexOf(r) >= 0 || (i[r] = e[r]);
        return i
      }(e, t);
      if (Object.getOwnPropertySymbols) {
        var s = Object.getOwnPropertySymbols(e);
        for (n = 0; n < s.length; n++) r = s[n], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r])
      }
      return i
    }(e, ["children", "isOverlay", "contextGuildId"]);
  let [y, f] = i.useState({
    maskImage: "none"
  }), S = i.useRef(null), b = (0, l.Z)(() => {
    var e, t, r, n;
    let i = null != (r = null == (e = E.current) ? void 0 : e.getBoundingClientRect()) ? r : null,
      s = null != (n = null == (t = S.current) ? void 0 : t.getBoundingClientRect()) ? n : null;
    if (_ || null == i || null == s) return void f({
      maskImage: "none"
    });
    let a = s.right - i.right,
      c = s.width - a;
    if (c > s.width) return void f({
      maskImage: "none"
    });
    f({
      maskImage: "linear-gradient(to right, rgba(0, 0, 0, 1) 0, rgba(0, 0, 0, 0) ".concat(c, "px)")
    })
  }), E = (0, c.y)(b), g = (0, o.yF)(h.userId, p);
  return (0, n.jsxs)("div", {
    className: a()(d.container, _ && d.isOverlayContainer),
    ref: E,
    children: [(0, n.jsx)("div", {
      className: d.usernameContainer,
      children: s
    }), (0, n.jsx)("div", {
      className: d.chipletParent,
      children: (0, n.jsx)("span", {
        className: a()(d.chipletContainer, !g && _ && d.noPadding),
        ref: S,
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
        }({}, h), r = r = {
          contextGuildId: p,
          className: a()(h.className, _ && d.isOverlayTag),
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