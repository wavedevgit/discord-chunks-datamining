/** Chunk was on 86642 **/
/** chunk id: 763624, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => o
});
var Chunk818083 = require("./818083.js");

function r(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      i = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), i.forEach(function(t) {
      var i;
      i = n[t], t in e ? Object.defineProperty(e, t, {
        value: i,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = i
    })
  }
  return e
}

function l(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(e);
      n.push.apply(n, i)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let a = {
    enableRequestToStream: false,
    enableVCStatusIcons: false,
    enableOpenTIVForPing: false,
    enableRequestToStreamOverlayNotification: false
  },
  o = (0, Chunk818083.B)({
    kind: "guild",
    id: "2025-08_request_to_stream",
    label: "Request to Stream",
    defaultConfig: a,
    treatments: [{
      id: 1,
      label: "VC Status Icons",
      config: l(r({}, a), {
        enableVCStatusIcons: true
      })
    }, {
      id: 2,
      label: "Request to Stream without Overlay Notification",
      config: l(r({}, a), {
        enableVCStatusIcons: true,
        enableRequestToStream: true,
        enableOpenTIVForPing: true
      })
    }, {
      id: 3,
      label: "Request to Stream with Overlay Notification",
      config: l(r({}, a), {
        enableVCStatusIcons: true,
        enableRequestToStream: true,
        enableOpenTIVForPing: true,
        enableRequestToStreamOverlayNotification: true
      })
    }]
  })