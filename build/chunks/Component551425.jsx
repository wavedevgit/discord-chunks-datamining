/** Chunk was on 92446 **/
/** chunk id: 551425, original params: t,e,i (module,exports,require) **/
require.d(exports, {
  Z: () => P
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk979554 = require("./979554.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk1585 = require("./1585.jsx"),
  Chunk125988 = require("./125988.js"),
  Chunk479446 = require("./479446.js"),
  Chunk981632 = require("./981632.jsx"),
  Chunk876917 = require("./876917.jsx"),
  Chunk594174 = require("./594174.js"),
  Chunk597688 = require("./597688.js"),
  Chunk22267 = require("./22267.jsx"),
  Chunk948067 = require("./948067.js");
let g = Chunk481060.EFr.SIZE_152,
  y = (0, Chunk1585.y9)(g),
  O = t => {
    var e, i;
    let {
      item: r
    } = t, a = (0, l.e7)([p.default], () => p.default.getCurrentUser()), {
      avatarDecorationSrc: u,
      avatarPlaceholderSrc: c,
      eventHandlers: d
    } = (0, o.Z)({
      user: a,
      avatarDecorationOverride: r,
      size: y
    });
    return (0, n.jsx)("div", {
      className: h.avatarDecorationPreview,
      children: (0, n.jsx)(s.qEK, (e = function(t) {
        for (var e = 1; e < arguments.length; e++) {
          var i = null != arguments[e] ? arguments[e] : {},
            n = Object.keys(i);
          "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(i).filter(function(t) {
            return Object.getOwnPropertyDescriptor(i, t).enumerable
          }))), n.forEach(function(e) {
            var n;
            n = i[e], e in t ? Object.defineProperty(t, e, {
              value: n,
              enumerable: true,
              configurable: true,
              writable: true
            }) : t[e] = n
          })
        }
        return t
      }({}, d), i = i = {
        "aria-label": r.label,
        src: c,
        avatarDecoration: u,
        size: g
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : (function(t, e) {
        var i = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(t);
          i.push.apply(i, n)
        }
        return i
      })(Object(i)).forEach(function(t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t))
      }), e))
    })
  },
  b = t => {
    let {
      item: e
    } = t;
    return (0, n.jsx)("div", {
      className: h.profileEffectPreview,
      children: (0, n.jsx)(d.Z, {
        isHovering: true,
        profileEffectId: null == e ? true : e.id
      })
    })
  },
  j = t => {
    let {
      item: e
    } = t;
    return (0, n.jsx)("div", {
      className: h.nameplatePreview,
      children: (0, n.jsx)(m.Z, {
        nameplate: e,
        className: h.nameplate,
        nameplatePreviewSize: "xlarge",
        isHighlighted: true,
        showPlaceholderUser: true
      })
    })
  },
  P = t => {
    let {
      giftCode: e
    } = t, i = (0, l.e7)([f.Z], () => f.Z.getProduct(e.skuId)), s = null == i ? true : i.items[0];
    switch (null == s ? true : s.type) {
      case r.Z.AVATAR_DECORATION:
        return (0, n.jsx)(O, {
          item: s
        });
      case r.Z.PROFILE_EFFECT:
        return (0, n.jsx)(b, {
          item: s
        });
      case r.Z.NAMEPLATE:
        return (0, n.jsx)(j, {
          item: s
        });
      default:
        return null != e.giftStyle ? (0, n.jsx)(c.Z, {
          defaultAnimationState: u.SR.ACTION,
          idleAnimationState: u.SR.LOOP,
          className: h.giftAnimation,
          giftStyle: e.giftStyle
        }) : null
    }
  }