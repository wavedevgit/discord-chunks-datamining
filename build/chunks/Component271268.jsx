/** Chunk was on web.js **/
/** chunk id: 271268, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => R
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk92951 = require("./92951.jsx"),
  Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
  Chunk379649 = require("./379649.js"),
  Chunk481060 = require("./481060.js"),
  Chunk607070 = require("./607070.js"),
  Chunk324060 = require("./324060.js"),
  Chunk5888 = require("./5888.js"),
  Chunk26118 = require("./26118.js"),
  Chunk687581 = require("./687581.js"),
  Chunk193869 = require("./193869.jsx"),
  Chunk489658 = require("./489658.jsx"),
  Chunk909397 = require("./909397.jsx"),
  Chunk198358 = require("./198358.jsx"),
  Chunk225055 = require("./225055.jsx"),
  Chunk391876 = require("./391876.jsx"),
  Chunk947189 = require("./947189.jsx"),
  Chunk612776 = require("./612776.js"),
  Chunk547081 = require("./547081.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk554445 = require("./554445.js"),
  Chunk102422 = require("./102422.js"),
  Chunk331164 = require("./331164.js");
let N = 100,
  P = 1;

function R() {
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
  } = (0, Chunk442837.e7)([Chunk5888.Z], () => Chunk5888.Z.getCheckpointData()), {
    duration: R,
    unit: w
  } = (0, Chunk26118.Bi)(module), D = w === Chunk379649.J6.HOURS, x = Chunk473749.useContext(Chunk193869.$r), L = Chunk473749.useRef(null), j = Chunk473749.useContext(Chunk225055.xS), M = Chunk473749.useContext(Chunk324060.Q), k = (0, Chunk481060.dQu)(M.primaryColor).hex(), U = (0, Chunk442837.e7)([Chunk607070.Z], () => Chunk607070.Z.useReducedMotion), G = Chunk473749.useCallback(e => {
    let t = L.current;
    if (null == t || t.readyState < HTMLMediaElement.HAVE_CURRENT_DATA) return;
    let n = 0,
      r = 1,
      i = 0;
    null == j || j((e, t) => (t === v.yD.VOICE && (n = Math.max(e.opacity.get(), 0), r = e.backgroundScale.get(), i = e.backgroundY.get()), null));
    let {
      canvas: a,
      context: o
    } = e.detail;
    o.save(), o.globalAlpha = n, o.globalCompositeOperation = "screen";
    let s = a.width / 2,
      l = a.height / 2;
    o.translate(s, l), o.scale(r, r), o.translate(-s, -l), o.translate(0, i), (0, _.Z)(t, a, o, N), o.restore()
  }, [j]);
  Chunk473749.useEffect(() => (x.addEventListener("frame", G), () => x.removeEventListener("frame", G)), [x, G]), Chunk473749.useEffect(() => {
    null != L.current && U && (L.current.currentTime = P)
  }, [U]);
  let {
    monthName: Z
  } = (0, Chunk26118.CE)(require, Chunk388032.intl.currentLocale), F = null != exports;
  return (0, Chunk54381.jsxs)(Chunk198358.Z, {
    children: [(0, Chunk54381.jsx)(Chunk92951.Z, {
      autoPlay: !U,
      muted: true,
      loop: true,
      playsInline: true,
      className: Chunk102422.hidden,
      ref: L,
      "aria-hidden": true,
      children: (0, Chunk54381.jsx)("source", {
        src: Chunk331164.Z,
        type: "video/webm"
      })
    }), (0, Chunk54381.jsxs)("div", {
      className: Chunk102422.content,
      children: [(0, Chunk54381.jsxs)("div", {
        className: Chunk554445.title,
        children: [(0, Chunk54381.jsx)(Chunk793030.S6n, {
          size: "refresh_sm",
          color: k,
          className: Chunk554445.titleIcon,
          colorClass: Chunk554445.iconColor
        }), D ? (0, Chunk54381.jsx)(Chunk391876.Z, {
          variant: "eyebrow",
          className: Chunk554445.eyebrow,
          children: Chunk388032.intl.format(Chunk547081.default.Xu0QsX, {
            numHours: R
          })
        }) : (0, Chunk54381.jsx)(Chunk391876.Z, {
          variant: "eyebrow",
          className: Chunk554445.eyebrow,
          children: Chunk388032.intl.format(Chunk547081.default.UZbUtl, {
            numMinutes: R
          })
        })]
      }), (0, Chunk54381.jsx)(Chunk947189.Z, {
        end: R,
        alignment: "center"
      }), (0, Chunk54381.jsx)(Chunk391876.Z, {
        variant: "heading-xxl/medium",
        className: Chunk102422.subtitle,
        children: F ? Chunk388032.intl.format(Chunk547081.default["36PZwu"], {
          percent: 100 - exports,
          percentHook: (e, t) => (0, r.jsx)(h.Z, {
            children: e
          }, t)
        }) : Chunk388032.intl.format(Chunk547081.default.VaydtR, {
          month: Z,
          monthHook: (e, t) => (0, r.jsx)(h.Z, {
            children: e
          }, t)
        })
      }), (0, Chunk54381.jsx)(Chunk909397.o, {
        slide: Chunk612776.yD.VOICE
      })]
    })]
  })
}