/** Chunk was on web.js **/
/** chunk id: 560223, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => T
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk975298 = require("./975298.js"),
  Chunk594928 = require("./594928.js"),
  Chunk172416 = require("./172416.js"),
  Chunk695349 = require("./695349.js"),
  Chunk340625 = require("./340625.js"),
  Chunk119850 = require("./119850.js"),
  Chunk22189 = require("./22189.jsx"),
  Chunk391110 = require("./391110.js"),
  Chunk75077 = require("./75077.js"),
  Chunk51636 = require("./51636.jsx"),
  Chunk118461 = require("./118461.js");

function b(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function y(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      b(e, t, n[t])
    })
  }
  return e
}

function O(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function v(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : O(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let I = e => {
    let {
      showAllPerksButton: t,
      leftAlignHeaders: n,
      title: i,
      headerClassname: a
    } = e, o = (0, r.jsx)(s.Heading, {
      variant: "heading-xxl/extrabold",
      color: "header-primary",
      className: null != a ? a : E.heading,
      children: i
    });
    return null == t ? o : n ? (0, r.jsxs)("div", {
      className: E.sectionHeader,
      children: [o, null != t && (0, r.jsx)("div", {
        className: E.showAllPerksButton,
        children: t
      })]
    }) : (0, r.jsx)("div", {
      className: E.container,
      children: (0, r.jsx)("div", {
        className: E.sectionHeaderSeeAll,
        children: o
      })
    })
  },
  T = e => {
    let {
      className: t,
      variant: n,
      noBackground: a = false,
      leftAlignHeaders: b = false,
      showAllPerksButton: O,
      headerClassname: T
    } = e, S = i.useRef(null), A = n === h.gM.WHATS_NEW, C = (0, _.x)();
    i.useEffect(() => {
      A && C()
    }, [C, A]);
    let N = (0, m.re)(A),
      R = (0, p.Z)(),
      P = (0, m.mN)(),
      {
        fractionalState: D
      } = (0, l.Z)(),
      w = (0, d.W)(),
      L = (0, u.bg)({
        location: "PremiumPerks"
      }),
      x = c.JH.useExperiment({
        location: "PremiumPerks"
      }).enabled,
      M = f.Z.useExperiment({
        location: "PremiumPerks"
      }).enabled,
      k = (0, m.ZM)({
        perksCards: R,
        variant: n,
        hideCardsOnNarrowScreen: false,
        isPremiumSubscriber: P,
        fractionalState: D,
        isInReverseTrial: w,
        showProfileWidgets: L,
        showDisplayNameStyles: x,
        recurring3PPromotionExperiment: M
      }),
      j = k.some(e => null != e.pillText);
    return (0, r.jsxs)("div", {
      ref: S,
      className: o()(E.section, {
        [E.centerAlignSection]: !b,
        [E.leftAlignSection]: b
      }, t),
      children: [(0, r.jsx)(I, {
        showAllPerksButton: O,
        leftAlignHeaders: b,
        title: N.title,
        headerClassname: T
      }), (0, r.jsx)(s.Text, {
        variant: "text-lg/normal",
        color: "header-primary",
        className: o()(E.subtitle, {
          [E.subtitle]: null == O || b,
          [E.subtitleWithButton]: null != O && !b,
          [E.fullWidth]: A || b,
          [E.moreSubtitleMargin]: j,
          [E.leftAlignSubtitle]: b,
          [E.centerAlignSubtitle]: !b
        }),
        children: N.subtitle
      }), !b && null != O && (0, r.jsx)("div", {
        className: E.showAllPerksButtonCenter,
        children: O
      }), (0, r.jsx)("div", {
        className: E.cardContainer,
        children: k.map((e, t) => (0, r.jsx)(g.Z, v(y({}, e), {
          forceShadow: a
        }), "".concat(e.name, "_").concat(t)))
      })]
    })
  }