/** Chunk was on web.js **/
/** chunk id: 979849, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => v
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk954921 = require("./954921.jsx"),
  Chunk290863 = require("./290863.js"),
  Chunk837921 = require("./837921.js"),
  Chunk351242 = require("./351242.jsx"),
  Chunk385612 = require("./385612.jsx"),
  Chunk339984 = require("./339984.js"),
  Chunk577401 = require("./577401.js");

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

function y(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function b(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : y(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let O = Chunk837921.Ay.getEnableHardwareAcceleration() ? Chunk397927.JsQ : Chunk397927.euF;

function v(e) {
  let {
    user: t,
    guild: n,
    displayProfile: a,
    canUsePremiumCustomization: f,
    previewAvatar: g,
    previewAvatarDecorationSrc: y,
    previewTheme: v,
    previewPrimaryColor: A,
    className: I,
    disabledInputs: S,
    isTryItOut: T,
    onUpsellClick: C
  } = e, N = i.useRef(null), {
    analyticsLocations: R,
    newestAnalyticsLocation: w
  } = (0, c.Ay)(), P = (0, o.bG)([d.A], () => d.A.getStatus(t.id)), D = null == n || (null == a ? true : a.canUsePremiumProfileCustomization) || f, x = (0, r.jsx)(O, {
    src: g,
    avatarDecoration: y,
    imageClassName: s()(I, {
      [m.Lw]: !S
    }),
    size: l._3J.SIZE_80,
    "aria-label": t.username,
    status: P,
    statusTooltip: false,
    statusBackdropColor: null != A ? (0, l.C$5)(v) : true
  });
  return S ? (0, r.jsx)("div", {
    className: m.my,
    children: x
  }) : D ? (0, r.jsx)(l.YNO, {
    targetElementRef: N,
    renderPopout: e => {
      let {
        closePopout: t
      } = e;
      return (0, r.jsx)(p.A, {
        className: m.MK,
        onClose: t,
        onChangeAvatar: () => (0, _.XD)({
          uploadType: h.HL.AVATAR,
          guildId: null == n ? true : n.id,
          analyticsSource: w,
          isTryItOut: T
        }),
        onChangeAvatarDecoration: () => {
          (0, u.L)({
            guild: null == n ? true : n,
            analyticsLocations: R
          })
        }
      })
    },
    children: e => (0, r.jsxs)(l.DUT, b(E({}, e), {
      innerRef: N,
      className: s()(m.my, m.vk),
      children: [x, (0, r.jsx)(l.R2l, {
        size: "custom",
        className: m.QY,
        width: 20,
        height: 20,
        color: "white"
      })]
    }))
  }) : (0, r.jsxs)(l.DUT, {
    onClick: C,
    className: s()(m.my, m.vk),
    children: [x, (0, r.jsx)(l.tvc, {
      size: "custom",
      className: m.QY,
      width: 20,
      height: 20,
      color: "white"
    })]
  })
}