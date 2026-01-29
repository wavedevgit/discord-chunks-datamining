/** Chunk was on 32502 **/
/** chunk id: 217356, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => h
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
let h = /^(14256|21552)$/.test(require.j) ? Chunk64700.memo(function(e) {
  var t, n;
  let {
    children: s,
    isOverlay: h,
    contextGuildId: g
  } = e, x = function(e, t) {
    if (null == e) return {};
    var n, i, l, s = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
      for (l = 0, n = Reflect.ownKeys(e); l < n.length; l++) i = n[l], !(t.indexOf(i) >= 0) && Object.prototype.propertyIsEnumerable.call(e, i) && (s[i] = e[i]);
      return s
    }
    if (s = function(e, t) {
        if (null == e) return {};
        var n, i, l = {},
          s = Object.getOwnPropertyNames(e);
        for (i = 0; i < s.length; i++) n = s[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
        return l
      }(e, t), Object.getOwnPropertySymbols)
      for (l = 0, n = Object.getOwnPropertySymbols(e); l < n.length; l++) i = n[l], !(t.indexOf(i) >= 0) && Object.prototype.propertyIsEnumerable.call(e, i) && (s[i] = e[i]);
    return s
  }(e, ["children", "isOverlay", "contextGuildId"]), [p, m] = l.useState({
    maskImage: "none"
  }), A = l.useRef(null), b = (0, o.A)(() => {
    var e, t, n, i;
    let l = null != (e = null == (n = j.current) ? true : n.getBoundingClientRect()) ? e : null,
      s = null != (t = null == (i = A.current) ? true : i.getBoundingClientRect()) ? t : null;
    if (h || null == l || null == s) return void m({
      maskImage: "none"
    });
    let r = s.right - l.right,
      a = s.width - r;
    a > s.width ? m({
      maskImage: "none"
    }) : m({
      maskImage: "linear-gradient(to right, rgba(0, 0, 0, 1) 0, rgba(0, 0, 0, 0) ".concat(a, "px)")
    })
  }), j = (0, a.w)(b), O = (0, c.Wb)(x.userId, g);
  return (0, i.jsxs)("div", {
    className: r()(u.kL, h && u.ur),
    ref: j,
    children: [(0, i.jsx)("div", {
      className: u.QV,
      children: s
    }), (0, i.jsx)("div", {
      className: u.Qz,
      children: (0, i.jsx)("span", {
        className: r()(u.Tm, !O && h && u.pN),
        ref: A,
        style: p,
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
          contextGuildId: g,
          className: r()(x.className, h && u.ZW),
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
}) : null