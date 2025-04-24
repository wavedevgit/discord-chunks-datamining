/** Chunk was on 87918 **/
n.d(t, {
  Z: () => u
});
var i = n(200651);
n(192379);
var l = n(120356),
  a = n.n(l),
  r = n(481060),
  o = n(482107);

function u(e) {
  var {
    className: t,
    color: n
  } = e, l = function(e, t) {
    if (null == e) return {};
    var n, i, l = function(e, t) {
      if (null == e) return {};
      var n, i, l = {},
        a = Object.keys(e);
      for (i = 0; i < a.length; i++) n = a[i], t.indexOf(n) >= 0 || (l[n] = e[n]);
      return l
    }(e, t);
    if (Object.getOwnPropertySymbols) {
      var a = Object.getOwnPropertySymbols(e);
      for (i = 0; i < a.length; i++) n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n])
    }
    return l
  }(e, ["className", "color"]);
  return (0, i.jsx)(r.Text, function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {},
        i = Object.keys(n);
      "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
        return Object.getOwnPropertyDescriptor(n, e).enumerable
      }))), i.forEach(function(t) {
        var i;
        i = n[t], t in e ? Object.defineProperty(e, t, {
          value: i,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[t] = i
      })
    }
    return e
  }({
    className: a()({
      [o.text]: null == n
    }, t),
    color: n
  }, l))
}