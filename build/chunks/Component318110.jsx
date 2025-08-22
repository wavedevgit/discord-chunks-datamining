/** Chunk was on web.js **/
/** chunk id: 318110, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  f: () => c
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk481060 = require("./481060.js");

function a(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function o(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      a(e, t, n[t])
    })
  }
  return e
}

function s(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function l(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : s(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let c = e => {
  let {
    analyticsLocations: t,
    guildId: a,
    initialSelectedNameplate: s
  } = e;
  (0, i.ZDy)(async () => {
    let {
      default: e
    } = await n.e("8895").then(n.bind(n, 612293));
    return n => (0, r.jsx)(e, l(o({}, n), {
      guildId: a,
      analyticsLocations: t,
      initialSelectedNameplate: s
    }))
  })
}