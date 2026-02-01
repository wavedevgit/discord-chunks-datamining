/** Chunk was on 17537 **/
/** chunk id: 970812, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => O
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk172218 = require("./172218.js"),
  Chunk311907 = require("./311907.js"),
  Chunk775602 = require("./775602.js"),
  Chunk531685 = require("./531685.js"),
  Chunk25639 = require("./25639.js");
let c = "ease-in-out",
  d = [8, 16, 11, 13, 6],
  h = Array.from({
    length: 5
  }, (e, t) => t),
  f = 6.67 / 8,
  g = "M16.5 18H16a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-.5v-.5a2.5 2.5 0 0 0-5 0v.5Zm3.5 0v-.5a1 1 0 1 0-2 0v.5h2Z",
  p = "translate(".concat(12.33 - 15 * f, ", ").concat(1 - 15.5 * f, ") scale(").concat(f, ")");

function m(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : d,
    n = arguments.length > 2 && true !== arguments[2] ? arguments[2] : 2,
    l = arguments.length > 3 && true !== arguments[3] ? arguments[3] : 16;
  return t.map(t => Math.max(n, Math.min(l, t + b(-e, e))))
}

function b(e, t) {
  return Math.random() * (t - e) + e
}
let y = [6, 10, 9, 16, 8],
  v = {
    [Chunk25639.s.GENTLE_AMBIENT]: {
      firstState: "burst",
      transitionConfig: {
        durationMs: 180,
        timingFunction: c
      },
      states: {
        burst: {
          getHeights: () => m(4),
          getAnimationDelay: () => b(64, 128),
          getStateDuration: () => b(3e3, 6e3),
          getNextState: () => "quiet"
        },
        quiet: {
          getHeights: () => m(3),
          getAnimationDelay: () => b(64, 128),
          getStateDuration: () => b(1e3, 3e3),
          getNextState: () => "burst"
        }
      }
    },
    [Chunk25639.s.GENTLE_AMBIENT_WITH_INTRO]: {
      firstState: "introSilent",
      transitionConfig: {
        durationMs: 100,
        timingFunction: c
      },
      states: {
        introSilent: {
          getHeights: () => (function() {
            let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : 2,
              t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : 2;
            return [, , , , , ].fill(0).map(() => t + b(0, e))
          })(),
          getAnimationDelay: () => b(64, 128),
          getStateDuration: () => b(32, 64),
          getNextState: () => "waveBuildCenter"
        },
        waveBuildCenter: {
          getHeights: () => m(3, [2, 2, 5, 2, 2]),
          getAnimationDelay: () => b(64, 128),
          getStateDuration: () => b(32, 64),
          getNextState: () => "waveBuildRight1"
        },
        waveBuildRight1: {
          getHeights: () => m(4, [3, 3, 10, 6, 3], 1),
          getAnimationDelay: () => b(64, 128),
          getStateDuration: () => b(32, 64),
          getNextState: () => "waveBuildRight2"
        },
        waveBuildRight2: {
          getHeights: () => m(4, [3, 3, 7, 12, 6], 1),
          getAnimationDelay: () => b(64, 128),
          getStateDuration: () => b(32, 64),
          getNextState: () => "wavePeakRight"
        },
        wavePeakRight: {
          getHeights: () => m(4, [3, 3, 5, 10, 16], 1),
          getAnimationDelay: () => b(64, 128),
          getStateDuration: () => b(32, 64),
          getNextState: () => "waveReturnLeft1"
        },
        waveReturnLeft1: {
          getHeights: () => m(5, [3, 3, 8, 13, 7]),
          getAnimationDelay: () => b(64, 128),
          getStateDuration: () => b(32, 64),
          getNextState: () => "waveReturnLeft2"
        },
        waveReturnLeft2: {
          getHeights: () => m(5, [4, 6, 12, 9, 6]),
          getAnimationDelay: () => b(64, 128),
          getStateDuration: () => b(32, 64),
          getNextState: () => "burst"
        },
        burst: {
          getHeights: () => m(4),
          getAnimationDelay: () => b(64, 128),
          getStateDuration: () => b(3e3, 6e3),
          getNextState: () => "quiet"
        },
        quiet: {
          getHeights: () => m(3),
          getAnimationDelay: () => b(64, 128),
          getStateDuration: () => b(1e3, 3e3),
          getNextState: () => "burst"
        }
      }
    },
    [Chunk25639.s.HIGH_CONTRAST]: {
      firstState: "burst",
      transitionConfig: {
        durationMs: 120,
        timingFunction: c
      },
      states: {
        burst: {
          getHeights: () => m(7, y),
          getAnimationDelay: () => b(64, 128),
          getStateDuration: () => b(3e3, 6e3),
          getNextState: () => "quiet"
        },
        quiet: {
          getHeights: () => m(4, y),
          getAnimationDelay: () => b(64, 128),
          getStateDuration: () => b(1e3, 3e3),
          getNextState: () => "burst"
        }
      }
    }
  };

function O(e) {
  let t, n, c, {
      color: f = "currentColor",
      className: m,
      iconSize: b = 20,
      animationStyle: y = u.s.GENTLE_AMBIENT,
      locked: O = false
    } = e,
    E = r.useId(),
    N = (0, a.bG)([s.A], () => s.A.useReducedMotion),
    j = (0, a.bG)([o.A], () => o.A.isAppFocused()),
    [A, x] = r.useState(false),
    S = r.useCallback(e => {
      x(t => t !== e ? e : t)
    }, []),
    T = (0, i.K)(S, .15),
    D = v[y],
    w = N || !j || !A,
    P = r.useMemo(() => D.states[D.firstState].getHeights(), [D]),
    R = (b - 18) / 2,
    C = w ? 0 : D.transitionConfig.durationMs,
    I = r.useRef(null),
    M = r.useMemo(() => ({
      transformBox: "fill-box",
      transformOrigin: "center",
      transitionProperty: "transform",
      transitionDuration: "".concat(C, "ms"),
      transitionTimingFunction: D.transitionConfig.timingFunction
    }), [D.transitionConfig.timingFunction, C]),
    _ = r.useCallback(e => {
      let t = I.current;
      if (null == t) return;
      let n = t.children;
      for (let t = 0; t < 5; t++) {
        let l = n.item(t);
        if (null == l) continue;
        let r = e[t],
          i = Math.max(2, Math.min(16, "number" == typeof r && Number.isFinite(r) ? r : 2)) / 16;
        l.style.transform = "scaleY(".concat(i, ")")
      }
    }, [I]);
  r.useLayoutEffect(() => {
    N || _(P)
  }, [_, P, N]), t = r.useRef(D.firstState), n = r.useRef(null), c = !w, r.useEffect(() => {
    if (!c) return;
    t.current = D.firstState, n.current = null;
    let e = null,
      l = null,
      r = false;
    n.current = {
      now: Date.now(),
      stateEnterTime: Date.now(),
      stateEndTime: 0
    };
    let i = n.current,
      a = e => {
        i.stateEnterTime = i.now;
        let t = e.getStateDuration();
        i.stateEndTime = t > 0 ? i.now + t : 0
      },
      s = t => {
        if (o(), !r) {
          if (t <= 0) {
            l = requestAnimationFrame(u);
            return
          }
          e = setTimeout(() => {
            e = null, r || (l = requestAnimationFrame(u))
          }, t)
        }
      },
      o = () => {
        null != e && (clearTimeout(e), e = null), null != l && (cancelAnimationFrame(l), l = null)
      },
      u = () => {
        if (r) return;
        e = null, l = null, i.now = Date.now();
        let n = t.current,
          o = D.states[n];
        if (null == o) {
          t.current = D.firstState, s(0);
          return
        }
        try {
          let e = o.getHeights();
          _(e)
        } catch (e) {
          r = true;
          return
        }
        if (0 === i.stateEndTime || i.now >= i.stateEndTime) {
          let e = o.getNextState();
          t.current = e;
          let n = D.states[e];
          null != n && a(n)
        }
        s(o.getAnimationDelay())
      },
      d = D.states[t.current];
    return null != d && a(d), s(0), () => {
      r = true, o()
    }
  }, [_, c, D]);
  let L = O ? (0, l.jsx)("defs", {
      children: (0, l.jsxs)("mask", {
        id: E,
        children: [(0, l.jsx)("rect", {
          width: b,
          height: b,
          fill: "white"
        }), (0, l.jsx)("rect", {
          x: 11.33,
          y: 0,
          width: 8.67,
          height: 9.5,
          fill: "black",
          rx: 1
        })]
      })
    }) : null,
    k = O ? "url(#".concat(E, ")") : true;
  return N ? (0, l.jsx)("span", {
    ref: T,
    className: m,
    style: {
      display: "inline-flex"
    },
    children: (0, l.jsxs)("svg", {
      width: b,
      height: b,
      viewBox: "0 0 ".concat(b, " ").concat(b),
      fill: "none",
      children: [L, (0, l.jsx)("g", {
        mask: k,
        children: d.map((e, t) => {
          let n = (b - e) / 2;
          return (0, l.jsx)("rect", {
            x: R + 4 * t,
            y: n,
            width: 2,
            height: e,
            rx: 1,
            fill: f
          }, t)
        })
      }), O && (0, l.jsx)("path", {
        d: g,
        transform: p,
        fill: f,
        fillRule: "evenodd",
        clipRule: "evenodd"
      })]
    })
  }) : (0, l.jsx)("span", {
    ref: T,
    className: m,
    style: {
      display: "inline-flex"
    },
    children: (0, l.jsxs)("svg", {
      width: b,
      height: b,
      viewBox: "0 0 ".concat(b, " ").concat(b),
      fill: "none",
      children: [L, (0, l.jsx)("g", {
        ref: I,
        mask: k,
        children: h.map(e => {
          let t = (b - 16) / 2;
          return (0, l.jsx)("rect", {
            x: R + 4 * e,
            y: t,
            width: 2,
            height: 16,
            rx: 1,
            fill: f,
            style: M
          }, e)
        })
      }), O && (0, l.jsx)("path", {
        d: g,
        transform: p,
        fill: f,
        fillRule: "evenodd",
        clipRule: "evenodd"
      })]
    })
  })
}