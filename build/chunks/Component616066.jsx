/** Chunk was on web.js **/
/** chunk id: 616066, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  R: () => E
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk979554 = require("./979554.js"),
  Chunk481060 = require("./481060.js"),
  Chunk1585 = require("./1585.jsx"),
  Chunk125988 = require("./125988.js"),
  Chunk998502 = require("./998502.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk101490 = require("./101490.js");

function p(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function _(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      p(e, t, n[t])
    })
  }
  return e
}

function h(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function m(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : h(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let g = Chunk998502.ZP.getEnableHardwareAcceleration() ? Chunk481060.Xo$ : Chunk481060.qEK,
  E = e => {
    let {
      item: t,
      user: n,
      isHighlighted: i = false,
      avatarSize: u = s.EFr.SIZE_152,
      avatarPlaceholderSrc: p,
      className: h
    } = e, E = (0, l.y9)(u), {
      avatarDecorationSrc: b,
      eventHandlers: y,
      avatarPlaceholderSrc: O
    } = (0, c.Z)({
      user: n,
      avatarDecorationOverride: (null == t ? true : t.type) === o.Z.AVATAR_DECORATION ? t : true,
      size: E,
      onlyAnimateOnHoverOrFocus: !i
    }), v = d.intl.formatToPlainString(d.t.Do2lxE, {
      a11y_text: t.label
    });
    return (0, r.jsx)(g, m(_({}, y), {
      avatarDecoration: b,
      src: i ? null == n ? true : n.getAvatarURL(true, 152, true) : null != p ? p : O,
      imageClassName: i ? f.fadeInAvatarImg : true,
      className: a()(h, f.avatar),
      size: u,
      "aria-label": v
    }))
  }