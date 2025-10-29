/** Chunk was on web.js **/
/** chunk id: 628952, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => C
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk512722 = require("./512722.js"),
  l = require.n(Chunk512722),
  Chunk979554 = require("./979554.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk987209 = require("./987209.jsx"),
  Chunk678135 = require("./678135.jsx"),
  Chunk484459 = require("./484459.js"),
  Chunk594174 = require("./594174.js"),
  Chunk583434 = require("./583434.js"),
  Chunk922347 = require("./922347.js"),
  Chunk212161 = require("./212161.js"),
  Chunk473608 = require("./473608.jsx"),
  Chunk29121 = require("./29121.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk855646 = require("./855646.js");

function I(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function T(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      I(e, t, n[t])
    })
  }
  return e
}

function S(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function A(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : S(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let C = e => {
  let {
    skuId: t,
    isSelected: n,
    price: a,
    onSelect: s,
    shouldDisplayHeader: I = false,
    className: S
  } = e, {
    product: C
  } = (0, m.T)(t, true), {
    giftRecipient: N,
    giftRecipientError: R
  } = (0, f.wD)(), P = (0, u.e7)([h.default], () => h.default.getCurrentUser()), D = (0, y.kd)(C), w = i.useRef(null);
  if (null == C) return null;
  let [L] = C.items;
  l()(null != L, "Product item should not be empty");
  let x = () => {
      if ((null == C ? true : C.type) === c.Z.BUNDLE) return null;
      switch (L.type) {
        case c.Z.AVATAR_DECORATION:
          return O.intl.string(O.t["7v0T9P"]);
        case c.Z.PROFILE_EFFECT:
          return O.intl.string(O.t.wR5wOo);
        case c.Z.NAMEPLATE:
          return O.intl.string(O.t.x5CoXR);
        default:
          return null
      }
    },
    M = null != N && N.id !== (null == P ? true : P.id) && C.type !== c.Z.BUNDLE && L.type !== c.Z.NAMEPLATE,
    k = () => {
      null != t && null != s && s(t)
    };
  return (0, r.jsxs)("div", {
    className: S,
    children: [I && (0, r.jsx)("div", {
      className: v.previewTitleContainer,
      children: (0, r.jsx)(d.gNt, {
        label: O.intl.string(O.t.PpoJzt),
        children: M && (0, r.jsx)(d.yRy, {
          targetElementRef: w,
          preload: () => (0, p.Z)(N.id, N.getAvatarURL(null, 80)),
          renderPopout: e => (0, r.jsx)(_.Z, A(T({}, e), {
            user: N,
            pendingAvatar: N.getAvatarURL(null, (0, d.pxk)(d.EFr.SIZE_80)),
            pendingAvatarDecoration: (0, g.M)(L) ? L : null,
            pendingProfileEffect: (0, E.H)(L) ? L : null,
            canUsePremiumCustomization: true,
            disabledInputs: true,
            hideExampleButton: true
          })),
          align: "center",
          position: "right",
          children: e => (0, r.jsx)(d.P3F, A(T({}, e), {
            className: v.previewLink,
            innerRef: w,
            children: (0, r.jsx)(d.Text, {
              variant: "text-xs/medium",
              color: "text-link",
              children: O.intl.string(O.t["2GnJQL"])
            })
          }))
        }, N.id)
      })
    }), (0, r.jsxs)(d.P3F, {
      tag: "div",
      onClick: k,
      className: o()(v.previewContainer, {
        [v.previewContainerSelected]: n && null == R,
        [v.previewContainerError]: n && null != R
      }),
      children: [(0, r.jsxs)("div", {
        className: v.giftInfoContainer,
        children: [(0, r.jsx)(b.O, {
          product: C,
          fallbackLabel: null
        }), (0, r.jsxs)("div", {
          className: v.previewTextContainer,
          children: [(0, r.jsx)(d.Text, {
            variant: "text-md/semibold",
            children: D
          }), (0, r.jsx)(d.Heading, {
            variant: "heading-sm/medium",
            color: "header-secondary",
            children: x()
          })]
        }), (0, r.jsx)(d.Text, {
          variant: "text-md/semibold",
          children: a
        })]
      }), n && null != R && (0, r.jsx)("div", {
        className: v.recipientError,
        children: (0, r.jsx)(d.Text, {
          variant: "text-sm/normal",
          color: "status-danger",
          children: R
        })
      })]
    })]
  })
}