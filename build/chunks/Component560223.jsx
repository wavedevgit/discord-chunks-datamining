/** Chunk was on web.js **/
/** chunk id: 560223, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => A
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk975298 = require("./975298.js"),
  Chunk594928 = require("./594928.js"),
  Chunk172416 = require("./172416.js"),
  Chunk594174 = require("./594174.js"),
  Chunk695349 = require("./695349.js"),
  Chunk340625 = require("./340625.js"),
  Chunk260720 = require("./260720.js"),
  Chunk119850 = require("./119850.js"),
  Chunk22189 = require("./22189.jsx"),
  Chunk391110 = require("./391110.js"),
  Chunk75077 = require("./75077.js"),
  Chunk51636 = require("./51636.jsx"),
  Chunk877782 = require("./877782.js");

function v(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function S(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      v(e, t, n[t])
    })
  }
  return e
}

function I(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function T(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : I(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let C = e => {
    let {
      showAllPerksButton: t,
      leftAlignHeaders: n,
      title: i,
      headerClassname: a
    } = e, o = (0, r.jsx)(l.Heading, {
      variant: "heading-xxl/extrabold",
      color: "text-strong",
      className: null != a ? a : O.heading,
      children: i
    });
    return null == t ? o : n ? (0, r.jsxs)("div", {
      className: O.sectionHeader,
      children: [o, null != t && (0, r.jsx)("div", {
        className: O.showAllPerksButton,
        children: t
      })]
    }) : (0, r.jsx)("div", {
      className: O.container,
      children: (0, r.jsx)("div", {
        className: O.sectionHeaderSeeAll,
        children: o
      })
    })
  },
  A = e => {
    let {
      className: t,
      variant: n,
      noBackground: a = false,
      leftAlignHeaders: v = false,
      showAllPerksButton: I,
      headerClassname: A
    } = e, N = i.useRef(null), P = n === E.gM.WHATS_NEW, R = (0, s.e7)([f.default], () => f.default.getCurrentUser()), w = (0, h.x)();
    i.useEffect(() => {
      P && w()
    }, [w, P]);
    let D = (0, b.re)(P),
      x = (0, g.Z)(),
      L = (0, b.mN)(),
      {
        fractionalState: j
      } = (0, c.Z)(),
      M = (0, p.W)(),
      k = (0, d.bg)({
        location: "PremiumPerks"
      }),
      U = u.JH.useExperiment({
        location: "PremiumPerks"
      }).enabled,
      G = _.Z.useExperiment({
        location: "PremiumPerks"
      }).enabled,
      Z = (0, m.QL)(),
      F = (0, b.ZM)({
        perksCards: x,
        variant: n,
        hideCardsOnNarrowScreen: false,
        isPremiumSubscriber: L,
        fractionalState: j,
        isInReverseTrial: M,
        showProfileWidgets: k,
        showDisplayNameStyles: U,
        recurring3PPromotionExperiment: G,
        showPremiumGroup: Z,
        isPremiumGroupMember: null == R ? true : R.isPremiumGroupMember()
      }),
      B = F.some(e => null != e.pillText);
    return (0, r.jsxs)("div", {
      ref: N,
      className: o()(O.section, {
        [O.centerAlignSection]: !v,
        [O.leftAlignSection]: v
      }, t),
      children: [(0, r.jsx)(C, {
        showAllPerksButton: I,
        leftAlignHeaders: v,
        title: D.title,
        headerClassname: A
      }), (0, r.jsx)(l.Text, {
        variant: "text-lg/normal",
        color: "text-strong",
        className: o()(O.subtitle, {
          [O.subtitle]: null == I || v,
          [O.subtitleWithButton]: null != I && !v,
          [O.fullWidth]: P || v,
          [O.moreSubtitleMargin]: B,
          [O.leftAlignSubtitle]: v,
          [O.centerAlignSubtitle]: !v
        }),
        children: D.subtitle
      }), !v && null != I && (0, r.jsx)("div", {
        className: O.showAllPerksButtonCenter,
        children: I
      }), (0, r.jsx)("div", {
        className: O.cardContainer,
        children: F.map((e, t) => (0, r.jsx)(y.Z, T(S({}, e), {
          forceShadow: a
        }), "".concat(e.name, "_").concat(t)))
      })]
    })
  }