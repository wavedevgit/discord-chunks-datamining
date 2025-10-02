/** Chunk was on web.js **/
/** chunk id: 628952, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => S
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
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

function O(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function v(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      O(e, t, n[t])
    })
  }
  return e
}

function I(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function T(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : I(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let S = e => {
  let {
    skuId: t,
    isSelected: n,
    price: a,
    onSelect: O,
    shouldDisplayHeader: I = false,
    className: S
  } = e, {
    product: A
  } = (0, p.T)(t), {
    giftRecipient: C,
    giftRecipientError: N
  } = (0, u.wD)(), R = (0, l.e7)([_.default], () => _.default.getCurrentUser()), P = (0, E.kd)(A), w = i.useRef(null);
  if (null == A) return null;
  let [D] = A.items, L = () => {
    switch (D.type) {
      case s.Z.AVATAR_DECORATION:
        return b.intl.string(b.t["7v0T9P"]);
      case s.Z.PROFILE_EFFECT:
        return b.intl.string(b.t.wR5wOj);
      case s.Z.NAMEPLATE:
        return b.intl.string(b.t.x5CoXV);
      default:
        return null
    }
  }, x = null != C && C.id !== (null == R ? true : R.id) && D.type !== s.Z.NAMEPLATE, j = () => {
    null != t && null != O && O(t)
  };
  return (0, r.jsxs)("div", {
    className: S,
    children: [I && (0, r.jsxs)("div", {
      className: y.previewTitleContainer,
      children: [(0, r.jsx)(c.vwX, {
        className: y.previewTitle,
        children: b.intl.string(b.t.PpoJzs)
      }), x && (0, r.jsx)(c.yRy, {
        targetElementRef: w,
        preload: () => (0, f.Z)(C.id, C.getAvatarURL(null, 80)),
        renderPopout: e => (0, r.jsx)(d.Z, T(v({}, e), {
          user: C,
          pendingAvatar: C.getAvatarURL(null, (0, c.pxk)(c.EFr.SIZE_80)),
          pendingAvatarDecoration: (0, h.M)(D) ? D : null,
          pendingProfileEffect: (0, m.H)(D) ? D : null,
          canUsePremiumCustomization: true,
          disabledInputs: true,
          hideExampleButton: true
        })),
        align: "center",
        position: "right",
        children: e => (0, r.jsx)(c.P3F, T(v({}, e), {
          className: y.previewLink,
          innerRef: w,
          children: (0, r.jsx)(c.Text, {
            variant: "text-xs/medium",
            color: "text-link",
            children: b.intl.string(b.t["2GnJQE"])
          })
        }))
      }, C.id)]
    }), (0, r.jsxs)(c.P3F, {
      tag: "div",
      onClick: j,
      className: o()(y.previewContainer, {
        [y.previewContainerSelected]: n && null == N,
        [y.previewContainerError]: n && null != N
      }),
      children: [(0, r.jsxs)("div", {
        className: y.giftInfoContainer,
        children: [(0, r.jsx)(g.O, {
          product: A,
          fallbackLabel: null
        }), (0, r.jsxs)("div", {
          className: y.previewTextContainer,
          children: [(0, r.jsx)(c.Text, {
            variant: "text-md/semibold",
            children: P
          }), (0, r.jsx)(c.X6q, {
            variant: "heading-sm/medium",
            color: "header-secondary",
            children: L()
          })]
        }), (0, r.jsx)(c.Text, {
          variant: "text-md/semibold",
          children: a
        })]
      }), n && null != N && (0, r.jsx)("div", {
        className: y.recipientError,
        children: (0, r.jsx)(c.Text, {
          variant: "text-sm/normal",
          color: "status-danger",
          children: N
        })
      })]
    })]
  })
}