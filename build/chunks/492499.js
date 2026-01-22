/** Chunk was on web.js **/
/** chunk id: 492499, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  M: () => g
});
var Chunk64700 = require("./64700.js"),
  Chunk379197 = require("./379197.js"),
  Chunk488430 = require("./488430.js"),
  Chunk311907 = require("./311907.js"),
  Chunk457421 = require("./457421.js"),
  Chunk940622 = require("./940622.js"),
  Chunk559474 = require("./559474.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk795056 = require("./795056.js"),
  Chunk996613 = require("./996613.js");

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
  let e = (0, l.mb)(c.RN.UPSELL_BANNER),
    t = (0, l.mb)(c.RN.UPSELL_BANNER_POPOUT),
    n = (0, s.bG)([o.A], () => o.A.getMarketingBySurface(i.R.EDIT_PROFILE_SETTINGS)),
    p = r.useMemo(() => null != n ? n : {
      asset: f,
      popoutAsset: d,
      title: u.intl.string(u.t.QZVVBh),
      body: u.intl.string(u.t.sajmAq),
      version: 0,
      revertTextColor: false
    }, [n]);
  return r.useMemo(() => m(_({}, p), {
    type: a.G.BANNER,
    asset: null != e ? e : p.asset,
    popoutAsset: null != t ? t : p.popoutAsset
  }), [e, t, p])
}