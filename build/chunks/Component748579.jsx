/** Chunk was on 24832 **/
/** chunk id: 748579, original params: e,a,t (module,exports,require) **/
require.r(exports), require.d(exports, {
  default: () => g
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

function g(e) {
  var a;
  let {
    levelUpData: t
  } = e, [r, g] = s.useState(false), [v, T] = s.useState(false), [N, y] = s.useState(false), k = (0, h.Xb)(), j = s.useRef(null), A = s.useRef(null), {
    currentBadge: R,
    prevBadge: U,
    levelUpVideoSrc: w
  } = t, D = s.useCallback(() => {
    let e = 700 * (R.id !== b.Ac.PREMIUM_TENURE_1_MONTH);
    A.current.currentTime = 0, setTimeout(() => {
      y(true), A.current.play()
    }, e)
  }, [R.id]);
  s.useEffect(() => {
    r && D()
  }, [r, D]), (0, u.A)({
    type: d.ImpressionTypes.POPOUT,
    name: d.ImpressionNames.TIERED_TENURE_BADGE_LEVEL_UP,
    properties: {
      new_badge_id: R.id
    }
  }, {
    trackOnInitialLoad: true
  }), s.useEffect(() => {
    null != A.current && A.current.load()
  }, []);
  let I = s.useCallback(() => {
      T(false), y(false), D(), j.current.style.display = "none", j.current.offsetWidth, j.current.style.display = "", _.default.track(p.HAw.TIERED_TENURE_BADGE_LEVEL_UP_REPLAY_CLICKED, {
        new_badge_id: R.id
      })
    }, [R.id, D]),
    L = {
      "--custom-old-badge-color": "linear-gradient(to right, ".concat(null != (a = t.prevBadgeTextGradient) ? a : "transparent", ")"),
      "--custom-new-badge-color": "linear-gradient(to right, ".concat(t.currentBadgeTextGradient, ")")
    };
  return (0, n.jsxs)("div", {
    className: i()(x.Qs, {
      [x.v6]: v,
      [x.Kc]: r,
      [x.A4]: N
    }),
    style: L,
    ref: j,
    children: [(0, n.jsx)(o.A, {
      ref: A,
      className: x.Ki,
      src: w,
      playsInline: true,
      onLoadedData: () => g(true),
      onEnded: () => T(true)
    }), (0, n.jsxs)("div", {
      className: x.FS,
      children: [(0, n.jsx)(m.A, {
        width: 60,
        height: 15
      }), null != U && (0, n.jsx)(l.Text, {
        variant: "display-md",
        className: i()(x.Vv, x.km),
        children: E.intl.string(U.nameUnformatted)
      }), (0, n.jsx)(l.Text, {
        variant: "display-md",
        className: i()(x.Vv, x.Hl),
        children: E.intl.string(R.nameUnformatted)
      }), null != k && (0, n.jsx)(l.Text, {
        variant: "text-xs/medium",
        className: x.SD,
        children: E.intl.formatToPlainString(E.t["f/OGgM"], {
          timeFrame: (0, f.T)(R.id, R.tenureReqNumMonths),
          date: k
        })
      }), (0, n.jsx)("div", {
        className: x.uu,
        children: (0, n.jsx)(c.m, {
          text: E.intl.string(E.t.hsvh0i),
          children: (0, n.jsx)(l.K0, {
            icon: l.udU,
            variant: "secondary",
            size: "sm",
            onClick: I,
            "aria-label": E.intl.string(E.t.hsvh0i)
          })
        })
      })]
    })]
  })
}