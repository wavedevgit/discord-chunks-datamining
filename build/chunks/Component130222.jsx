/** Chunk was on web.js **/
/** chunk id: 130222, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Ay: () => I,
  Us: () => A,
  ls: () => O
}), require("./321073.js");
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk311907 = require("./311907.js"),
  Chunk582754 = require("./582754.js"),
  Chunk397927 = require("./397927.js"),
  Chunk827343 = require("./827343.js"),
  Chunk195043 = require("./195043.jsx"),
  Chunk347481 = require("./347481.js"),
  Chunk430452 = require("./430452.js"),
  Chunk954571 = require("./954571.js"),
  Chunk975571 = require("./975571.js"),
  Chunk544028 = require("./544028.js"),
  Chunk772927 = require("./772927.jsx"),
  Chunk531525 = require("./531525.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk856412 = require("./856412.js");
let Chunk993830 = require("./993830.js"),
  Chunk413142 = require("./413142.js");
var O = function(e) {
  return e.NONE = "NONE", e.STANDARD = "STANDARD", e.KRISP = "KRISP", e
}({});
let A = {
  page: Chunk652215.liQ.USER_SETTINGS,
  section: Chunk652215.JJy.SETTINGS_VOICE_AND_VIDEO
};

function v(e) {
  let t = e.currentTarget;
  d.default.track(m.HAw.NOISE_CANCELLATION_LINK_CLICKED, {
    text: t.text,
    href: t.href,
    location: {
      page: m.liQ.USER_SETTINGS,
      section: m.JJy.SETTINGS_VOICE_AND_VIDEO
    }
  })
}

function S() {
  let e = (0, i.bG)([p.A], () => p.A.theme),
    {
      noiseCancellation: t,
      noiseSuppression: n,
      noiseSuppressionSupported: l,
      noiseCancellationSupported: c
    } = (0, i.cf)([u.A], () => ({
      noiseCancellation: u.A.getNoiseCancellation(),
      noiseSuppression: u.A.getNoiseSuppression(),
      noiseSuppressionSupported: u.A.isNoiseSuppressionSupported(),
      noiseCancellationSupported: u.A.isNoiseCancellationSupported()
    }));
  if (!l && !c) return null;
  let d = n ? "STANDARD" : "NONE",
    _ = t ? "KRISP" : d,
    h = [];
  return c && h.push({
    name: g.intl.string(g.t.rdoNzt),
    value: "KRISP"
  }), l && h.push({
    name: g.intl.string(g.t.qXeYHw),
    value: "STANDARD"
  }), h.push({
    name: g.intl.string(g.t.wkYAlz),
    value: "NONE"
  }), (0, r.jsxs)(s.BJc, {
    gap: 8,
    children: [(0, r.jsx)(s.z6M, {
      label: g.intl.string(g.t.t8Qhib),
      description: g.intl.string(g.t.najZCV),
      options: h,
      onChange: e => {
        o.A.setNoiseCancellation("KRISP" === e, A), o.A.setNoiseSuppression("STANDARD" === e, A)
      },
      value: _
    }), c && (0, r.jsx)(s.ZpM, {
      type: s.ZpM.Types.PRIMARY,
      children: (0, r.jsxs)("div", {
        className: E.C,
        children: [(0, r.jsx)("img", {
          src: (0, a.qB)(e) ? b : y,
          width: 70,
          height: 40,
          alt: ""
        }), (0, r.jsx)(s.MzZ, {
          href: f.A.getArticleURL(m.MVz.NOISE_SUPPRESSION),
          onClick: v,
          children: g.intl.string(g.t.hvVgAZ)
        })]
      })
    })]
  })
}

function I() {
  let {
    inputMode: e,
    inputDeviceId: t,
    echoCancellation: n,
    automaticGainControl: a,
    vadAutoThreshold: d,
    vadUseKrisp: f,
    bypassSystemInputProcessing: p
  } = (0, i.cf)([u.A], () => ({
    inputMode: u.A.getMode(),
    inputDeviceId: u.A.getInputDeviceId(),
    echoCancellation: u.A.getEchoCancellation(),
    automaticGainControl: u.A.getAutomaticGainControl(),
    vadAutoThreshold: u.A.getModeOptions().autoThreshold,
    vadUseKrisp: u.A.getModeOptions().vadUseKrisp,
    bypassSystemInputProcessing: u.A.getBypassSystemInputProcessing()
  })), {
    hasEchoCancellation: E,
    hasNoiseSuppression: b,
    hasAutomaticGainControl: y
  } = (0, i.cf)([c.A], () => ({
    hasEchoCancellation: c.A.hasEchoCancellation(t),
    hasNoiseSuppression: c.A.hasNoiseSuppression(t),
    hasAutomaticGainControl: c.A.hasAutomaticGainControl(t)
  }), [t]), O = E || b || y, A = e === m.TBI.VOICE_ACTIVITY && d;
  return (0, r.jsxs)(_.A, {
    children: [O && (0, r.jsx)(s.wx6, {
      type: "info",
      children: g.intl.string(g.t["/Whuzi"])
    }), (0, r.jsx)(l.x, {
      setting: h.H.VOICE_AND_VIDEO_ADVANCED_PROCESSING_ECHO_CANCELLATION,
      children: (0, r.jsx)(s.dOG, {
        label: g.intl.string(g.t.iWTwu6),
        checked: n,
        onChange: e => o.A.setEchoCancellation(e, {
          page: m.liQ.USER_SETTINGS,
          section: m.JJy.SETTINGS_VOICE_AND_VIDEO
        }),
        disabled: E
      })
    }), (0, r.jsx)(l.x, {
      setting: h.H.VOICE_AND_VIDEO_ADVANCED_PROCESSING_NOISE_SUPPRESSION,
      children: (0, r.jsx)(S, {})
    }), (0, r.jsx)(l.x, {
      setting: h.H.VOICE_AND_VIDEO_ADVANCED_PROCESSING_ADVANCED_VOICE_ACTIVITY,
      children: (0, r.jsx)(s.dOG, {
        label: g.intl.string(g.t.BbESsg),
        description: g.intl.string(g.t.LoOB1F),
        checked: f,
        onChange: t => o.A.setMode(e, {
          vadUseKrisp: t
        }),
        disabled: !A
      })
    }), (0, r.jsx)(l.x, {
      setting: h.H.VOICE_AND_VIDEO_ADVANCED_PROCESSING_AUTOMATIC_GAIN_CONTROL,
      children: (0, r.jsx)(s.dOG, {
        label: g.intl.string(g.t.cUMdH0),
        description: g.intl.string(g.t["6EjbvA"]),
        checked: a,
        onChange: e => o.A.setAutomaticGainControl(e, {
          page: m.liQ.USER_SETTINGS,
          section: m.JJy.SETTINGS_VOICE_AND_VIDEO
        }),
        disabled: y
      })
    }), (0, r.jsx)(l.x, {
      setting: h.H.VOICE_AND_VIDEO_ADVANCED_PROCESSING_BYPASS_SYSTEM_INPUT_PROCESSING,
      children: (0, r.jsx)(s.dOG, {
        label: g.intl.string(g.t.DFPXIG),
        description: g.intl.string(g.t["UyRX+C"]),
        checked: p,
        onChange: e => {
          o.A.setBypassSystemInputProcessing(e)
        }
      })
    })]
  })
}