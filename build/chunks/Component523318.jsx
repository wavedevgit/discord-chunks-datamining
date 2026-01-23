/** Chunk was on 54160 **/
/** chunk id: 523318, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  A: () => a
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk953727 = require("./953727.js");

function a(e) {
  var t, r;
  let {
    width: a = 16,
    height: s = 16,
    color: o = "currentColor",
    foreground: l
  } = e, c = function(e, t) {
    if (null == e) return {};
    var r, n, i, a = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
      for (i = 0, r = Reflect.ownKeys(e); i < r.length; i++) n = r[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n]);
      return a
    }
    if (a = function(e, t) {
        if (null == e) return {};
        var r, n, i = {},
          a = Object.getOwnPropertyNames(e);
        for (n = 0; n < a.length; n++) r = a[n], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
        return i
      }(e, t), Object.getOwnPropertySymbols)
      for (i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++) n = r[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n]);
    return a
  }(e, ["width", "height", "color", "foreground"]);
  return (0, n.jsxs)("svg", (t = function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {},
        n = Object.keys(r);
      "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
        return Object.getOwnPropertyDescriptor(r, e).enumerable
      }))), n.forEach(function(t) {
        var n;
        n = r[t], t in e ? Object.defineProperty(e, t, {
          value: n,
          enumerable: true,
          configurable: true,
          writable: true
        }) : e[t] = n
      })
    }
    return e
  }({}, (0, i.A)(c)), r = r = {
    width: a,
    height: s,
    viewBox: "0 0 24 24",
    children: [(0, n.jsx)("g", {
      clipPath: "url(#clip0_3283_145261)",
      children: (0, n.jsx)("path", {
        d: "M3 5V19C3 20.1 3.89 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3H5C3.89 3 3 3.9 3 5ZM15 9C15 10.66 13.66 12 12 12C10.34 12 9 10.66 9 9C9 7.34 10.34 6 12 6C13.66 6 15 7.34 15 9ZM6 17C6 15 10 13.9 12 13.9C14 13.9 18 15 18 17V18H6V17Z",
        fill: o,
        className: l
      })
    }), (0, n.jsx)("defs", {
      children: (0, n.jsx)("clipPath", {
        id: "clip0_3283_145261",
        children: (0, n.jsx)("rect", {
          width: "24",
          height: "24",
          fill: "white"
        })
      })
    })]
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
}