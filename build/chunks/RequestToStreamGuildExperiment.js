/** Chunk was on 31748 **/
/** chunk id: 159426, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  m: () => o
});
var Chunk600975 = require("./600975.js");

function l(e) {
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
}

function i(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
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
  o = (0, Chunk600975.C)({
    kind: "guild",
    id: "2025-08_request_to_stream",
    label: "Request to Stream",
    defaultConfig: a,
    treatments: [{
      id: 1,
      label: "VC Status Icons",
      config: i(l({}, a), {
        enableVCStatusIcons: true
      })
    }, {
      id: 2,
      label: "Request to Stream without Overlay Notification",
      config: i(l({}, a), {
        enableVCStatusIcons: true,
        enableRequestToStream: true,
        enableOpenTIVForPing: true
      })
    }, {
      id: 3,
      label: "Request to Stream with Overlay Notification",
      config: i(l({}, a), {
        enableVCStatusIcons: true,
        enableRequestToStream: true,
        enableOpenTIVForPing: true,
        enableRequestToStreamOverlayNotification: true
      })
    }]
  })