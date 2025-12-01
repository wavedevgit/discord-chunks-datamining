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

function m(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function h(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : m(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let g = () => {
  let e = (0, Chunk619899.zL)(Chunk281598.jE.UPSELL_BANNER),
    t = (0, Chunk619899.zL)(Chunk281598.jE.UPSELL_BANNER_POPOUT),
    n = (0, Chunk442837.e7)([Chunk874703.Z], () => Chunk874703.Z.getMarketingBySurface(Chunk115434.K.EDIT_PROFILE_SETTINGS)),
    p = Chunk473749.useMemo(() => null != require ? require : {
      asset: Chunk78230,
      popoutAsset: Chunk513767,
      title: Chunk388032.intl.string(Chunk388032.t.QZVVBh),
      body: Chunk388032.intl.string(Chunk388032.t.sajmAq),
      version: 0,
      revertTextColor: false
    }, [require]);
  return Chunk473749.useMemo(() => h(_({}, p), {
    type: Chunk264181.Z.BANNER,
    asset: null != module ? module : p.asset,
    popoutAsset: null != exports ? exports : p.popoutAsset
  }), [module, exports, p])
}