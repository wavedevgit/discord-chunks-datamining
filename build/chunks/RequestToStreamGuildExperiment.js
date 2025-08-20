/** Chunk was on 50568 **/
/** chunk id: 763624, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => o
});
var r, i, Chunk818083 = require("./818083.js");
let a = {
    enableRequestToStream: false,
    enableVCStatusIcons: false,
    enableOpenTIVForPing: false
  },
  o = (0, Chunk818083.B)({
    kind: "guild",
    id: "2025-08_request_to_stream",
    label: "Request to Stream",
    defaultConfig: a,
    treatments: [{
      id: 1,
      label: "Request to Stream Enabled",
      config: (r = function(e) {
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
      }({}, a), i = i = {
        enableRequestToStream: true,
        enableVCStatusIcons: true,
        enableOpenTIVForPing: true
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(i)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          n.push.apply(n, r)
        }
        return n
      })(Object(i)).forEach(function(e) {
        Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(i, e))
      }), r)
    }]
  })