/** Chunk was on web.js **/
/** chunk id: 349439, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  GQ: () => m,
  GZ: () => E,
  il: () => g,
  nF: () => _,
  rj: () => h
});
var Chunk575593 = require("./575593.js"),
  Chunk289397 = require("./289397.js"),
  Chunk898461 = require("./898461.js"),
  Chunk837015 = require("./837015.js"),
  Chunk203632 = require("./203632.js"),
  Chunk486020 = require("./486020.js"),
  Chunk788868 = require("./788868.js"),
  Chunk842130 = require("./842130.js"),
  Chunk985018 = require("./985018.jsx");
let f = 40,
  p = e => {
    switch (e) {
      case r.R.AVATAR_DECORATION:
        return d.intl.string(u.default.obi47v);
      case r.R.PROFILE_EFFECT:
        return d.intl.string(u.default.RX8BMR);
      case r.R.NAMEPLATE:
        return d.intl.string(u.default.nNGEHk);
      case r.R.BUNDLE:
        return d.intl.string(u.default.VS1fKo);
      default:
        return ""
    }
  },
  _ = e => {
    if (0 === e.items.length) return null;
    let t = e.items[0];
    return (0, a.T)(t) ? (0, l.F_)({
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
    return (0, s.F)(t) ? (0, i.n)("collectibles/".concat(t.asset, "static.png")) : null
  },
  m = e => {
    if (0 === e.items.length) return null;
    let t = e.items[0];
    return (0, o.C)(t) ? t.thumbnailPreviewSrc : null
  },
  g = e => {
    if (null == e) returnfalse;
    let t = c.hd[e];
    return (null == t ? true : t.skuId) === c.pe.GUILD
  },
  E = (e, t) => {
    let n, r, i = null != t;
    if (null != e) n = e.name, r = p(e.type);
    else if (i && null != t) {
      let e = c.hd[t];
      n = null == e ? true : e.name
    }
    return {
      displayName: n,
      typeName: r,
      isSubscription: i
    }
  }