/** Chunk was on 5606 **/
/** chunk id: 326736, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => x
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
let E = e => {
    let {
      showAllPerksButton: t,
      leftAlignHeaders: n,
      title: i,
      headerClassname: l
    } = e, s = (0, r.jsx)(o.Heading, {
      variant: "heading-xxl/extrabold",
      color: "text-strong",
      className: null != l ? l : A.R_,
      children: i
    });
    return null == t ? s : n ? (0, r.jsxs)("div", {
      className: A.bV,
      children: [s, null != t && (0, r.jsx)("div", {
        className: A.W0,
        children: t
      })]
    }) : (0, r.jsx)("div", {
      className: A.kL,
      children: (0, r.jsx)("div", {
        className: A.pr,
        children: s
      })
    })
  },
  x = e => {
    let {
      className: t,
      variant: n,
      noBackground: l = false,
      leftAlignHeaders: x = false,
      showAllPerksButton: O,
      headerClassname: C
    } = e, y = i.useRef(null), j = n === f.cJ.WHATS_NEW, T = (0, a.bG)([d.default], () => d.default.getCurrentUser()), v = (0, m.E)();
    i.useEffect(() => {
      j && v()
    }, [v, j]);
    let S = (0, b.G4)(j),
      I = (0, g.A)(),
      N = (0, b.LQ)(),
      {
        fractionalState: P
      } = (0, c.A)(),
      R = (0, u.d)(),
      D = p.A.useExperiment({
        location: "PremiumPerks"
      }).enabled,
      w = (0, _.O9)(),
      L = (0, b.vx)({
        perksCards: I,
        variant: n,
        hideCardsOnNarrowScreen: false,
        isPremiumSubscriber: N,
        fractionalState: P,
        isInReverseTrial: R,
        recurring3PPromotionExperiment: D,
        showPremiumGroup: w,
        isPremiumGroupMember: null == T ? true : T.isPremiumGroupMember()
      }),
      M = L.some(e => null != e.pillText);
    return (0, r.jsxs)("div", {
      ref: y,
      className: s()(A.uW, {
        [A.qO]: !x,
        [A.Uv]: x
      }, t),
      children: [(0, r.jsx)(E, {
        showAllPerksButton: O,
        leftAlignHeaders: x,
        title: S.title,
        headerClassname: C
      }), (0, r.jsx)(o.Text, {
        variant: "text-lg/normal",
        color: "text-strong",
        className: s()(A.VA, {
          [A.VA]: null == O || x,
          [A.Xx]: null != O && !x,
          [A.Ij]: j || x,
          [A.Ob]: M,
          [A.dO]: x,
          [A.br]: !x
        }),
        children: S.subtitle
      }), !x && null != O && (0, r.jsx)("div", {
        className: A.xk,
        children: O
      }), (0, r.jsx)("div", {
        className: A.Ui,
        children: L.map((e, t) => {
          var n, i;
          return (0, r.jsx)(h.A, (n = function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
              "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
              }))), r.forEach(function(t) {
                var r;
                r = n[t], t in e ? Object.defineProperty(e, t, {
                  value: r,
                  enumerable: true,
                  configurable: true,
                  writable: true
                }) : e[t] = r
              })
            }
            return e
          }({}, e), i = i = {
            forceShadow: l
          }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(i)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var r = Object.getOwnPropertySymbols(e);
              n.push.apply(n, r)
            }
            return n
          })(Object(i)).forEach(function(e) {
            Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(i, e))
          }), n), "".concat(e.name, "_").concat(t))
        })
      })]
    })
  }