/** Chunk was on 44669 **/
/** chunk id: 864776, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => i
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk953727 = require("./953727.js");
let i = e => {
  var t, n;
  let {
    width: i = 24,
    height: s = 24,
    color: a = "currentColor",
    className: o,
    foreground: c
  } = e, u = function(e, t) {
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
  }(e, ["width", "height", "color", "className", "foreground"]);
  return (0, r.jsx)("svg", (t = function(e) {
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
  }({
    width: i,
    height: s,
    viewBox: "0 0 24 24",
    className: o
  }, (0, l.A)(u)), n = n = {
    children: (0, r.jsx)("path", {
      className: c,
      fill: a,
      d: "M17.836 6.009A4.794 4.794 0 0 1 15.658 2h-3.439l-.005 13.78a2.892 2.892 0 0 1-2.885 2.782 2.893 2.893 0 0 1-2.89-2.89 2.894 2.894 0 0 1 2.89-2.89c.298 0 .583.048.853.133v-3.51a6.308 6.308 0 0 0-.853-.062A6.336 6.336 0 0 0 3 15.672a6.324 6.324 0 0 0 2.702 5.181A6.29 6.29 0 0 0 9.329 22a6.336 6.336 0 0 0 6.329-6.329V8.683c1.348.968 3 1.539 4.784 1.539V6.783c-.96 0-1.855-.285-2.605-.775v.001Z"
    })
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
}