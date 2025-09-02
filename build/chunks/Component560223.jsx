/** Chunk was on web.js **/
/** chunk id: 560223, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => I
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk975298 = require("./975298.js"),
  Chunk893712 = require("./893712.js"),
  Chunk695349 = require("./695349.js"),
  Chunk963590 = require("./963590.js"),
  Chunk119850 = require("./119850.js"),
  Chunk22189 = require("./22189.jsx"),
  Chunk391110 = require("./391110.js"),
  Chunk75077 = require("./75077.js"),
  Chunk51636 = require("./51636.jsx"),
  Chunk484327 = require("./484327.js");

function E(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function b(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      E(e, t, n[t])
    })
  }
  return e
}

function y(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function O(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : y(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let v = e => {
    let {
      showAllPerksButton: t,
      leftAlignHeaders: n,
      title: i,
      headerClassname: a
    } = e, o = (0, r.jsx)(s.X6q, {
      variant: "heading-xxl/extrabold",
      color: "header-primary",
      className: null != a ? a : g.heading,
      children: i
    });
    return null == t ? o : n ? (0, r.jsxs)("div", {
      className: g.sectionHeader,
      children: [o, null != t && (0, r.jsx)("div", {
        className: g.showAllPerksButton,
        children: t
      })]
    }) : (0, r.jsx)("div", {
      className: g.container,
      children: (0, r.jsx)("div", {
        className: g.sectionHeaderSeeAll,
        children: o
      })
    })
  },
  I = e => {
    let {
      className: t,
      variant: n,
      noBackground: a = false,
      leftAlignHeaders: E = false,
      showAllPerksButton: y,
      headerClassname: I
    } = e, S = i.useRef(null), T = n === p.gM.WHATS_NEW, A = (0, f.x)();
    i.useEffect(() => {
      T && A()
    }, [A, T]);
    let C = (0, h.re)(T),
      N = (0, _.Z)(),
      R = (0, h.mN)(),
      {
        fractionalState: P
      } = (0, l.Z)(),
      w = (0, u.W)(),
      D = (0, d.Z)({
        location: "WhatsNewSection"
      }),
      x = c.L.useExperiment({
        location: "PremiumPerks"
      }).enabled,
      L = (0, h.ZM)({
        perksCards: N,
        variant: n,
        hideCardsOnNarrowScreen: false,
        isPremiumSubscriber: R,
        fractionalState: P,
        isInReverseTrial: w,
        showVoiceFiltersCard: D,
        showCustomThemesCard: x
      }),
      j = L.some(e => null != e.pillText);
    return (0, r.jsxs)("div", {
      ref: S,
      className: o()(g.section, {
        [g.centerAlignSection]: !E,
        [g.leftAlignSection]: E
      }, t),
      children: [(0, r.jsx)(v, {
        showAllPerksButton: y,
        leftAlignHeaders: E,
        title: C.title,
        headerClassname: I
      }), (0, r.jsx)(s.Text, {
        variant: "text-lg/normal",
        color: "header-primary",
        className: o()(g.subtitle, {
          [g.subtitle]: null == y || E,
          [g.subtitleWithButton]: null != y && !E,
          [g.fullWidth]: T || E,
          [g.moreSubtitleMargin]: j,
          [g.leftAlignSubtitle]: E,
          [g.centerAlignSubtitle]: !E
        }),
        children: C.subtitle
      }), !E && null != y && (0, r.jsx)("div", {
        className: g.showAllPerksButtonCenter,
        children: y
      }), (0, r.jsx)("div", {
        className: g.cardContainer,
        children: L.map((e, t) => (0, r.jsx)(m.Z, O(b({}, e), {
          forceShadow: a
        }), "".concat(e.name, "_").concat(t)))
      })]
    })
  }