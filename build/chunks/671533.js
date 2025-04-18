/** Chunk was on 98587 **/
n.d(t, {
  Z: () => _
}), n(415506);
var r, o = n(200651);
n(192379);
var i = n(120356),
  a = n.n(i),
  c = n(325767),
  l = n(742557),
  u = ((r = {}).LEFT = "LEFT", r.RIGHT = "RIGHT", r.UP = "UP", r.DOWN = "DOWN", r.UP_LEFT = "UP_LEFT", r.DOWN_RIGHT = "DOWN_RIGHT", r);
let s = e => {
  var t, n, {
      width: r = 24,
      height: i = 24,
      color: u = "currentColor",
      direction: s,
      foreground: _,
      className: b,
      title: d
    } = e,
    p = function(e, t) {
      if (null == e) return {};
      var n, r, o = function(e, t) {
        if (null == e) return {};
        var n, r, o = {},
          i = Object.keys(e);
        for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || (o[n] = e[n]);
        return o
      }(e, t);
      if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        for (r = 0; r < i.length; r++) n = i[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
      }
      return o
    }(e, ["width", "height", "color", "direction", "foreground", "className", "title"]);
  return (0, o.jsxs)("svg", (t = function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {},
        r = Object.keys(n);
      "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
        return Object.getOwnPropertyDescriptor(n, e).enumerable
      }))), r.forEach(function(t) {
        var r;
        r = n[t], t in e ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[t] = r
      })
    }
    return e
  }({}, (0, c.Z)(p)), n = n = {
    width: r,
    height: i,
    className: a()(b, function(e) {
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
    }(s)),
    viewBox: "0 0 24 24",
    children: [null != d ? (0, o.jsx)("title", {
      children: d
    }) : null, (0, o.jsx)("polygon", {
      className: _,
      fill: u,
      fillRule: "nonzero",
      points: "13 20 11 20 11 8 5.5 13.5 4.08 12.08 12 4.16 19.92 12.08 18.5 13.5 13 8"
    })]
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
};
s.Directions = u;
let _ = s