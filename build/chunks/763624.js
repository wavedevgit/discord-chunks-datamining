/** Chunk was on 99665 **/
n.d(t, {
  A: () => o
});
var r, l, i = n(818083);
let u = {
    enableRequestToStream: !1,
    enableVCStatusIcons: !1,
    enableOpenTIVForPing: !1
  },
  o = (0, i.B)({
    kind: "guild",
    id: "2025-08_request_to_stream",
    label: "Request to Stream",
    defaultConfig: u,
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
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : e[t] = r
          })
        }
        return e
      }({}, u), l = l = {
        enableRequestToStream: !0,
        enableVCStatusIcons: !0,
        enableOpenTIVForPing: !0
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(l)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          n.push.apply(n, r)
        }
        return n
      })(Object(l)).forEach(function(e) {
        Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(l, e))
      }), r)
    }]
  })