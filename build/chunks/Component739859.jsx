/** Chunk was on 77898 **/
/** chunk id: 739859, original params: e,t,n (module,exports,require) **/
require.r(exports), require.d(exports, {
  default: () => y
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk990547 = require("./990547.js"),
  Chunk481060 = require("./481060.js"),
  Chunk213609 = require("./213609.js"),
  Chunk70097 = require("./70097.jsx"),
  Chunk483444 = require("./483444.jsx"),
  Chunk626135 = require("./626135.js"),
  Chunk553896 = require("./553896.js"),
  Chunk848572 = require("./848572.js"),
  Chunk474936 = require("./474936.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk43860 = require("./43860.js");

function y(e) {
  var t;
  let {
    levelUpData: n
  } = e, [i, y] = a.useState(false), [h, O] = a.useState(false), [T, j] = a.useState(false), v = (0, b.GG)(), E = a.useRef(null), w = a.useRef(null), {
    currentBadge: P,
    prevBadge: N,
    levelUpVideoSrc: U
  } = n, k = a.useCallback(() => {
    let e = 700 * (P.id !== g.VU.PREMIUM_TENURE_1_MONTH);
    w.current.currentTime = 0, setTimeout(() => {
      j(true), w.current.play()
    }, e)
  }, [P.id]);
  a.useEffect(() => {
    i && k()
  }, [i, k]), (0, c.Z)({
    type: d.ImpressionTypes.POPOUT,
    name: d.ImpressionNames.TIERED_TENURE_BADGE_LEVEL_UP,
    properties: {
      new_badge_id: P.id
    }
  }, {
    trackOnInitialLoad: true
  }), a.useEffect(() => {
    null != w.current && w.current.load()
  }, []);
  let B = a.useCallback(() => {
      O(false), j(false), k(), E.current.style.display = "none", E.current.offsetWidth, E.current.style.display = "", _.default.track(f.rMx.TIERED_TENURE_BADGE_LEVEL_UP_REPLAY_CLICKED, {
        new_badge_id: P.id
      })
    }, [P.id, k]),
    C = {
      "--custom-old-badge-color": "linear-gradient(to right, ".concat(null != (t = n.prevBadgeTextGradient) ? t : "transparent", ")"),
      "--custom-new-badge-color": "linear-gradient(to right, ".concat(n.currentBadgeTextGradient, ")")
    };
  return (0, r.jsxs)("div", {
    className: s()(x.content, {
      [x.ended]: h,
      [x.loaded]: i,
      [x.started]: T
    }),
    style: C,
    ref: E,
    children: [(0, r.jsx)(l.Z, {
      ref: w,
      className: x.video,
      src: U,
      playsInline: true,
      onLoadedData: () => y(true),
      onEnded: () => O(true)
    }), (0, r.jsxs)("div", {
      className: x.textContainer,
      children: [(0, r.jsx)(u.Z, {
        width: 60,
        height: 15
      }), null != N && (0, r.jsx)(o.Text, {
        variant: "display-md",
        className: s()(x.badgeText, x.old),
        children: m.intl.string(N.nameUnformatted)
      }), (0, r.jsx)(o.Text, {
        variant: "display-md",
        className: s()(x.badgeText, x.new),
        children: m.intl.string(P.nameUnformatted)
      }), null != v && (0, r.jsx)(o.Text, {
        variant: "text-xs/medium",
        className: x.subscribedText,
        children: m.intl.formatToPlainString(m.t["f/OGgM"], {
          timeFrame: (0, p.q)(P.id, P.tenureReqNumMonths),
          date: v
        })
      }), (0, r.jsx)("div", {
        className: x.actionButtons,
        children: (0, r.jsx)(o.aML, {
          "data-migration-pending": true,
          text: m.intl.string(m.t.hsvh0i),
          children: e => {
            var t, n;
            return (0, r.jsx)(o.hU, (t = function(e) {
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
            }({}, e), n = n = {
              icon: o.o1U,
              variant: "secondary",
              size: "sm",
              onClick: B,
              "aria-label": m.intl.string(m.t.hsvh0i)
            }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
              var n = Object.keys(e);
              if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                n.push.apply(n, r)
              }
              return n
            })(Object(n)).forEach(function(e) {
              Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
            }), t))
          }
        })
      })]
    })]
  })
}