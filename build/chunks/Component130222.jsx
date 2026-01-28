/** Chunk was on 60449 **/
/** chunk id: 130222, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Ay: () => T,
  Us: () => v,
  ls: () => S
}), require("./321073.js");
var i, Chunk627968 = require("./627968.js");
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
var S = ((i = {}).NONE = "NONE", i.STANDARD = "STANDARD", i.KRISP = "KRISP", i);
let v = {
  page: Chunk652215.liQ.USER_SETTINGS,
  section: Chunk652215.JJy.SETTINGS_VOICE_AND_VIDEO
};

function C(e) {
  let t = e.currentTarget;
  g.default.track(m.HAw.NOISE_CANCELLATION_LINK_CLICKED, {
    text: t.text,
    href: t.href,
    location: {
      page: m.liQ.USER_SETTINGS,
      section: m.JJy.SETTINGS_VOICE_AND_VIDEO
    }
  })
}

function f() {
  let e = (0, l.bG)([x.A], () => x.A.theme),
    {
      noiseCancellation: t,
      noiseSuppression: n,
      noiseSuppressionSupported: i,
      noiseCancellationSupported: c
    } = (0, l.cf)([u.A], () => ({
      noiseCancellation: u.A.getNoiseCancellation(),
      noiseSuppression: u.A.getNoiseSuppression(),
      noiseSuppressionSupported: u.A.isNoiseSuppressionSupported(),
      noiseCancellationSupported: u.A.isNoiseCancellationSupported()
    }));
  if (!i && !c) return null;
  let d = [];
  return c && d.push({
    name: j.intl.string(j.t.rdoNzt),
    value: "KRISP"
  }), i && d.push({
    name: j.intl.string(j.t.qXeYHw),
    value: "STANDARD"
  }), d.push({
    name: j.intl.string(j.t.wkYAlz),
    value: "NONE"
  }), (0, s.jsxs)(a.BJc, {
    gap: 8,
    children: [(0, s.jsx)(a.z6M, {
      label: j.intl.string(j.t.t8Qhib),
      description: j.intl.string(j.t.najZCV),
      options: d,
      onChange: e => {
        o.A.setNoiseCancellation("KRISP" === e, v), o.A.setNoiseSuppression("STANDARD" === e, v)
      },
      value: t ? "KRISP" : n ? "STANDARD" : "NONE"
    }), c && (0, s.jsx)(a.ZpM, {
      type: a.ZpM.Types.PRIMARY,
      children: (0, s.jsxs)("div", {
        className: O.C,
        children: [(0, s.jsx)("img", {
          src: (0, r.qB)(e) ? E : b,
          width: 70,
          height: 40,
          alt: ""
        }), (0, s.jsx)(a.MzZ, {
          href: h.A.getArticleURL(m.MVz.NOISE_SUPPRESSION),
          onClick: C,
          children: j.intl.string(j.t.hvVgAZ)
        })]
      })
    })]
  })
}

function T() {
  let {
    inputMode: e,
    inputDeviceId: t,
    echoCancellation: n,
    automaticGainControl: i,
    vadAutoThreshold: r,
    vadUseKrisp: g,
    bypassSystemInputProcessing: h
  } = (0, l.cf)([u.A], () => ({
    inputMode: u.A.getMode(),
    inputDeviceId: u.A.getInputDeviceId(),
    echoCancellation: u.A.getEchoCancellation(),
    automaticGainControl: u.A.getAutomaticGainControl(),
    vadAutoThreshold: u.A.getModeOptions().autoThreshold,
    vadUseKrisp: u.A.getModeOptions().vadUseKrisp,
    bypassSystemInputProcessing: u.A.getBypassSystemInputProcessing()
  })), {
    hasEchoCancellation: x,
    hasNoiseSuppression: O,
    hasAutomaticGainControl: E
  } = (0, l.cf)([d.A], () => ({
    hasEchoCancellation: d.A.hasEchoCancellation(t),
    hasNoiseSuppression: d.A.hasNoiseSuppression(t),
    hasAutomaticGainControl: d.A.hasAutomaticGainControl(t)
  }), [t]), b = x || O || E, S = e === m.TBI.VOICE_ACTIVITY && r;
  return (0, s.jsxs)(A.A, {
    children: [b && (0, s.jsx)(a.wx6, {
      type: "info",
      children: j.intl.string(j.t["/Whuzi"])
    }), (0, s.jsx)(c.x, {
      setting: p.H.VOICE_AND_VIDEO_ADVANCED_PROCESSING_ECHO_CANCELLATION,
      children: (0, s.jsx)(a.dOG, {
        label: j.intl.string(j.t.iWTwu6),
        checked: n,
        onChange: e => o.A.setEchoCancellation(e, {
          page: m.liQ.USER_SETTINGS,
          section: m.JJy.SETTINGS_VOICE_AND_VIDEO
        }),
        disabled: x
      })
    }), (0, s.jsx)(c.x, {
      setting: p.H.VOICE_AND_VIDEO_ADVANCED_PROCESSING_NOISE_SUPPRESSION,
      children: (0, s.jsx)(f, {})
    }), (0, s.jsx)(c.x, {
      setting: p.H.VOICE_AND_VIDEO_ADVANCED_PROCESSING_ADVANCED_VOICE_ACTIVITY,
      children: (0, s.jsx)(a.dOG, {
        label: j.intl.string(j.t.BbESsg),
        description: j.intl.string(j.t.LoOB1F),
        checked: g,
        onChange: t => o.A.setMode(e, {
          vadUseKrisp: t
        }),
        disabled: !S
      })
    }), (0, s.jsx)(c.x, {
      setting: p.H.VOICE_AND_VIDEO_ADVANCED_PROCESSING_AUTOMATIC_GAIN_CONTROL,
      children: (0, s.jsx)(a.dOG, {
        label: j.intl.string(j.t.cUMdH0),
        description: j.intl.string(j.t["6EjbvA"]),
        checked: i,
        onChange: e => o.A.setAutomaticGainControl(e, {
          page: m.liQ.USER_SETTINGS,
          section: m.JJy.SETTINGS_VOICE_AND_VIDEO
        }),
        disabled: E
      })
    }), (0, s.jsx)(c.x, {
      setting: p.H.VOICE_AND_VIDEO_ADVANCED_PROCESSING_BYPASS_SYSTEM_INPUT_PROCESSING,
      children: (0, s.jsx)(a.dOG, {
        label: j.intl.string(j.t.DFPXIG),
        description: j.intl.string(j.t["UyRX+C"]),
        checked: h,
        onChange: e => {
          o.A.setBypassSystemInputProcessing(e)
        }
      })
    })]
  })
}