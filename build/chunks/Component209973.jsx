/** Chunk was on 20941 **/
/** chunk id: 209973, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => N
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk299619 = require("./299619.jsx"),
  Chunk158954 = require("./158954.js"),
  Chunk311907 = require("./311907.js"),
  Chunk499979 = require("./499979.js"),
  Chunk397927 = require("./397927.js"),
  Chunk775602 = require("./775602.js"),
  Chunk854987 = require("./854987.js"),
  Chunk719718 = require("./719718.js"),
  Chunk57882 = require("./57882.js"),
  Chunk109138 = require("./109138.js"),
  Chunk771273 = require("./771273.jsx"),
  Chunk818947 = require("./818947.jsx"),
  Chunk155286 = require("./155286.jsx"),
  Chunk573138 = require("./573138.jsx"),
  Chunk182417 = require("./182417.jsx"),
  Chunk877272 = require("./877272.jsx"),
  Chunk359588 = require("./359588.jsx"),
  Chunk532294 = require("./532294.js"),
  Chunk622865 = require("./622865.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk308021 = require("./308021.js"),
  Chunk86369 = require("./86369.js"),
  Chunk650000 = require("./650000.js");

function N() {
  let {
    voice: {
      totalVoiceMinutes: e,
      totalVoiceMinutesPercentile: t,
      topMonth: {
        month: n
      }
    } = {
      totalVoiceMinutes: 0,
      totalVoiceMinutesPercentile: 0,
      topMonth: {
        month: 0
      }
    }
  } = (0, s.bG)([m.A], () => m.A.getCheckpointData()), {
    duration: N,
    unit: I
  } = (0, f.oO)(e), P = I === o.pJ.HOURS, w = l.useContext(h.GD), T = l.useRef(null), R = l.useContext(y.Aq), L = l.useContext(d.P), D = (0, c.rdh)(L.primaryColor).hex(), k = (0, s.bG)([u.A], () => u.A.useReducedMotion), M = l.useCallback(e => {
    let t = T.current;
    if (null == t || t.readyState < HTMLMediaElement.HAVE_CURRENT_DATA) return;
    let n = 0,
      r = 1,
      l = 0;
    null == R || R((e, t) => (t === C.P7.VOICE && (n = Math.max(e.opacity.get(), 0), r = e.backgroundScale.get(), l = e.backgroundY.get()), null));
    let {
      canvas: a,
      context: i
    } = e.detail;
    i.save(), i.globalAlpha = n, i.globalCompositeOperation = "screen";
    let s = a.width / 2,
      o = a.height / 2;
    i.translate(s, o), i.scale(r, r), i.translate(-s, -o), i.translate(0, l), (0, p.A)(t, a, i, 100), i.restore()
  }, [R]);
  l.useEffect(() => (w.addEventListener("frame", M), () => w.removeEventListener("frame", M)), [w, M]), l.useEffect(() => {
    null != T.current && k && (T.current.currentTime = 1)
  }, [k]);
  let {
    monthName: H
  } = (0, f.od)(n, A.intl.currentLocale);
  return (0, r.jsxs)(x.A, {
    children: [(0, r.jsx)(a.A, {
      autoPlay: !k,
      muted: true,
      loop: true,
      playsInline: true,
      className: E.R,
      ref: T,
      "aria-hidden": true,
      children: (0, r.jsx)("source", {
        src: S.A,
        type: "video/webm"
      })
    }), (0, r.jsxs)("div", {
      className: E.Qs,
      children: [(0, r.jsxs)("div", {
        className: O.DD,
        children: [(0, r.jsx)(i.cNw, {
          size: "refresh_sm",
          color: D,
          className: O.gr,
          colorClass: O.d7
        }), P ? (0, r.jsx)(v.A, {
          variant: "eyebrow",
          className: O.UP,
          children: A.intl.format(_.default.Xu0QsX, {
            numHours: N
          })
        }) : (0, r.jsx)(v.A, {
          variant: "eyebrow",
          className: O.UP,
          children: A.intl.format(_.default.UZbUtl, {
            numMinutes: N
          })
        })]
      }), (0, r.jsx)(j.A, {
        end: N,
        alignment: "center"
      }), (0, r.jsx)(v.A, {
        variant: "heading-xxl/medium",
        className: E.VA,
        children: null != t ? A.intl.format(_.default["36PZwu"], {
          percent: 100 - t,
          percentHook: (e, t) => (0, r.jsx)(b.A, {
            children: e
          }, t)
        }) : A.intl.format(_.default.VaydtR, {
          month: H,
          monthHook: (e, t) => (0, r.jsx)(b.A, {
            children: e
          }, t)
        })
      }), (0, r.jsx)(g.e, {
        slide: C.P7.VOICE
      })]
    })]
  })
}