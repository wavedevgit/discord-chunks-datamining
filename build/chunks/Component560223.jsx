/** Chunk was on web.js **/
/** chunk id: 560223, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => v
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk975298 = require("./975298.js"),
  Chunk695349 = require("./695349.js"),
  Chunk963590 = require("./963590.js"),
  Chunk119850 = require("./119850.js"),
  Chunk22189 = require("./22189.jsx"),
  Chunk391110 = require("./391110.js"),
  Chunk75077 = require("./75077.js"),
  Chunk51636 = require("./51636.jsx"),
  Chunk484327 = require("./484327.js");

function g(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function E(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      g(e, t, n[t])
    })
  }
  return e
}

function b(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function y(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : b(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let O = e => {
    let {
      showAllPerksButton: t,
      leftAlignHeaders: n,
      title: i,
      headerClassname: a
    } = e, o = (0, r.jsx)(s.X6q, {
      variant: "heading-xxl/extrabold",
      color: "header-primary",
      className: null != a ? a : m.heading,
      children: i
    });
    return null == t ? o : n ? (0, r.jsxs)("div", {
      className: m.sectionHeader,
      children: [o, null != t && (0, r.jsx)("div", {
        className: m.showAllPerksButton,
        children: t
      })]
    }) : (0, r.jsx)("div", {
      className: m.container,
      children: (0, r.jsx)("div", {
        className: m.sectionHeaderSeeAll,
        children: o
      })
    })
  },
  v = e => {
    let {
      className: t,
      variant: n,
      noBackground: a = false,
      leftAlignHeaders: g = false,
      showAllPerksButton: b,
      headerClassname: v
    } = e, I = i.useRef(null), T = n === _.gM.WHATS_NEW, S = (0, d.x)();
    i.useEffect(() => {
      T && S()
    }, [S, T]);
    let A = (0, p.re)(T),
      C = (0, f.Z)(),
      N = (0, p.mN)(),
      {
        fractionalState: R
      } = (0, l.Z)(),
      P = (0, c.W)(),
      w = (0, u.Z)({
        location: "WhatsNewSection"
      }),
      D = (0, p.ZM)({
        perksCards: C,
        variant: n,
        hideCardsOnNarrowScreen: false,
        isPremiumSubscriber: N,
        fractionalState: R,
        isInReverseTrial: P,
        showVoiceFiltersCard: w
      }),
      x = D.some(e => null != e.pillText);
    return (0, r.jsxs)("div", {
      ref: I,
      className: o()(m.section, {
        [m.centerAlignSection]: !g,
        [m.leftAlignSection]: g
      }, t),
      children: [(0, r.jsx)(O, {
        showAllPerksButton: b,
        leftAlignHeaders: g,
        title: A.title,
        headerClassname: v
      }), (0, r.jsx)(s.Text, {
        variant: "text-lg/normal",
        color: "header-primary",
        className: o()(m.subtitle, {
          [m.subtitle]: null == b || g,
          [m.subtitleWithButton]: null != b && !g,
          [m.fullWidth]: T || g,
          [m.moreSubtitleMargin]: x,
          [m.leftAlignSubtitle]: g,
          [m.centerAlignSubtitle]: !g
        }),
        children: A.subtitle
      }), !g && null != b && (0, r.jsx)("div", {
        className: m.showAllPerksButtonCenter,
        children: b
      }), (0, r.jsx)("div", {
        className: m.cardContainer,
        children: D.map((e, t) => (0, r.jsx)(h.Z, y(E({}, e), {
          forceShadow: a
        }), "".concat(e.name, "_").concat(t)))
      })]
    })
  }