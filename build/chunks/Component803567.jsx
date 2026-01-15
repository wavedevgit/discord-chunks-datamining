/** Chunk was on web.js **/
/** chunk id: 803567, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  MP: () => v,
  Q4: () => O,
  ZP: () => T
}), require("./539854.js");
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk442837 = require("./442837.js"),
  Chunk780384 = require("./780384.js"),
  Chunk481060 = require("./481060.js"),
  Chunk846027 = require("./846027.js"),
  Chunk921801 = require("./921801.jsx"),
  Chunk463395 = require("./463395.js"),
  Chunk131951 = require("./131951.js"),
  Chunk626135 = require("./626135.js"),
  Chunk63063 = require("./63063.js"),
  Chunk210887 = require("./210887.js"),
  Chunk738486 = require("./738486.jsx"),
  Chunk726985 = require("./726985.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk199688 = require("./199688.js");
let Chunk775322 = require("./775322.js"),
  Chunk353385 = require("./353385.js");
var O = function(e) {
  return e.NONE = "NONE", e.STANDARD = "STANDARD", e.KRISP = "KRISP", e
}({});
let v = {
  page: Chunk981631.ZY5.USER_SETTINGS,
  section: Chunk981631.jXE.SETTINGS_VOICE_AND_VIDEO
};

function S(e) {
  let t = e.currentTarget;
  d.default.track(m.rMx.NOISE_CANCELLATION_LINK_CLICKED, {
    text: t.text,
    href: t.href,
    location: {
      page: m.ZY5.USER_SETTINGS,
      section: m.jXE.SETTINGS_VOICE_AND_VIDEO
    }
  })
}

function I() {
  let e = (0, i.e7)([p.Z], () => p.Z.theme),
    {
      noiseCancellation: t,
      noiseSuppression: n,
      noiseSuppressionSupported: l,
      noiseCancellationSupported: c
    } = (0, i.cj)([u.Z], () => ({
      noiseCancellation: u.Z.getNoiseCancellation(),
      noiseSuppression: u.Z.getNoiseSuppression(),
      noiseSuppressionSupported: u.Z.isNoiseSuppressionSupported(),
      noiseCancellationSupported: u.Z.isNoiseCancellationSupported()
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
  }), (0, r.jsxs)(o.Kqy, {
    gap: 8,
    children: [(0, r.jsx)(o.FXm, {
      label: g.intl.string(g.t.t8Qhib),
      description: g.intl.string(g.t.najZCV),
      options: h,
      onChange: e => {
        s.Z.setNoiseCancellation("KRISP" === e, v), s.Z.setNoiseSuppression("STANDARD" === e, v)
      },
      value: _
    }), c && (0, r.jsx)(o.Zbd, {
      type: o.Zbd.Types.PRIMARY,
      children: (0, r.jsxs)("div", {
        className: E.krispCard,
        children: [(0, r.jsx)("img", {
          src: (0, a.ap)(e) ? b : y,
          width: 70,
          height: 40,
          alt: ""
        }), (0, r.jsx)(o.eee, {
          href: f.Z.getArticleURL(m.BhN.NOISE_SUPPRESSION),
          onClick: S,
          children: g.intl.string(g.t.hvVgAZ)
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
    automaticGainControl: a,
    vadAutoThreshold: d,
    vadUseKrisp: f,
    bypassSystemInputProcessing: p
  } = (0, i.cj)([u.Z], () => ({
    inputMode: u.Z.getMode(),
    inputDeviceId: u.Z.getInputDeviceId(),
    echoCancellation: u.Z.getEchoCancellation(),
    automaticGainControl: u.Z.getAutomaticGainControl(),
    vadAutoThreshold: u.Z.getModeOptions().autoThreshold,
    vadUseKrisp: u.Z.getModeOptions().vadUseKrisp,
    bypassSystemInputProcessing: u.Z.getBypassSystemInputProcessing()
  })), {
    hasEchoCancellation: E,
    hasNoiseSuppression: b,
    hasAutomaticGainControl: y
  } = (0, i.cj)([c.Z], () => ({
    hasEchoCancellation: c.Z.hasEchoCancellation(t),
    hasNoiseSuppression: c.Z.hasNoiseSuppression(t),
    hasAutomaticGainControl: c.Z.hasAutomaticGainControl(t)
  }), [t]), O = E || b || y, v = e === m.pM4.VOICE_ACTIVITY && d;
  return (0, r.jsxs)(_.Z, {
    children: [O && (0, r.jsx)(o.M14, {
      type: "info",
      children: g.intl.string(g.t["/Whuzi"])
    }), (0, r.jsx)(l.F, {
      setting: h.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_ECHO_CANCELLATION,
      children: (0, r.jsx)(o.rsf, {
        label: g.intl.string(g.t.iWTwu6),
        checked: n,
        onChange: e => s.Z.setEchoCancellation(e, {
          page: m.ZY5.USER_SETTINGS,
          section: m.jXE.SETTINGS_VOICE_AND_VIDEO
        }),
        disabled: E
      })
    }), (0, r.jsx)(l.F, {
      setting: h.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_NOISE_SUPPRESSION,
      children: (0, r.jsx)(I, {})
    }), (0, r.jsx)(l.F, {
      setting: h.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_ADVANCED_VOICE_ACTIVITY,
      children: (0, r.jsx)(o.rsf, {
        label: g.intl.string(g.t.BbESsg),
        description: g.intl.string(g.t.LoOB1F),
        checked: f,
        onChange: t => s.Z.setMode(e, {
          vadUseKrisp: t
        }),
        disabled: !v
      })
    }), (0, r.jsx)(l.F, {
      setting: h.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_AUTOMATIC_GAIN_CONTROL,
      children: (0, r.jsx)(o.rsf, {
        label: g.intl.string(g.t.cUMdH0),
        description: g.intl.string(g.t["6EjbvA"]),
        checked: a,
        onChange: e => s.Z.setAutomaticGainControl(e, {
          page: m.ZY5.USER_SETTINGS,
          section: m.jXE.SETTINGS_VOICE_AND_VIDEO
        }),
        disabled: y
      })
    }), (0, r.jsx)(l.F, {
      setting: h.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_BYPASS_SYSTEM_INPUT_PROCESSING,
      children: (0, r.jsx)(o.rsf, {
        label: g.intl.string(g.t.DFPXIG),
        description: g.intl.string(g.t["UyRX+C"]),
        checked: p,
        onChange: e => {
          s.Z.setBypassSystemInputProcessing(e)
        }
      })
    })]
  })
}