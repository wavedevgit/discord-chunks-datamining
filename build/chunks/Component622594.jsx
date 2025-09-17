/** Chunk was on 56035 **/
/** chunk id: 622594, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => g
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  r = require.n(Chunk120356),
  Chunk259580 = require("./259580.jsx"),
  Chunk70956 = require("./70956.js"),
  Chunk586826 = require("./586826.js"),
  Chunk174727 = require("./174727.js"),
  Chunk882126 = require("./882126.jsx"),
  Chunk943351 = require("./943351.js"),
  Chunk21243 = require("./21243.js");
let g = Chunk647438.memo(function(e) {
  let {
    playing: n,
    onPausePlayback: t,
    onPlaybackChange: i,
    onChangePosition: g,
    disabled: h = false
  } = e, p = function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var t = null != arguments[n] ? arguments[n] : {},
        a = Object.keys(t);
      "function" == typeof Object.getOwnPropertySymbols && (a = a.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
        return Object.getOwnPropertyDescriptor(t, e).enumerable
      }))), a.forEach(function(n) {
        var a;
        a = t[n], n in e ? Object.defineProperty(e, n, {
          value: a,
          enumerable: true,
          configurable: true,
          writable: true
        }) : e[n] = a
      })
    }
    return e
  }({}, f.nl), {
    audio: y
  } = (0, u.p)(), b = null != y, v = l.useRef(null), x = l.useRef(null), w = l.useRef(null), [j, _] = l.useState(0), [N, C] = l.useState(0), [S, O] = l.useState(0), [E, P] = l.useState(false), [I, k] = l.useState(false), [M, Z] = l.useState(false), [T, F] = l.useState(0), [D, R] = l.useState(false), B = l.useMemo(() => T / p.fineTuningScale, [p.fineTuningScale, T]);
  l.useEffect(() => {
    if (null == y) return;
    let e = y.duration * s.Z.Millis.SECOND;
    _(0), C(0), O(e), F(e)
  }, [y]);
  let H = l.useCallback((e, n) => {
      if (t(), 0 === e.button) switch (n) {
        case 0:
          P(true);
          break;
        case 1:
          k(true);
          break;
        case 2:
          Z(true)
      }
    }, [t]),
    A = l.useCallback(e => {
      switch (e) {
        case 0:
          P(false);
          break;
        case 1:
          k(false);
          break;
        case 2:
          Z(false)
      }
      R(false)
    }, []),
    U = l.useCallback(e => {
      if (null == y || !E) return;
      let n = parseInt(e.target.value),
        t = n > S ? S : n;
      i((0, c.my)(t)), _(t), C(t)
    }, [y, i, S, E]),
    z = l.useCallback(e => {
      if (null == y || !I) return;
      let n = parseInt(e.target.value);
      n < j ? (i((0, c.my)(j)), C(j)) : n > S ? (i((0, c.my)(S)), C(S)) : (i((0, c.my)(n)), C(n))
    }, [y, i, S, I, j]),
    L = l.useCallback(e => {
      if (null == y || !M) return;
      let n = parseInt(e.target.value),
        t = n > j ? n : j;
      i((0, c.my)(j)), C(j), O(t)
    }, [y, i, M, j]);
  return l.useEffect(() => {
    null != g && b && g({
      startPositionMs: j,
      endPositionMs: S,
      playheadPositionMs: N
    })
  }, [j, S, g, b, N]), l.useEffect(() => {
    let e;
    if (null != y) return n && (e = setInterval(() => {
      y.currentTime < (0, c.my)(S) ? y.currentTime >= (0, c.my)(N) && C(y.currentTime * s.Z.Millis.SECOND) : (t((0, c.my)(j)), C(j))
    }, 16)), () => {
      clearInterval(e)
    }
  }, [y, S, t, N, n, j]), l.useEffect(() => {
    if (p.fineTuningDelay <= 0) return;
    let e = setTimeout(() => {
      E && j == j && false === D ? R(j) : M && S == S && false === D ? R(S) : I && N == N && false === D && R(N)
    }, p.fineTuningDelay);
    return () => {
      clearTimeout(e)
    }
  }, [p.fineTuningDelay, M, S, D, I, N, E, j]), (0, a.jsxs)("div", {
    className: r()(m.timeline, {
      [m.initialized]: b
    }),
    children: [(0, a.jsxs)("div", {
      className: m.rangeHandleContainer,
      children: [(0, a.jsxs)("div", {
        className: m.rangeHandleFrame,
        children: [(0, a.jsx)("input", {
          ref: v,
          className: r()(m.rangeHandle, m.rangeHandleStart),
          type: "range",
          min: (0, c.ao)(D, B, T),
          max: (0, c.MN)(D, B, T),
          value: j,
          onChange: U,
          onMouseDown: e => H(e, 0),
          onMouseUp: () => A(0),
          disabled: !b || h
        }), (0, a.jsx)("input", {
          ref: w,
          className: r()(m.rangeHandle, m.rangeHandleEnd),
          type: "range",
          min: (0, c.ao)(D, B, T),
          max: (0, c.MN)(D, B, T),
          value: S,
          onChange: L,
          onMouseDown: e => H(e, 2),
          onMouseUp: () => A(2),
          disabled: !b || h
        })]
      }), (0, a.jsx)("div", {
        className: m.__invalid_handlePlayheadTrack,
        children: (0, a.jsx)("input", {
          ref: x,
          className: r()(m.rangeHandle, m.rangeHandlePlayhead),
          type: "range",
          min: (0, c.ao)(D, B, T),
          max: (0, c.MN)(D, B, T),
          value: N,
          onChange: z,
          onMouseDown: e => H(e, 1),
          onMouseUp: () => A(1),
          disabled: !b || h
        })
      })]
    }), (0, a.jsxs)("div", {
      className: m.handleContainer,
      children: [(0, a.jsxs)("div", {
        className: r()(m.handleFrame, {
          [m.startDragging]: E,
          [m.endDragging]: M
        }),
        style: {
          left: "".concat((0, c.pN)(j, D, B, T), "%"),
          right: "".concat((0, c.kD)(S, D, B, T), "%")
        },
        children: [(0, a.jsx)("div", {
          className: r()(m.handleIconFrame, m.handleIconFrameStart),
          children: (0, a.jsx)("div", {
            className: r()(m.handleIconContainer, m.__invalid_start),
            children: (0, a.jsx)(o.Z, {
              direction: o.Z.Directions.RIGHT,
              className: m.handleIcon,
              width: 16,
              height: 16
            })
          })
        }), (0, a.jsx)("div", {
          className: r()(m.handleIconFrame, m.handleIconFrameEnd),
          children: (0, a.jsx)("div", {
            className: r()(m.handleIconContainer, m.__invalid_end),
            children: (0, a.jsx)(o.Z, {
              direction: o.Z.Directions.LEFT,
              className: m.handleIcon,
              width: 16,
              height: 16
            })
          })
        })]
      }), (0, a.jsx)("div", {
        className: m.playheadTrack,
        children: (0, a.jsx)("div", {
          className: r()(m.playhead, {
            [m.dragging]: I || E || M || n
          }),
          style: {
            left: "".concat((0, c.pN)(N, D, B, T), "%")
          }
        })
      })]
    }), (0, a.jsx)("div", {
      className: m.waveformContainer,
      children: (0, a.jsx)(d.Z, {
        fineTuning: D,
        fineTuningResolution: B,
        duration: T
      })
    })]
  })
})