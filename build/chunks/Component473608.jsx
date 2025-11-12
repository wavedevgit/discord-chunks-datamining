/** Chunk was on web.js **/
/** chunk id: 473608, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  O: () => P
}), require("./388685.js"), require("./314940.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk512722 = require("./512722.js"),
  o = require.n(Chunk512722),
  Chunk278074 = require("./278074.js"),
  Chunk979554 = require("./979554.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk1585 = require("./1585.jsx"),
  Chunk125988 = require("./125988.js"),
  Chunk359135 = require("./359135.js"),
  Chunk516817 = require("./516817.jsx"),
  Chunk731896 = require("./731896.js"),
  Chunk594174 = require("./594174.js"),
  Chunk597688 = require("./597688.js"),
  Chunk328456 = require("./328456.js"),
  Chunk578976 = require("./578976.js"),
  Chunk579407 = require("./579407.js"),
  Chunk755419 = require("./755419.jsx"),
  Chunk187951 = require("./187951.js"),
  Chunk223223 = require("./223223.js");

function T(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function S(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      T(e, t, n[t])
    })
  }
  return e
}
let A = e => {
    let {
      avatarDecoration: t,
      fallbackLabel: n
    } = e, i = (0, c.e7)([m.default], () => m.default.getCurrentUser()), {
      avatarDecorationSrc: a,
      eventHandlers: o
    } = (0, f.Z)({
      user: i,
      onlyAnimateOnHoverOrFocus: true,
      avatarDecorationOverride: t,
      size: (0, d.y9)(u.EFr.SIZE_40)
    });
    return null == t ? n : (0, r.jsx)("img", S({
      src: a,
      alt: t.label,
      className: v.avatarDecoration
    }, o))
  },
  C = e => {
    var t;
    let {
      profileEffect: n,
      fallbackLabel: a
    } = e, o = (0, h.V)(null == n ? true : n.skuId), {
      accessibilityLabel: s,
      thumbnailPreviewSrc: l,
      title: c
    } = null != (t = null == o ? true : o.config) ? t : {}, u = i.useMemo(() => (0, b.JE)(l), [l]);
    return null == o ? a : (0, r.jsxs)("div", {
      className: v.profileEffectContainer,
      children: [(0, r.jsx)("img", {
        src: I,
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
      children: (0, r.jsx)(p.Z, {
        nameplate: (0, y.EU)(t),
        hovered: a,
        placement: _.i.MINI_PREVIEW
      })
    })
  },
  R = e => {
    let {
      product: t,
      fallbackLabel: n
    } = e, {
      firstAvatarDecoration: i,
      firstProfileEffect: a,
      firstNameplate: o
    } = (0, E.Rj)(t);
    return null == i && null == a && null == o ? n : (0, r.jsxs)("div", {
      className: v.bundleMiniPreview,
      children: [null != a && (0, r.jsx)("div", {
        className: v.bundleMiniProfileEffectContainer,
        children: (0, r.jsx)(C, {
          profileEffect: a,
          fallbackLabel: null
        })
      }), null != i && (0, r.jsx)("div", {
        className: v.bundleMiniAvatarDecorationContainer,
        children: (0, r.jsx)(A, {
          avatarDecoration: i,
          fallbackLabel: null
        })
      }), null != o && (0, r.jsx)("div", {
        className: v.bundleMiniNameplateContainer,
        children: (0, r.jsx)(N, {
          nameplate: o,
          fallbackLabel: null
        })
      })]
    })
  },
  P = e => {
    var t;
    let {
      product: n,
      sku: i,
      fallbackLabel: a
    } = e, u = null == i ? true : i.id, d = (0, c.e7)([g.Z], () => g.Z.getProduct(null == i ? true : i.id)), f = null != n ? n : d;
    if ((null == f ? true : f.type) === l.Z.BUNDLE) return (0, r.jsx)(R, {
      product: f,
      fallbackLabel: a
    });
    let [_] = null != (t = null == f ? true : f.items) ? t : [];
    return true !== u && u in O.K ? O.K[u].render({
      animationState: "on_hover",
      className: v.externalProductAsset
    }) : (0, s.EQ)(null == _ ? true : _.type).with(l.Z.AVATAR_DECORATION, () => (o()(_.type === l.Z.AVATAR_DECORATION, "ts-match checked the type"), (0, r.jsx)(A, {
      avatarDecoration: _,
      fallbackLabel: a
    }))).with(l.Z.PROFILE_EFFECT, () => (o()(_.type === l.Z.PROFILE_EFFECT, "ts-match checked the type"), (0, r.jsx)(C, {
      profileEffect: _,
      fallbackLabel: a
    }))).with(l.Z.NAMEPLATE, () => (o()(_.type === l.Z.NAMEPLATE, "ts-match checked the type"), (0, r.jsx)(N, {
      nameplate: _,
      fallbackLabel: a
    }))).otherwise(() => a)
  }