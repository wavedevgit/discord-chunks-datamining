/** Chunk was on 38029 **/
/** chunk id: 551425, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  Z: () => x
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk979554 = require("./979554.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk1585 = require("./1585.jsx"),
  Chunk125988 = require("./125988.js"),
  Chunk566697 = require("./566697.jsx"),
  Chunk479446 = require("./479446.js"),
  Chunk981632 = require("./981632.jsx"),
  Chunk876917 = require("./876917.jsx"),
  Chunk594174 = require("./594174.js"),
  Chunk583434 = require("./583434.js"),
  Chunk216541 = require("./216541.jsx"),
  Chunk948067 = require("./948067.js");
let b = Chunk481060.EFr.SIZE_152,
  y = (0, Chunk1585.y9)(b),
  O = t => {
    var e, n;
    let {
      item: r
    } = t, a = (0, s.e7)([f.default], () => f.default.getCurrentUser()), {
      avatarDecorationSrc: c,
      avatarPlaceholderSrc: u,
      eventHandlers: d
    } = (0, o.Z)({
      user: a,
      avatarDecorationOverride: r,
      size: y
    });
    return (0, i.jsx)("div", {
      className: g.avatarDecorationPreview,
      children: (0, i.jsx)(l.qEK, (e = function(t) {
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
        src: u,
        avatarDecoration: c,
        size: b
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
  j = t => {
    let {
      item: e
    } = t;
    return (0, i.jsx)("div", {
      className: g.profileEffectPreview,
      children: (0, i.jsx)(p.Z, {
        isHighlighted: true,
        skuId: null == e ? true : e.skuId
      })
    })
  },
  v = t => {
    let {
      item: e
    } = t;
    return (0, i.jsx)("div", {
      className: g.nameplatePreview,
      children: (0, i.jsx)(c.Z, {
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
      product: e
    } = t;
    return (0, i.jsx)("div", {
      className: g.bundlePreview,
      children: (0, i.jsx)(m.d, {
        product: e,
        isPurchased: false,
        isHighlighted: false
      })
    })
  },
  x = t => {
    let {
      giftCode: e
    } = t, {
      product: n,
      isFetching: s
    } = (0, h.T)(e.skuId, true);
    if (s || null == n) return (0, i.jsx)("div", {
      className: g.spinnerContainer,
      children: (0, i.jsx)(l.$jN, {})
    });
    if (n.type === r.Z.BUNDLE) return 0 === n.items.length ? null : (0, i.jsx)(P, {
      product: n
    });
    let a = null == n ? true : n.items[0];
    switch (null == a ? true : a.type) {
      case r.Z.AVATAR_DECORATION:
        return (0, i.jsx)(O, {
          item: a
        });
      case r.Z.PROFILE_EFFECT:
        return (0, i.jsx)(j, {
          item: a
        });
      case r.Z.NAMEPLATE:
        return (0, i.jsx)(v, {
          item: a
        });
      default:
        return null != e.giftStyle ? (0, i.jsx)(d.Z, {
          defaultAnimationState: u.SR.ACTION,
          idleAnimationState: u.SR.LOOP,
          className: g.giftAnimation,
          giftStyle: e.giftStyle
        }) : null
    }
  }