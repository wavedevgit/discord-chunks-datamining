/** Chunk was on 71447 **/
/** chunk id: 658198, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  b: () => s
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk827734 = require("./827734.js"),
  Chunk260612 = require("./260612.js"),
  Chunk953727 = require("./953727.js");
let s = e => {
  var t, n, s, o;
  let {
    size: u = "md",
    width: c,
    height: d,
    color: h = r.A.colors.INTERACTIVE_TEXT_DEFAULT,
    colorClass: p = ""
  } = e, f = function(e, t) {
    if (null == e) return {};
    var n, i, r, l = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
      for (r = 0, n = Reflect.ownKeys(e); r < n.length; r++) i = n[r], !(t.indexOf(i) >= 0) && Object.prototype.propertyIsEnumerable.call(e, i) && (l[i] = e[i]);
      return l
    }
    if (l = function(e, t) {
        if (null == e) return {};
        var n, i, r = {},
          l = Object.getOwnPropertyNames(e);
        for (i = 0; i < l.length; i++) n = l[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
        return r
      }(e, t), Object.getOwnPropertySymbols)
      for (r = 0, n = Object.getOwnPropertySymbols(e); r < n.length; r++) i = n[r], !(t.indexOf(i) >= 0) && Object.prototype.propertyIsEnumerable.call(e, i) && (l[i] = e[i]);
    return l
  }(e, ["size", "width", "height", "color", "colorClass"]), g = (0, l.J)(u), m = null != (t = null == g ? true : g.width) ? t : c, y = null != (n = null == g ? true : g.height) ? n : d;
  return (0, i.jsxs)("svg", (s = function(e) {
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
  }({}, (0, a.A)(f)), o = o = {
    xmlns: "http://www.w3.org/2000/svg",
    width: m,
    height: y,
    fill: "none",
    viewBox: "0 0 24 24",
    children: [(0, i.jsx)("path", {
      d: "M9 8.99976V6.99976H11V8.99976H9Z",
      fill: "string" == typeof h ? h : h.css,
      className: p
    }), (0, i.jsx)("path", {
      d: "M13 9V11H11V9H13Z",
      fill: "string" == typeof h ? h : h.css,
      className: p
    }), (0, i.jsx)("path", {
      d: "M8.99994 9V11H6.99994V9H8.99994Z",
      fill: "string" == typeof h ? h : h.css,
      className: p
    }), (0, i.jsx)("path", {
      d: "M12.9999 8.99976H14.9999V10.9998H16.9999V8.99976H14.9999V6.99976H12.9999V8.99976Z",
      fill: "string" == typeof h ? h : h.css,
      className: p
    }), (0, i.jsx)("path", {
      d: "M22 15C22.55 15 23 15.45 23 16V22C23 22.55 22.55 23 22 23C21.45 23 21 22.55 21 22V18.41L16.71 22.7C16.32 23.09 15.69 23.09 15.3 22.7C14.91 22.31 14.91 21.68 15.3 21.29L19.59 17H16C15.45 17 15 16.55 15 16C15 15.45 15.45 15 16 15H22Z",
      fill: "string" == typeof h ? h : h.css,
      className: p
    }), (0, i.jsx)("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M15 12.14V11H13V13H11V11H9V13H7V11H5V9H7V7H5V5H7V7H9V5H11V7H13V5H15V7H17V5H19V7H17V9H19V11H17V12H22V5C22 3.34 20.66 2 19 2H5C3.34 2 2 3.34 2 5V13C2 14.66 3.34 16 5 16H12C12 14.14 13.28 12.59 15 12.14Z",
      fill: "string" == typeof h ? h : h.css,
      className: p
    }), (0, i.jsx)("path", {
      d: "M13 18.59C12.6 18.13 12.3 17.6 12.14 17H11.5C11.22 17 11 17.22 11 17.5V19.5C11 19.78 10.78 20 10.5 20H9C8.45 20 8 20.45 8 21C8 21.55 8.45 22 9 22H12C12 21.06 12.34 20.13 13 19.38V18.59Z",
      fill: "string" == typeof h ? h : h.css,
      className: p
    })]
  }, Object.getOwnPropertyDescriptors ? Object.defineProperties(s, Object.getOwnPropertyDescriptors(o)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(e);
      n.push.apply(n, i)
    }
    return n
  })(Object(o)).forEach(function(e) {
    Object.defineProperty(s, e, Object.getOwnPropertyDescriptor(o, e))
  }), s))
}