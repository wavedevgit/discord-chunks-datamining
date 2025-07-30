/** Chunk was on 50874 **/
r.d(t, {
  Z: () => _
}), r(388685);
var n = r(255367),
  i = r(73800),
  a = r(120356),
  s = r.n(a),
  l = r(393903),
  c = r(448986),
  o = r(731722),
  u = r(172751),
  d = r(842747);
let _ = i.memo(function(e) {
  var t, r, {
      children: a,
      isOverlay: _,
      contextGuildId: h
    } = e,
    f = function(e, t) {
      if (null == e) return {};
      var r, n, i = function(e, t) {
        if (null == e) return {};
        var r, n, i = {},
          a = Object.keys(e);
        for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) >= 0 || (i[r] = e[r]);
        return i
      }(e, t);
      if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (n = 0; n < a.length; n++) r = a[n], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r])
      }
      return i
    }(e, ["children", "isOverlay", "contextGuildId"]);
  let [p, b] = i.useState({
    maskImage: "none"
  }), y = i.useRef(null), g = (0, c.Z)(() => {
    var e, t, r, n;
    let i = null != (r = null == (e = O.current) ? void 0 : e.getBoundingClientRect()) ? r : null,
      a = null != (n = null == (t = y.current) ? void 0 : t.getBoundingClientRect()) ? n : null;
    if (_ || null == i || null == a) return void b({
      maskImage: "none"
    });
    let s = a.right - i.right,
      l = a.width - s;
    if (l > a.width) return void b({
      maskImage: "none"
    });
    b({
      maskImage: "linear-gradient(to right, rgba(0, 0, 0, 1) 0, rgba(0, 0, 0, 0) ".concat(l, "px)")
    })
  }), O = (0, l.y)(g), E = (0, o.yF)(f.userId, h);
  return (0, n.jsxs)("div", {
    className: s()(d.container, _ && d.isOverlayContainer),
    ref: O,
    children: [(0, n.jsx)("div", {
      className: d.usernameContainer,
      children: a
    }), (0, n.jsx)("div", {
      className: d.chipletParent,
      children: (0, n.jsx)("span", {
        className: s()(d.chipletContainer, !E && _ && d.noPadding),
        ref: y,
        style: p,
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
        }({}, f), r = r = {
          contextGuildId: h,
          className: s()(f.className, _ && d.isOverlayTag),
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