/** Chunk was on 22274 **/
/** chunk id: 269792, original params: e,t,a (module,exports,require) **/
require.r(exports), require.d(exports, {
  default: () => h
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk990547 = require("./990547.js"),
  Chunk481060 = require("./481060.js"),
  Chunk213609 = require("./213609.js"),
  Chunk70097 = require("./70097.jsx"),
  Chunk553896 = require("./553896.js"),
  Chunk848572 = require("./848572.js"),
  Chunk483444 = require("./483444.jsx"),
  Chunk626135 = require("./626135.js"),
  Chunk981631 = require("./981631.js"),
  Chunk474936 = require("./474936.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk326760 = require("./326760.js");

function h(e) {
  var t;
  let {
    levelUpData: a
  } = e, [r, h] = d.useState(false), [f, b] = d.useState(false), [v, N] = d.useState(false), C = (0, _.GG)(), w = d.useRef(null), y = d.useRef(null), {
    currentBadge: B,
    prevBadge: R,
    levelUpVideoSrc: U
  } = a, j = d.useCallback(() => {
    let e = 700 * (B.id !== g.VU.PREMIUM_TENURE_1_MONTH);
    y.current.currentTime = 0, setTimeout(() => {
      N(true), y.current.play()
    }, e)
  }, [B.id]);
  d.useEffect(() => {
    r && j()
  }, [r, j]), (0, o.Z)({
    type: i.ImpressionTypes.POPOUT,
    name: i.ImpressionNames.TIERED_TENURE_BADGE_LEVEL_UP,
    properties: {
      new_badge_id: B.id
    }
  }, {
    trackOnInitialLoad: true
  }), d.useEffect(() => {
    null != y.current && y.current.load()
  }, []);
  let k = d.useCallback(() => {
      b(false), N(false), j(), w.current.style.display = "none", w.current.offsetWidth, w.current.style.display = "", m.default.track(T.rMx.TIERED_TENURE_BADGE_LEVEL_UP_REPLAY_CLICKED, {
        new_badge_id: B.id
      })
    }, [B.id, j]),
    I = {
      "--custom-old-badge-color": "linear-gradient(to right, ".concat(null != (t = a.prevBadgeTextGradient) ? t : "transparent", ")"),
      "--custom-new-badge-color": "linear-gradient(to right, ".concat(a.currentBadgeTextGradient, ")")
    };
  return (0, n.jsxs)("div", {
    className: s()(E.content, {
      [E.ended]: f,
      [E.loaded]: r,
      [E.started]: v
    }),
    style: I,
    ref: w,
    children: [(0, n.jsx)(c.Z, {
      ref: y,
      className: E.video,
      src: U,
      playsInline: true,
      onLoadedData: () => h(true),
      onEnded: () => b(true)
    }), (0, n.jsxs)("div", {
      className: E.textContainer,
      children: [(0, n.jsx)(x.Z, {
        width: 60,
        height: 15
      }), null != R && (0, n.jsx)(l.Text, {
        variant: "display-md",
        className: s()(E.badgeText, E.old),
        children: p.intl.string(R.nameUnformatted)
      }), (0, n.jsx)(l.Text, {
        variant: "display-md",
        className: s()(E.badgeText, E.new),
        children: p.intl.string(B.nameUnformatted)
      }), null != C && (0, n.jsx)(l.Text, {
        variant: "text-xs/medium",
        className: E.subscribedText,
        children: p.intl.formatToPlainString(p.t["f/OGgI"], {
          timeFrame: (0, u.q)(B.id, B.tenureReqNumMonths),
          date: C
        })
      }), (0, n.jsx)("div", {
        className: E.actionButtons,
        children: (0, n.jsx)(l.M0o, {
          tooltip: p.intl.string(p.t.hsvh0t),
          color: l.YX$.SECONDARY,
          icon: (0, n.jsx)(l.o1U, {
            size: "xs",
            color: "currentColor"
          }),
          onClick: k
        })
      })]
    })]
  })
}