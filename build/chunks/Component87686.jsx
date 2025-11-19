/** Chunk was on 56035 **/
/** chunk id: 87686, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => v
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
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
  v = Chunk473749.memo(function(e) {
    let {
      className: n,
      volume: t,
      disabled: i = false,
      onChange: v
    } = e, {
      audio: p
    } = (0, c.p)(), [b, y] = a.useState(false), [j, x] = a.useState(h), {
      playheadPositionMs: N,
      endPositionMs: w,
      startPositionMs: C
    } = j, S = null != p, O = w - C, Z = O > m.YW * o.Z.Millis.SECOND;
    a.useEffect(() => {
      if (null != p) return x({
        playheadPositionMs: 0,
        endPositionMs: p.duration * o.Z.Millis.SECOND,
        startPositionMs: 0
      }), () => {
        p.pause(), y(false)
      }
    }, [p]);
    let P = a.useCallback(e => {
        null != p && (p.pause(), null != e && (p.currentTime = e), y(false))
      }, [p]),
      M = a.useCallback(() => {
        if (null != p) {
          if (b) return void P();
          N >= w ? p.currentTime = (0, f.my)(C) : p.currentTime = (0, f.my)(N), p.volume = (0, u.Z)(t), p.play(), y(true)
        }
      }, [p, w, P, N, b, C, t]),
      E = a.useCallback(e => {
        x(e), null == v || v({
          startMs: e.startPositionMs,
          endMs: e.endPositionMs
        })
      }, [v]),
      k = a.useCallback(e => {
        null != p && (p.currentTime = e)
      }, [p]);
    return (0, l.jsxs)("div", {
      className: r()(g.container, {
        [g.initialized]: S,
        [g.disabled]: !S || i
      }, n),
      children: [(0, l.jsxs)("div", {
        className: g.playButtonContainer,
        children: [(0, l.jsx)(s.P3F, {
          className: g.playButton,
          onClick: S ? M : true,
          children: b ? (0, l.jsx)(s.wNq, {
            size: "xs",
            color: "currentColor",
            className: g.playButtonIcon
          }) : (0, l.jsx)(s.o1U, {
            size: "xs",
            color: "currentColor",
            className: g.playButtonIcon
          })
        }), (0, l.jsx)("div", {
          className: g.durationContainer,
          children: (0, l.jsx)(s.Text, {
            className: g.__invalid_duration,
            variant: "text-xs/normal",
            color: Z ? "text-feedback-warning" : "text-feedback-positive",
            children: "".concat((0, f.my)(O).toFixed(2), "s")
          })
        })]
      }), (0, l.jsx)(d.Z, {
        playing: b,
        onPlaybackChange: k,
        onPausePlayback: P,
        onChangePosition: E,
        disabled: i
      })]
    })
  })