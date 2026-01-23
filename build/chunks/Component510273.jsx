/** Chunk was on 3162 **/
/** chunk id: 510273, original params: e,t,r (module,exports,require) **/
require.r(exports), require.d(exports, {
  default: () => k
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk284009 = require("./284009.js"),
  a = require.n(Chunk284009),
  Chunk108531 = require("./108531.js"),
  Chunk575593 = require("./575593.js"),
  Chunk334279 = require("./334279.js"),
  Chunk417597 = require("./417597.js"),
  Chunk397927 = require("./397927.js"),
  Chunk550111 = require("./550111.jsx"),
  Chunk170887 = require("./170887.js"),
  Chunk331402 = require("./331402.jsx"),
  Chunk287809 = require("./287809.js"),
  Chunk846957 = require("./846957.jsx"),
  Chunk929283 = require("./929283.jsx"),
  Chunk245068 = require("./245068.jsx"),
  Chunk158216 = require("./158216.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk243821 = require("./243821.js"),
  Chunk743102 = require("./743102.js"),
  Chunk497451 = require("./497451.js"),
  Chunk241988 = require("./241988.js");

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
let _ = e => {
    let {
      product: t,
      itemConsumed: r,
      forCollectedModal: i
    } = e, [s] = t.items, l = (0, u.bG)([g.default], () => {
      let e = g.default.getCurrentUser();
      return a()(null != e, "User cannot be undefined"), e
    }), b = Object.values(o.j).includes(t.skuId), E = (0, p.A)({
      location: "CollectiblesProductPreview"
    });
    if (t.type === c.R.PROFILE_EFFECT) return (0, n.jsx)("div", {
      className: v.NM,
      children: (0, n.jsx)(h.A, {
        skuId: s.skuId,
        delayProfileEffectIntro: i,
        withScaleAnimation: i
      })
    });
    if (t.type === c.R.AVATAR_DECORATION) return (0, n.jsx)(y.i, {
      item: s,
      user: l,
      avatarSize: d._3J.SIZE_120,
      isHighlighted: true
    });
    if (t.type === c.R.NAMEPLATE) return (0, n.jsx)("div", {
      className: v.qF,
      children: (0, n.jsx)(f.A, {
        nameplate: s,
        user: l,
        nameplatePreviewSize: "large",
        isHighlighted: true
      })
    });
    if (t.type === c.R.BUNDLE) return (0, n.jsx)("div", {
      className: v.hT,
      children: (0, n.jsx)(j.X, {
        product: t,
        user: l,
        isHighlighted: true,
        forCollectedModal: i
      })
    });
    if (t.type === c.R.EXTERNAL_SKU) {
      if (b)
        if (r) return (0, n.jsx)("img", {
          src: E ? w : P,
          alt: O.intl.string(O.t.t0xkSB),
          style: {
            width: "100%"
          }
        });
        else return (0, n.jsx)("img", {
          src: x,
          alt: O.intl.string(O.t.g5W1g8)
        });
      return (0, n.jsx)(m.B, {
        product: t
      })
    }
    return null
  },
  S = e => {
    let {
      reducedMotion: t,
      displayOptions: r
    } = e, [s, a] = i.useState(false), c = (0, d.zhh)({
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
      onRest: () => setTimeout(() => a(true), 100)
    }), o = (0, d.zhh)({
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
      reverse: s
    }), u = (0, d.zhh)({
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
        className: v.VH,
        style: c,
        children: (0, n.jsx)(_, E({}, e))
      }), (0, n.jsx)(l.animated.div, {
        className: v.VH,
        style: t ? u : o,
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
  let i = (0, b.K9)(e.product.categorySkuId);
  return null != i ? (0, n.jsx)(S, (t = E({}, e), r = r = {
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
  }), t)) : (0, n.jsx)(_, E({}, e))
}