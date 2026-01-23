/** Chunk was on 24832 **/
/** chunk id: 748579, original params: e,t,a (module,exports,require) **/
require.r(exports), require.d(exports, {
  default: () => v
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  i = require.n(Chunk503698),
  Chunk110259 = require("./110259.js"),
  Chunk990078 = require("./990078.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk139286 = require("./139286.js"),
  Chunk607470 = require("./607470.jsx"),
  Chunk224016 = require("./224016.jsx"),
  Chunk954571 = require("./954571.js"),
  Chunk764231 = require("./764231.js"),
  Chunk112848 = require("./112848.js"),
  Chunk788868 = require("./788868.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk962131 = require("./962131.js");

function v(e) {
  var t;
  let {
    levelUpData: a
  } = e, [r, v] = s.useState(false), [f, b] = s.useState(false), [N, y] = s.useState(false), k = (0, h.Xb)(), j = s.useRef(null), w = s.useRef(null), {
    currentBadge: A,
    prevBadge: R,
    levelUpVideoSrc: U
  } = a, C = s.useCallback(() => {
    let e = 700 * (A.id !== p.Ac.PREMIUM_TENURE_1_MONTH);
    w.current.currentTime = 0, setTimeout(() => {
      y(true), w.current.play()
    }, e)
  }, [A.id]);
  s.useEffect(() => {
    r && C()
  }, [r, C]), (0, _.A)({
    type: d.ImpressionTypes.POPOUT,
    name: d.ImpressionNames.TIERED_TENURE_BADGE_LEVEL_UP,
    properties: {
      new_badge_id: A.id
    }
  }, {
    trackOnInitialLoad: true
  }), s.useEffect(() => {
    null != w.current && w.current.load()
  }, []);
  let D = s.useCallback(() => {
      b(false), y(false), C(), j.current.style.display = "none", j.current.offsetWidth, j.current.style.display = "", m.default.track(E.HAw.TIERED_TENURE_BADGE_LEVEL_UP_REPLAY_CLICKED, {
        new_badge_id: A.id
      })
    }, [A.id, C]),
    I = {
      "--custom-old-badge-color": "linear-gradient(to right, ".concat(null != (t = a.prevBadgeTextGradient) ? t : "transparent", ")"),
      "--custom-new-badge-color": "linear-gradient(to right, ".concat(a.currentBadgeTextGradient, ")")
    };
  return (0, n.jsxs)("div", {
    className: i()(g.Qs, {
      [g.v6]: f,
      [g.Kc]: r,
      [g.A4]: N
    }),
    style: I,
    ref: j,
    children: [(0, n.jsx)(u.A, {
      ref: w,
      className: g.Ki,
      src: U,
      playsInline: true,
      onLoadedData: () => v(true),
      onEnded: () => b(true)
    }), (0, n.jsxs)("div", {
      className: g.FS,
      children: [(0, n.jsx)(o.A, {
        width: 60,
        height: 15
      }), null != R && (0, n.jsx)(c.Text, {
        variant: "display-md",
        className: i()(g.Vv, g.km),
        children: T.intl.string(R.nameUnformatted)
      }), (0, n.jsx)(c.Text, {
        variant: "display-md",
        className: i()(g.Vv, g.Hl),
        children: T.intl.string(A.nameUnformatted)
      }), null != k && (0, n.jsx)(c.Text, {
        variant: "text-xs/medium",
        className: g.SD,
        children: T.intl.formatToPlainString(T.t["f/OGgM"], {
          timeFrame: (0, x.T)(A.id, A.tenureReqNumMonths),
          date: k
        })
      }), (0, n.jsx)("div", {
        className: g.uu,
        children: (0, n.jsx)(l.m, {
          text: T.intl.string(T.t.hsvh0i),
          children: (0, n.jsx)(c.K0, {
            icon: c.udU,
            variant: "secondary",
            size: "sm",
            onClick: D,
            "aria-label": T.intl.string(T.t.hsvh0i)
          })
        })
      })]
    })]
  })
}