/** Chunk was on 38660 **/
/** chunk id: 217356, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => g
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  r = require.n(Chunk503698),
  Chunk770178 = require("./770178.js"),
  Chunk765548 = require("./765548.js"),
  Chunk685073 = require("./685073.js"),
  Chunk534400 = require("./534400.jsx"),
  Chunk277150 = require("./277150.js");
let g = Chunk64700.memo(function(e) {
  var t, n;
  let {
    children: l,
    isOverlay: g,
    contextGuildId: h
  } = e, x = function(e, t) {
    if (null == e) return {};
    var n, i, s, l = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
      for (s = 0, n = Reflect.ownKeys(e); s < n.length; s++) i = n[s], !(t.indexOf(i) >= 0) && Object.prototype.propertyIsEnumerable.call(e, i) && (l[i] = e[i]);
      return l
    }
    if (l = function(e, t) {
        if (null == e) return {};
        var n, i, s = {},
          l = Object.getOwnPropertyNames(e);
        for (i = 0; i < l.length; i++) n = l[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (s[n] = e[n]);
        return s
      }(e, t), Object.getOwnPropertySymbols)
      for (s = 0, n = Object.getOwnPropertySymbols(e); s < n.length; s++) i = n[s], !(t.indexOf(i) >= 0) && Object.prototype.propertyIsEnumerable.call(e, i) && (l[i] = e[i]);
    return l
  }(e, ["children", "isOverlay", "contextGuildId"]), [A, p] = s.useState({
    maskImage: "none"
  }), m = s.useRef(null), j = (0, o.A)(() => {
    var e, t, n, i;
    let s = null != (e = null == (n = O.current) ? true : n.getBoundingClientRect()) ? e : null,
      l = null != (t = null == (i = m.current) ? true : i.getBoundingClientRect()) ? t : null;
    if (g || null == s || null == l) return void p({
      maskImage: "none"
    });
    let r = l.right - s.right,
      a = l.width - r;
    a > l.width ? p({
      maskImage: "none"
    }) : p({
      maskImage: "linear-gradient(to right, rgba(0, 0, 0, 1) 0, rgba(0, 0, 0, 0) ".concat(a, "px)")
    })
  }), O = (0, a.w)(j), b = (0, c.Wb)(x.userId, h);
  return (0, i.jsxs)("div", {
    className: r()(u.kL, g && u.ur),
    ref: O,
    children: [(0, i.jsx)("div", {
      className: u.QV,
      children: l
    }), (0, i.jsx)("div", {
      className: u.Qz,
      children: (0, i.jsx)("span", {
        className: r()(u.Tm, !b && g && u.pN),
        ref: m,
        style: A,
        children: (0, i.jsx)(d.Ay, (t = function(e) {
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
        }({}, x), n = n = {
          contextGuildId: h,
          className: r()(x.className, g && u.ZW),
          disableGuildProfile: true
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
      })
    })]
  })
})