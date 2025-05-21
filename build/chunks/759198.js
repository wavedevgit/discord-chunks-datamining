/** Chunk was on 59104 **/
t.d(a, {
  Z: () => l
});
var n = t(255367);
t(73800);
var r = t(120356),
  o = t.n(r),
  c = t(481060),
  i = t(482107);

function l(e) {
  var {
    className: a,
    color: t
  } = e, r = function(e, a) {
    if (null == e) return {};
    var t, n, r = function(e, a) {
      if (null == e) return {};
      var t, n, r = {},
        o = Object.keys(e);
      for (n = 0; n < o.length; n++) t = o[n], a.indexOf(t) >= 0 || (r[t] = e[t]);
      return r
    }(e, a);
    if (Object.getOwnPropertySymbols) {
      var o = Object.getOwnPropertySymbols(e);
      for (n = 0; n < o.length; n++) t = o[n], !(a.indexOf(t) >= 0) && Object.prototype.propertyIsEnumerable.call(e, t) && (r[t] = e[t])
    }
    return r
  }(e, ["className", "color"]);
  return (0, n.jsx)(c.Text, function(e) {
    for (var a = 1; a < arguments.length; a++) {
      var t = null != arguments[a] ? arguments[a] : {},
        n = Object.keys(t);
      "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
        return Object.getOwnPropertyDescriptor(t, e).enumerable
      }))), n.forEach(function(a) {
        var n;
        n = t[a], a in e ? Object.defineProperty(e, a, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[a] = n
      })
    }
    return e
  }({
    className: o()({
      [i.text]: null == t
    }, a),
    color: t
  }, r))
}