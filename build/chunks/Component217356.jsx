/** Chunk was on 42402 **/
/** chunk id: 217356, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => p
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk770178 = require("./770178.js"),
  Chunk765548 = require("./765548.js"),
  Chunk685073 = require("./685073.js"),
  Chunk534400 = require("./534400.jsx"),
  Chunk277150 = require("./277150.js");
let p = Chunk64700.memo(function(e) {
  var t, n;
  let {
    children: i,
    isOverlay: p,
    contextGuildId: h
  } = e, g = function(e, t) {
    if (null == e) return {};
    var n, r, l, i = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
      for (l = 0, n = Reflect.ownKeys(e); l < n.length; l++) r = n[l], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
      return i
    }
    if (i = function(e, t) {
        if (null == e) return {};
        var n, r, l = {},
          i = Object.getOwnPropertyNames(e);
        for (r = 0; r < i.length; r++) n = i[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
        return l
      }(e, t), Object.getOwnPropertySymbols)
      for (l = 0, n = Object.getOwnPropertySymbols(e); l < n.length; l++) r = n[l], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
    return i
  }(e, ["children", "isOverlay", "contextGuildId"]), [f, m] = l.useState({
    maskImage: "none"
  }), b = l.useRef(null), A = (0, o.A)(() => {
    var e, t, n, r;
    let l = null != (e = null == (n = y.current) ? true : n.getBoundingClientRect()) ? e : null,
      i = null != (t = null == (r = b.current) ? true : r.getBoundingClientRect()) ? t : null;
    if (p || null == l || null == i) return void m({
      maskImage: "none"
    });
    let s = i.right - l.right,
      a = i.width - s;
    a > i.width ? m({
      maskImage: "none"
    }) : m({
      maskImage: "linear-gradient(to right, rgba(0, 0, 0, 1) 0, rgba(0, 0, 0, 0) ".concat(a, "px)")
    })
  }), y = (0, a.w)(A), O = (0, c.Wb)(g.userId, h);
  return (0, r.jsxs)("div", {
    className: s()(d.kL, p && d.ur),
    ref: y,
    children: [(0, r.jsx)("div", {
      className: d.QV,
      children: i
    }), (0, r.jsx)("div", {
      className: d.Qz,
      children: (0, r.jsx)("span", {
        className: s()(d.Tm, !O && p && d.pN),
        ref: b,
        style: f,
        children: (0, r.jsx)(u.Ay, (t = function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
              r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
              return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
              var r;
              r = n[t], t in e ? Object.defineProperty(e, t, {
                value: r,
                enumerable: true,
                configurable: true,
                writable: true
              }) : e[t] = r
            })
          }
          return e
        }({}, g), n = n = {
          contextGuildId: h,
          className: s()(g.className, p && d.ZW),
          disableGuildProfile: true
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