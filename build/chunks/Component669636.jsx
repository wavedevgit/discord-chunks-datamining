/** Chunk was on 96887 **/
/** chunk id: 669636, original params: e,t,r (module,exports,require) **/
require.r(exports), require.d(exports, {
  default: () => k
}), require("./388685.js"), require("./314940.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk512722 = require("./512722.js"),
  s = require.n(Chunk512722),
  Chunk666917 = require("./666917.js"),
  Chunk278074 = require("./278074.js"),
  Chunk979554 = require("./979554.js"),
  Chunk314794 = require("./314794.js"),
  Chunk399606 = require("./399606.js"),
  Chunk481060 = require("./481060.js"),
  Chunk566697 = require("./566697.jsx"),
  Chunk283066 = require("./283066.js"),
  Chunk876917 = require("./876917.jsx"),
  Chunk594174 = require("./594174.js"),
  Chunk508925 = require("./508925.jsx"),
  Chunk616066 = require("./616066.jsx"),
  Chunk216541 = require("./216541.jsx"),
  Chunk302800 = require("./302800.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk186175 = require("./186175.js"),
  Chunk593639 = require("./593639.js"),
  Chunk945182 = require("./945182.js"),
  Chunk234286 = require("./234286.js");

function _(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = null != arguments[t] ? arguments[t] : {},
      n = Object.keys(r);
    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
      return Object.getOwnPropertyDescriptor(r, e).enumerable
    }))), n.forEach(function(t) {
      var n;
      n = r[t], t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = n
    })
  }
  return e
}
let S = e => {
    let {
      product: t,
      itemConsumed: r,
      forCollectedModal: i
    } = e, [a] = t.items, l = (0, d.e7)([m.default], () => {
      let e = m.default.getCurrentUser();
      return s()(null != e, "User cannot be undefined"), e
    }), y = Object.values(u.a).includes(t.skuId), _ = (0, g.Z)({
      location: "CollectiblesProductPreview"
    });
    return (0, o.EQ)(t.type).with(c.Z.PROFILE_EFFECT, () => (0, n.jsx)("div", {
      className: P.profileEffectShopPreview,
      children: (0, n.jsx)(h.Z, {
        skuId: a.skuId,
        delayProfileEffectIntro: i,
        withScaleAnimation: i
      })
    })).with(c.Z.AVATAR_DECORATION, () => (0, n.jsx)(j.R, {
      item: a,
      user: l,
      avatarSize: f.EFr.SIZE_120,
      isPurchased: false,
      isHighlighted: true
    })).with(c.Z.NAMEPLATE, () => (0, n.jsx)("div", {
      className: P.nameplate,
      children: (0, n.jsx)(p.Z, {
        nameplate: a,
        user: l,
        nameplatePreviewSize: "large",
        isHighlighted: true
      })
    })).with(c.Z.BUNDLE, () => (0, n.jsx)("div", {
      className: P.bundlePreview,
      children: (0, n.jsx)(w.d, {
        containerClassName: P.bundlePreviewContainer,
        product: t,
        user: l,
        isPurchased: false,
        isHighlighted: true,
        forCollectedModal: i
      })
    })).with(c.Z.EXTERNAL_SKU, () => {
      if (y)
        if (r) return (0, n.jsx)("img", {
          src: _ ? x : E,
          alt: v.intl.string(v.t.t0xkSB),
          style: {
            width: "100%"
          }
        });
        else return (0, n.jsx)("img", {
          src: O,
          alt: v.intl.string(v.t.g5W1g8)
        });
      return (0, n.jsx)(b.b, {
        product: t
      })
    }).otherwise(() => null)
  },
  C = e => {
    let {
      reducedMotion: t,
      displayOptions: r
    } = e, [a, s] = i.useState(false), o = (0, f.q_F)({
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
      reverse: a
    }), u = (0, f.q_F)({
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
    return (0, n.jsxs)(n.Fragment, {
      children: [(0, n.jsx)(l.animated.div, {
        className: P.easterEggContainer,
        style: o,
        children: (0, n.jsx)(S, _({}, e))
      }), (0, n.jsx)(l.animated.div, {
        className: P.easterEggContainer,
        style: t ? u : c,
        children: (0, n.jsx)("img", {
          src: r.getSrc(),
          style: r.style,
          alt: "",
          "aria-hidden": "true"
        })
      })]
    })
  };

function k(e) {
  var t, r;
  let i = (0, y.v)(e.product.categorySkuId);
  return null != i ? (0, n.jsx)(C, (t = _({}, e), r = r = {
    displayOptions: i
  }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : (function(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      r.push.apply(r, n)
    }
    return r
  })(Object(r)).forEach(function(e) {
    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
  }), t)) : (0, n.jsx)(S, _({}, e))
}