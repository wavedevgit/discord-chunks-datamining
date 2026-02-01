/** Chunk was on 72756 **/
/** chunk id: 791606, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  A: () => c
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk953727 = require("./953727.js");

function c(e) {
  var n, t;
  let {
    width: c = 32,
    height: a = 32,
    color: i = "currentColor"
  } = e, o = function(e, n) {
    if (null == e) return {};
    var t, r, l, c = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
      for (l = 0, t = Reflect.ownKeys(e); l < t.length; l++) r = t[l], !(n.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (c[r] = e[r]);
      return c
    }
    if (c = function(e, n) {
        if (null == e) return {};
        var t, r, l = {},
          c = Object.getOwnPropertyNames(e);
        for (r = 0; r < c.length; r++) t = c[r], !(n.indexOf(t) >= 0) && Object.prototype.propertyIsEnumerable.call(e, t) && (l[t] = e[t]);
        return l
      }(e, n), Object.getOwnPropertySymbols)
      for (l = 0, t = Object.getOwnPropertySymbols(e); l < t.length; l++) r = t[l], !(n.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (c[r] = e[r]);
    return c
  }(e, ["width", "height", "color"]);
  return (0, r.jsxs)("svg", (n = function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var t = null != arguments[n] ? arguments[n] : {},
        r = Object.keys(t);
      "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
        return Object.getOwnPropertyDescriptor(t, e).enumerable
      }))), r.forEach(function(n) {
        var r;
        r = t[n], n in e ? Object.defineProperty(e, n, {
          value: r,
          enumerable: true,
          configurable: true,
          writable: true
        }) : e[n] = r
      })
    }
    return e
  }({}, (0, l.A)(o)), t = t = {
    width: c,
    height: a,
    viewBox: "0 0 12 12",
    fill: "none",
    children: [(0, r.jsx)("path", {
      d: "M7.25 1H4.75V7.25H7.25V1Z",
      fill: i
    }), (0, r.jsx)("path", {
      d: "M4.75 9.75C4.75 10.4167 5.33333 11 6 11C6.66667 11 7.25 10.4167 7.25 9.75C7.25 9.08333 6.66667 8.5 6 8.5C5.33333 8.5 4.75 9.08333 4.75 9.75Z",
      fill: i
    })]
  }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(t)) : (function(e, n) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      t.push.apply(t, r)
    }
    return t
  })(Object(t)).forEach(function(e) {
    Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(t, e))
  }), n))
}