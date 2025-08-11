/** Chunk was on web.js **/
/** chunk id: 473608, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  O: () => N
}), require("./388685.js"), require("./314940.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk512722 = require("./512722.js"),
  a = require.n(Chunk512722),
  Chunk278074 = require("./278074.js"),
  Chunk979554 = require("./979554.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk1585 = require("./1585.jsx"),
  Chunk125988 = require("./125988.js"),
  Chunk359135 = require("./359135.js"),
  Chunk516817 = require("./516817.js"),
  Chunk731896 = require("./731896.js"),
  Chunk594174 = require("./594174.js"),
  Chunk597688 = require("./597688.js"),
  Chunk579407 = require("./579407.js"),
  Chunk755419 = require("./755419.js"),
  Chunk643158 = require("./643158.js"),
  Chunk223223 = require("./223223.js");

function v(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function I(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      v(e, t, n[t])
    })
  }
  return e
}
let T = e => {
    let {
      avatarDecoration: t,
      fallbackLabel: n
    } = e, i = (0, c.e7)([m.default], () => m.default.getCurrentUser()), {
      avatarDecorationSrc: o,
      eventHandlers: a
    } = (0, f.Z)({
      user: i,
      onlyAnimateOnHover: true,
      avatarDecorationOverride: t,
      size: (0, d.y9)(u.EFr.SIZE_40)
    });
    return null == t ? n : <img{...I({
      src: o,
      alt: t.label,
      className: y.avatarDecoration
    }, a)} />
  },
  S = e => {
    var t;
    let {
      profileEffect: n,
      fallbackLabel: i
    } = e, o = (0, h.V)(null == n ? true : n.id);
    if (null == o) return i;
    let {
      accessibilityLabel: a,
      thumbnailPreviewSrc: s,
      title: l
    } = null != (t = null == o ? true : o.config) ? t : {};
    return <div className={y.profileEffectContainer}>{<img src={O} alt={a} className={y.profileEffectBackground} />}{<img className={y.profileEffect} src={s} alt={l} />}</div>
  },
  A = e => {
    let {
      nameplate: t,
      fallbackLabel: n
    } = e, [o, a] = i.useState(false), s = i.useCallback(() => a(true), []), l = i.useCallback(() => a(false), []);
    return null == t ? n : <div className={y.nameplateContainer} onMouseEnter={s} onMouseLeave={l}><p.Z nameplate={(0, E.EU)(t)} hovered={o} placement={_.i.MINI_PREVIEW} /></div>
  },
  N = e => {
    var t;
    let {
      product: n,
      sku: i,
      fallbackLabel: o
    } = e, u = null == i ? true : i.id, d = (0, c.e7)([g.Z], () => g.Z.getProduct(null == i ? true : i.id)), f = null != n ? n : d, [_] = null != (t = null == f ? true : f.items) ? t : [];
    return true !== u && u in b.K ? b.K[u].render({
      animationState: "on_hover",
      className: y.externalProductAsset
    }) : (0, s.EQ)(null == _ ? true : _.type).with(l.Z.AVATAR_DECORATION, () => (a()(_.type === l.Z.AVATAR_DECORATION, "ts-match checked the type"), <T avatarDecoration={_} fallbackLabel={o} />)).with(l.Z.PROFILE_EFFECT, () => (a()(_.type === l.Z.PROFILE_EFFECT, "ts-match checked the type"), <S profileEffect={_} fallbackLabel={o} />)).with(l.Z.NAMEPLATE, () => (a()(_.type === l.Z.NAMEPLATE, "ts-match checked the type"), <A nameplate={_} fallbackLabel={o} />)).otherwise(() => o)
  }