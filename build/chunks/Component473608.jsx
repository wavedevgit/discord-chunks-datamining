/** Chunk was on web.js **/
/** chunk id: 473608, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  O: () => R
}), require("./388685.js"), require("./314940.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk512722 = require("./512722.js"),
  o = require.n(Chunk512722),
  Chunk278074 = require("./278074.js"),
  Chunk979554 = require("./979554.js"),
  Chunk442837 = require("./442837.js"),
  Chunk780384 = require("./780384.js"),
  Chunk481060 = require("./481060.js"),
  Chunk410030 = require("./410030.js"),
  Chunk359135 = require("./359135.js"),
  Chunk516817 = require("./516817.jsx"),
  Chunk731896 = require("./731896.js"),
  Chunk597688 = require("./597688.js"),
  Chunk328456 = require("./328456.js"),
  Chunk578976 = require("./578976.js"),
  Chunk579407 = require("./579407.js"),
  Chunk755419 = require("./755419.jsx"),
  Chunk616066 = require("./616066.jsx"),
  Chunk989035 = require("./989035.js"),
  Chunk63243 = require("./63243.js"),
  Chunk244488 = require("./244488.js"),
  Chunk223223 = require("./223223.js");
let C = e => {
    let {
      avatarDecoration: t,
      avatarSize: n
    } = e, i = (0, f.ZP)(), a = (0, u.ap)(i) ? I : S;
    return (0, r.jsx)(O.R, {
      item: t,
      avatarSize: n,
      isHighlighted: false,
      avatarPlaceholderSrc: a,
      className: v.avatarDecoration
    })
  },
  A = e => {
    var t;
    let {
      profileEffect: n,
      fallbackLabel: a
    } = e, o = (0, m.V)(null == n ? true : n.skuId), {
      accessibilityLabel: s,
      thumbnailPreviewSrc: l,
      title: c
    } = null != (t = null == o ? true : o.config) ? t : {}, u = i.useMemo(() => (0, E.JE)(l), [l]);
    return null == o ? a : (0, r.jsxs)("div", {
      className: v.profileEffectContainer,
      children: [(0, r.jsx)("img", {
        src: T,
        alt: s,
        className: v.profileEffectBackground
      }), (0, r.jsx)("img", {
        className: v.profileEffect,
        src: u,
        alt: c
      })]
    })
  },
  N = e => {
    let {
      nameplate: t,
      fallbackLabel: n
    } = e, [a, o] = i.useState(false), s = i.useCallback(() => o(true), []), l = i.useCallback(() => o(false), []);
    return null == t ? n : (0, r.jsx)("div", {
      className: v.nameplateContainer,
      onMouseEnter: s,
      onMouseLeave: l,
      children: (0, r.jsx)(_.Z, {
        nameplate: (0, b.E)(t),
        hovered: a,
        placement: p.i.MINI_PREVIEW
      })
    })
  },
  P = e => {
    let {
      product: t,
      fallbackLabel: n
    } = e, {
      firstAvatarDecoration: i,
      firstProfileEffect: a,
      firstNameplate: o
    } = (0, g.Rj)(t);
    return null == i && null == a && null == o ? n : (0, r.jsxs)("div", {
      className: v.bundleMiniPreview,
      children: [null != a && (0, r.jsx)("div", {
        className: v.bundleMiniProfileEffectContainer,
        children: (0, r.jsx)(A, {
          profileEffect: a,
          fallbackLabel: null
        })
      }), null != o && (0, r.jsx)("div", {
        className: v.bundleMiniNameplateContainer,
        children: (0, r.jsx)(N, {
          nameplate: o,
          fallbackLabel: null
        })
      }), null != i && (0, r.jsx)("div", {
        className: v.bundleMiniAvatarDecorationContainer,
        children: (0, r.jsx)(C, {
          avatarDecoration: i,
          avatarSize: d.EFr.SIZE_24
        })
      })]
    })
  },
  R = e => {
    var t;
    let {
      product: n,
      sku: i,
      fallbackLabel: a
    } = e, u = null == i ? true : i.id, f = (0, c.e7)([h.Z], () => h.Z.getProduct(null == i ? true : i.id)), p = null != n ? n : f;
    if ((null == p ? true : p.type) === l.Z.BUNDLE) return (0, r.jsx)(P, {
      product: p,
      fallbackLabel: a
    });
    let [_] = null != (t = null == p ? true : p.items) ? t : [];
    return true !== u && u in y.K ? y.K[u].render({
      animationState: "on_hover",
      className: v.externalProductAsset
    }) : (0, s.EQ)(null == _ ? true : _.type).with(l.Z.AVATAR_DECORATION, () => (o()(_.type === l.Z.AVATAR_DECORATION, "ts-match checked the type"), (0, r.jsx)(C, {
      avatarDecoration: _,
      avatarSize: d.EFr.SIZE_40
    }))).with(l.Z.PROFILE_EFFECT, () => (o()(_.type === l.Z.PROFILE_EFFECT, "ts-match checked the type"), (0, r.jsx)(A, {
      profileEffect: _,
      fallbackLabel: a
    }))).with(l.Z.NAMEPLATE, () => (o()(_.type === l.Z.NAMEPLATE, "ts-match checked the type"), (0, r.jsx)(N, {
      nameplate: _,
      fallbackLabel: a
    }))).otherwise(() => a)
  }