/** Chunk was on 90783 **/
n.d(t, {
  Z: () => l
});
var o = n(200651);
n(192379);
var r = n(120356),
  a = n.n(r),
  i = n(481060),
  c = n(482107);

function l(e) {
  var {
    className: t,
    color: n
  } = e, r = function(e, t) {
    if (null == e) return {};
    var n, o, r = function(e, t) {
      if (null == e) return {};
      var n, o, r = {},
        a = Object.keys(e);
      for (o = 0; o < a.length; o++) n = a[o], t.indexOf(n) >= 0 || (r[n] = e[n]);
      return r
    }(e, t);
    if (Object.getOwnPropertySymbols) {
      var a = Object.getOwnPropertySymbols(e);
      for (o = 0; o < a.length; o++) n = a[o], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n])
    }
    return r
  }(e, ["className", "color"]);
  return (0, o.jsx)(i.Text, function(e) {
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
  }({
    className: a()({
      [c.text]: null == n
    }, t),
    color: n
  }, r))
}