/** Chunk was on 56035 **/
/** chunk id: 87686, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => p
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
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
      disabled: r = false,
      onChange: p
    } = e, {
      audio: b
    } = (0, c.p)(), [y, v] = l.useState(false), [x, j] = l.useState(h), {
      playheadPositionMs: w,
      endPositionMs: _,
      startPositionMs: C
    } = x, N = null != b, S = _ - C, O = S > m.YW * s.Z.Millis.SECOND;
    l.useEffect(() => {
      if (null != b) return j({
        playheadPositionMs: 0,
        endPositionMs: b.duration * s.Z.Millis.SECOND,
        startPositionMs: 0
      }), () => {
        b.pause(), v(false)
      }
    }, [b]);
    let P = l.useCallback(e => {
        null != b && (b.pause(), null != e && (b.currentTime = e), v(false))
      }, [b]),
      E = l.useCallback(() => {
        if (null != b) {
          if (y) return void P();
          w >= _ ? b.currentTime = (0, f.my)(C) : b.currentTime = (0, f.my)(w), b.volume = (0, u.Z)(t), b.play(), v(true)
        }
      }, [b, _, P, w, y, C, t]),
      I = l.useCallback(e => {
        j(e), null == p || p({
          startMs: e.startPositionMs,
          endMs: e.endPositionMs
        })
      }, [p]),
      M = l.useCallback(e => {
        null != b && (b.currentTime = e)
      }, [b]);
    return (0, a.jsxs)("div", {
      className: i()(g.container, {
        [g.initialized]: N,
        [g.disabled]: !N || r
      }, n),
      children: [(0, a.jsxs)("div", {
        className: g.playButtonContainer,
        children: [(0, a.jsx)(o.P3F, {
          className: g.playButton,
          onClick: N ? E : true,
          children: y ? (0, a.jsx)(o.wNq, {
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
        playing: y,
        onPlaybackChange: M,
        onPausePlayback: P,
        onChangePosition: I,
        disabled: r
      })]
    })
  })