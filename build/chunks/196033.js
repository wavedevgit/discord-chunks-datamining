/** Chunk was on web.js **/
/** chunk id: 196033, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  W: () => g
});
var Chunk473749 = require("./473749.js"),
  Chunk115434 = require("./115434.js"),
  Chunk264181 = require("./264181.js"),
  Chunk442837 = require("./442837.js"),
  Chunk874703 = require("./874703.js"),
  Chunk619899 = require("./619899.js"),
  Chunk281598 = require("./281598.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk513767 = require("./513767.js"),
  Chunk78230 = require("./78230.js");

function p(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function _(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      p(e, t, n[t])
    })
  }
  return e
}

function h(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function m(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : h(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let g = () => {
  let e = (0, l.zL)(c.jE.UPSELL_BANNER),
    t = (0, l.zL)(c.jE.UPSELL_BANNER_POPOUT),
    n = (0, o.e7)([s.Z], () => s.Z.getMarketingBySurface(i.K.EDIT_PROFILE_SETTINGS)),
    p = r.useMemo(() => null != n ? n : {
      asset: f,
      popoutAsset: d,
      title: u.intl.string(u.t.QZVVBh),
      body: u.intl.string(u.t.sajmAq),
      version: 0,
      revertTextColor: false
    }, [n]);
  return r.useMemo(() => m(_({}, p), {
    type: a.Z.BANNER,
    asset: null != e ? e : p.asset,
    popoutAsset: null != t ? t : p.popoutAsset
  }), [e, t, p])
}