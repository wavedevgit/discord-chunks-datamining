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
  Chunk921801 = require("./921801.js"),
  Chunk463395 = require("./463395.js"),
  Chunk131951 = require("./131951.js"),
  Chunk626135 = require("./626135.js"),
  Chunk63063 = require("./63063.js"),
  Chunk210887 = require("./210887.js"),
  Chunk738486 = require("./738486.jsx"),
  Chunk726985 = require("./726985.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk419659 = require("./419659.js");
let Chunk775322 = require("./775322.js"),
  Chunk853453 = require("./853453.js");
var O = function(e) {
  return e.NONE = "NONE", e.STANDARD = "STANDARD", e.KRISP = "KRISP", e
}({});
let v = {
  page: Chunk981631.ZY5.USER_SETTINGS,
  section: Chunk981631.jXE.SETTINGS_VOICE_AND_VIDEO
};

function S(e) {
  let t = e.currentTarget;
  d.default.track(h.rMx.NOISE_CANCELLATION_LINK_CLICKED, {
    text: t.text,
    href: t.href,
    location: {
      page: h.ZY5.USER_SETTINGS,
      section: h.jXE.SETTINGS_VOICE_AND_VIDEO
    }
  })
}

function I() {
  let e = (0, Chunk442837.e7)([Chunk210887.Z], () => Chunk210887.Z.theme),
    {
      noiseCancellation: t,
      noiseSuppression: n,
      noiseSuppressionSupported: l,
      noiseCancellationSupported: c
    } = (0, Chunk442837.cj)([Chunk131951.Z], () => ({
      noiseCancellation: Chunk131951.Z.getNoiseCancellation(),
      noiseSuppression: Chunk131951.Z.getNoiseSuppression(),
      noiseSuppressionSupported: Chunk131951.Z.isNoiseSuppressionSupported(),
      noiseCancellationSupported: Chunk131951.Z.isNoiseCancellationSupported()
    }));
  if (!Chunk921801 && !Chunk463395) return null;
  let d = require ? "STANDARD" : "NONE",
    _ = exports ? "KRISP" : Chunk626135,
    m = [];
  return Chunk463395 && Chunk726985.push({
    name: Chunk388032.intl.string(Chunk388032.t.rdoNzt),
    value: "KRISP"
  }), Chunk921801 && Chunk726985.push({
    name: Chunk388032.intl.string(Chunk388032.t.qXeYHw),
    value: "STANDARD"
  }), Chunk726985.push({
    name: Chunk388032.intl.string(Chunk388032.t.wkYAlz),
    value: "NONE"
  }), (0, Chunk54381.jsxs)(Chunk481060.Kqy, {
    gap: 8,
    children: [(0, Chunk54381.jsx)(Chunk481060.FXm, {
      label: Chunk388032.intl.string(Chunk388032.t.t8Qhib),
      description: Chunk388032.intl.string(Chunk388032.t.najZCV),
      options: Chunk726985,
      onChange: e => {
        s.Z.setNoiseCancellation("KRISP" === e, v), s.Z.setNoiseSuppression("STANDARD" === e, v)
      },
      value: Chunk738486
    }), Chunk463395 && (0, Chunk54381.jsx)(Chunk481060.Zbd, {
      type: Chunk481060.Zbd.Types.PRIMARY,
      children: (0, Chunk54381.jsxs)("div", {
        className: Chunk419659.krispCard,
        children: [(0, Chunk54381.jsx)("img", {
          src: (0, Chunk780384.ap)(module) ? Chunk775322 : Chunk853453,
          width: 70,
          height: 40,
          alt: ""
        }), (0, Chunk54381.jsx)(Chunk481060.Anchor, {
          href: Chunk63063.Z.getArticleURL(Chunk981631.BhN.NOISE_SUPPRESSION),
          onClick: S,
          children: Chunk388032.intl.string(Chunk388032.t.hvVgAZ)
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
    automaticGainControl: o,
    vadAutoThreshold: d,
    vadUseKrisp: f,
    bypassSystemInputProcessing: p
  } = (0, Chunk442837.cj)([Chunk131951.Z], () => ({
    inputMode: Chunk131951.Z.getMode(),
    inputDeviceId: Chunk131951.Z.getInputDeviceId(),
    echoCancellation: Chunk131951.Z.getEchoCancellation(),
    automaticGainControl: Chunk131951.Z.getAutomaticGainControl(),
    vadAutoThreshold: Chunk131951.Z.getModeOptions().autoThreshold,
    vadUseKrisp: Chunk131951.Z.getModeOptions().vadUseKrisp,
    bypassSystemInputProcessing: Chunk131951.Z.getBypassSystemInputProcessing()
  })), {
    hasEchoCancellation: E,
    hasNoiseSuppression: b,
    hasAutomaticGainControl: y
  } = (0, Chunk442837.cj)([Chunk463395.Z], () => ({
    hasEchoCancellation: Chunk463395.Z.hasEchoCancellation(exports),
    hasNoiseSuppression: Chunk463395.Z.hasNoiseSuppression(exports),
    hasAutomaticGainControl: Chunk463395.Z.hasAutomaticGainControl(exports)
  }), [exports]), O = Chunk419659 || Chunk775322 || Chunk853453, v = module === Chunk981631.pM4.VOICE_ACTIVITY && Chunk626135;
  return (0, Chunk54381.jsxs)(Chunk738486.Z, {
    children: [O && (0, Chunk54381.jsx)(Chunk481060.M14, {
      type: "info",
      children: Chunk388032.intl.string(Chunk388032.t["/Whuzi"])
    }), (0, Chunk54381.jsx)(Chunk921801.F, {
      setting: Chunk726985.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_ECHO_CANCELLATION,
      children: (0, Chunk54381.jsx)(Chunk481060.rsf, {
        label: Chunk388032.intl.string(Chunk388032.t.iWTwu6),
        checked: require,
        onChange: e => s.Z.setEchoCancellation(e, {
          page: h.ZY5.USER_SETTINGS,
          section: h.jXE.SETTINGS_VOICE_AND_VIDEO
        }),
        disabled: Chunk419659
      })
    }), (0, Chunk54381.jsx)(Chunk921801.F, {
      setting: Chunk726985.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_NOISE_SUPPRESSION,
      children: (0, Chunk54381.jsx)(I, {})
    }), (0, Chunk54381.jsx)(Chunk921801.F, {
      setting: Chunk726985.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_ADVANCED_VOICE_ACTIVITY,
      children: (0, Chunk54381.jsx)(Chunk481060.rsf, {
        label: Chunk388032.intl.string(Chunk388032.t.BbESsg),
        description: Chunk388032.intl.string(Chunk388032.t.LoOB1F),
        checked: Chunk63063,
        onChange: t => s.Z.setMode(e, {
          vadUseKrisp: t
        }),
        disabled: !v
      })
    }), (0, Chunk54381.jsx)(Chunk921801.F, {
      setting: Chunk726985.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_AUTOMATIC_GAIN_CONTROL,
      children: (0, Chunk54381.jsx)(Chunk481060.rsf, {
        label: Chunk388032.intl.string(Chunk388032.t.cUMdH0),
        description: Chunk388032.intl.string(Chunk388032.t["6EjbvA"]),
        checked: Chunk780384,
        onChange: e => s.Z.setAutomaticGainControl(e, {
          page: h.ZY5.USER_SETTINGS,
          section: h.jXE.SETTINGS_VOICE_AND_VIDEO
        }),
        disabled: Chunk853453
      })
    }), (0, Chunk54381.jsx)(Chunk921801.F, {
      setting: Chunk726985.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_BYPASS_SYSTEM_INPUT_PROCESSING,
      children: (0, Chunk54381.jsx)(Chunk481060.rsf, {
        label: Chunk388032.intl.string(Chunk388032.t.DFPXIG),
        description: Chunk388032.intl.string(Chunk388032.t["UyRX+C"]),
        checked: Chunk210887,
        onChange: e => {
          s.Z.setBypassSystemInputProcessing(e)
        }
      })
    })]
  })
}