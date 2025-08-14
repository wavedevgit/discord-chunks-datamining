/** Chunk was on 56035 **/
/** chunk id: 87686, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => p
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  r = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk70956 = require("./70956.js"),
  Chunk747071 = require("./747071.js"),
  Chunk586826 = require("./586826.js"),
  Chunk622594 = require("./622594.jsx"),
  Chunk174727 = require("./174727.js"),
  Chunk710111 = require("./710111.js"),
  Chunk400029 = require("./400029.js");
let g = {
    startPositionMs: 0,
    endPositionMs: 2 * (10 * Chunk70956.Z.Millis.SECOND),
    playheadPositionMs: 0
  },
  p = Chunk73800.memo(function(e) {
    let {
      className: t,
      volume: n,
      disabled: i = false,
      onChange: p
    } = e, {
      audio: y
    } = (0, c.p)(), [b, v] = a.useState(false), [x, j] = a.useState(g), {
      playheadPositionMs: w,
      endPositionMs: N,
      startPositionMs: C
    } = x, S = null != y, O = N - C, E = O > m.YW * o.Z.Millis.SECOND;
    a.useEffect(() => {
      if (null != y) return j({
        playheadPositionMs: 0,
        endPositionMs: y.duration * o.Z.Millis.SECOND,
        startPositionMs: 0
      }), () => {
        y.pause(), v(false)
      }
    }, [y]);
    let P = a.useCallback(e => {
        null != y && (y.pause(), null != e && (y.currentTime = e), v(false))
      }, [y]),
      Z = a.useCallback(() => {
        if (null != y) {
          if (b) return void P();
          w >= N ? y.currentTime = (0, f.my)(C) : y.currentTime = (0, f.my)(w), y.volume = (0, u.Z)(n), y.play(), v(true)
        }
      }, [y, N, P, w, b, C, n]),
      M = a.useCallback(e => {
        j(e), null == p || p({
          startMs: e.startPositionMs,
          endMs: e.endPositionMs
        })
      }, [p]),
      k = a.useCallback(e => {
        null != y && (y.currentTime = e)
      }, [y]);
    return (0, l.jsxs)("div", {
      className: r()(h.container, {
        [h.initialized]: S,
        [h.disabled]: !S || i
      }, t),
      children: [(0, l.jsxs)("div", {
        className: h.playButtonContainer,
        children: [(0, l.jsx)(s.P3F, {
          className: h.playButton,
          onClick: S ? Z : true,
          children: b ? (0, l.jsx)(s.wNq, {
            size: "xs",
            color: "currentColor",
            className: h.playButtonIcon
          }) : (0, l.jsx)(s.o1U, {
            size: "xs",
            color: "currentColor",
            className: h.playButtonIcon
          })
        }), (0, l.jsx)("div", {
          className: h.durationContainer,
          children: (0, l.jsx)(s.Text, {
            className: h.__invalid_duration,
            variant: "text-xs/normal",
            color: E ? "text-feedback-warning" : "text-feedback-positive",
            children: "".concat((0, f.my)(O).toFixed(2), "s")
          })
        })]
      }), (0, l.jsx)(d.Z, {
        playing: b,
        onPlaybackChange: k,
        onPausePlayback: P,
        onChangePosition: M,
        disabled: i
      })]
    })
  })