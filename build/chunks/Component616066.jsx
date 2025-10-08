/** Chunk was on 96887 **/
/** chunk id: 616066, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  R: () => v
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk979554 = require("./979554.js"),
  Chunk481060 = require("./481060.js"),
  Chunk1585 = require("./1585.jsx"),
  Chunk125988 = require("./125988.js"),
  Chunk998502 = require("./998502.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk203200 = require("./203200.js");
let p = Chunk998502.ZP.getEnableHardwareAcceleration() ? Chunk481060.Xo$ : Chunk481060.qEK,
  v = e => {
    var t, r;
    let {
      item: n,
      user: d,
      isHighlighted: v = false,
      isPurchased: h = false,
      avatarSize: m = o.EFr.SIZE_152,
      avatarPlaceholderSrc: g
    } = e, P = (0, s.y9)(m), {
      avatarDecorationSrc: w,
      eventHandlers: y,
      avatarPlaceholderSrc: b
    } = (0, c.Z)({
      user: d,
      avatarDecorationOverride: (null == n ? true : n.type) === l.Z.AVATAR_DECORATION ? n : true,
      size: P,
      onlyAnimateOnHoverOrFocus: !v
    }), O = u.intl.formatToPlainString(u.t.Do2lxM, {
      a11y_text: n.label
    });
    return (0, a.jsx)(p, (t = function(e) {
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
      src: v ? null == d ? true : d.getAvatarURL(true, 152, true) : null != g ? g : b,
      imageClassName: v ? f.fadeInAvatarImg : true,
      className: i()(f.avatar, {
        [f.avatarPurchased]: h && !v
      }),
      size: m,
      "aria-label": O
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