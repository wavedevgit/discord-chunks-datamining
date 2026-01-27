/** Chunk was on web.js **/
/** chunk id: 209489, original params: e,t,n (module,exports,re quire) **/
"use strict";
let r;

function i(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function a(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      i(e, t, n[t])
    })
  }
  return e
}

function o(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function s(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : o(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
require.d(exports, {
  A: () => u
}), require("./321073.js"), r = require("./4472.js").A;
let l = [],
  c = false,
  u = s(a({}, r), {
    awaitOnline: () => new Promise(e => {
      if (r.isOnline()) return e();
      {
        if (l.push(e), c) return;
        c = true;
        let t = () => {
          l.forEach(e => e()), l.length = 0, c = false, r.removeOnlineCallback(t)
        };
        r.addOnlineCallback(t)
      }
    })
  })