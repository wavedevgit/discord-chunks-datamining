/** Chunk was on 38029 **/
/** chunk id: 551425, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => x
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
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
  O = e => {
    var t, n;
    let {
      item: i
    } = e, a = (0, s.e7)([p.default], () => p.default.getCurrentUser()), {
      avatarDecorationSrc: c,
      avatarPlaceholderSrc: u,
      eventHandlers: d
    } = (0, o.Z)({
      user: a,
      avatarDecorationOverride: i,
      size: y
    });
    return (0, r.jsx)("div", {
      className: g.avatarDecorationPreview,
      children: (0, r.jsx)(l.qEK, (t = function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
          "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
          }))), r.forEach(function(t) {
            var r;
            r = n[t], t in e ? Object.defineProperty(e, t, {
              value: r,
              enumerable: true,
              configurable: true,
              writable: true
            }) : e[t] = r
          })
        }
        return e
      }({}, d), n = n = {
        "aria-label": i.label,
        src: u,
        avatarDecoration: c,
        size: b
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          n.push.apply(n, r)
        }
        return n
      })(Object(n)).forEach(function(e) {
        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
      }), t))
    })
  },
  j = e => {
    let {
      item: t
    } = e;
    return (0, r.jsx)("div", {
      className: g.profileEffectPreview,
      children: (0, r.jsx)(f.Z, {
        isHighlighted: true,
        skuId: null == t ? true : t.skuId
      })
    })
  },
  P = e => {
    let {
      item: t
    } = e;
    return (0, r.jsx)("div", {
      className: g.nameplatePreview,
      children: (0, r.jsx)(c.Z, {
        nameplate: t,
        className: g.nameplate,
        nameplatePreviewSize: "xlarge",
        isHighlighted: true,
        showPlaceholderUser: true
      })
    })
  },
  v = e => {
    let {
      product: t
    } = e;
    return (0, r.jsx)("div", {
      className: g.bundlePreview,
      children: (0, r.jsx)(m.d, {
        product: t,
        isPurchased: false,
        isHighlighted: false
      })
    })
  },
  x = e => {
    let {
      giftCode: t
    } = e, {
      product: n,
      isFetching: s
    } = (0, h.T)(t.skuId, true);
    if (s || null == n) return (0, r.jsx)("div", {
      className: g.spinnerContainer,
      children: (0, r.jsx)(l.$jN, {})
    });
    if (n.type === i.Z.BUNDLE) return 0 === n.items.length ? null : (0, r.jsx)(v, {
      product: n
    });
    let a = null == n ? true : n.items[0];
    switch (null == a ? true : a.type) {
      case i.Z.AVATAR_DECORATION:
        return (0, r.jsx)(O, {
          item: a
        });
      case i.Z.PROFILE_EFFECT:
        return (0, r.jsx)(j, {
          item: a
        });
      case i.Z.NAMEPLATE:
        return (0, r.jsx)(P, {
          item: a
        });
      default:
        return null != t.giftStyle ? (0, r.jsx)(d.Z, {
          defaultAnimationState: u.SR.ACTION,
          idleAnimationState: u.SR.LOOP,
          className: g.giftAnimation,
          giftStyle: t.giftStyle
        }) : null
    }
  }