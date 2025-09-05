/** Chunk was on 96887 **/
/** chunk id: 669636, original params: e,t,r (module,exports,require) **/
require.r(exports), require.d(exports, {
  default: () => A
}), require("./388685.js"), require("./314940.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk512722 = require("./512722.js"),
  s = require.n(Chunk512722),
  Chunk261616 = require("./261616.js"),
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
  Chunk793000 = require("./793000.js"),
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
    } = e, [o] = t.items, b = null == r ? true : r.items[0], x = (0, u.e7)([g.default], () => {
      let e = g.default.getCurrentUser();
      return s()(null != e, "User cannot be undefined"), e
    }), S = Object.values(d.a).includes(t.skuId), C = (0, h.ZP)({
      location: "CollectiblesProductPreview"
    });
    return (0, c.EQ)(t.type).with(l.Z.PROFILE_EFFECT, () => (0, a.jsx)("div", {
      className: O.profileEffectShopPreview,
      children: (0, a.jsx)(p.Z, {
        forCollectedModal: true,
        profileEffectId: o.id
      })
    })).with(l.Z.AVATAR_DECORATION, () => (s()(o.type === l.Z.AVATAR_DECORATION, "ts-match already checked the type"), null != b && b.type === l.Z.AVATAR_DECORATION) ? (0, a.jsxs)("div", {
      children: [(0, a.jsx)("div", {
        className: O.avatarDecorationPairOne,
        children: (0, a.jsx)(v.R, {
          item: o,
          user: x,
          avatarSize: f.EFr.SIZE_120,
          isPurchased: false,
          isHighlighted: true
        })
      }), (0, a.jsx)("div", {
        className: O.avatarDecorationPairTwo,
        children: (0, a.jsx)(v.R, {
          item: b,
          avatarSize: f.EFr.SIZE_120,
          isPurchased: false
        })
      })]
    }) : (0, a.jsx)(v.R, {
      item: o,
      user: x,
      avatarSize: f.EFr.SIZE_120,
      isPurchased: false,
      isHighlighted: true
    })).with(l.Z.NAMEPLATE, () => (0, a.jsx)("div", {
      className: O.nameplate,
      children: (0, a.jsx)(P.Z, {
        nameplate: o,
        user: x,
        nameplatePreviewSize: "large",
        isHighlighted: true
      })
    })).with(l.Z.BUNDLE, () => (0, a.jsx)("div", {
      className: O.bundlePreview,
      children: (0, a.jsx)(j.d, {
        containerClassName: O.bundlePreviewContainer,
        product: t,
        user: x,
        isPurchased: false,
        isHighlighted: true,
        forCollectedModal: n
      })
    })).with(l.Z.EXTERNAL_SKU, () => {
      if (S)
        if (i) return (0, a.jsx)("img", {
          src: C ? _ : E,
          alt: y.intl.string(y.t.t0xkSE),
          style: {
            width: "100%"
          }
        });
        else return (0, a.jsx)("img", {
          src: w,
          alt: y.intl.string(y.t.g5W1g4)
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
    } = e, [n, s] = i.useState(false), c = (0, f.q_F)({
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
      onRest: () => setTimeout(() => s(true), 100)
    }), l = (0, f.q_F)({
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
    }), d = (0, f.q_F)({
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
        className: O.easterEggContainer,
        style: c,
        children: (0, a.jsx)(S, x({}, e))
      }), (0, a.jsx)(o.animated.div, {
        className: O.easterEggContainer,
        style: t ? d : l,
        children: (0, a.jsx)("img", {
          src: r.getSrc(),
          style: r.style,
          alt: "",
          "aria-hidden": "true"
        })
      })]
    })
  };

function A(e) {
  var t, r;
  let i = (0, b.v)(e.product.categorySkuId);
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