/** Chunk was on web.js **/
/** chunk id: 628952, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => I
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk979554 = require("./979554.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk987209 = require("./987209.jsx"),
  Chunk678135 = require("./678135.jsx"),
  Chunk484459 = require("./484459.js"),
  Chunk594174 = require("./594174.js"),
  Chunk583434 = require("./583434.js"),
  Chunk473608 = require("./473608.jsx"),
  Chunk29121 = require("./29121.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk855646 = require("./855646.js");

function b(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function y(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      b(e, t, n[t])
    })
  }
  return e
}

function O(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function v(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : O(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let I = e => {
  let {
    skuId: t,
    isSelected: n,
    price: o,
    onSelect: b,
    shouldDisplayHeader: O = false,
    className: I
  } = e, {
    product: T
  } = (0, p.T)(t), {
    giftRecipient: S,
    giftRecipientError: A
  } = (0, u.wD)(), N = (0, l.e7)([_.default], () => _.default.getCurrentUser()), C = (0, m.kd)(T), R = i.useRef(null);
  if (null == T) return null;
  let [P] = T.items, w = () => {
    switch (P.type) {
      case s.Z.AVATAR_DECORATION:
        return g.intl.string(g.t["7v0T9P"]);
      case s.Z.PROFILE_EFFECT:
        return g.intl.string(g.t.wR5wOj);
      case s.Z.NAMEPLATE:
        return g.intl.string(g.t.x5CoXV);
      default:
        return null
    }
  }, D = null != S && S.id !== (null == N ? true : N.id) && P.type !== s.Z.NAMEPLATE, L = () => {
    null != t && null != b && b(t)
  };
  return (0, r.jsxs)("div", {
    className: I,
    children: [O && (0, r.jsxs)("div", {
      className: E.previewTitleContainer,
      children: [(0, r.jsx)(c.vwX, {
        className: E.previewTitle,
        children: g.intl.string(g.t.PpoJzs)
      }), D && (0, r.jsx)(c.yRy, {
        targetElementRef: R,
        preload: () => (0, f.Z)(S.id, S.getAvatarURL(null, 80)),
        renderPopout: e => (0, r.jsx)(d.Z, v(y({}, e), {
          user: S,
          pendingAvatar: S.getAvatarURL(null, (0, c.pxk)(c.EFr.SIZE_80)),
          pendingAvatarDecoration: P.type === s.Z.AVATAR_DECORATION ? P : null,
          pendingProfileEffectId: P.type === s.Z.PROFILE_EFFECT ? P.id : null,
          canUsePremiumCustomization: true,
          disabledInputs: true,
          hideViewFullProfileButton: true
        })),
        align: "center",
        position: "right",
        children: e => (0, r.jsx)(c.P3F, v(y({}, e), {
          className: E.previewLink,
          innerRef: R,
          children: (0, r.jsx)(c.Text, {
            variant: "text-xs/medium",
            color: "text-link",
            children: g.intl.string(g.t["2GnJQE"])
          })
        }))
      }, S.id)]
    }), (0, r.jsxs)(c.P3F, {
      tag: "div",
      onClick: L,
      className: a()(E.previewContainer, {
        [E.previewContainerSelected]: n && null == A,
        [E.previewContainerError]: n && null != A
      }),
      children: [(0, r.jsxs)("div", {
        className: E.giftInfoContainer,
        children: [(0, r.jsx)(h.O, {
          product: T,
          fallbackLabel: null
        }), (0, r.jsxs)("div", {
          className: E.previewTextContainer,
          children: [(0, r.jsx)(c.Text, {
            variant: "text-md/semibold",
            children: C
          }), (0, r.jsx)(c.X6q, {
            variant: "heading-sm/medium",
            color: "header-secondary",
            children: w()
          })]
        }), (0, r.jsx)(c.Text, {
          variant: "text-md/semibold",
          children: o
        })]
      }), n && null != A && (0, r.jsx)("div", {
        className: E.recipientError,
        children: (0, r.jsx)(c.Text, {
          variant: "text-sm/normal",
          color: "status-danger",
          children: A
        })
      })]
    })]
  })
}