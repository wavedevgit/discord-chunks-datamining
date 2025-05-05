/** Chunk was on 89515 **/
o.d(t, {
  e: () => i
});
var n = o(255367);
o(73800);
var r = o(314897),
  a = o(449934),
  l = o(857458),
  s = o(981631);

function i(e, t) {
  var o, i;
  let c = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
    passProps: !0
  };

  function d(o) {
    return !(0, a.$8)() && r.default.getLoginStatus() !== s.u34.LOGGING_IN && r.default.allowLogoutRedirect() ? null != t ? (0, n.jsx)(t, {
      renderRedirect: (0, n.jsx)(l.Z, {})
    }) : (0, n.jsx)(l.Z, {}) : (0, n.jsx)(e, function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var o = null != arguments[t] ? arguments[t] : {},
          n = Object.keys(o);
        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(o).filter(function(e) {
          return Object.getOwnPropertyDescriptor(o, e).enumerable
        }))), n.forEach(function(t) {
          var n;
          n = o[t], t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
          }) : e[t] = n
        })
      }
      return e
    }({}, c.passProps ? o : null))
  }
  return d.displayName = "Authenticated(".concat(null != (i = null != (o = e.displayName) ? o : e.name) ? i : "<Unknown>", ")"), d
}