/** Chunk was on 96887 **/
/** chunk id: 616066, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  R: () => p
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
  Chunk407780 = require("./407780.js");
let v = Chunk998502.ZP.getEnableHardwareAcceleration() ? Chunk481060.Xo$ : Chunk481060.qEK,
  p = e => {
    var t, r;
    let {
      item: n,
      user: d,
      isHighlighted: p = false,
      isPurchased: h = false,
      avatarSize: g = s.EFr.SIZE_152,
      avatarPlaceholderSrc: m
    } = e, y = (0, l.y9)(g), {
      avatarDecorationSrc: P,
      eventHandlers: b,
      avatarPlaceholderSrc: w
    } = (0, c.Z)({
      user: d,
      avatarDecorationOverride: (null == n ? true : n.type) === o.Z.AVATAR_DECORATION ? n : true,
      size: y,
      onlyAnimateOnHover: !p
    }), O = u.intl.formatToPlainString(u.t.Do2lxM, {
      a11y_text: n.label
    });
    return (0, a.jsx)(v, (t = function(e) {
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
    }({}, b), r = r = {
      avatarDecoration: P,
      src: p ? null == d ? true : d.getAvatarURL(true, 152, true) : null != m ? m : w,
      imageClassName: p ? f.fadeInAvatarImg : true,
      className: i()(f.avatar, {
        [f.avatarPurchased]: h && !p
      }),
      size: g,
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