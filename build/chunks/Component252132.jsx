/** Chunk was on 81985 **/
/** chunk id: 252132, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => o
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk27457 = require("./27457.jsx"),
  Chunk131951 = require("./131951.js"),
  Chunk746551 = require("./746551.js");

function o(e) {
  var {
    aspectRatio: t,
    className: n,
    children: o,
    width: s
  } = e, c = function(e, t) {
    if (null == e) return {};
    var n, r, i = function(e, t) {
      if (null == e) return {};
      var n, r, i = {},
        l = Object.keys(e);
      for (r = 0; r < l.length; r++) n = l[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
      return i
    }(e, t);
    if (Object.getOwnPropertySymbols) {
      var l = Object.getOwnPropertySymbols(e);
      for (r = 0; r < l.length; r++) n = l[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
    }
    return i
  }(e, ["aspectRatio", "className", "children", "width"]);
  let u = l.Z.getVideoComponent();
  return (0, r.jsx)("div", {
    style: {
      width: s
    },
    className: a.spaceBetweenTiles,
    children: (0, r.jsxs)("div", {
      className: a.tileSizer,
      style: {
        aspectRatio: t
      },
      children: [(0, r.jsx)(i.ZP, function(e) {
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
        className: n,
        videoComponent: u,
        width: s
      }, c)), o]
    })
  })
}