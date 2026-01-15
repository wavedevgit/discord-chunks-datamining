/** Chunk was on web.js **/
/** chunk id: 105801, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Em: () => l,
  HO: () => c,
  TB: () => s,
  lx: () => m
});
let r = new(require("./710845.js")).Z("mp4box"),
  i = {
    videoCodec: null,
    audioCodec: null,
    videoCodecDescription: null,
    audioCodecDescription: null,
    videoBitrate: null,
    audioBitrate: null,
    audioChannels: null,
    audioSampleRate: null,
    frameRate: null,
    videoWidth: null,
    videoHeight: null,
    isProgressive: null,
    isFragmented: null,
    containerFormat: null
  };

function a(e) {
  if (e.startsWith("avc1")) return "H.264/AVC";
  if (e.startsWith("hev1") || e.startsWith("hvc1")) return "H.265/HEVC";
  if (e.startsWith("vp08")) return "VP8";
  if (e.startsWith("vp09")) return "VP9";
  if (e.startsWith("av01")) return "AV1";
  return e
}

function o(e) {
  if (e.startsWith("mp4a.40.2")) return "AAC-LC";
  if (e.startsWith("mp4a.40.5")) return "HE-AAC";
  if (e.startsWith("mp4a.40.29")) return "HE-AACv2";
  if (e.startsWith("mp4a.40")) return "AAC";
  if ("opus" === e) return "Opus";
  else if ("vorbis" === e) return "Vorbis";
  return e
}

function s(e) {
  return null === e ? "N/A" : e < 1e3 ? "".concat(e, " bps") : e < 1e6 ? "".concat((e / 1e3).toFixed(1), " Kbps") : "".concat((e / 1e6).toFixed(2), " Mbps")
}

function l(e) {
  if (null === e) return "N/A";
  switch (e) {
    case 1:
      return "Mono";
    case 2:
      return "Stereo";
    case 6:
      return "5.1 Surround";
    case 8:
      return "7.1 Surround";
    default:
      return "".concat(e, " channels")
  }
}

function c(e) {
  return null === e ? "N/A" : e < 1e3 ? "".concat(e, " Hz") : "".concat((e / 1e3).toFixed(1), " kHz")
}

function u(e) {
  if (0 === e.length) return "MP4";
  let t = e[0];
  if ("isom" === t) return "MP4 (ISO Base Media)";
  if ("mp41" === t) return "MP4 v1";
  if ("mp42" === t) return "MP4 v2";
  if (t.startsWith("M4V")) return "M4V (iTunes Video)";
  if (t.startsWith("M4A")) return "M4A (iTunes Audio)";
  else if (t.startsWith("qt")) return "QuickTime";
  else if ("dash" === t) return "DASH";
  else if ("iso5" === t) return "MP4 (ISO/IEC 14496-12:2005)";
  else if ("iso6" === t) return "MP4 (ISO/IEC 14496-12:2012)";
  return "MP4 (".concat(t, ")")
}

function d(e) {
  let t = e;
  if (null != t.nb_samples && null != t.duration && null != t.timescale && 0 !== t.timescale) {
    let e = t.duration / t.timescale;
    if (e > 0) return Math.round(t.nb_samples / e)
  }
  return null
}
let f = 524288,
  p = 524288,
  _ = 5e3,
  h = 5e3;
async function m(e) {
  try {
    let t;
    if ("undefined" == typeof fetch) return i;
    let {
      default: s
    } = await n.e("32990").then(n.t.bind(n, 735630, 19)), l = null;
    try {
      let t = await fetch(e, {
        method: "HEAD"
      });
      if (t.ok) {
        let e = t.headers.get("Content-Length");
        null != e && (l = parseInt(e, 10))
      }
    } catch (e) {}
    try {
      t = await fetch(e, {
        method: "GET",
        headers: {
          Range: "bytes=0-".concat(f - 1)
        }
      })
    } catch (e) {
      return r.warn("Range request failed, likely CORS issue:", e), i
    }
    if (!t.ok && 206 !== t.status) return r.warn("Unexpected response status:", t.status), i;
    if ("opaque" === t.type) return r.warn("Opaque response, CORS headers may be missing"), i;
    let c = await t.arrayBuffer(),
      m = s.createFile();
    return new Promise(t => {
      let n = false,
        s = false,
        g = null,
        E = null,
        b = () => {
          n || (n = true, clearTimeout(y), null != E && clearTimeout(E), t(i))
        },
        y = setTimeout(() => {
          r.warn("Timeout after", _, "ms, moov atom not found"), b()
        }, _);
      m.onReady = e => {
        var r, i, s, l, c, f, p, _, h, m, g, b, O, v, S;
        if (n) return;
        n = true, clearTimeout(y), null != E && clearTimeout(E);
        let I = e.videoTracks[0],
          T = e.audioTracks[0],
          C = {
            videoCodec: null != (c = null == I ? true : I.codec) ? c : null,
            audioCodec: null != (f = null == T ? true : T.codec) ? f : null,
            videoCodecDescription: null != I ? a(I.codec) : null,
            audioCodecDescription: null != T ? o(T.codec) : null,
            videoBitrate: null != (p = null == I ? true : I.bitrate) ? p : null,
            audioBitrate: null != (_ = null == T ? true : T.bitrate) ? _ : null,
            audioChannels: null != (h = null == T || null == (r = T.audio) ? true : r.channel_count) ? h : null,
            audioSampleRate: null != (m = null == T || null == (i = T.audio) ? true : i.sample_rate) ? m : null,
            frameRate: null != I ? d(I) : null,
            videoWidth: null != (g = null == I || null == (s = I.video) ? true : s.width) ? g : null,
            videoHeight: null != (b = null == I || null == (l = I.video) ? true : l.height) ? b : null,
            isProgressive: null != (O = e.isProgressive) ? O : null,
            isFragmented: null != (v = e.isFragmented) ? v : null,
            containerFormat: u(null != (S = e.brands) ? S : [])
          };
        t(C)
      }, m.onError = () => {
        b()
      }, m.onSeek = async t => {
        if (n || s || null == l || !(l > f)) {
          if (s) {
            if (null != g && performance.now() - g < h) return;
            b();
            return
          }
        } else {
          s = true, r.log("Fetching end chunk for moov atom");
          try {
            let t = await fetch(e, {
              method: "GET",
              headers: {
                Range: "bytes=".concat(l - p, "-").concat(l - 1)
              }
            });
            if (t.ok || 206 === t.status) {
              let e, n = await t.arrayBuffer();
              200 === t.status && n.byteLength === l ? (n = n.slice(l - p), e = Math.max(0, l - p)) : e = 206 === t.status ? Math.max(0, l - p) : 0;
              let i = n;
              i.fileStart = e;
              try {
                m.appendBuffer(i), m.flush(), g = performance.now();
                return
              } catch (e) {
                r.warn("Failed to append end chunk:", e), b();
                return
              }
            }
          } catch (e) {
            r.warn("Failed to fetch end chunk:", e)
          }
          b();
          return
        }(null == l || l <= f) && b()
      };
      let O = c;
      O.fileStart = 0;
      try {
        m.appendBuffer(O), m.flush(), E = setTimeout(() => {
          n || s || null == m.onSeek || m.onSeek({
            offset: 0,
            isLast: false
          })
        }, 500)
      } catch (e) {
        b()
      }
    })
  } catch (e) {
    return i
  }
}