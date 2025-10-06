/** Chunk was on 56035 **/
/** chunk id: 87686, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => p
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
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
let h = {
    startPositionMs: 0,
    endPositionMs: 2 * (10 * Chunk70956.Z.Millis.SECOND),
    playheadPositionMs: 0
  },
  p = Chunk647438.memo(function(e) {
    let {
      className: n,
      volume: t,
      disabled: i = false,
      onChange: p
    } = e, {
      audio: y
    } = (0, c.p)(), [b, v] = l.useState(false), [x, j] = l.useState(h), {
      playheadPositionMs: w,
      endPositionMs: _,
      startPositionMs: N
    } = x, C = null != y, S = _ - N, O = S > m.YW * s.Z.Millis.SECOND;
    l.useEffect(() => {
      if (null != y) return j({
        playheadPositionMs: 0,
        endPositionMs: y.duration * s.Z.Millis.SECOND,
        startPositionMs: 0
      }), () => {
        y.pause(), v(false)
      }
    }, [y]);
    let E = l.useCallback(e => {
        null != y && (y.pause(), null != e && (y.currentTime = e), v(false))
      }, [y]),
      I = l.useCallback(() => {
        if (null != y) {
          if (b) return void E();
          w >= _ ? y.currentTime = (0, f.my)(N) : y.currentTime = (0, f.my)(w), y.volume = (0, u.Z)(t), y.play(), v(true)
        }
      }, [y, _, E, w, b, N, t]),
      P = l.useCallback(e => {
        j(e), null == p || p({
          startMs: e.startPositionMs,
          endMs: e.endPositionMs
        })
      }, [p]),
      Z = l.useCallback(e => {
        null != y && (y.currentTime = e)
      }, [y]);
    return (0, a.jsxs)("div", {
      className: r()(g.container, {
        [g.initialized]: C,
        [g.disabled]: !C || i
      }, n),
      children: [(0, a.jsxs)("div", {
        className: g.playButtonContainer,
        children: [(0, a.jsx)(o.P3F, {
          className: g.playButton,
          onClick: C ? I : true,
          children: b ? (0, a.jsx)(o.wNq, {
            size: "xs",
            color: "currentColor",
            className: g.playButtonIcon
          }) : (0, a.jsx)(o.o1U, {
            size: "xs",
            color: "currentColor",
            className: g.playButtonIcon
          })
        }), (0, a.jsx)("div", {
          className: g.durationContainer,
          children: (0, a.jsx)(o.Text, {
            className: g.__invalid_duration,
            variant: "text-xs/normal",
            color: O ? "text-feedback-warning" : "text-feedback-positive",
            children: "".concat((0, f.my)(S).toFixed(2), "s")
          })
        })]
      }), (0, a.jsx)(d.Z, {
        playing: b,
        onPlaybackChange: Z,
        onPausePlayback: E,
        onChangePosition: P,
        disabled: i
      })]
    })
  })