/** Chunk was on web.js **/
/** chunk id: 265486, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  At: () => l,
  BZ: () => s,
  K: () => m,
  YQ: () => c
});
let r = new(require("./626584.js")).A("mp4box"),
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
    if ("u" < typeof fetch) return i;
    let {
      default: s
    } = await n.e("25777").then(n.t.bind(n, 293384, 19)), l = null;
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
        y = () => {
          n || (n = true, clearTimeout(b), null != E && clearTimeout(E), t(i))
        },
        b = setTimeout(() => {
          r.warn("Timeout after", _, "ms, moov atom not found"), y()
        }, _);
      m.onReady = e => {
        var r, i, s, l, c, f, p, _, h, m, g, y, O, v, A;
        if (n) return;
        n = true, clearTimeout(b), null != E && clearTimeout(E);
        let I = e.videoTracks[0],
          S = e.audioTracks[0],
          T = {
            videoCodec: null != (r = null == I ? true : I.codec) ? r : null,
            audioCodec: null != (i = null == S ? true : S.codec) ? i : null,
            videoCodecDescription: null != I ? a(I.codec) : null,
            audioCodecDescription: null != S ? o(S.codec) : null,
            videoBitrate: null != (s = null == I ? true : I.bitrate) ? s : null,
            audioBitrate: null != (l = null == S ? true : S.bitrate) ? l : null,
            audioChannels: null != (c = null == S || null == (y = S.audio) ? true : y.channel_count) ? c : null,
            audioSampleRate: null != (f = null == S || null == (O = S.audio) ? true : O.sample_rate) ? f : null,
            frameRate: null != I ? d(I) : null,
            videoWidth: null != (p = null == I || null == (v = I.video) ? true : v.width) ? p : null,
            videoHeight: null != (_ = null == I || null == (A = I.video) ? true : A.height) ? _ : null,
            isProgressive: null != (h = e.isProgressive) ? h : null,
            isFragmented: null != (m = e.isFragmented) ? m : null,
            containerFormat: u(null != (g = e.brands) ? g : [])
          };
        t(T)
      }, m.onError = () => {
        y()
      }, m.onSeek = async t => {
        if (n || s || null == l || !(l > f)) {
          if (s) {
            if (null != g && performance.now() - g < h) return;
            y();
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
                r.warn("Failed to append end chunk:", e), y();
                return
              }
            }
          } catch (e) {
            r.warn("Failed to fetch end chunk:", e)
          }
          y();
          return
        }(null == l || l <= f) && y()
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
        y()
      }
    })
  } catch (e) {
    return i
  }
}