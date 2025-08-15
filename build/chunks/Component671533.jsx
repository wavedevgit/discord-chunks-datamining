/** Chunk was on 97162 **/
/** chunk id: 671533, original params: e,t,a (module,exports,require) **/
require.d(exports, {
  Z: () => p
}), require("./415506.js");
var n, Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  c = require.n(Chunk120356),
  Chunk325767 = require("./325767.js"),
  Chunk922013 = require("./922013.js"),
  l = ((n = {}).LEFT = "LEFT", n.RIGHT = "RIGHT", n.UP = "UP", n.DOWN = "DOWN", n.UP_LEFT = "UP_LEFT", n.DOWN_RIGHT = "DOWN_RIGHT", n);
let d = e => {
  var t, a, {
      width: n = 24,
      height: r = 24,
      color: l = "currentColor",
      direction: d,
      foreground: p,
      className: _,
      title: u
    } = e,
    g = function(e, t) {
      if (null == e) return {};
      var a, n, i = function(e, t) {
        if (null == e) return {};
        var a, n, i = {},
          r = Object.keys(e);
        for (n = 0; n < r.length; n++) a = r[n], t.indexOf(a) >= 0 || (i[a] = e[a]);
        return i
      }(e, t);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        for (n = 0; n < r.length; n++) a = r[n], !(t.indexOf(a) >= 0) && Object.prototype.propertyIsEnumerable.call(e, a) && (i[a] = e[a])
      }
      return i
    }(e, ["width", "height", "color", "direction", "foreground", "className", "title"]);
  return (0, i.jsxs)("svg", (t = function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var a = null != arguments[t] ? arguments[t] : {},
        n = Object.keys(a);
      "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(a).filter(function(e) {
        return Object.getOwnPropertyDescriptor(a, e).enumerable
      }))), n.forEach(function(t) {
        var n;
        n = a[t], t in e ? Object.defineProperty(e, t, {
          value: n,
          enumerable: true,
          configurable: true,
          writable: true
        }) : e[t] = n
      })
    }
    return e
  }({}, (0, o.Z)(g)), a = a = {
    width: n,
    height: r,
    className: c()(_, function(e) {
      switch (e) {
        case "LEFT":
          return s.left;
        case "RIGHT":
          return s.right;
        case "UP":
          return null;
        case "DOWN":
          return s.down;
        case "UP_LEFT":
          return s.upLeft;
        case "DOWN_RIGHT":
          return s.downRight;
        default:
          throw Error("Invalid Direction ".concat(e))
      }
    }(d)),
    viewBox: "0 0 24 24",
    children: [null != u ? (0, i.jsx)("title", {
      children: u
    }) : null, (0, i.jsx)("polygon", {
      className: p,
      fill: l,
      fillRule: "nonzero",
      points: "13 20 11 20 11 8 5.5 13.5 4.08 12.08 12 4.16 19.92 12.08 18.5 13.5 13 8"
    })]
  }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(a)) : (function(e, t) {
    var a = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      a.push.apply(a, n)
    }
    return a
  })(Object(a)).forEach(function(e) {
    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(a, e))
  }), t))
};
d.Directions = l;
let p = d