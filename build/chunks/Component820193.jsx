/** Chunk was on 91699 **/
/** chunk id: 820193, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  A: () => c
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk827734 = require("./827734.js"),
  Chunk953727 = require("./953727.js");

function c(e) {
  var t, r;
  let {
    width: c = 24,
    height: o = 24,
    color: s = n.A.unsafe_rawColors.WHITE.css,
    backgroundColor: a = n.A.unsafe_rawColors.BRAND_500.css
  } = e, d = function(e, t) {
    if (null == e) return {};
    var r, i, n, l = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
      for (n = 0, r = Reflect.ownKeys(e); n < r.length; n++) i = r[n], !(t.indexOf(i) >= 0) && Object.prototype.propertyIsEnumerable.call(e, i) && (l[i] = e[i]);
      return l
    }
    if (l = function(e, t) {
        if (null == e) return {};
        var r, i, n = {},
          l = Object.getOwnPropertyNames(e);
        for (i = 0; i < l.length; i++) r = l[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
        return n
      }(e, t), Object.getOwnPropertySymbols)
      for (n = 0, r = Object.getOwnPropertySymbols(e); n < r.length; n++) i = r[n], !(t.indexOf(i) >= 0) && Object.prototype.propertyIsEnumerable.call(e, i) && (l[i] = e[i]);
    return l
  }(e, ["width", "height", "color", "backgroundColor"]);
  return (0, i.jsxs)("svg", (t = function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {},
        i = Object.keys(r);
      "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
        return Object.getOwnPropertyDescriptor(r, e).enumerable
      }))), i.forEach(function(t) {
        var i;
        i = r[t], t in e ? Object.defineProperty(e, t, {
          value: i,
          enumerable: true,
          configurable: true,
          writable: true
        }) : e[t] = i
      })
    }
    return e
  }({}, (0, l.A)(d)), r = r = {
    width: c,
    height: o,
    viewBox: "0 0 14 14",
    children: [(0, i.jsx)("path", {
      fill: a,
      d: "M7.02799 0.333252C3.346 0.333252 0.361328 3.31792 0.361328 6.99992C0.361328 10.6819 3.346 13.6666 7.02799 13.6666C10.71 13.6666 13.6947 10.6819 13.6947 6.99992C13.6947 3.31792 10.7093 0.333252 7.02799 0.333252ZM10.166"
    }), (0, i.jsx)("path", {
      d: "M6.5,10.3L3.4,8l0.9-1.2l1.8,1.4l3.3-4.3l1.2,0.9L6.5,10.3z",
      fill: s
    })]
  }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : (function(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(e);
      r.push.apply(r, i)
    }
    return r
  })(Object(r)).forEach(function(e) {
    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
  }), t))
}