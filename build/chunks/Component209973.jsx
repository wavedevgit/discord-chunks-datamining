/** Chunk was on web.js **/
/** chunk id: 209973, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => w
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
let N = 100,
  R = 1;

function w() {
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
  } = (0, o.bG)([f.A], () => f.A.getCheckpointData()), {
    duration: w,
    unit: P
  } = (0, p.oO)(e), D = P === l.pJ.HOURS, x = i.useContext(h.GD), L = i.useRef(null), j = i.useContext(y.Aq), M = i.useContext(d.P), k = (0, c.rdh)(M.primaryColor).hex(), U = (0, o.bG)([u.A], () => u.A.useReducedMotion), G = i.useCallback(e => {
    let t = L.current;
    if (null == t || t.readyState < HTMLMediaElement.HAVE_CURRENT_DATA) return;
    let n = 0,
      r = 1,
      i = 0;
    null == j || j((e, t) => (t === v.P7.VOICE && (n = Math.max(e.opacity.get(), 0), r = e.backgroundScale.get(), i = e.backgroundY.get()), null));
    let {
      canvas: a,
      context: s
    } = e.detail;
    s.save(), s.globalAlpha = n, s.globalCompositeOperation = "screen";
    let o = a.width / 2,
      l = a.height / 2;
    s.translate(o, l), s.scale(r, r), s.translate(-o, -l), s.translate(0, i), (0, _.A)(t, a, s, N), s.restore()
  }, [j]);
  i.useEffect(() => (x.addEventListener("frame", G), () => x.removeEventListener("frame", G)), [x, G]), i.useEffect(() => {
    null != L.current && U && (L.current.currentTime = R)
  }, [U]);
  let {
    monthName: V
  } = (0, p.od)(n, I.intl.currentLocale), F = null != t;
  return (0, r.jsxs)(E.A, {
    children: [(0, r.jsx)(a.A, {
      autoPlay: !U,
      muted: true,
      loop: true,
      playsInline: true,
      className: T.R,
      ref: L,
      "aria-hidden": true,
      children: (0, r.jsx)("source", {
        src: C.A,
        type: "video/webm"
      })
    }), (0, r.jsxs)("div", {
      className: T.Qs,
      children: [(0, r.jsxs)("div", {
        className: S.DD,
        children: [(0, r.jsx)(s.cNw, {
          size: "refresh_sm",
          color: k,
          className: S.gr,
          colorClass: S.d7
        }), D ? (0, r.jsx)(b.A, {
          variant: "eyebrow",
          className: S.UP,
          children: I.intl.format(A.default.Xu0QsX, {
            numHours: w
          })
        }) : (0, r.jsx)(b.A, {
          variant: "eyebrow",
          className: S.UP,
          children: I.intl.format(A.default.UZbUtl, {
            numMinutes: w
          })
        })]
      }), (0, r.jsx)(O.A, {
        end: w,
        alignment: "center"
      }), (0, r.jsx)(b.A, {
        variant: "heading-xxl/medium",
        className: T.VA,
        children: F ? I.intl.format(A.default["36PZwu"], {
          percent: 100 - t,
          percentHook: (e, t) => (0, r.jsx)(m.A, {
            children: e
          }, t)
        }) : I.intl.format(A.default.VaydtR, {
          month: V,
          monthHook: (e, t) => (0, r.jsx)(m.A, {
            children: e
          }, t)
        })
      }), (0, r.jsx)(g.e, {
        slide: v.P7.VOICE
      })]
    })]
  })
}