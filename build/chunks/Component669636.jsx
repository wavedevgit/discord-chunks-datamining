/** Chunk was on 96887 **/
/** chunk id: 669636, original params: e,t,r (module,exports,require) **/
require.r(exports), require.d(exports, {
  default: () => I
}), require("./388685.js"), require("./314940.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk512722 = require("./512722.js"),
  l = require.n(Chunk512722),
  Chunk137317 = require("./137317.js"),
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

function C(e) {
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
let x = e => {
    let {
      product: t,
      itemConsumed: r,
      forCollectedModal: n
    } = e, [i] = t.items, o = (0, u.e7)([h.default], () => {
      let e = h.default.getCurrentUser();
      return l()(null != e, "User cannot be undefined"), e
    }), y = Object.values(d.a).includes(t.skuId), C = (0, p.ZP)({
      location: "CollectiblesProductPreview"
    });
    return (0, s.EQ)(t.type).with(c.Z.PROFILE_EFFECT, () => (0, a.jsx)("div", {
      className: O.profileEffectShopPreview,
      children: (0, a.jsx)(v.Z, {
        forCollectedModal: true,
        skuId: i.skuId
      })
    })).with(c.Z.AVATAR_DECORATION, () => (0, a.jsx)(g.R, {
      item: i,
      user: o,
      avatarSize: f.EFr.SIZE_120,
      isPurchased: false,
      isHighlighted: true
    })).with(c.Z.NAMEPLATE, () => (0, a.jsx)("div", {
      className: O.nameplate,
      children: (0, a.jsx)(w.Z, {
        nameplate: i,
        user: o,
        nameplatePreviewSize: "large",
        isHighlighted: true
      })
    })).with(c.Z.BUNDLE, () => (0, a.jsx)("div", {
      className: O.bundlePreview,
      children: (0, a.jsx)(P.d, {
        containerClassName: O.bundlePreviewContainer,
        product: t,
        user: o,
        isPurchased: false,
        isHighlighted: true,
        forCollectedModal: n
      })
    })).with(c.Z.EXTERNAL_SKU, () => {
      if (y)
        if (r) return (0, a.jsx)("img", {
          src: C ? E : j,
          alt: b.intl.string(b.t.t0xkSE),
          style: {
            width: "100%"
          }
        });
        else return (0, a.jsx)("img", {
          src: _,
          alt: b.intl.string(b.t.g5W1g4)
        });
      return (0, a.jsx)(m.b, {
        product: t
      })
    }).otherwise(() => null)
  },
  S = e => {
    let {
      reducedMotion: t,
      displayOptions: r
    } = e, [i, l] = n.useState(false), s = (0, f.q_F)({
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
    }), c = (0, f.q_F)({
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
      reverse: i
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
        style: s,
        children: (0, a.jsx)(x, C({}, e))
      }), (0, a.jsx)(o.animated.div, {
        className: O.easterEggContainer,
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

function I(e) {
  var t, r;
  let n = (0, y.v)(e.product.categorySkuId);
  return null != n ? (0, a.jsx)(S, (t = C({}, e), r = r = {
    displayOptions: n
  }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : (function(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var a = Object.getOwnPropertySymbols(e);
      r.push.apply(r, a)
    }
    return r
  })(Object(r)).forEach(function(e) {
    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
  }), t)) : (0, a.jsx)(x, C({}, e))
}