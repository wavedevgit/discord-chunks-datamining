/** Chunk was on web.js **/
/** chunk id: 473608, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  O: () => A
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
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
let S = e => {
    let {
      avatarDecoration: t,
      avatarSize: n
    } = e, i = (0, c.ZP)(), a = (0, s.ap)(i) ? O : y;
    return (0, r.jsx)(E.R, {
      item: t,
      avatarSize: n,
      isHighlighted: false,
      avatarPlaceholderSrc: a,
      className: b.avatarDecoration
    })
  },
  I = e => {
    var t;
    let {
      profileEffect: n,
      fallbackLabel: a
    } = e, o = (0, f.V)(null == n ? true : n.skuId), {
      accessibilityLabel: s,
      thumbnailPreviewSrc: l,
      title: c
    } = null != (t = null == o ? true : o.config) ? t : {}, u = i.useMemo(() => (0, h.JE)(l), [l]);
    return null == o ? a : (0, r.jsxs)("div", {
      className: b.profileEffectContainer,
      children: [(0, r.jsx)("img", {
        src: v,
        alt: s,
        className: b.profileEffectBackground
      }), (0, r.jsx)("img", {
        className: b.profileEffect,
        src: u,
        alt: c
      })]
    })
  },
  T = e => {
    let {
      nameplate: t,
      fallbackLabel: n
    } = e, [a, o] = i.useState(false), s = i.useCallback(() => o(true), []), l = i.useCallback(() => o(false), []);
    return null == t ? n : (0, r.jsx)("div", {
      className: b.nameplateContainer,
      onMouseEnter: s,
      onMouseLeave: l,
      children: (0, r.jsx)(d.Z, {
        nameplate: (0, m.E)(t),
        hovered: a,
        placement: u.i.MINI_PREVIEW
      })
    })
  },
  C = e => {
    let {
      product: t,
      fallbackLabel: n
    } = e, {
      firstAvatarDecoration: i,
      firstProfileEffect: a,
      firstNameplate: o
    } = (0, _.Rj)(t);
    return null == i && null == a && null == o ? n : (0, r.jsxs)("div", {
      className: b.bundleMiniPreview,
      children: [null != a && (0, r.jsx)("div", {
        className: b.bundleMiniProfileEffectContainer,
        children: (0, r.jsx)(I, {
          profileEffect: a,
          fallbackLabel: null
        })
      }), null != o && (0, r.jsx)("div", {
        className: b.bundleMiniNameplateContainer,
        children: (0, r.jsx)(T, {
          nameplate: o,
          fallbackLabel: null
        })
      }), null != i && (0, r.jsx)("div", {
        className: b.bundleMiniAvatarDecorationContainer,
        children: (0, r.jsx)(S, {
          avatarDecoration: i,
          avatarSize: l.EFr.SIZE_24
        })
      })]
    })
  },
  A = e => {
    var t;
    let {
      product: n,
      sku: i,
      fallbackLabel: s
    } = e, c = null == i ? true : i.id, u = (0, o.e7)([p.Z], () => p.Z.getProduct(null == i ? true : i.id)), d = null != n ? n : u;
    if ((null == d ? true : d.type) === a.Z.BUNDLE) return (0, r.jsx)(C, {
      product: d,
      fallbackLabel: s
    });
    let [f] = null != (t = null == d ? true : d.items) ? t : [];
    return true !== c && c in g.K ? g.K[c].render({
      animationState: "on_hover",
      className: b.externalProductAsset
    }) : (null == f ? true : f.type) === a.Z.AVATAR_DECORATION ? (0, r.jsx)(S, {
      avatarDecoration: f,
      avatarSize: l.EFr.SIZE_40
    }) : (null == f ? true : f.type) === a.Z.PROFILE_EFFECT ? (0, r.jsx)(I, {
      profileEffect: f,
      fallbackLabel: s
    }) : (null == f ? true : f.type) === a.Z.NAMEPLATE ? (0, r.jsx)(T, {
      nameplate: f,
      fallbackLabel: s
    }) : s
  }