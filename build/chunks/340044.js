/** Chunk was on 30588 **/
n.d(t, {
  Z: () => d
}), n(388685);
var r = n(255367),
  i = n(73800),
  l = n(120356),
  o = n.n(l),
  a = n(393903),
  s = n(448986),
  c = n(731722),
  u = n(172751),
  E = n(842747);
let d = i.memo(function(e) {
  var t, n, {
      children: l,
      isOverlay: d,
      contextGuildId: _
    } = e,
    I = function(e, t) {
      if (null == e) return {};
      var n, r, i = function(e, t) {
        if (null == e) return {};
        var n, r, i = {},
          l = Object.keys(e);
        for (r = 0; r < l.length; r++) n = l[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
        return i
      }(e, t);
      if (Object.getOwnPropertySymbols) {
        var l = Object.getOwnPropertySymbols(e);
        for (r = 0; r < l.length; r++) n = l[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
      }
      return i
    }(e, ["children", "isOverlay", "contextGuildId"]);
  let [O, T] = i.useState({
    maskImage: "none"
  }), N = i.useRef(null), S = (0, s.Z)(() => {
    var e, t, n, r;
    let i = null != (n = null == (e = R.current) ? void 0 : e.getBoundingClientRect()) ? n : null,
      l = null != (r = null == (t = N.current) ? void 0 : t.getBoundingClientRect()) ? r : null;
    if (d || null == i || null == l) return void T({
      maskImage: "none"
    });
    let o = l.right - i.right,
      a = l.width - o;
    if (a > l.width) return void T({
      maskImage: "none"
    });
    T({
      maskImage: "linear-gradient(to right, rgba(0, 0, 0, 1) 0, rgba(0, 0, 0, 0) ".concat(a, "px)")
    })
  }), R = (0, a.y)(S), A = (0, c.yF)(I.userId, _);
  return (0, r.jsxs)("div", {
    className: o()(E.container, d && E.isOverlayContainer),
    ref: R,
    children: [(0, r.jsx)("div", {
      className: E.usernameContainer,
      children: l
    }), (0, r.jsx)("div", {
      className: E.chipletParent,
      children: (0, r.jsx)("span", {
        className: o()(E.chipletContainer, !A && d && E.noPadding),
        ref: N,
        style: O,
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
        }({}, I), n = n = {
          contextGuildId: _,
          className: o()(I.className, d && E.isOverlayTag),
          disableGuildProfile: !0
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