/** Chunk was on 96910 **/
/** chunk id: 616066, original params: e,t,r (module,exports,require) **/
"use strict";
require.d(exports, {
  R: () => h
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk979554 = require("./979554.js"),
  Chunk481060 = require("./481060.js"),
  Chunk1585 = require("./1585.jsx"),
  Chunk125988 = require("./125988.js"),
  Chunk998502 = require("./998502.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk765029 = require("./765029.js");
let b = Chunk998502.ZP.getEnableHardwareAcceleration() ? Chunk481060.Xo$ : Chunk481060.qEK,
  h = e => {
    var t, r;
    let {
      item: a,
      user: u,
      isHighlighted: h = false,
      isPurchased: f = false,
      avatarSize: v = o.EFr.SIZE_152,
      avatarPlaceholderSrc: m
    } = e, _ = (0, s.y9)(v), {
      avatarDecorationSrc: g,
      eventHandlers: O,
      avatarPlaceholderSrc: y
    } = (0, c.Z)({
      user: u,
      avatarDecorationOverride: (null == a ? true : a.type) === l.Z.AVATAR_DECORATION ? a : true,
      size: _,
      onlyAnimateOnHover: !h
    }), C = d.intl.formatToPlainString(d.t.Do2lxM, {
      a11y_text: a.label
    });
    return (0, n.jsx)(b, (t = function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {},
          n = Object.keys(r);
        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
          return Object.getOwnPropertyDescriptor(r, e).enumerable
        }))), n.forEach(function(t) {
          var n;
          n = r[t], t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: true,
            configurable: true,
            writable: true
          }) : e[t] = n
        })
      }
      return e
    }({}, O), r = r = {
      avatarDecoration: g,
      src: h ? null == u ? true : u.getAvatarURL(true, 152, true) : null != m ? m : y,
      imageClassName: h ? p.fadeInAvatarImg : true,
      className: i()(p.avatar, {
        [p.avatarPurchased]: f && !h
      }),
      size: v,
      "aria-label": C
    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : (function(e, t) {
      var r = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        r.push.apply(r, n)
      }
      return r
    })(Object(r)).forEach(function(e) {
      Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
    }), t))
  }