/** Chunk was on 81881 **/
/** chunk id: 114716, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  C: () => s
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk961350 = require("./961350.js"),
  Chunk612181 = require("./612181.js"),
  Chunk642277 = require("./642277.jsx"),
  Chunk652215 = require("./652215.js");

function s(e, t) {
  var r, s;
  let c = arguments.length > 2 && true !== arguments[2] ? arguments[2] : {
    passProps: true
  };

  function d(r) {
    return !(0, l.wR)() && a.default.getLoginStatus() !== i.aUe.LOGGING_IN && a.default.allowLogoutRedirect() ? null != t ? (0, n.jsx)(t, {
      renderRedirect: (0, n.jsx)(o.A, {})
    }) : (0, n.jsx)(o.A, {}) : (0, n.jsx)(e, function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {},
          n = Object.keys(r);
        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
          return Object.getOwnPropertyDescriptor(r, e).enumerable
        }))), n.forEach(function(t) {
          var n;
          n = r[t], t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: true,
            configurable: true,
            writable: true
          }) : e[t] = n
        })
      }
      return e
    }({}, c.passProps ? r : null))
  }
  return d.displayName = "Authenticated(".concat(null != (r = null != (s = e.displayName) ? s : e.name) ? r : "<Unknown>", ")"), d
}