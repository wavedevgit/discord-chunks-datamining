/** Chunk was on 21539 **/
/** chunk id: 509402, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  A: () => c
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk953727 = require("./953727.js");

function c(e) {
  var t, r;
  let {
    width: c = 24,
    height: i = 24,
    color: s = "currentColor",
    foreground: l
  } = e, a = function(e, t) {
    if (null == e) return {};
    var r, o, n, c = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
      for (n = 0, r = Reflect.ownKeys(e); n < r.length; n++) o = r[n], !(t.indexOf(o) >= 0) && Object.prototype.propertyIsEnumerable.call(e, o) && (c[o] = e[o]);
      return c
    }
    if (c = function(e, t) {
        if (null == e) return {};
        var r, o, n = {},
          c = Object.getOwnPropertyNames(e);
        for (o = 0; o < c.length; o++) r = c[o], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
        return n
      }(e, t), Object.getOwnPropertySymbols)
      for (n = 0, r = Object.getOwnPropertySymbols(e); n < r.length; n++) o = r[n], !(t.indexOf(o) >= 0) && Object.prototype.propertyIsEnumerable.call(e, o) && (c[o] = e[o]);
    return c
  }(e, ["width", "height", "color", "foreground"]);
  return (0, o.jsxs)("svg", (t = function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {},
        o = Object.keys(r);
      "function" == typeof Object.getOwnPropertySymbols && (o = o.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
        return Object.getOwnPropertyDescriptor(r, e).enumerable
      }))), o.forEach(function(t) {
        var o;
        o = r[t], t in e ? Object.defineProperty(e, t, {
          value: o,
          enumerable: true,
          configurable: true,
          writable: true
        }) : e[t] = o
      })
    }
    return e
  }({}, (0, n.A)(a)), r = r = {
    width: c,
    height: i,
    viewBox: "0 0 24 24",
    children: [(0, o.jsx)("path", {
      d: "M20.414 2.58599C21.195 3.36699 21.195 4.63299 20.414 5.41399L14.051 11.779L11.222 8.94999L17.586 2.58599C18.367 1.80499 19.633 1.80499 20.414 2.58599Z",
      className: l,
      fill: s
    }), (0, o.jsx)("path", {
      d: "M13.622 15.035L6.552 16.449L7.966 9.378L13.344 4H4C2.897 4 2 4.898 2 6V20C2 21.103 2.897 22 4 22H18C19.103 22 20 21.103 20 20V8.656L13.622 15.035Z",
      className: l,
      fill: s
    }), (0, o.jsx)("path", {
      d: "M9.80801 10.365L12.636 13.192L9.10101 13.899L9.80801 10.365Z",
      className: l,
      fill: s
    })]
  }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : (function(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var o = Object.getOwnPropertySymbols(e);
      r.push.apply(r, o)
    }
    return r
  })(Object(r)).forEach(function(e) {
    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
  }), t))
}