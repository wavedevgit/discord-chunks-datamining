/** Chunk was on 96887 **/
/** chunk id: 616066, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  R: () => p
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  n = require.n(Chunk120356),
  Chunk979554 = require("./979554.js"),
  Chunk481060 = require("./481060.js"),
  Chunk1585 = require("./1585.jsx"),
  Chunk125988 = require("./125988.js"),
  Chunk998502 = require("./998502.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk203200 = require("./203200.js");
let f = Chunk998502.ZP.getEnableHardwareAcceleration() ? Chunk481060.Xo$ : Chunk481060.qEK,
  p = e => {
    var t, r;
    let {
      item: i,
      user: d,
      isHighlighted: p = false,
      isPurchased: h = false,
      avatarSize: m = o.EFr.SIZE_152,
      avatarPlaceholderSrc: P
    } = e, g = (0, s.y9)(m), {
      avatarDecorationSrc: w,
      eventHandlers: y,
      avatarPlaceholderSrc: b
    } = (0, c.Z)({
      user: d,
      avatarDecorationOverride: (null == i ? true : i.type) === l.Z.AVATAR_DECORATION ? i : true,
      size: g,
      onlyAnimateOnHover: !p
    }), _ = u.intl.formatToPlainString(u.t.Do2lxM, {
      a11y_text: i.label
    });
    return (0, a.jsx)(f, (t = function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {},
          a = Object.keys(r);
        "function" == typeof Object.getOwnPropertySymbols && (a = a.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
          return Object.getOwnPropertyDescriptor(r, e).enumerable
        }))), a.forEach(function(t) {
          var a;
          a = r[t], t in e ? Object.defineProperty(e, t, {
            value: a,
            enumerable: true,
            configurable: true,
            writable: true
          }) : e[t] = a
        })
      }
      return e
    }({}, y), r = r = {
      avatarDecoration: w,
      src: p ? null == d ? true : d.getAvatarURL(true, 152, true) : null != P ? P : b,
      imageClassName: p ? v.fadeInAvatarImg : true,
      className: n()(v.avatar, {
        [v.avatarPurchased]: h && !p
      }),
      size: m,
      "aria-label": _
    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : (function(e, t) {
      var r = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        r.push.apply(r, a)
      }
      return r
    })(Object(r)).forEach(function(e) {
      Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
    }), t))
  }