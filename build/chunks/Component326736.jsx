/** Chunk was on web.js **/
/** chunk id: 326736, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => S
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk531260 = require("./531260.js"),
  Chunk287809 = require("./287809.js"),
  Chunk637073 = require("./637073.js"),
  Chunk398523 = require("./398523.js"),
  Chunk612669 = require("./612669.js"),
  Chunk513570 = require("./513570.js"),
  Chunk975662 = require("./975662.jsx"),
  Chunk322631 = require("./322631.js"),
  Chunk17307 = require("./17307.js"),
  Chunk180022 = require("./180022.jsx"),
  Chunk128906 = require("./128906.js");

function b(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function O(e) {
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

function v(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function A(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : v(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let I = e => {
    let {
      showAllPerksButton: t,
      leftAlignHeaders: n,
      title: i,
      headerClassname: a
    } = e, s = (0, r.jsx)(l.Heading, {
      variant: "heading-xxl/extrabold",
      color: "text-strong",
      className: null != a ? a : y.R_,
      children: i
    });
    return null == t ? s : n ? (0, r.jsxs)("div", {
      className: y.bV,
      children: [s, null != t && (0, r.jsx)("div", {
        className: y.W0,
        children: t
      })]
    }) : (0, r.jsx)("div", {
      className: y.kL,
      children: (0, r.jsx)("div", {
        className: y.pr,
        children: s
      })
    })
  },
  S = e => {
    let {
      className: t,
      variant: n,
      noBackground: a = false,
      leftAlignHeaders: b = false,
      showAllPerksButton: v,
      headerClassname: S
    } = e, T = i.useRef(null), C = n === m.cJ.WHATS_NEW, N = (0, o.bG)([u.default], () => u.default.getCurrentUser()), w = (0, _.E)();
    i.useEffect(() => {
      C && w()
    }, [w, C]);
    let R = (0, g.G4)(C),
      P = (0, h.A)(),
      D = (0, g.LQ)(),
      {
        fractionalState: x
      } = (0, c.A)(),
      L = (0, d.d)(),
      j = f.A.useExperiment({
        location: "PremiumPerks"
      }).enabled,
      M = (0, p.O9)(),
      k = (0, g.vx)({
        perksCards: P,
        variant: n,
        hideCardsOnNarrowScreen: false,
        isPremiumSubscriber: D,
        fractionalState: x,
        isInReverseTrial: L,
        recurring3PPromotionExperiment: j,
        showPremiumGroup: M,
        isPremiumGroupMember: null == N ? true : N.isPremiumGroupMember()
      }),
      U = k.some(e => null != e.pillText);
    return (0, r.jsxs)("div", {
      ref: T,
      className: s()(y.uW, {
        [y.qO]: !b,
        [y.Uv]: b
      }, t),
      children: [(0, r.jsx)(I, {
        showAllPerksButton: v,
        leftAlignHeaders: b,
        title: R.title,
        headerClassname: S
      }), (0, r.jsx)(l.Text, {
        variant: "text-lg/normal",
        color: "text-strong",
        className: s()(y.VA, {
          [y.VA]: null == v || b,
          [y.Xx]: null != v && !b,
          [y.Ij]: C || b,
          [y.Ob]: U,
          [y.dO]: b,
          [y.br]: !b
        }),
        children: R.subtitle
      }), !b && null != v && (0, r.jsx)("div", {
        className: y.xk,
        children: v
      }), (0, r.jsx)("div", {
        className: y.Ui,
        children: k.map((e, t) => (0, r.jsx)(E.A, A(O({}, e), {
          forceShadow: a
        }), "".concat(e.name, "_").concat(t)))
      })]
    })
  }