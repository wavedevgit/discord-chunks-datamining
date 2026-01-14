/** Chunk was on 96887 **/
/** chunk id: 669636, original params: e,t,r (module,exports,require) **/
require.r(exports), require.d(exports, {
  default: () => k
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk512722 = require("./512722.js"),
  s = require.n(Chunk512722),
  Chunk853590 = require("./853590.js"),
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
  Chunk904734 = require("./904734.js"),
  Chunk593639 = require("./593639.js"),
  Chunk945182 = require("./945182.js"),
  Chunk234286 = require("./234286.js");

function E(e) {
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
      forCollectedModal: a
    } = e, [i] = t.items, l = (0, u.e7)([b.default], () => {
      let e = b.default.getCurrentUser();
      return s()(null != e, "User cannot be undefined"), e
    }), j = Object.values(c.a).includes(t.skuId), E = (0, p.Z)({
      location: "CollectiblesProductPreview"
    });
    if (t.type === o.Z.PROFILE_EFFECT) return (0, n.jsx)("div", {
      className: O.profileEffectShopPreview,
      children: (0, n.jsx)(g.Z, {
        skuId: i.skuId,
        delayProfileEffectIntro: a,
        withScaleAnimation: a
      })
    });
    if (t.type === o.Z.AVATAR_DECORATION) return (0, n.jsx)(y.R, {
      item: i,
      user: l,
      avatarSize: f.EFr.SIZE_120,
      isHighlighted: true
    });
    if (t.type === o.Z.NAMEPLATE) return (0, n.jsx)("div", {
      className: O.nameplate,
      children: (0, n.jsx)(d.Z, {
        nameplate: i,
        user: l,
        nameplatePreviewSize: "large",
        isHighlighted: true
      })
    });
    if (t.type === o.Z.BUNDLE) return (0, n.jsx)("div", {
      className: O.bundlePreview,
      children: (0, n.jsx)(h.d, {
        product: t,
        user: l,
        isHighlighted: true,
        forCollectedModal: a
      })
    });
    if (t.type === o.Z.EXTERNAL_SKU) {
      if (j)
        if (r) return (0, n.jsx)("img", {
          src: E ? x : w,
          alt: v.intl.string(v.t.t0xkSB),
          style: {
            width: "100%"
          }
        });
        else return (0, n.jsx)("img", {
          src: P,
          alt: v.intl.string(v.t.g5W1g8)
        });
      return (0, n.jsx)(m.b, {
        product: t
      })
    }
    return null
  },
  _ = e => {
    let {
      reducedMotion: t,
      displayOptions: r
    } = e, [i, s] = a.useState(false), o = (0, f.q_F)({
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
      reverse: i
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
        className: O.easterEggContainer,
        style: o,
        children: (0, n.jsx)(S, E({}, e))
      }), (0, n.jsx)(l.animated.div, {
        className: O.easterEggContainer,
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
  let a = (0, j.v)(e.product.categorySkuId);
  return null != a ? (0, n.jsx)(_, (t = E({}, e), r = r = {
    displayOptions: a
  }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : (function(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      r.push.apply(r, n)
    }
    return r
  })(Object(r)).forEach(function(e) {
    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
  }), t)) : (0, n.jsx)(S, E({}, e))
}