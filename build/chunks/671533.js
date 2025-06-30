/** Chunk was on 93955 **/
n.d(t, {
  Z: () => d
}), n(415506);
var a, r = n(255367);
n(73800);
var i = n(120356),
  o = n.n(i),
  c = n(325767),
  s = n(789700),
  l = ((a = {}).LEFT = "LEFT", a.RIGHT = "RIGHT", a.UP = "UP", a.DOWN = "DOWN", a.UP_LEFT = "UP_LEFT", a.DOWN_RIGHT = "DOWN_RIGHT", a);
let u = e => {
  var t, n, {
      width: a = 24,
      height: i = 24,
      color: l = "currentColor",
      direction: u,
      foreground: d,
      className: p,
      title: _
    } = e,
    g = function(e, t) {
      if (null == e) return {};
      var n, a, r = function(e, t) {
        if (null == e) return {};
        var n, a, r = {},
          i = Object.keys(e);
        for (a = 0; a < i.length; a++) n = i[a], t.indexOf(n) >= 0 || (r[n] = e[n]);
        return r
      }(e, t);
      if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        for (a = 0; a < i.length; a++) n = i[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n])
      }
      return r
    }(e, ["width", "height", "color", "direction", "foreground", "className", "title"]);
  return (0, r.jsxs)("svg", (t = function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {},
        a = Object.keys(n);
      "function" == typeof Object.getOwnPropertySymbols && (a = a.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
        return Object.getOwnPropertyDescriptor(n, e).enumerable
      }))), a.forEach(function(t) {
        var a;
        a = n[t], t in e ? Object.defineProperty(e, t, {
          value: a,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[t] = a
      })
    }
    return e
  }({}, (0, c.Z)(g)), n = n = {
    width: a,
    height: i,
    className: o()(p, function(e) {
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
    }(u)),
    viewBox: "0 0 24 24",
    children: [null != _ ? (0, r.jsx)("title", {
      children: _
    }) : null, (0, r.jsx)("polygon", {
      className: d,
      fill: l,
      fillRule: "nonzero",
      points: "13 20 11 20 11 8 5.5 13.5 4.08 12.08 12 4.16 19.92 12.08 18.5 13.5 13 8"
    })]
  }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var a = Object.getOwnPropertySymbols(e);
      n.push.apply(n, a)
    }
    return n
  })(Object(n)).forEach(function(e) {
    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
  }), t))
};
u.Directions = l;
let d = u