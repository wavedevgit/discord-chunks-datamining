/** Chunk was on 33177 **/
n.d(e, {
  Z: () => o
});
var r = n(255367);
n(73800);
var i = n(120356),
  l = n.n(i),
  a = n(481060),
  u = n(482107);

function o(t) {
  var {
    className: e,
    color: n
  } = t, i = function(t, e) {
    if (null == t) return {};
    var n, r, i = function(t, e) {
      if (null == t) return {};
      var n, r, i = {},
        l = Object.keys(t);
      for (r = 0; r < l.length; r++) n = l[r], e.indexOf(n) >= 0 || (i[n] = t[n]);
      return i
    }(t, e);
    if (Object.getOwnPropertySymbols) {
      var l = Object.getOwnPropertySymbols(t);
      for (r = 0; r < l.length; r++) n = l[r], !(e.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(t, n) && (i[n] = t[n])
    }
    return i
  }(t, ["className", "color"]);
  return (0, r.jsx)(a.Text, function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = null != arguments[e] ? arguments[e] : {},
        r = Object.keys(n);
      "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(t) {
        return Object.getOwnPropertyDescriptor(n, t).enumerable
      }))), r.forEach(function(e) {
        var r;
        r = n[e], e in t ? Object.defineProperty(t, e, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : t[e] = r
      })
    }
    return t
  }({
    className: l()({
      [u.text]: null == n
    }, e),
    color: n
  }, i))
}