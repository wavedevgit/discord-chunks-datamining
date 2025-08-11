/** Chunk was on 69773 **/
/** chunk id: 77987, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  e: () => s
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk314897 = require("./314897.js"),
  Chunk449934 = require("./449934.js"),
  Chunk857458 = require("./857458.js"),
  Chunk981631 = require("./981631.js");

function s(e, t) {
  var n, s;
  let c = arguments.length > 2 && true !== arguments[2] ? arguments[2] : {
    passProps: true
  };

  function d(n) {
    return !(0, o.$8)() && r.default.getLoginStatus() !== l.u34.LOGGING_IN && r.default.allowLogoutRedirect() ? null != t ? <t renderRedirect={(0, a.jsx)(i.Z, {})} /> : <i.Z /> : <e{...function(e) {
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
    }({}, c.passProps ? n : null)} />
  }
  return d.displayName = "Authenticated(".concat(null != (s = null != (n = e.displayName) ? n : e.name) ? s : "<Unknown>", ")"), d
}