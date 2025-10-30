/** Chunk was on web.js **/
/** chunk id: 397689, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => v
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk1585 = require("./1585.jsx"),
  Chunk158776 = require("./158776.js"),
  Chunk998502 = require("./998502.js"),
  Chunk445924 = require("./445924.jsx"),
  Chunk654904 = require("./654904.jsx"),
  Chunk486324 = require("./486324.js"),
  Chunk86698 = require("./86698.js");

function g(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function E(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      g(e, t, n[t])
    })
  }
  return e
}

function b(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function y(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : b(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let O = Chunk998502.ZP.getEnableHardwareAcceleration() ? Chunk481060.Xo$ : Chunk481060.qEK;

function v(e) {
  let {
    user: t,
    guild: n,
    displayProfile: a,
    canUsePremiumCustomization: f,
    previewAvatar: g,
    previewAvatarDecorationSrc: b,
    previewTheme: v,
    previewPrimaryColor: I,
    className: S,
    disabledInputs: T,
    isTryItOutFlow: A,
    onUpsellClick: C
  } = e, N = i.useRef(null), {
    analyticsLocations: R,
    newestAnalyticsLocation: P
  } = (0, c.ZP)(), w = (0, s.e7)([d.Z], () => d.Z.getStatus(t.id)), D = null == n || (null == a ? true : a.canUsePremiumProfileCustomization) || f, L = (0, r.jsx)(O, {
    src: g,
    avatarDecoration: b,
    imageClassName: o()(S, {
      [m.overlay]: !T
    }),
    size: l.EFr.SIZE_80,
    "aria-label": t.username,
    status: w,
    statusTooltip: false,
    statusBackdropColor: null != I ? (0, l.QFD)(v) : true
  });
  return T ? (0, r.jsx)("div", {
    className: m.avatar,
    children: L
  }) : D ? (0, r.jsx)(l.yRy, {
    targetElementRef: N,
    renderPopout: e => {
      let {
        closePopout: t
      } = e;
      return (0, r.jsx)(_.Z, {
        className: m.menu,
        onClose: t,
        onChangeAvatar: () => (0, p.$r)({
          uploadType: h.pC.AVATAR,
          guildId: null == n ? true : n.id,
          analyticsSource: P,
          isTryItOutFlow: A
        }),
        onChangeAvatarDecoration: () => {
          (0, u.ps)({
            guild: null == n ? true : n,
            analyticsLocations: R,
            isTryItOutFlow: A
          })
        }
      })
    },
    children: e => (0, r.jsxs)(l.P3F, y(E({}, e), {
      innerRef: N,
      className: o()(m.avatar, m.clickable),
      children: [L, (0, r.jsx)(l.vdY, {
        size: "custom",
        className: m.overlayIcon,
        width: 20,
        height: 20,
        color: "white"
      })]
    }))
  }) : (0, r.jsxs)(l.P3F, {
    onClick: C,
    className: o()(m.avatar, m.clickable),
    children: [L, (0, r.jsx)(l.SrA, {
      size: "custom",
      className: m.overlayIcon,
      width: 20,
      height: 20,
      color: "white"
    })]
  })
}