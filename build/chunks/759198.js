/** Chunk was on 51213 **/
n.d(t, {
  Z: () => c
});
var r = n(200651);
n(192379);
var a = n(120356),
  o = n.n(a),
  i = n(481060),
  l = n(482107);

function c(e) {
  var {
    className: t,
    color: n
  } = e, a = function(e, t) {
    if (null == e) return {};
    var n, r, a = function(e, t) {
      if (null == e) return {};
      var n, r, a = {},
        o = Object.keys(e);
      for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (a[n] = e[n]);
      return a
    }(e, t);
    if (Object.getOwnPropertySymbols) {
      var o = Object.getOwnPropertySymbols(e);
      for (r = 0; r < o.length; r++) n = o[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n])
    }
    return a
  }(e, ["className", "color"]);
  return (0, r.jsx)(i.Text, function(e) {
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
  }({
    className: o()({
      [l.text]: null == n
    }, t),
    color: n
  }, a))
}