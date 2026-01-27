/** Chunk was on web.js **/
/** chunk id: 869290, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => f
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk506774 = require("./506774.js"),
  Chunk397927 = require("./397927.js"),
  Chunk386936 = require("./386936.js"),
  Chunk364496 = require("./364496.js");

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
    let t = i.w.get(s.J),
      l = Date.now();
    null == t || l - t > s.z ? (i.w.set(s.J, l), (0, a.mMO)(async () => {
      let {
        default: t
      } = await n.e("62684").then(n.bind(n, 228855));
      return n => (0, r.jsx)(t, d(c({}, n), {
        guildId: e
      }))
    })) : (0, o.$)(o.s.SUPPRESSED_BY_COOLDOWN, e)
  }
}