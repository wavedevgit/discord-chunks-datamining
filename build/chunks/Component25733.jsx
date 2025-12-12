/** Chunk was on web.js **/
/** chunk id: 25733, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => f
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk433517 = require("./433517.js"),
  Chunk481060 = require("./481060.js"),
  Chunk920133 = require("./920133.js"),
  Chunk338096 = require("./338096.js");

function l(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function c(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      l(e, t, n[t])
    })
  }
  return e
}

function u(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function d(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : u(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let f = {
  openDmSettingsUpsellModal(e) {
    let t = i.K.get(s.G),
      l = Date.now();
    null == t || l - t > s.k ? (i.K.set(s.G, l), (0, o.ZDy)(async () => {
      let {
        default: t
      } = await n.e("35489").then(n.bind(n, 582712));
      return n => (0, r.jsx)(t, d(c({}, n), {
        guildId: e
      }))
    })) : (0, a.L)(a.Q.SUPPRESSED_BY_COOLDOWN, e)
  }
}