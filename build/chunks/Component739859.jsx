/** Chunk was on 77898 **/
/** chunk id: 739859, original params: e,t,n (module,exports,require) **/
require.r(exports), require.d(exports, {
  default: () => b
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk990547 = require("./990547.js"),
  Chunk28664 = require("./28664.jsx"),
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

function b(e) {
  var t;
  let {
    levelUpData: n
  } = e, [s, b] = d.useState(false), [f, v] = d.useState(false), [N, y] = d.useState(false), U = (0, T.GG)(), w = d.useRef(null), B = d.useRef(null), {
    currentBadge: j,
    prevBadge: C,
    levelUpVideoSrc: R
  } = n, k = d.useCallback(() => {
    let e = 700 * (j.id !== g.VU.PREMIUM_TENURE_1_MONTH);
    B.current.currentTime = 0, setTimeout(() => {
      y(true), B.current.play()
    }, e)
  }, [j.id]);
  d.useEffect(() => {
    s && k()
  }, [s, k]), (0, c.Z)({
    type: r.ImpressionTypes.POPOUT,
    name: r.ImpressionNames.TIERED_TENURE_BADGE_LEVEL_UP,
    properties: {
      new_badge_id: j.id
    }
  }, {
    trackOnInitialLoad: true
  }), d.useEffect(() => {
    null != B.current && B.current.load()
  }, []);
  let I = d.useCallback(() => {
      v(false), y(false), k(), w.current.style.display = "none", w.current.offsetWidth, w.current.style.display = "", x.default.track(h.rMx.TIERED_TENURE_BADGE_LEVEL_UP_REPLAY_CLICKED, {
        new_badge_id: j.id
      })
    }, [j.id, k]),
    L = {
      "--custom-old-badge-color": "linear-gradient(to right, ".concat(null != (t = n.prevBadgeTextGradient) ? t : "transparent", ")"),
      "--custom-new-badge-color": "linear-gradient(to right, ".concat(n.currentBadgeTextGradient, ")")
    };
  return (0, a.jsxs)("div", {
    className: i()(E.content, {
      [E.ended]: f,
      [E.loaded]: s,
      [E.started]: N
    }),
    style: L,
    ref: w,
    children: [(0, a.jsx)(u.Z, {
      ref: B,
      className: E.video,
      src: R,
      playsInline: true,
      onLoadedData: () => b(true),
      onEnded: () => v(true)
    }), (0, a.jsxs)("div", {
      className: E.textContainer,
      children: [(0, a.jsx)(_.Z, {
        width: 60,
        height: 15
      }), null != C && (0, a.jsx)(o.Text, {
        variant: "display-md",
        className: i()(E.badgeText, E.old),
        children: p.intl.string(C.nameUnformatted)
      }), (0, a.jsx)(o.Text, {
        variant: "display-md",
        className: i()(E.badgeText, E.new),
        children: p.intl.string(j.nameUnformatted)
      }), null != U && (0, a.jsx)(o.Text, {
        variant: "text-xs/medium",
        className: E.subscribedText,
        children: p.intl.formatToPlainString(p.t["f/OGgM"], {
          timeFrame: (0, m.q)(j.id, j.tenureReqNumMonths),
          date: U
        })
      }), (0, a.jsx)("div", {
        className: E.actionButtons,
        children: (0, a.jsx)(l.u, {
          text: p.intl.string(p.t.hsvh0i),
          children: (0, a.jsx)(o.hU, {
            icon: o.o1U,
            variant: "secondary",
            size: "sm",
            onClick: I,
            "aria-label": p.intl.string(p.t.hsvh0i)
          })
        })
      })]
    })]
  })
}