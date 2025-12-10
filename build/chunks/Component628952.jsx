/** Chunk was on web.js **/
/** chunk id: 628952, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => A
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
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

function S(e, t, n) {
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
      S(e, t, n[t])
    })
  }
  return e
}

function T(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function C(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : T(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let A = e => {
  let {
    skuId: t,
    isSelected: n,
    price: a,
    onSelect: s,
    shouldDisplayHeader: S = false,
    className: T,
    previewHeaderClassName: A,
    hideProfilePreview: N = false
  } = e, {
    product: P
  } = (0, h.T)(t, true), {
    giftRecipient: R,
    giftRecipientError: D
  } = (0, f.wD)(), w = (0, u.e7)([m.default], () => m.default.getCurrentUser()), x = (0, y.kd)(P), L = i.useRef(null);
  if (null == P) return null;
  let [j] = P.items;
  l()(null != j, "Product item should not be empty");
  let M = () => {
      if ((null == P ? true : P.type) === c.Z.BUNDLE) return null;
      switch (j.type) {
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
    k = null != R && R.id !== (null == w ? true : w.id) && P.type !== c.Z.BUNDLE && j.type !== c.Z.NAMEPLATE && !N,
    U = () => {
      null != t && null != s && s(t)
    };
  return (0, r.jsxs)("div", {
    className: T,
    children: [S && (0, r.jsx)("div", {
      className: o()(v.previewTitleContainer, A),
      children: (0, r.jsx)(d.gNt, {
        label: O.intl.string(O.t.PpoJzt),
        children: k && (0, r.jsx)(d.yRy, {
          targetElementRef: L,
          preload: () => (0, _.Z)(R.id, R.getAvatarURL(null, 80)),
          renderPopout: e => (0, r.jsx)(p.Z, C(I({}, e), {
            user: R,
            pendingAvatar: R.getAvatarURL(null, (0, d.dcp)(d.EFr.SIZE_80)),
            pendingAvatarDecoration: (0, g.M)(j) ? j : null,
            pendingProfileEffect: (0, E.H)(j) ? j : null,
            canUsePremiumCustomization: true,
            disabledInputs: true,
            hideExampleButton: true
          })),
          align: "center",
          position: "right",
          children: e => (0, r.jsx)(d.P3F, C(I({}, e), {
            className: v.previewLink,
            innerRef: L,
            children: (0, r.jsx)(d.Text, {
              variant: "text-xs/medium",
              color: "text-link",
              children: O.intl.string(O.t["2GnJQL"])
            })
          }))
        }, R.id)
      })
    }), (0, r.jsxs)(d.P3F, {
      tag: "div",
      onClick: U,
      className: o()(v.previewContainer, {
        [v.previewContainerSelected]: n && null == D,
        [v.previewContainerError]: n && null != D
      }),
      children: [(0, r.jsxs)("div", {
        className: v.giftInfoContainer,
        children: [(0, r.jsx)(b.O, {
          product: P,
          fallbackLabel: null
        }), (0, r.jsxs)("div", {
          className: v.previewTextContainer,
          children: [(0, r.jsx)(d.Text, {
            variant: "text-md/semibold",
            children: x
          }), (0, r.jsx)(d.Heading, {
            variant: "heading-sm/medium",
            color: "text-default",
            children: M()
          })]
        }), (0, r.jsx)(d.Text, {
          variant: "text-md/semibold",
          children: a
        })]
      }), n && null != D && (0, r.jsx)("div", {
        className: v.recipientError,
        children: (0, r.jsx)(d.Text, {
          variant: "text-sm/normal",
          color: "status-danger",
          children: D
        })
      })]
    })]
  })
}