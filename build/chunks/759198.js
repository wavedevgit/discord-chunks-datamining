/** Chunk was on 47284 **/
a.d(t, {
  Z: () => l
});
var n = a(255367);
a(73800);
var i = a(120356),
  o = a.n(i),
  r = a(481060),
  c = a(482107);

function l(e) {
  var {
    className: t,
    color: a
  } = e, i = function(e, t) {
    if (null == e) return {};
    var a, n, i = function(e, t) {
      if (null == e) return {};
      var a, n, i = {},
        o = Object.keys(e);
      for (n = 0; n < o.length; n++) a = o[n], t.indexOf(a) >= 0 || (i[a] = e[a]);
      return i
    }(e, t);
    if (Object.getOwnPropertySymbols) {
      var o = Object.getOwnPropertySymbols(e);
      for (n = 0; n < o.length; n++) a = o[n], !(t.indexOf(a) >= 0) && Object.prototype.propertyIsEnumerable.call(e, a) && (i[a] = e[a])
    }
    return i
  }(e, ["className", "color"]);
  return (0, n.jsx)(r.Text, function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var a = null != arguments[t] ? arguments[t] : {},
        n = Object.keys(a);
      "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(a).filter(function(e) {
        return Object.getOwnPropertyDescriptor(a, e).enumerable
      }))), n.forEach(function(t) {
        var n;
        n = a[t], t in e ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[t] = n
      })
    }
    return e
  }({
    className: o()({
      [c.text]: null == a
    }, t),
    color: a
  }, i))
}