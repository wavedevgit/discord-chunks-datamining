/** Chunk was on 7384 **/
/** chunk id: 560223, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => x
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
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
let b = e => {
    let {
      showAllPerksButton: t,
      leftAlignHeaders: n,
      title: r,
      headerClassname: s
    } = e, a = (0, i.jsx)(l.X6q, {
      variant: "heading-xxl/extrabold",
      color: "header-primary",
      className: null != s ? s : f.heading,
      children: r
    });
    return null == t ? a : n ? (0, i.jsxs)("div", {
      className: f.sectionHeader,
      children: [a, null != t && (0, i.jsx)("div", {
        className: f.showAllPerksButton,
        children: t
      })]
    }) : (0, i.jsx)("div", {
      className: f.container,
      children: (0, i.jsx)("div", {
        className: f.sectionHeaderSeeAll,
        children: a
      })
    })
  },
  x = e => {
    let {
      className: t,
      variant: n,
      noBackground: s = false,
      leftAlignHeaders: x = false,
      showAllPerksButton: _,
      headerClassname: j
    } = e, E = r.useRef(null), C = n === p.gM.WHATS_NEW, O = (0, u.x)();
    r.useEffect(() => {
      C && O()
    }, [O, C]);
    let v = (0, g.re)(C),
      S = (0, m.Z)(),
      T = (0, g.mN)(),
      {
        fractionalState: I
      } = (0, o.Z)(),
      N = (0, c.W)(),
      y = (0, d.Z)({
        location: "WhatsNewSection"
      }),
      A = (0, g.ZM)({
        perksCards: S,
        variant: n,
        hideCardsOnNarrowScreen: false,
        isPremiumSubscriber: T,
        fractionalState: I,
        isInReverseTrial: N,
        showVoiceFiltersCard: y
      }),
      P = A.some(e => null != e.pillText);
    return (0, i.jsxs)("div", {
      ref: E,
      className: a()(f.section, {
        [f.centerAlignSection]: !x,
        [f.leftAlignSection]: x
      }, t),
      children: [(0, i.jsx)(b, {
        showAllPerksButton: _,
        leftAlignHeaders: x,
        title: v.title,
        headerClassname: j
      }), (0, i.jsx)(l.Text, {
        variant: "text-lg/normal",
        color: "header-primary",
        className: a()(f.subtitle, {
          [f.subtitle]: null == _ || x,
          [f.subtitleWithButton]: null != _ && !x,
          [f.fullWidth]: C || x,
          [f.moreSubtitleMargin]: P,
          [f.leftAlignSubtitle]: x,
          [f.centerAlignSubtitle]: !x
        }),
        children: v.subtitle
      }), !x && null != _ && (0, i.jsx)("div", {
        className: f.showAllPerksButtonCenter,
        children: _
      }), (0, i.jsx)("div", {
        className: f.cardContainer,
        children: A.map((e, t) => {
          var n, r;
          return (0, i.jsx)(h.Z, (n = function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = null != arguments[t] ? arguments[t] : {},
                i = Object.keys(n);
              "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
              }))), i.forEach(function(t) {
                var i;
                i = n[t], t in e ? Object.defineProperty(e, t, {
                  value: i,
                  enumerable: true,
                  configurable: true,
                  writable: true
                }) : e[t] = i
              })
            }
            return e
          }({}, e), r = r = {
            forceShadow: s
          }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(r)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var i = Object.getOwnPropertySymbols(e);
              n.push.apply(n, i)
            }
            return n
          })(Object(r)).forEach(function(e) {
            Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(r, e))
          }), n), "".concat(e.name, "_").concat(t))
        })
      })]
    })
  }