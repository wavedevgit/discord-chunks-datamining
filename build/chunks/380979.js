/** Chunk was on web.js **/
/** chunk id: 380979, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  $U: () => h,
  HB: () => E,
  Km: () => g,
  vV: () => p,
  yz: () => m
});
var Chunk979554 = require("./979554.js"),
  Chunk357352 = require("./357352.js"),
  Chunk922347 = require("./922347.js"),
  Chunk135483 = require("./135483.js"),
  Chunk212161 = require("./212161.js"),
  Chunk768581 = require("./768581.js"),
  Chunk474936 = require("./474936.js"),
  Chunk313570 = require("./313570.js"),
  Chunk388032 = require("./388032.jsx");
let f = 40,
  _ = e => {
    switch (e) {
      case r.Z.AVATAR_DECORATION:
        return d.intl.string(u.default.obi47v);
      case r.Z.PROFILE_EFFECT:
        return d.intl.string(u.default.RX8BMR);
      case r.Z.NAMEPLATE:
        return d.intl.string(u.default.nNGEHk);
      case r.Z.BUNDLE:
        return d.intl.string(u.default.VS1fKo);
      default:
        return ""
    }
  },
  p = e => {
    if (0 === e.items.length) return null;
    let t = e.items[0];
    return (0, a.M)(t) ? (0, l.NZ)({
      avatarDecoration: {
        asset: t.asset
      },
      size: f,
      canAnimate: true
    }) : null
  },
  h = e => {
    if (0 === e.items.length) return null;
    let t = e.items[0];
    return (0, o.k)(t) ? (0, i.b)("collectibles/".concat(t.asset, "static.png")) : null
  },
  m = e => {
    if (0 === e.items.length) return null;
    let t = e.items[0];
    return (0, s.H)(t) ? t.thumbnailPreviewSrc : null
  },
  g = e => {
    if (null == e) returnfalse;
    let t = c.GP[e];
    return (null == t ? true : t.skuId) === c.Si.GUILD
  },
  E = (e, t) => {
    let n, r, i = null != t;
    if (null != e) n = e.name, r = _(e.type);
    else if (i && null != t) {
      let e = c.GP[t];
      n = null == e ? true : e.name
    }
    return {
      displayName: n,
      typeName: r,
      isSubscription: i
    }
  }