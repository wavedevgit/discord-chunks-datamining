/** Chunk was on web.js **/
/** chunk id: 803567, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => N
}), require("./539854.js");
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk442837 = require("./442837.js"),
  Chunk538534 = require("./538534.jsx"),
  Chunk780384 = require("./780384.js"),
  Chunk481060 = require("./481060.js"),
  Chunk846027 = require("./846027.js"),
  Chunk600164 = require("./600164.jsx"),
  Chunk313201 = require("./313201.js"),
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
  Chunk197571 = require("./197571.js");
let Chunk775322 = require("./775322.js"),
  Chunk853453 = require("./853453.js"),
  T = (0, Chunk313201.hQ)(),
  S = {
    page: Chunk981631.ZY5.USER_SETTINGS,
    section: Chunk981631.jXE.SETTINGS_VOICE_AND_VIDEO
  };

function A(e) {
  let t = e.currentTarget;
  p.default.track(b.rMx.NOISE_CANCELLATION_LINK_CLICKED, {
    text: t.text,
    href: t.href,
    location: {
      page: b.ZY5.USER_SETTINGS,
      section: b.jXE.SETTINGS_VOICE_AND_VIDEO
    }
  })
}

function C() {
  let e = (0, Chunk442837.e7)([Chunk210887.Z], () => Chunk210887.Z.theme),
    {
      noiseCancellation: t,
      noiseSuppression: n,
      noiseSuppressionSupported: u,
      noiseCancellationSupported: d
    } = (0, Chunk442837.cj)([Chunk131951.Z], () => ({
      noiseCancellation: Chunk131951.Z.getNoiseCancellation(),
      noiseSuppression: Chunk131951.Z.getNoiseSuppression(),
      noiseSuppressionSupported: Chunk131951.Z.isNoiseSuppressionSupported(),
      noiseCancellationSupported: Chunk131951.Z.isNoiseCancellationSupported()
    }));
  if (!Chunk313201 && !Chunk921801) return null;
  let f = +!!require,
    p = exports ? 2 : Chunk463395,
    g = [];
  return Chunk921801 && Chunk738486.push({
    name: Chunk388032.intl.string(Chunk388032.t.rdoNzs),
    value: 2
  }), Chunk313201 && Chunk738486.push({
    name: Chunk388032.intl.string(Chunk388032.t.qXeYHx),
    value: 1
  }), Chunk738486.push({
    name: Chunk388032.intl.string(Chunk388032.t.wkYAl5),
    value: 0
  }), (0, Chunk951288.jsxs)(Chunk481060.hjN, {
    children: [(0, Chunk951288.jsx)(Chunk481060.vwX, {
      id: T,
      tag: Chunk481060.RB0.H3,
      className: Chunk197571.marginBottom8,
      children: Chunk388032.intl.string(Chunk388032.t.t8QhiY)
    }), (0, Chunk951288.jsx)(Chunk481060.R94, {
      type: Chunk481060.R94.Types.DESCRIPTION,
      className: Chunk197571.marginBottom8,
      children: Chunk388032.intl.string(Chunk388032.t.najZCQ)
    }), (0, Chunk951288.jsxs)(Chunk481060.Kqy, {
      gap: 8,
      children: [(0, Chunk951288.jsx)(Chunk538534.E, {
        options: Chunk738486,
        onChange: e => {
          l.Z.setNoiseCancellation(2 === e, S), l.Z.setNoiseSuppression(1 === e, S)
        },
        value: Chunk626135
      }), Chunk921801 && (0, Chunk951288.jsx)(Chunk481060.ToO, {
        type: Chunk481060.Dd5.PRIMARY,
        imageData: {
          src: (0, Chunk780384.ap)(module) ? Chunk775322 : Chunk853453,
          width: 70,
          height: 40
        },
        align: Chunk600164.Z.Align.CENTER,
        body: (0, Chunk951288.jsx)(Chunk481060.eee, {
          href: Chunk63063.Z.getArticleURL(Chunk981631.BhN.NOISE_SUPPRESSION),
          onClick: A,
          children: Chunk388032.intl.string(Chunk388032.t.hvVgAQ)
        })
      })]
    })]
  })
}

function N() {
  let {
    inputMode: e,
    inputDeviceId: t,
    echoCancellation: n,
    automaticGainControl: a,
    vadAutoThreshold: o,
    vadUseKrisp: c,
    bypassSystemInputProcessing: u
  } = (0, Chunk442837.cj)([Chunk131951.Z], () => ({
    inputMode: Chunk131951.Z.getMode(),
    inputDeviceId: Chunk131951.Z.getInputDeviceId(),
    echoCancellation: Chunk131951.Z.getEchoCancellation(),
    automaticGainControl: Chunk131951.Z.getAutomaticGainControl(),
    vadAutoThreshold: Chunk131951.Z.getModeOptions().autoThreshold,
    vadUseKrisp: Chunk131951.Z.getModeOptions().vadUseKrisp,
    bypassSystemInputProcessing: Chunk131951.Z.getBypassSystemInputProcessing()
  })), {
    hasEchoCancellation: p,
    hasNoiseSuppression: h,
    hasAutomaticGainControl: m
  } = (0, Chunk442837.cj)([Chunk463395.Z], () => ({
    hasEchoCancellation: Chunk463395.Z.hasEchoCancellation(exports),
    hasNoiseSuppression: Chunk463395.Z.hasNoiseSuppression(exports),
    hasAutomaticGainControl: Chunk463395.Z.hasAutomaticGainControl(exports)
  }), [exports]), O = Chunk626135 || Chunk63063 || Chunk210887, v = module === Chunk981631.pM4.VOICE_ACTIVITY && Chunk780384;
  return (0, Chunk951288.jsxs)(Chunk738486.Z, {
    children: [Chunk197571 && (0, Chunk951288.jsx)(Chunk481060.R94, {
      type: Chunk481060.R94.Types.DESCRIPTION,
      children: Chunk388032.intl.string(Chunk388032.t["/Whuzs"])
    }), (0, Chunk951288.jsx)(Chunk921801.F, {
      setting: Chunk726985.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_ECHO_CANCELLATION,
      children: (0, Chunk951288.jsx)(Chunk481060.j7V, {
        value: require,
        onChange: e => l.Z.setEchoCancellation(e, {
          page: b.ZY5.USER_SETTINGS,
          section: b.jXE.SETTINGS_VOICE_AND_VIDEO
        }),
        disabled: Chunk626135,
        hideBorder: true,
        children: Chunk388032.intl.string(Chunk388032.t.iWTwu7)
      })
    }), (0, Chunk951288.jsx)(Chunk921801.F, {
      setting: Chunk726985.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_NOISE_SUPPRESSION,
      children: (0, Chunk951288.jsx)(C, {})
    }), (0, Chunk951288.jsx)(Chunk921801.F, {
      setting: Chunk726985.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_ADVANCED_VOICE_ACTIVITY,
      children: (0, Chunk951288.jsx)(Chunk481060.j7V, {
        value: Chunk600164,
        onChange: t => l.Z.setMode(e, {
          vadUseKrisp: t
        }),
        note: Chunk388032.intl.string(Chunk388032.t.LoOB1N),
        disabled: !Chunk775322,
        hideBorder: true,
        children: Chunk388032.intl.string(Chunk388032.t.BbESsr)
      })
    }), (0, Chunk951288.jsx)(Chunk921801.F, {
      setting: Chunk726985.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_AUTOMATIC_GAIN_CONTROL,
      children: (0, Chunk951288.jsx)(Chunk481060.j7V, {
        value: Chunk538534,
        onChange: e => l.Z.setAutomaticGainControl(e, {
          page: b.ZY5.USER_SETTINGS,
          section: b.jXE.SETTINGS_VOICE_AND_VIDEO
        }),
        note: Chunk388032.intl.string(Chunk388032.t["6EjbvL"]),
        disabled: Chunk210887,
        hideBorder: true,
        children: Chunk388032.intl.string(Chunk388032.t.cUMdHx)
      })
    }), (0, Chunk951288.jsx)(Chunk921801.F, {
      setting: Chunk726985.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_BYPASS_SYSTEM_INPUT_PROCESSING,
      children: (0, Chunk951288.jsx)(Chunk481060.j7V, {
        value: Chunk313201,
        onChange: e => {
          l.Z.setBypassSystemInputProcessing(e)
        },
        note: Chunk388032.intl.string(Chunk388032.t["UyRX+P"]),
        hideBorder: true,
        children: Chunk388032.intl.string(Chunk388032.t.DFPXIC)
      })
    })]
  })
}