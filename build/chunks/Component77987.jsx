/** Chunk was on 69773 **/
/** chunk id: 77987, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  e: () => l
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk314897 = require("./314897.js"),
  Chunk449934 = require("./449934.js"),
  Chunk857458 = require("./857458.jsx"),
  Chunk981631 = require("./981631.js");

function l(e, t) {
  var n, l;
  let c = arguments.length > 2 && true !== arguments[2] ? arguments[2] : {
    passProps: true
  };

  function d(n) {
    return !(0, i.$8)() && a.default.getLoginStatus() !== s.u34.LOGGING_IN && a.default.allowLogoutRedirect() ? null != t ? (0, r.jsx)(t, {
      renderRedirect: (0, r.jsx)(o.Z, {})
    }) : (0, r.jsx)(o.Z, {}) : (0, r.jsx)(e, function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
          r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
          return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
          var r;
          r = n[t], t in e ? Object.defineProperty(e, t, {
            value: r,
            enumerable: true,
            configurable: true,
            writable: true
          }) : e[t] = r
        })
      }
      return e
    }({}, c.passProps ? n : null))
  }
  return d.displayName = "Authenticated(".concat(null != (l = null != (n = e.displayName) ? n : e.name) ? l : "<Unknown>", ")"), d
}