/** Chunk was on web.js **/
/** chunk id: 803567, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => R
}), require("./539854.js");
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
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
  S = (0, Chunk313201.hQ)(),
  A = {
    page: Chunk981631.ZY5.USER_SETTINGS,
    section: Chunk981631.jXE.SETTINGS_VOICE_AND_VIDEO
  };

function C(e) {
  let t = e.currentTarget;
  h.default.track(y.rMx.NOISE_CANCELLATION_LINK_CLICKED, {
    text: t.text,
    href: t.href,
    location: {
      page: y.ZY5.USER_SETTINGS,
      section: y.jXE.SETTINGS_VOICE_AND_VIDEO
    }
  })
}

function N(e) {
  let {
    refreshStyles: t = false
  } = e, n = (0, o.e7)([g.Z], () => g.Z.theme), {
    noiseCancellation: i,
    noiseSuppression: a,
    noiseSuppressionSupported: d,
    noiseCancellationSupported: f
  } = (0, o.cj)([p.Z], () => ({
    noiseCancellation: p.Z.getNoiseCancellation(),
    noiseSuppression: p.Z.getNoiseSuppression(),
    noiseSuppressionSupported: p.Z.isNoiseSuppressionSupported(),
    noiseCancellationSupported: p.Z.isNoiseCancellationSupported()
  }));
  if (!d && !f) return null;
  let _ = +!!a,
    h = i ? 2 : _,
    E = [];
  return f && E.push({
    name: O.intl.string(O.t.rdoNzs),
    value: 2
  }), d && E.push({
    name: O.intl.string(O.t.qXeYHx),
    value: 1
  }), E.push({
    name: O.intl.string(O.t.wkYAl5),
    value: 0
  }), (0, r.jsxs)(l.hjN, {
    className: t ? true : v.marginBottom20,
    children: [(0, r.jsx)(l.vwX, {
      id: S,
      tag: l.RB0.H3,
      className: v.marginBottom8,
      children: O.intl.string(O.t.t8QhiY)
    }), (0, r.jsx)(l.R94, {
      type: l.R94.Types.DESCRIPTION,
      className: v.marginBottom8,
      children: O.intl.string(O.t.najZCQ)
    }), (0, r.jsxs)(l.Kqy, {
      gap: 8,
      children: [(0, r.jsx)(l.FXm, {
        options: E,
        onChange: e => {
          c.Z.setNoiseCancellation(2 === e.value, A), c.Z.setNoiseSuppression(1 === e.value, A)
        },
        value: h
      }), f && (0, r.jsx)(l.ToO, {
        type: l.Dd5.PRIMARY,
        imageData: {
          src: (0, s.ap)(n) ? I : T,
          width: 70,
          height: 40
        },
        align: u.Z.Align.CENTER,
        body: (0, r.jsx)(l.eee, {
          href: m.Z.getArticleURL(y.BhN.NOISE_SUPPRESSION),
          onClick: C,
          children: O.intl.string(O.t.hvVgAQ)
        })
      })]
    }), t ? null : (0, r.jsx)(l.$i$, {})]
  })
}

function R(e) {
  let {
    refreshStyles: t = false
  } = e, {
    inputMode: n,
    inputDeviceId: i,
    echoCancellation: s,
    automaticGainControl: u,
    vadAutoThreshold: d,
    vadUseKrisp: h,
    bypassSystemInputProcessing: m
  } = (0, o.cj)([p.Z], () => ({
    inputMode: p.Z.getMode(),
    inputDeviceId: p.Z.getInputDeviceId(),
    echoCancellation: p.Z.getEchoCancellation(),
    automaticGainControl: p.Z.getAutomaticGainControl(),
    vadAutoThreshold: p.Z.getModeOptions().autoThreshold,
    vadUseKrisp: p.Z.getModeOptions().vadUseKrisp,
    bypassSystemInputProcessing: p.Z.getBypassSystemInputProcessing()
  })), {
    hasEchoCancellation: g,
    hasNoiseSuppression: I,
    hasAutomaticGainControl: T
  } = (0, o.cj)([_.Z], () => ({
    hasEchoCancellation: _.Z.hasEchoCancellation(i),
    hasNoiseSuppression: _.Z.hasNoiseSuppression(i),
    hasAutomaticGainControl: _.Z.hasAutomaticGainControl(i)
  }), [i]), S = g || I || T, A = n === y.pM4.VOICE_ACTIVITY && d, C = (0, r.jsxs)(E.Z, {
    children: [S && (0, r.jsx)(l.R94, {
      className: t ? true : v.marginBottom20,
      type: l.R94.Types.DESCRIPTION,
      children: O.intl.string(O.t["/Whuzs"])
    }), (0, r.jsx)(f.F, {
      setting: b.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_ECHO_CANCELLATION,
      children: (0, r.jsx)(l.j7V, {
        className: t ? true : a()(v.marginTop8, v.marginBottom20),
        value: s,
        onChange: e => c.Z.setEchoCancellation(e, {
          page: y.ZY5.USER_SETTINGS,
          section: y.jXE.SETTINGS_VOICE_AND_VIDEO
        }),
        disabled: g,
        hideBorder: t,
        children: O.intl.string(O.t.iWTwu7)
      })
    }), (0, r.jsx)(f.F, {
      setting: b.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_NOISE_SUPPRESSION,
      children: (0, r.jsx)(N, {
        refreshStyles: t
      })
    }), (0, r.jsx)(f.F, {
      setting: b.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_ADVANCED_VOICE_ACTIVITY,
      children: (0, r.jsx)(l.j7V, {
        value: h,
        onChange: e => c.Z.setMode(n, {
          vadUseKrisp: e
        }),
        note: O.intl.string(O.t.LoOB1N),
        disabled: !A,
        hideBorder: t,
        children: O.intl.string(O.t.BbESsr)
      })
    }), (0, r.jsx)(f.F, {
      setting: b.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_AUTOMATIC_GAIN_CONTROL,
      children: (0, r.jsx)(l.j7V, {
        value: u,
        onChange: e => c.Z.setAutomaticGainControl(e, {
          page: y.ZY5.USER_SETTINGS,
          section: y.jXE.SETTINGS_VOICE_AND_VIDEO
        }),
        note: O.intl.string(O.t["6EjbvL"]),
        disabled: T,
        hideBorder: t,
        children: O.intl.string(O.t.cUMdHx)
      })
    }), (0, r.jsx)(f.F, {
      setting: b.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_BYPASS_SYSTEM_INPUT_PROCESSING,
      children: (0, r.jsx)(l.j7V, {
        value: m,
        onChange: e => {
          c.Z.setBypassSystemInputProcessing(e)
        },
        note: O.intl.string(O.t["UyRX+P"]),
        hideBorder: t,
        children: O.intl.string(O.t.DFPXIC)
      })
    })]
  });
  return t ? C : (0, r.jsx)(l.hjN, {
    className: v.marginBottom20,
    title: O.intl.string(O.t["6I6GUl"]),
    children: C
  })
}