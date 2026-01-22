/** Chunk was on 81881 **/
/** chunk id: 114716, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  C: () => o
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk961350 = require("./961350.js"),
  Chunk612181 = require("./612181.js"),
  Chunk642277 = require("./642277.jsx"),
  Chunk652215 = require("./652215.js");

function o(e, t) {
  var n, o;
  let c = arguments.length > 2 && true !== arguments[2] ? arguments[2] : {
    passProps: true
  };

  function d(n) {
    return !(0, l.wR)() && r.default.getLoginStatus() !== s.aUe.LOGGING_IN && r.default.allowLogoutRedirect() ? null != t ? (0, a.jsx)(t, {
      renderRedirect: (0, a.jsx)(i.A, {})
    }) : (0, a.jsx)(i.A, {}) : (0, a.jsx)(e, function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
          a = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (a = a.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
          return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), a.forEach(function(t) {
          var a;
          a = n[t], t in e ? Object.defineProperty(e, t, {
            value: a,
            enumerable: true,
            configurable: true,
            writable: true
          }) : e[t] = a
        })
      }
      return e
    }({}, c.passProps ? n : null))
  }
  return d.displayName = "Authenticated(".concat(null != (n = null != (o = e.displayName) ? o : e.name) ? n : "<Unknown>", ")"), d
}