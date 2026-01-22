/** Chunk was on 62507 **/
/** chunk id: 839238, original params: e,t,r (module,exports,require) **/
require.r(exports), require.d(exports, {
  default: () => c
});
var Chunk627968 = require("./627968.js"),
  Chunk573435 = require("./573435.jsx"),
  Chunk138869 = require("./138869.jsx");

function c(e) {
  let {
    application: t,
    asset: r,
    className: c
  } = e, a = function(e, t) {
    if (null == e) return {};
    var r, n, o, l = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
      for (o = 0, r = Reflect.ownKeys(e); o < r.length; o++) n = r[o], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
      return l
    }
    if (l = function(e, t) {
        if (null == e) return {};
        var r, n, o = {},
          l = Object.getOwnPropertyNames(e);
        for (n = 0; n < l.length; n++) r = l[n], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r]);
        return o
      }(e, t), Object.getOwnPropertySymbols)
      for (o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++) n = r[o], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
    return l
  }(e, ["application", "asset", "className"]);
  return (0, n.jsx)(o.Ay, {
    mask: o.Ay.Masks.SQUIRCLE,
    width: 128,
    height: 128,
    style: {
      display: "block"
    },
    children: (0, n.jsx)(l.A, function(e) {
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
    }({
      application: t,
      size: l.V.LARGE,
      asset: r,
      className: c
    }, a))
  })
}