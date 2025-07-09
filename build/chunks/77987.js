/** Chunk was on 69773 **/
n.d(t, {
  e: () => s
});
var a = n(255367);
n(73800);
var r = n(314897),
  o = n(449934),
  i = n(857458),
  l = n(981631);

function s(e, t) {
  var n, s;
  let c = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
    passProps: !0
  };

  function d(n) {
    return !(0, o.$8)() && r.default.getLoginStatus() !== l.u34.LOGGING_IN && r.default.allowLogoutRedirect() ? null != t ? (0, a.jsx)(t, {
      renderRedirect: (0, a.jsx)(i.Z, {})
    }) : (0, a.jsx)(i.Z, {}) : (0, a.jsx)(e, function(e) {
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
    }({}, c.passProps ? n : null))
  }
  return d.displayName = "Authenticated(".concat(null != (s = null != (n = e.displayName) ? n : e.name) ? s : "<Unknown>", ")"), d
}