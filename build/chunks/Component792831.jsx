/** Chunk was on 49282 **/
/** chunk id: 792831, original params: e,t,l (module,exports,require) **/
require.d(exports, {
  A: () => p
}), require("./65821.js");
var n, Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk953727 = require("./953727.js"),
  Chunk106199 = require("./106199.js"),
  o = ((n = {}).LEFT = "LEFT", n.RIGHT = "RIGHT", n.UP = "UP", n.DOWN = "DOWN", n.UP_LEFT = "UP_LEFT", n.DOWN_RIGHT = "DOWN_RIGHT", n);
let u = e => {
  var t, l;
  let {
    width: n = 24,
    height: r = 24,
    color: o = "currentColor",
    direction: u,
    foreground: p,
    className: d,
    title: T
  } = e, E = function(e, t) {
    if (null == e) return {};
    var l, n, a, r = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
      for (a = 0, l = Reflect.ownKeys(e); a < l.length; a++) n = l[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
      return r
    }
    if (r = function(e, t) {
        if (null == e) return {};
        var l, n, a = {},
          r = Object.getOwnPropertyNames(e);
        for (n = 0; n < r.length; n++) l = r[n], !(t.indexOf(l) >= 0) && Object.prototype.propertyIsEnumerable.call(e, l) && (a[l] = e[l]);
        return a
      }(e, t), Object.getOwnPropertySymbols)
      for (a = 0, l = Object.getOwnPropertySymbols(e); a < l.length; a++) n = l[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
    return r
  }(e, ["width", "height", "color", "direction", "foreground", "className", "title"]);
  return (0, a.jsxs)("svg", (t = function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var l = null != arguments[t] ? arguments[t] : {},
        n = Object.keys(l);
      "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(l).filter(function(e) {
        return Object.getOwnPropertyDescriptor(l, e).enumerable
      }))), n.forEach(function(t) {
        var n;
        n = l[t], t in e ? Object.defineProperty(e, t, {
          value: n,
          enumerable: true,
          configurable: true,
          writable: true
        }) : e[t] = n
      })
    }
    return e
  }({}, (0, c.A)(E)), l = l = {
    width: n,
    height: r,
    className: s()(d, function(e) {
      switch (e) {
        case "LEFT":
          return i.kb;
        case "RIGHT":
          return i.pG;
        case "UP":
          return null;
        case "DOWN":
          return i.TR;
        case "UP_LEFT":
          return i.l0;
        case "DOWN_RIGHT":
          return i.Nu;
        default:
          throw Error("Invalid Direction ".concat(e))
      }
    }(u)),
    viewBox: "0 0 24 24",
    children: [null != T ? (0, a.jsx)("title", {
      children: T
    }) : null, (0, a.jsx)("polygon", {
      className: p,
      fill: o,
      fillRule: "nonzero",
      points: "13 20 11 20 11 8 5.5 13.5 4.08 12.08 12 4.16 19.92 12.08 18.5 13.5 13 8"
    })]
  }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(l)) : (function(e, t) {
    var l = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      l.push.apply(l, n)
    }
    return l
  })(Object(l)).forEach(function(e) {
    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(l, e))
  }), t))
};
u.Directions = o;
let p = u