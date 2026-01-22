/** Chunk was on 40556 **/
/** chunk id: 804724, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => v
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  r = require.n(Chunk503698),
  Chunk397927 = require("./397927.js"),
  Chunk927813 = require("./927813.js"),
  Chunk904054 = require("./904054.js"),
  Chunk236972 = require("./236972.js"),
  Chunk677202 = require("./677202.jsx"),
  Chunk667920 = require("./667920.js"),
  Chunk980504 = require("./980504.js"),
  Chunk461555 = require("./461555.js");
let h = {
    startPositionMs: 0,
    endPositionMs: 2 * (10 * Chunk927813.A.Millis.SECOND),
    playheadPositionMs: 0
  },
  v = Chunk64700.memo(function(e) {
    let {
      className: t,
      volume: n,
      disabled: a = false,
      onChange: v
    } = e, {
      audio: b
    } = (0, c.L)(), [x, p] = i.useState(false), [j, y] = i.useState(h), {
      playheadPositionMs: w,
      endPositionMs: N,
      startPositionMs: O
    } = j, A = null != b, C = N - O, S = C > m.cT * u.A.Millis.SECOND;
    i.useEffect(() => {
      if (null != b) return y({
        playheadPositionMs: 0,
        endPositionMs: b.duration * u.A.Millis.SECOND,
        startPositionMs: 0
      }), () => {
        b.pause(), p(false)
      }
    }, [b]);
    let P = i.useCallback(e => {
        null != b && (b.pause(), null != e && (b.currentTime = e), p(false))
      }, [b]),
      E = i.useCallback(() => {
        if (null != b) {
          if (x) return void P();
          w >= N ? b.currentTime = (0, f.fP)(O) : b.currentTime = (0, f.fP)(w), b.volume = (0, o.A)(n), b.play(), p(true)
        }
      }, [b, N, P, w, x, O, n]),
      M = i.useCallback(e => {
        y(e), null == v || v({
          startMs: e.startPositionMs,
          endMs: e.endPositionMs
        })
      }, [v]),
      k = i.useCallback(e => {
        null != b && (b.currentTime = e)
      }, [b]);
    return (0, l.jsxs)("div", {
      className: r()(g.kL, {
        [g.J_]: A,
        [g.r9]: !A || a
      }, t),
      children: [(0, l.jsxs)("div", {
        className: g.k0,
        children: [(0, l.jsx)(s.DUT, {
          className: g.Rr,
          onClick: A ? E : true,
          children: x ? (0, l.jsx)(s.wFz, {
            size: "xs",
            color: "currentColor",
            className: g.CJ
          }) : (0, l.jsx)(s.udU, {
            size: "xs",
            color: "currentColor",
            className: g.CJ
          })
        }), (0, l.jsx)("div", {
          className: g.aq,
          children: (0, l.jsx)(s.Text, {
            className: g.__invalid_duration,
            variant: "text-xs/normal",
            color: S ? "text-feedback-warning" : "text-feedback-positive",
            children: "".concat((0, f.fP)(C).toFixed(2), "s")
          })
        })]
      }), (0, l.jsx)(d.A, {
        playing: x,
        onPlaybackChange: k,
        onPausePlayback: P,
        onChangePosition: M,
        disabled: a
      })]
    })
  })