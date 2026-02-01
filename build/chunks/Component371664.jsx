/** Chunk was on 36059 **/
/** chunk id: 371664, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => o
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk953727 = require("./953727.js");

function o(e) {
  var t, n;
  let {
    width: o = 80,
    height: l = 20,
    color: s = "currentColor",
    foreground: c
  } = e, a = function(e, t) {
    if (null == e) return {};
    var n, i, r, o = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
      for (r = 0, n = Reflect.ownKeys(e); r < n.length; r++) i = n[r], !(t.indexOf(i) >= 0) && Object.prototype.propertyIsEnumerable.call(e, i) && (o[i] = e[i]);
      return o
    }
    if (o = function(e, t) {
        if (null == e) return {};
        var n, i, r = {},
          o = Object.getOwnPropertyNames(e);
        for (i = 0; i < o.length; i++) n = o[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
        return r
      }(e, t), Object.getOwnPropertySymbols)
      for (r = 0, n = Object.getOwnPropertySymbols(e); r < n.length; r++) i = n[r], !(t.indexOf(i) >= 0) && Object.prototype.propertyIsEnumerable.call(e, i) && (o[i] = e[i]);
    return o
  }(e, ["width", "height", "color", "foreground"]);
  return (0, i.jsxs)("svg", (t = function(e) {
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
  }({}, (0, r.A)(a)), n = n = {
    width: o,
    height: l,
    viewBox: "0 0 ".concat(o, " ").concat(l),
    children: [(0, i.jsx)("pattern", {
      id: "pill-frame-pattern",
      width: 8 / o,
      height: "1",
      children: (0, i.jsx)("path", {
        d: "m0 0h8v20h-8zm4 2c-1.1045695 0-2 .8954305-2 2v12c0 1.1045695.8954305 2 2 2s2-.8954305 2-2v-12c0-1.1045695-.8954305-2-2-2z",
        fillRule: "evenodd",
        fill: s,
        className: c
      })
    }), (0, i.jsx)("rect", {
      fill: "url(#pill-frame-pattern)",
      height: "100%",
      width: "100%"
    })]
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
}