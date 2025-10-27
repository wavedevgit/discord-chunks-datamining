/** Chunk was on 56035 **/
/** chunk id: 622594, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => g
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
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
    onPlaybackChange: r,
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
    audio: b
  } = (0, u.p)(), y = null != b, v = l.useRef(null), x = l.useRef(null), j = l.useRef(null), [w, _] = l.useState(0), [C, N] = l.useState(0), [S, O] = l.useState(0), [P, E] = l.useState(false), [I, M] = l.useState(false), [Z, k] = l.useState(false), [T, F] = l.useState(0), [D, R] = l.useState(false), B = l.useMemo(() => T / p.fineTuningScale, [p.fineTuningScale, T]);
  l.useEffect(() => {
    if (null == b) return;
    let e = b.duration * s.Z.Millis.SECOND;
    _(0), N(0), O(e), F(e)
  }, [b]);
  let U = l.useCallback((e, n) => {
      if (t(), 0 === e.button) switch (n) {
        case 0:
          E(true);
          break;
        case 1:
          M(true);
          break;
        case 2:
          k(true)
      }
    }, [t]),
    A = l.useCallback(e => {
      switch (e) {
        case 0:
          E(false);
          break;
        case 1:
          M(false);
          break;
        case 2:
          k(false)
      }
      R(false)
    }, []),
    H = l.useCallback(e => {
      if (null == b || !P) return;
      let n = parseInt(e.target.value),
        t = n > S ? S : n;
      r((0, c.my)(t)), _(t), N(t)
    }, [b, r, S, P]),
    z = l.useCallback(e => {
      if (null == b || !I) return;
      let n = parseInt(e.target.value);
      n < w ? (r((0, c.my)(w)), N(w)) : n > S ? (r((0, c.my)(S)), N(S)) : (r((0, c.my)(n)), N(n))
    }, [b, r, S, I, w]),
    L = l.useCallback(e => {
      if (null == b || !Z) return;
      let n = parseInt(e.target.value),
        t = n > w ? n : w;
      r((0, c.my)(w)), N(w), O(t)
    }, [b, r, Z, w]);
  return l.useEffect(() => {
    null != g && y && g({
      startPositionMs: w,
      endPositionMs: S,
      playheadPositionMs: C
    })
  }, [w, S, g, y, C]), l.useEffect(() => {
    let e;
    if (null != b) return n && (e = setInterval(() => {
      b.currentTime < (0, c.my)(S) ? b.currentTime >= (0, c.my)(C) && N(b.currentTime * s.Z.Millis.SECOND) : (t((0, c.my)(w)), N(w))
    }, 16)), () => {
      clearInterval(e)
    }
  }, [b, S, t, C, n, w]), l.useEffect(() => {
    if (p.fineTuningDelay <= 0) return;
    let e = setTimeout(() => {
      P && w == w && false === D ? R(w) : Z && S == S && false === D ? R(S) : I && C == C && false === D && R(C)
    }, p.fineTuningDelay);
    return () => {
      clearTimeout(e)
    }
  }, [p.fineTuningDelay, Z, S, D, I, C, P, w]), (0, a.jsxs)("div", {
    className: i()(m.timeline, {
      [m.initialized]: y
    }),
    children: [(0, a.jsxs)("div", {
      className: m.rangeHandleContainer,
      children: [(0, a.jsxs)("div", {
        className: m.rangeHandleFrame,
        children: [(0, a.jsx)("input", {
          ref: v,
          className: i()(m.rangeHandle, m.rangeHandleStart),
          type: "range",
          min: (0, c.ao)(D, B, T),
          max: (0, c.MN)(D, B, T),
          value: w,
          onChange: H,
          onMouseDown: e => U(e, 0),
          onMouseUp: () => A(0),
          disabled: !y || h
        }), (0, a.jsx)("input", {
          ref: j,
          className: i()(m.rangeHandle, m.rangeHandleEnd),
          type: "range",
          min: (0, c.ao)(D, B, T),
          max: (0, c.MN)(D, B, T),
          value: S,
          onChange: L,
          onMouseDown: e => U(e, 2),
          onMouseUp: () => A(2),
          disabled: !y || h
        })]
      }), (0, a.jsx)("div", {
        className: m.__invalid_handlePlayheadTrack,
        children: (0, a.jsx)("input", {
          ref: x,
          className: i()(m.rangeHandle, m.rangeHandlePlayhead),
          type: "range",
          min: (0, c.ao)(D, B, T),
          max: (0, c.MN)(D, B, T),
          value: C,
          onChange: z,
          onMouseDown: e => U(e, 1),
          onMouseUp: () => A(1),
          disabled: !y || h
        })
      })]
    }), (0, a.jsxs)("div", {
      className: m.handleContainer,
      children: [(0, a.jsxs)("div", {
        className: i()(m.handleFrame, {
          [m.startDragging]: P,
          [m.endDragging]: Z
        }),
        style: {
          left: "".concat((0, c.pN)(w, D, B, T), "%"),
          right: "".concat((0, c.kD)(S, D, B, T), "%")
        },
        children: [(0, a.jsx)("div", {
          className: i()(m.handleIconFrame, m.handleIconFrameStart),
          children: (0, a.jsx)("div", {
            className: i()(m.handleIconContainer, m.__invalid_start),
            children: (0, a.jsx)(o.Z, {
              direction: o.Z.Directions.RIGHT,
              className: m.handleIcon,
              width: 16,
              height: 16
            })
          })
        }), (0, a.jsx)("div", {
          className: i()(m.handleIconFrame, m.handleIconFrameEnd),
          children: (0, a.jsx)("div", {
            className: i()(m.handleIconContainer, m.__invalid_end),
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
          className: i()(m.playhead, {
            [m.dragging]: I || P || Z || n
          }),
          style: {
            left: "".concat((0, c.pN)(C, D, B, T), "%")
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