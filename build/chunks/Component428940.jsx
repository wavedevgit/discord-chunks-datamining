/** Chunk was on web.js **/
/** chunk id: 428940, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  _: () => A
}), require("./539854.js"), require("./49124.js"), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk681715 = require("./681715.js"),
  Chunk481060 = require("./481060.js"),
  Chunk572004 = require("./572004.js"),
  Chunk105801 = require("./105801.js"),
  Chunk423341 = require("./423341.js");

function u(e) {
  return isFinite(e) ? e.toFixed(1) + "s" : "Live"
}

function d(e) {
  return null === e ? "N/A" : "".concat(e, " fps")
}

function f(e, t) {
  let n = [];
  return (true === e && n.push("Progressive"), true === t && n.push("Fragmented"), 0 === n.length) ? "Standard" : n.join(", ")
}
let p = "Stats for Nerds",
  _ = "Close",
  m = "Copy to JSON",
  h = "Copied!",
  g = "Resolution",
  E = "Viewport",
  b = "Video",
  y = "Audio",
  O = "Audio Channels",
  v = "Container",
  S = "Format",
  I = "Buffer Health",
  T = "Error";

function C(e) {
  var t, n, r, i, a, o, s, l, c, u, d, f, p, _, m;
  return JSON.stringify({
    media: {
      video: {
        codec: null != (_ = null == (t = e.codecInfo) ? true : t.videoCodecDescription) ? _ : null == (n = e.codecInfo) ? true : n.videoCodec,
        codecRaw: null == (r = e.codecInfo) ? true : r.videoCodec,
        bitRate: (null == (i = e.codecInfo) ? true : i.videoBitrate) != null ? Math.round(e.codecInfo.videoBitrate) : null,
        frameRate: e.frameRate,
        width: e.videoWidth,
        height: e.videoHeight
      },
      audio: {
        codec: null != (m = null == (a = e.codecInfo) ? true : a.audioCodecDescription) ? m : null == (o = e.codecInfo) ? true : o.audioCodec,
        codecRaw: null == (s = e.codecInfo) ? true : s.audioCodec,
        bitRate: (null == (l = e.codecInfo) ? true : l.audioBitrate) != null ? Math.round(e.codecInfo.audioBitrate) : null,
        channels: null == (c = e.codecInfo) ? true : c.audioChannels,
        sampleRate: null == (u = e.codecInfo) ? true : u.audioSampleRate
      },
      fileSizeBytes: e.fileSizeBytes,
      durationSeconds: e.duration,
      containerFormat: null == (d = e.codecInfo) ? true : d.containerFormat,
      isProgressive: null == (f = e.codecInfo) ? true : f.isProgressive,
      isFragmented: null == (p = e.codecInfo) ? true : p.isFragmented
    },
    playback: {
      viewportWidth: e.viewportWidth,
      viewportHeight: e.viewportHeight,
      currentTimeSeconds: e.currentTime,
      bufferedSeconds: e.bufferedSeconds,
      droppedFrames: e.droppedFrames,
      totalDecodedFrames: e.totalFrames,
      droppedFramesPercent: null != e.droppedFramesPercent ? parseFloat(e.droppedFramesPercent.toFixed(2)) : null,
      errorCode: e.errorCode,
      errorMessage: e.errorMessage
    }
  }, null, 2)
}

function A(e) {
  var t, n, A, N, P, R, w, D, x, L, j, M;
  let {
    stats: k,
    onClose: U
  } = e, [G, Z] = i.useState(false), F = i.useRef(null);
  i.useEffect(() => () => {
    null != F.current && clearTimeout(F.current)
  }, []);
  let B = i.useCallback(() => {
    let e = C(k);
    (0, s.JG)(e, () => {
      Z(true), null != F.current && clearTimeout(F.current), F.current = window.setTimeout(() => {
        Z(false), F.current = null
      }, 2e3)
    }, () => {})
  }, [k]);
  return (0, r.jsxs)("div", {
    className: c.statsOverlay,
    children: [(0, r.jsxs)("div", {
      className: c.header,
      children: [(0, r.jsx)("div", {
        className: c.title,
        children: p
      }), (0, r.jsxs)("div", {
        className: c.headerButtons,
        children: [(0, r.jsx)(a.u, {
          text: G ? h : m,
          children: (0, r.jsx)(o.P3F, {
            className: c.copyButton,
            onClick: B,
            "aria-label": G ? h : m,
            focusProps: {
              offset: 2
            },
            children: (0, r.jsx)(o.TIy, {
              size: "md",
              color: "currentColor"
            })
          })
        }), (0, r.jsx)(a.u, {
          text: _,
          children: (0, r.jsx)(o.P3F, {
            className: c.closeButton,
            onClick: U,
            "aria-label": _,
            focusProps: {
              offset: 2
            },
            children: (0, r.jsx)(o.Dio, {
              size: "md",
              color: "currentColor"
            })
          })
        })]
      })]
    }), (0, r.jsxs)("div", {
      className: c.content,
      children: [(null == (t = k.codecInfo) ? true : t.containerFormat) != null && (0, r.jsxs)("div", {
        className: c.statRow,
        children: [(0, r.jsx)("span", {
          className: c.statLabel,
          children: v
        }), (0, r.jsx)("span", {
          className: c.statValue,
          children: k.codecInfo.containerFormat
        })]
      }), ((null == (n = k.codecInfo) ? true : n.isProgressive) != null || (null == (A = k.codecInfo) ? true : A.isFragmented) != null) && (0, r.jsxs)("div", {
        className: c.statRow,
        children: [(0, r.jsx)("span", {
          className: c.statLabel,
          children: S
        }), (0, r.jsx)("span", {
          className: c.statValue,
          children: f(null != (w = k.codecInfo.isProgressive) ? w : null, null != (D = k.codecInfo.isFragmented) ? D : null)
        })]
      }), null != k.codecInfo && (0, r.jsxs)("div", {
        className: c.statRow,
        children: [(0, r.jsx)("span", {
          className: c.statLabel,
          children: g
        }), (0, r.jsxs)("span", {
          className: c.statValue,
          children: [k.resolution, " @ ", d(k.frameRate), k.droppedFrames > 0 && " (".concat(k.droppedFrames, " dropped)")]
        })]
      }), null != k.codecInfo && (0, r.jsxs)("div", {
        className: c.statRow,
        children: [(0, r.jsx)("span", {
          className: c.statLabel,
          children: E
        }), (0, r.jsxs)("span", {
          className: c.statValue,
          children: [k.viewportWidth, "x", k.viewportHeight]
        })]
      }), (null == (N = k.codecInfo) ? true : N.videoCodec) != null && (0, r.jsxs)("div", {
        className: c.statRow,
        children: [(0, r.jsx)("span", {
          className: c.statLabel,
          children: b
        }), (0, r.jsxs)("span", {
          className: c.statValue,
          children: [null != (L = null != (x = k.codecInfo.videoCodecDescription) ? x : k.codecInfo.videoCodec) ? L : "Unknown", null != k.codecInfo.videoBitrate && " @ ".concat((0, l.TB)(k.codecInfo.videoBitrate))]
        })]
      }), (null == (P = k.codecInfo) ? true : P.audioCodec) != null && (0, r.jsxs)("div", {
        className: c.statRow,
        children: [(0, r.jsx)("span", {
          className: c.statLabel,
          children: y
        }), (0, r.jsxs)("span", {
          className: c.statValue,
          children: [null != (M = null != (j = k.codecInfo.audioCodecDescription) ? j : k.codecInfo.audioCodec) ? M : "Unknown", null != k.codecInfo.audioBitrate && " @ ".concat((0, l.TB)(k.codecInfo.audioBitrate))]
        })]
      }), (null == (R = k.codecInfo) ? true : R.audioChannels) != null && (0, r.jsxs)("div", {
        className: c.statRow,
        children: [(0, r.jsx)("span", {
          className: c.statLabel,
          children: O
        }), (0, r.jsxs)("span", {
          className: c.statValue,
          children: [(0, l.Em)(k.codecInfo.audioChannels), null != k.codecInfo.audioSampleRate && " @ ".concat((0, l.HO)(k.codecInfo.audioSampleRate))]
        })]
      }), (0, r.jsxs)("div", {
        className: c.statRow,
        children: [(0, r.jsx)("span", {
          className: c.statLabel,
          children: I
        }), (0, r.jsx)("span", {
          className: c.statValue,
          children: u(k.bufferedSeconds)
        })]
      }), null !== k.errorCode && (0, r.jsx)("div", {
        className: c.errorSection,
        children: (0, r.jsxs)("div", {
          className: c.statRow,
          children: [(0, r.jsx)("span", {
            className: c.statLabel,
            children: T
          }), (0, r.jsxs)("span", {
            className: c.statValue,
            children: [k.errorCode, null !== k.errorMessage && ": ".concat(k.errorMessage)]
          })]
        })
      })]
    })]
  })
}