/** Chunk was on web.js **/
/** chunk id: 397689, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => v
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
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
    previewPrimaryColor: S,
    className: I,
    disabledInputs: T,
    isTryItOut: C,
    onUpsellClick: A
  } = e, N = i.useRef(null), {
    analyticsLocations: P,
    newestAnalyticsLocation: R
  } = (0, c.ZP)(), D = (0, s.e7)([d.Z], () => d.Z.getStatus(t.id)), w = null == n || (null == a ? true : a.canUsePremiumProfileCustomization) || f, x = (0, r.jsx)(O, {
    src: g,
    avatarDecoration: b,
    imageClassName: o()(I, {
      [h.overlay]: !T
    }),
    size: l.EFr.SIZE_80,
    "aria-label": t.username,
    status: D,
    statusTooltip: false,
    statusBackdropColor: null != S ? (0, l.QFD)(v) : true
  });
  return T ? (0, r.jsx)("div", {
    className: h.avatar,
    children: x
  }) : w ? (0, r.jsx)(l.yRy, {
    targetElementRef: N,
    renderPopout: e => {
      let {
        closePopout: t
      } = e;
      return (0, r.jsx)(p.Z, {
        className: h.menu,
        onClose: t,
        onChangeAvatar: () => (0, _.$r)({
          uploadType: m.pC.AVATAR,
          guildId: null == n ? true : n.id,
          analyticsSource: R,
          isTryItOut: C
        }),
        onChangeAvatarDecoration: () => {
          (0, u.ps)({
            guild: null == n ? true : n,
            analyticsLocations: P
          })
        }
      })
    },
    children: e => (0, r.jsxs)(l.P3F, y(E({}, e), {
      innerRef: N,
      className: o()(h.avatar, h.clickable),
      children: [x, (0, r.jsx)(l.vdY, {
        size: "custom",
        className: h.overlayIcon,
        width: 20,
        height: 20,
        color: "white"
      })]
    }))
  }) : (0, r.jsxs)(l.P3F, {
    onClick: A,
    className: o()(h.avatar, h.clickable),
    children: [x, (0, r.jsx)(l.SrA, {
      size: "custom",
      className: h.overlayIcon,
      width: 20,
      height: 20,
      color: "white"
    })]
  })
}