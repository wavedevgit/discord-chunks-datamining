/** Chunk was on 93741 **/
/** chunk id: 883385, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => i
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk410575 = require("./410575.jsx");

function i(e, t) {
  return function(n) {
    return (0, r.jsx)(o.Z, {
      page: t.page,
      section: t.section,
      object: t.object,
      objectType: t.objectType,
      children: (0, r.jsx)(e, function(e) {
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
      }({}, n))
    })
  }
}