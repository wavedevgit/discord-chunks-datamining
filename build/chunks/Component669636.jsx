/** Chunk was on 96887 **/
/** chunk id: 669636, original params: e,t,r (module,exports,require) **/
require.r(exports), require.d(exports, {
  default: () => D
}), require("./388685.js"), require("./314940.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk512722 = require("./512722.js"),
  l = require.n(Chunk512722),
  Chunk6383 = require("./6383.js"),
  Chunk278074 = require("./278074.js"),
  Chunk979554 = require("./979554.js"),
  Chunk314794 = require("./314794.js"),
  Chunk399606 = require("./399606.js"),
  Chunk481060 = require("./481060.js"),
  Chunk47280 = require("./47280.js"),
  Chunk876917 = require("./876917.jsx"),
  Chunk594174 = require("./594174.js"),
  Chunk508925 = require("./508925.jsx"),
  Chunk616066 = require("./616066.jsx"),
  Chunk216541 = require("./216541.jsx"),
  Chunk22267 = require("./22267.jsx"),
  Chunk302800 = require("./302800.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk186175 = require("./186175.js"),
  Chunk593639 = require("./593639.js"),
  Chunk945182 = require("./945182.js"),
  Chunk234286 = require("./234286.js");

function x(e) {
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
}
let S = e => {
    let {
      product: t,
      pairedProduct: r,
      itemConsumed: i,
      forCollectedModal: n
    } = e, [o] = t.items, y = null == r ? true : r.items[0], x = (0, u.e7)([h.default], () => {
      let e = h.default.getCurrentUser();
      return l()(null != e, "User cannot be undefined"), e
    }), S = Object.values(d.a).includes(t.skuId), C = (0, f.ZP)({
      location: "CollectiblesProductPreview"
    });
    return (0, s.EQ)(t.type).with(c.Z.PROFILE_EFFECT, () => (0, a.jsx)("div", {
      className: _.profileEffectShopPreview,
      children: (0, a.jsx)(p.Z, {
        forCollectedModal: true,
        profileEffectId: o.id
      })
    })).with(c.Z.AVATAR_DECORATION, () => (l()(o.type === c.Z.AVATAR_DECORATION, "ts-match already checked the type"), null != y && y.type === c.Z.AVATAR_DECORATION) ? (0, a.jsxs)("div", {
      children: [(0, a.jsx)("div", {
        className: _.avatarDecorationPairOne,
        children: (0, a.jsx)(P.R, {
          item: o,
          user: x,
          avatarSize: v.EFr.SIZE_120,
          isPurchased: false,
          isHighlighted: true
        })
      }), (0, a.jsx)("div", {
        className: _.avatarDecorationPairTwo,
        children: (0, a.jsx)(P.R, {
          item: y,
          avatarSize: v.EFr.SIZE_120,
          isPurchased: false
        })
      })]
    }) : (0, a.jsx)(P.R, {
      item: o,
      user: x,
      avatarSize: v.EFr.SIZE_120,
      isPurchased: false,
      isHighlighted: true
    })).with(c.Z.NAMEPLATE, () => (0, a.jsx)("div", {
      className: _.nameplate,
      children: (0, a.jsx)(w.Z, {
        nameplate: o,
        user: x,
        nameplatePreviewSize: "large",
        isHighlighted: true
      })
    })).with(c.Z.BUNDLE, () => (0, a.jsx)("div", {
      className: _.bundlePreview,
      children: (0, a.jsx)(g.d, {
        containerClassName: _.bundlePreviewContainer,
        product: t,
        user: x,
        isPurchased: false,
        isHighlighted: true,
        forCollectedModal: n
      })
    })).with(c.Z.EXTERNAL_SKU, () => {
      if (S)
        if (i) return (0, a.jsx)("img", {
          src: C ? E : j,
          alt: b.intl.string(b.t.t0xkSE),
          style: {
            width: "100%"
          }
        });
        else return (0, a.jsx)("img", {
          src: O,
          alt: b.intl.string(b.t.g5W1g4)
        });
      return (0, a.jsx)(m.b, {
        product: t
      })
    }).otherwise(() => null)
  },
  C = e => {
    let {
      reducedMotion: t,
      displayOptions: r
    } = e, [n, l] = i.useState(false), s = (0, v.q_F)({
      from: {
        transform: "translateX(100%)",
        right: "-100%"
      },
      to: {
        transform: "translateX(50%)",
        right: "50%"
      },
      config: {
        duration: 1550
      },
      onRest: () => setTimeout(() => l(true), 100)
    }), c = (0, v.q_F)({
      from: {
        transform: "translateX(100%)",
        right: "-100%"
      },
      to: {
        transform: "translateX(50%)",
        right: "50%"
      },
      config: {
        duration: 1550
      },
      reverse: n
    }), d = (0, v.q_F)({
      from: {
        transform: "translateX(50%)",
        right: "50%",
        opacity: 1
      },
      to: {
        transform: "translateX(50%)",
        right: "50%",
        opacity: 0
      },
      config: {
        duration: 300
      },
      delay: 600
    }, "animate-always");
    return (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)(o.animated.div, {
        className: _.easterEggContainer,
        style: s,
        children: (0, a.jsx)(S, x({}, e))
      }), (0, a.jsx)(o.animated.div, {
        className: _.easterEggContainer,
        style: t ? d : c,
        children: (0, a.jsx)("img", {
          src: r.getSrc(),
          style: r.style,
          alt: "",
          "aria-hidden": "true"
        })
      })]
    })
  };

function D(e) {
  var t, r;
  let i = (0, y.v)(e.product.categorySkuId);
  return null != i ? (0, a.jsx)(C, (t = x({}, e), r = r = {
    displayOptions: i
  }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : (function(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var a = Object.getOwnPropertySymbols(e);
      r.push.apply(r, a)
    }
    return r
  })(Object(r)).forEach(function(e) {
    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
  }), t)) : (0, a.jsx)(S, x({}, e))
}