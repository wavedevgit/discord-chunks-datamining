/** Chunk was on 97161 **/
n.d(t, {
  Z: () => d
}), n(415506);
var o, a = n(200651);
n(192379);
var r = n(120356),
  i = n.n(r),
  c = n(325767),
  l = n(789700),
  s = ((o = {}).LEFT = "LEFT", o.RIGHT = "RIGHT", o.UP = "UP", o.DOWN = "DOWN", o.UP_LEFT = "UP_LEFT", o.DOWN_RIGHT = "DOWN_RIGHT", o);
let _ = e => {
  var t, n, {
      width: o = 24,
      height: r = 24,
      color: s = "currentColor",
      direction: _,
      foreground: d,
      className: u,
      title: b
    } = e,
    p = function(e, t) {
      if (null == e) return {};
      var n, o, a = function(e, t) {
        if (null == e) return {};
        var n, o, a = {},
          r = Object.keys(e);
        for (o = 0; o < r.length; o++) n = r[o], t.indexOf(n) >= 0 || (a[n] = e[n]);
        return a
      }(e, t);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        for (o = 0; o < r.length; o++) n = r[o], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n])
      }
      return a
    }(e, ["width", "height", "color", "direction", "foreground", "className", "title"]);
  return (0, a.jsxs)("svg", (t = function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {},
        o = Object.keys(n);
      "function" == typeof Object.getOwnPropertySymbols && (o = o.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
        return Object.getOwnPropertyDescriptor(n, e).enumerable
      }))), o.forEach(function(t) {
        var o;
        o = n[t], t in e ? Object.defineProperty(e, t, {
          value: o,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[t] = o
      })
    }
    return e
  }({}, (0, c.Z)(p)), n = n = {
    width: o,
    height: r,
    className: i()(u, function(e) {
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
    }(_)),
    viewBox: "0 0 24 24",
    children: [null != b ? (0, a.jsx)("title", {
      children: b
    }) : null, (0, a.jsx)("polygon", {
      className: d,
      fill: s,
      fillRule: "nonzero",
      points: "13 20 11 20 11 8 5.5 13.5 4.08 12.08 12 4.16 19.92 12.08 18.5 13.5 13 8"
    })]
  }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var o = Object.getOwnPropertySymbols(e);
      n.push.apply(n, o)
    }
    return n
  })(Object(n)).forEach(function(e) {
    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
  }), t))
};
_.Directions = s;
let d = _