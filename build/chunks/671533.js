/** Chunk was on 97870 **/
n.d(t, {
  Z: () => d
}), n(415506);
var a, r = n(255367);
n(73800);
var i = n(120356),
  o = n.n(i),
  c = n(325767),
  l = n(789700),
  s = ((a = {}).LEFT = "LEFT", a.RIGHT = "RIGHT", a.UP = "UP", a.DOWN = "DOWN", a.UP_LEFT = "UP_LEFT", a.DOWN_RIGHT = "DOWN_RIGHT", a);
let u = e => {
  var t, n, {
      width: a = 24,
      height: i = 24,
      color: s = "currentColor",
      direction: u,
      foreground: d,
      className: _,
      title: p
    } = e,
    m = function(e, t) {
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
  }({}, (0, c.Z)(m)), n = n = {
    width: a,
    height: i,
    className: o()(_, function(e) {
      switch (e) {
        case "LEFT":
          return l.left;
        case "RIGHT":
          return l.right;
        case "UP":
          return null;
        case "DOWN":
          return l.down;
        case "UP_LEFT":
          return l.upLeft;
        case "DOWN_RIGHT":
          return l.downRight;
        default:
          throw Error("Invalid Direction ".concat(e))
      }
    }(u)),
    viewBox: "0 0 24 24",
    children: [null != p ? (0, r.jsx)("title", {
      children: p
    }) : null, (0, r.jsx)("polygon", {
      className: d,
      fill: s,
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
u.Directions = s;
let d = u