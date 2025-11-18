/** Chunk was on web.js **/
/** chunk id: 628952, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => C
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
    className: S,
    previewHeaderClassName: C,
    hideProfilePreview: N = false
  } = e, {
    product: R
  } = (0, m.T)(t, true), {
    giftRecipient: P,
    giftRecipientError: D
  } = (0, f.wD)(), w = (0, u.e7)([h.default], () => h.default.getCurrentUser()), L = (0, y.kd)(R), x = i.useRef(null);
  if (null == R) return null;
  let [M] = R.items;
  l()(null != M, "Product item should not be empty");
  let k = () => {
      if ((null == R ? true : R.type) === c.Z.BUNDLE) return null;
      switch (M.type) {
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
    j = null != P && P.id !== (null == w ? true : w.id) && R.type !== c.Z.BUNDLE && M.type !== c.Z.NAMEPLATE && !N,
    U = () => {
      null != t && null != s && s(t)
    };
  return (0, r.jsxs)("div", {
    className: S,
    children: [I && (0, r.jsx)("div", {
      className: o()(v.previewTitleContainer, C),
      children: (0, r.jsx)(d.gNt, {
        label: O.intl.string(O.t.PpoJzt),
        children: j && (0, r.jsx)(d.yRy, {
          targetElementRef: x,
          preload: () => (0, p.Z)(P.id, P.getAvatarURL(null, 80)),
          renderPopout: e => (0, r.jsx)(_.Z, A(T({}, e), {
            user: P,
            pendingAvatar: P.getAvatarURL(null, (0, d.pxk)(d.EFr.SIZE_80)),
            pendingAvatarDecoration: (0, g.M)(M) ? M : null,
            pendingProfileEffect: (0, E.H)(M) ? M : null,
            canUsePremiumCustomization: true,
            disabledInputs: true,
            hideExampleButton: true
          })),
          align: "center",
          position: "right",
          children: e => (0, r.jsx)(d.P3F, A(T({}, e), {
            className: v.previewLink,
            innerRef: x,
            children: (0, r.jsx)(d.Text, {
              variant: "text-xs/medium",
              color: "text-link",
              children: O.intl.string(O.t["2GnJQL"])
            })
          }))
        }, P.id)
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
          product: R,
          fallbackLabel: null
        }), (0, r.jsxs)("div", {
          className: v.previewTextContainer,
          children: [(0, r.jsx)(d.Text, {
            variant: "text-md/semibold",
            children: L
          }), (0, r.jsx)(d.Heading, {
            variant: "heading-sm/medium",
            color: "header-secondary",
            children: k()
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