/** Chunk was on 2827 **/
/** chunk id: 349439, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  GQ: () => m,
  GZ: () => A,
  il: () => g,
  nF: () => _,
  rj: () => p
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
let _ = e => {
    if (0 === e.items.length) return null;
    let t = e.items[0];
    return (0, l.T)(t) ? (0, o.F_)({
      avatarDecoration: {
        asset: t.asset
      },
      size: 40,
      canAnimate: true
    }) : null
  },
  p = e => {
    if (0 === e.items.length) return null;
    let t = e.items[0];
    return (0, s.F)(t) ? (0, i.n)("collectibles/".concat(t.asset, "static.png")) : null
  },
  m = e => {
    if (0 === e.items.length) return null;
    let t = e.items[0];
    return (0, a.C)(t) ? t.thumbnailPreviewSrc : null
  },
  g = e => {
    if (null == e) returnfalse;
    let t = c.hd[e];
    return (null == t ? true : t.skuId) === c.pe.GUILD
  },
  A = (e, t) => {
    let n, i, l = null != t;
    if (null != e) n = e.name, i = (e => {
      switch (e) {
        case r.R.AVATAR_DECORATION:
          return u.intl.string(d.default.obi47v);
        case r.R.PROFILE_EFFECT:
          return u.intl.string(d.default.RX8BMR);
        case r.R.NAMEPLATE:
          return u.intl.string(d.default.nNGEHk);
        case r.R.BUNDLE:
          return u.intl.string(d.default.VS1fKo);
        default:
          return ""
      }
    })(e.type);
    else if (l && null != t) {
      let e = c.hd[t];
      n = null == e ? true : e.name
    }
    return {
      displayName: n,
      typeName: i,
      isSubscription: l
    }
  }