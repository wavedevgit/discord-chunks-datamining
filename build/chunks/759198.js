/** Chunk was on 61840 **/
n.d(t, {
  Z: () => c
});
var a = n(255367);
n(73800);
var i = n(120356),
  o = n.n(i),
  r = n(481060),
  l = n(482107);

function c(e) {
  var {
    className: t,
    color: n
  } = e, i = function(e, t) {
    if (null == e) return {};
    var n, a, i = function(e, t) {
      if (null == e) return {};
      var n, a, i = {},
        o = Object.keys(e);
      for (a = 0; a < o.length; a++) n = o[a], t.indexOf(n) >= 0 || (i[n] = e[n]);
      return i
    }(e, t);
    if (Object.getOwnPropertySymbols) {
      var o = Object.getOwnPropertySymbols(e);
      for (a = 0; a < o.length; a++) n = o[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
    }
    return i
  }(e, ["className", "color"]);
  return (0, a.jsx)(r.Text, function(e) {
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
  }({
    className: o()({
      [l.text]: null == n
    }, t),
    color: n
  }, i))
}