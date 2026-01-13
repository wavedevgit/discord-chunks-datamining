/** Chunk was on web.js **/
/** chunk id: 560223, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => C
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk975298 = require("./975298.js"),
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

function O(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function v(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      O(e, t, n[t])
    })
  }
  return e
}

function S(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function I(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : S(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let T = e => {
    let {
      showAllPerksButton: t,
      leftAlignHeaders: n,
      title: i,
      headerClassname: a
    } = e, o = (0, r.jsx)(l.Heading, {
      variant: "heading-xxl/extrabold",
      color: "text-strong",
      className: null != a ? a : y.heading,
      children: i
    });
    return null == t ? o : n ? (0, r.jsxs)("div", {
      className: y.sectionHeader,
      children: [o, null != t && (0, r.jsx)("div", {
        className: y.showAllPerksButton,
        children: t
      })]
    }) : (0, r.jsx)("div", {
      className: y.container,
      children: (0, r.jsx)("div", {
        className: y.sectionHeaderSeeAll,
        children: o
      })
    })
  },
  C = e => {
    let {
      className: t,
      variant: n,
      noBackground: a = false,
      leftAlignHeaders: O = false,
      showAllPerksButton: S,
      headerClassname: C
    } = e, A = i.useRef(null), N = n === g.gM.WHATS_NEW, P = (0, s.e7)([d.default], () => d.default.getCurrentUser()), R = (0, m.x)();
    i.useEffect(() => {
      N && R()
    }, [R, N]);
    let w = (0, E.re)(N),
      D = (0, h.Z)(),
      x = (0, E.mN)(),
      {
        fractionalState: L
      } = (0, c.Z)(),
      j = (0, f.W)(),
      M = (0, u.bg)({
        location: "PremiumPerks"
      }),
      k = p.Z.useExperiment({
        location: "PremiumPerks"
      }).enabled,
      U = (0, _.QL)(),
      G = (0, E.ZM)({
        perksCards: D,
        variant: n,
        hideCardsOnNarrowScreen: false,
        isPremiumSubscriber: x,
        fractionalState: L,
        isInReverseTrial: j,
        showProfileWidgets: M,
        recurring3PPromotionExperiment: k,
        showPremiumGroup: U,
        isPremiumGroupMember: null == P ? true : P.isPremiumGroupMember()
      }),
      Z = G.some(e => null != e.pillText);
    return (0, r.jsxs)("div", {
      ref: A,
      className: o()(y.section, {
        [y.centerAlignSection]: !O,
        [y.leftAlignSection]: O
      }, t),
      children: [(0, r.jsx)(T, {
        showAllPerksButton: S,
        leftAlignHeaders: O,
        title: w.title,
        headerClassname: C
      }), (0, r.jsx)(l.Text, {
        variant: "text-lg/normal",
        color: "text-strong",
        className: o()(y.subtitle, {
          [y.subtitle]: null == S || O,
          [y.subtitleWithButton]: null != S && !O,
          [y.fullWidth]: N || O,
          [y.moreSubtitleMargin]: Z,
          [y.leftAlignSubtitle]: O,
          [y.centerAlignSubtitle]: !O
        }),
        children: w.subtitle
      }), !O && null != S && (0, r.jsx)("div", {
        className: y.showAllPerksButtonCenter,
        children: S
      }), (0, r.jsx)("div", {
        className: y.cardContainer,
        children: G.map((e, t) => (0, r.jsx)(b.Z, I(v({}, e), {
          forceShadow: a
        }), "".concat(e.name, "_").concat(t)))
      })]
    })
  }