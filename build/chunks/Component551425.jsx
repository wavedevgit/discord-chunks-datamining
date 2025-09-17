/** Chunk was on 38029 **/
/** chunk id: 551425, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  Z: () => P
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
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
  Chunk799940 = require("./799940.js");
let h = Chunk481060.EFr.SIZE_152,
  y = (0, Chunk1585.y9)(h),
  b = t => {
    var e, n;
    let {
      item: r
    } = t, a = (0, l.e7)([f.default], () => f.default.getCurrentUser()), {
      avatarDecorationSrc: u,
      avatarPlaceholderSrc: c,
      eventHandlers: d
    } = (0, o.Z)({
      user: a,
      avatarDecorationOverride: r,
      size: y
    });
    return (0, i.jsx)("div", {
      className: g.avatarDecorationPreview,
      children: (0, i.jsx)(s.qEK, (e = function(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {},
            i = Object.keys(n);
          "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(t) {
            return Object.getOwnPropertyDescriptor(n, t).enumerable
          }))), i.forEach(function(e) {
            var i;
            i = n[e], e in t ? Object.defineProperty(t, e, {
              value: i,
              enumerable: true,
              configurable: true,
              writable: true
            }) : t[e] = i
          })
        }
        return t
      }({}, d), n = n = {
        "aria-label": r.label,
        src: c,
        avatarDecoration: u,
        size: h
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : (function(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(t);
          n.push.apply(n, i)
        }
        return n
      })(Object(n)).forEach(function(t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
      }), e))
    })
  },
  O = t => {
    let {
      item: e
    } = t;
    return (0, i.jsx)("div", {
      className: g.profileEffectPreview,
      children: (0, i.jsx)(d.Z, {
        isHovering: true,
        profileEffectId: null == e ? true : e.id
      })
    })
  },
  v = t => {
    let {
      item: e
    } = t;
    return (0, i.jsx)("div", {
      className: g.nameplatePreview,
      children: (0, i.jsx)(m.Z, {
        nameplate: e,
        className: g.nameplate,
        nameplatePreviewSize: "xlarge",
        isHighlighted: true,
        showPlaceholderUser: true
      })
    })
  },
  P = t => {
    let {
      giftCode: e
    } = t, n = (0, l.e7)([p.Z], () => p.Z.getProduct(e.skuId)), s = null == n ? true : n.items[0];
    switch (null == s ? true : s.type) {
      case r.Z.AVATAR_DECORATION:
        return (0, i.jsx)(b, {
          item: s
        });
      case r.Z.PROFILE_EFFECT:
        return (0, i.jsx)(O, {
          item: s
        });
      case r.Z.NAMEPLATE:
        return (0, i.jsx)(v, {
          item: s
        });
      default:
        return null != e.giftStyle ? (0, i.jsx)(c.Z, {
          defaultAnimationState: u.SR.ACTION,
          idleAnimationState: u.SR.LOOP,
          className: g.giftAnimation,
          giftStyle: e.giftStyle
        }) : null
    }
  }