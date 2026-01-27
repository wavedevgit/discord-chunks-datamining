/** Chunk was on 3162 **/
/** chunk id: 510273, original params: e,t,r (module,exports,require) **/
require.r(exports), require.d(exports, {
  default: () => _
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk353709 = require("./353709.js"),
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

function P(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = null != arguments[t] ? arguments[t] : {},
      i = Object.keys(r);
    "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
      return Object.getOwnPropertyDescriptor(r, e).enumerable
    }))), i.forEach(function(t) {
      var i;
      i = r[t], t in e ? Object.defineProperty(e, t, {
        value: i,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = i
    })
  }
  return e
}
let w = e => {
    let {
      product: t,
      itemConsumed: r,
      forCollectedModal: s
    } = e, n = (0, d.A)({
      location: "CollectiblesProductPreview"
    }), m = (0, c.bG)([p.default], () => p.default.getCurrentUser());
    if (null == m) return null;
    let [P] = t.items;
    if (t.type === a.R.PROFILE_EFFECT) return (0, i.jsx)("div", {
      className: b.NM,
      children: (0, i.jsx)(f.A, {
        skuId: P.skuId,
        delayProfileEffectIntro: s,
        withScaleAnimation: s
      })
    });
    if (t.type === a.R.AVATAR_DECORATION) return (0, i.jsx)(h.i, {
      item: P,
      user: m,
      avatarSize: o._3J.SIZE_120,
      isHighlighted: true
    });
    if (t.type === a.R.NAMEPLATE) return (0, i.jsx)("div", {
      className: b.qF,
      children: (0, i.jsx)(u.A, {
        nameplate: P,
        user: m,
        nameplatePreviewSize: "large",
        isHighlighted: true
      })
    });
    if (t.type === a.R.BUNDLE) return (0, i.jsx)("div", {
      className: b.hT,
      children: (0, i.jsx)(y.X, {
        product: t,
        user: m,
        isHighlighted: true,
        forCollectedModal: s
      })
    });
    if (t.type === a.R.EXTERNAL_SKU) {
      if (Object.values(l.j).includes(t.skuId))
        if (r) return (0, i.jsx)("img", {
          src: n ? x : v,
          alt: j.intl.string(j.t.t0xkSB),
          style: {
            width: "100%"
          }
        });
        else return (0, i.jsx)("img", {
          src: O,
          alt: j.intl.string(j.t.g5W1g8)
        });
      return (0, i.jsx)(g.B, {
        product: t
      })
    }
    return null
  },
  E = e => {
    let {
      reducedMotion: t,
      displayOptions: r
    } = e, [a, l] = s.useState(false), c = (0, o.zhh)({
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
    }), u = (0, o.zhh)({
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
    }), d = (0, o.zhh)({
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
    return (0, i.jsxs)(i.Fragment, {
      children: [(0, i.jsx)(n.animated.div, {
        className: b.VH,
        style: c,
        children: (0, i.jsx)(w, P({}, e))
      }), (0, i.jsx)(n.animated.div, {
        className: b.VH,
        style: t ? d : u,
        children: (0, i.jsx)("img", {
          src: r.getSrc(),
          style: r.style,
          alt: "",
          "aria-hidden": "true"
        })
      })]
    })
  };

function _(e) {
  var t, r;
  let s = (0, m.K9)(e.product.categorySkuId);
  return null != s ? (0, i.jsx)(E, (t = P({}, e), r = r = {
    displayOptions: s
  }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : (function(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(e);
      r.push.apply(r, i)
    }
    return r
  })(Object(r)).forEach(function(e) {
    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
  }), t)) : (0, i.jsx)(w, P({}, e))
}