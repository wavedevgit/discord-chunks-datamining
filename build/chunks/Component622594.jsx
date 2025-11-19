/** Chunk was on 56035 **/
/** chunk id: 622594, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => g
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  r = require.n(Chunk120356),
  Chunk259580 = require("./259580.jsx"),
  Chunk70956 = require("./70956.js"),
  Chunk586826 = require("./586826.js"),
  Chunk174727 = require("./174727.js"),
  Chunk882126 = require("./882126.jsx"),
  Chunk943351 = require("./943351.js"),
  Chunk21243 = require("./21243.js");
let g = Chunk473749.memo(function(e) {
  let {
    playing: n,
    onPausePlayback: t,
    onPlaybackChange: i,
    onChangePosition: g,
    disabled: h = false
  } = e, v = function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var t = null != arguments[n] ? arguments[n] : {},
        l = Object.keys(t);
      "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
        return Object.getOwnPropertyDescriptor(t, e).enumerable
      }))), l.forEach(function(n) {
        var l;
        l = t[n], n in e ? Object.defineProperty(e, n, {
          value: l,
          enumerable: true,
          configurable: true,
          writable: true
        }) : e[n] = l
      })
    }
    return e
  }({}, f.nl), {
    audio: p
  } = (0, u.p)(), b = null != p, y = a.useRef(null), j = a.useRef(null), x = a.useRef(null), [N, w] = a.useState(0), [C, S] = a.useState(0), [O, Z] = a.useState(0), [P, M] = a.useState(false), [E, k] = a.useState(false), [I, T] = a.useState(false), [D, F] = a.useState(0), [R, B] = a.useState(false), _ = a.useMemo(() => D / v.fineTuningScale, [v.fineTuningScale, D]);
  a.useEffect(() => {
    if (null == p) return;
    let e = p.duration * o.Z.Millis.SECOND;
    w(0), S(0), Z(e), F(e)
  }, [p]);
  let U = a.useCallback((e, n) => {
      if (t(), 0 === e.button) switch (n) {
        case 0:
          M(true);
          break;
        case 1:
          k(true);
          break;
        case 2:
          T(true)
      }
    }, [t]),
    z = a.useCallback(e => {
      switch (e) {
        case 0:
          M(false);
          break;
        case 1:
          k(false);
          break;
        case 2:
          T(false)
      }
      B(false)
    }, []),
    G = a.useCallback(e => {
      if (null == p || !P) return;
      let n = parseInt(e.target.value),
        t = n > O ? O : n;
      i((0, c.my)(t)), w(t), S(t)
    }, [p, i, O, P]),
    L = a.useCallback(e => {
      if (null == p || !E) return;
      let n = parseInt(e.target.value);
      n < N ? (i((0, c.my)(N)), S(N)) : n > O ? (i((0, c.my)(O)), S(O)) : (i((0, c.my)(n)), S(n))
    }, [p, i, O, E, N]),
    H = a.useCallback(e => {
      if (null == p || !I) return;
      let n = parseInt(e.target.value),
        t = n > N ? n : N;
      i((0, c.my)(N)), S(N), Z(t)
    }, [p, i, I, N]);
  return a.useEffect(() => {
    null != g && b && g({
      startPositionMs: N,
      endPositionMs: O,
      playheadPositionMs: C
    })
  }, [N, O, g, b, C]), a.useEffect(() => {
    let e;
    if (null != p) return n && (e = setInterval(() => {
      p.currentTime < (0, c.my)(O) ? p.currentTime >= (0, c.my)(C) && S(p.currentTime * o.Z.Millis.SECOND) : (t((0, c.my)(N)), S(N))
    }, 16)), () => {
      clearInterval(e)
    }
  }, [p, O, t, C, n, N]), a.useEffect(() => {
    if (v.fineTuningDelay <= 0) return;
    let e = setTimeout(() => {
      P && N == N && false === R ? B(N) : I && O == O && false === R ? B(O) : E && C == C && false === R && B(C)
    }, v.fineTuningDelay);
    return () => {
      clearTimeout(e)
    }
  }, [v.fineTuningDelay, I, O, R, E, C, P, N]), (0, l.jsxs)("div", {
    className: r()(m.timeline, {
      [m.initialized]: b
    }),
    children: [(0, l.jsxs)("div", {
      className: m.rangeHandleContainer,
      children: [(0, l.jsxs)("div", {
        className: m.rangeHandleFrame,
        children: [(0, l.jsx)("input", {
          ref: y,
          className: r()(m.rangeHandle, m.rangeHandleStart),
          type: "range",
          min: (0, c.ao)(R, _, D),
          max: (0, c.MN)(R, _, D),
          value: N,
          onChange: G,
          onMouseDown: e => U(e, 0),
          onMouseUp: () => z(0),
          disabled: !b || h
        }), (0, l.jsx)("input", {
          ref: x,
          className: r()(m.rangeHandle, m.rangeHandleEnd),
          type: "range",
          min: (0, c.ao)(R, _, D),
          max: (0, c.MN)(R, _, D),
          value: O,
          onChange: H,
          onMouseDown: e => U(e, 2),
          onMouseUp: () => z(2),
          disabled: !b || h
        })]
      }), (0, l.jsx)("div", {
        className: m.__invalid_handlePlayheadTrack,
        children: (0, l.jsx)("input", {
          ref: j,
          className: r()(m.rangeHandle, m.rangeHandlePlayhead),
          type: "range",
          min: (0, c.ao)(R, _, D),
          max: (0, c.MN)(R, _, D),
          value: C,
          onChange: L,
          onMouseDown: e => U(e, 1),
          onMouseUp: () => z(1),
          disabled: !b || h
        })
      })]
    }), (0, l.jsxs)("div", {
      className: m.handleContainer,
      children: [(0, l.jsxs)("div", {
        className: r()(m.handleFrame, {
          [m.startDragging]: P,
          [m.endDragging]: I
        }),
        style: {
          left: "".concat((0, c.pN)(N, R, _, D), "%"),
          right: "".concat((0, c.kD)(O, R, _, D), "%")
        },
        children: [(0, l.jsx)("div", {
          className: r()(m.handleIconFrame, m.handleIconFrameStart),
          children: (0, l.jsx)("div", {
            className: r()(m.handleIconContainer, m.__invalid_start),
            children: (0, l.jsx)(s.Z, {
              direction: s.Z.Directions.RIGHT,
              className: m.handleIcon,
              width: 16,
              height: 16
            })
          })
        }), (0, l.jsx)("div", {
          className: r()(m.handleIconFrame, m.handleIconFrameEnd),
          children: (0, l.jsx)("div", {
            className: r()(m.handleIconContainer, m.__invalid_end),
            children: (0, l.jsx)(s.Z, {
              direction: s.Z.Directions.LEFT,
              className: m.handleIcon,
              width: 16,
              height: 16
            })
          })
        })]
      }), (0, l.jsx)("div", {
        className: m.playheadTrack,
        children: (0, l.jsx)("div", {
          className: r()(m.playhead, {
            [m.dragging]: E || P || I || n
          }),
          style: {
            left: "".concat((0, c.pN)(C, R, _, D), "%")
          }
        })
      })]
    }), (0, l.jsx)("div", {
      className: m.waveformContainer,
      children: (0, l.jsx)(d.Z, {
        fineTuning: R,
        fineTuningResolution: _,
        duration: D
      })
    })]
  })
})