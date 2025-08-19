/** Chunk was on 66181 **/
/** chunk id: 803567, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => y
}), require("./539854.js");
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
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
  T = {
    page: Chunk981631.ZY5.USER_SETTINGS,
    section: Chunk981631.jXE.SETTINGS_VOICE_AND_VIDEO
  };

function N(e) {
  let t = e.currentTarget;
  h.default.track(j.rMx.NOISE_CANCELLATION_LINK_CLICKED, {
    text: t.text,
    href: t.href,
    location: {
      page: j.ZY5.USER_SETTINGS,
      section: j.jXE.SETTINGS_VOICE_AND_VIDEO
    }
  })
}

function I(e) {
  let {
    refreshStyles: t = false
  } = e, n = (0, a.e7)([b.Z], () => b.Z.theme), {
    noiseCancellation: r,
    noiseSuppression: s,
    noiseSuppressionSupported: u,
    noiseCancellationSupported: m
  } = (0, a.cj)([g.Z], () => ({
    noiseCancellation: g.Z.getNoiseCancellation(),
    noiseSuppression: g.Z.getNoiseSuppression(),
    noiseSuppressionSupported: g.Z.isNoiseSuppressionSupported(),
    noiseCancellationSupported: g.Z.isNoiseCancellationSupported()
  }));
  if (!u && !m) return null;
  let p = [];
  return m && p.push({
    name: E.intl.string(E.t.rdoNzs),
    value: 2
  }), u && p.push({
    name: E.intl.string(E.t.qXeYHx),
    value: 1
  }), p.push({
    name: E.intl.string(E.t.wkYAl5),
    value: 0
  }), (0, i.jsxs)(o.hjN, {
    className: t ? true : C.marginBottom20,
    children: [(0, i.jsx)(o.vwX, {
      id: S,
      tag: o.RB0.H3,
      className: C.marginBottom8,
      children: E.intl.string(E.t.t8QhiY)
    }), (0, i.jsx)(o.R94, {
      type: o.R94.Types.DESCRIPTION,
      className: C.marginBottom8,
      children: E.intl.string(E.t.najZCQ)
    }), (0, i.jsxs)(o.Kqy, {
      gap: 8,
      children: [(0, i.jsx)(o.FXm, {
        options: p,
        onChange: e => {
          c.Z.setNoiseCancellation(2 === e.value, T), c.Z.setNoiseSuppression(1 === e.value, T)
        },
        value: r ? 2 : +!!s
      }), m && (0, i.jsx)(o.ToO, {
        type: o.Dd5.PRIMARY,
        imageData: {
          src: (0, l.ap)(n) ? O : v,
          width: 70,
          height: 40
        },
        align: d.Z.Align.CENTER,
        body: (0, i.jsx)(o.eee, {
          href: f.Z.getArticleURL(j.BhN.NOISE_SUPPRESSION),
          onClick: N,
          children: E.intl.string(E.t.hvVgAQ)
        })
      })]
    }), t ? null : (0, i.jsx)(o.$i$, {})]
  })
}

function y(e) {
  let {
    refreshStyles: t = false
  } = e, {
    inputMode: n,
    inputDeviceId: r,
    echoCancellation: l,
    automaticGainControl: d,
    vadAutoThreshold: u,
    vadUseKrisp: h,
    bypassSystemInputProcessing: f
  } = (0, a.cj)([g.Z], () => ({
    inputMode: g.Z.getMode(),
    inputDeviceId: g.Z.getInputDeviceId(),
    echoCancellation: g.Z.getEchoCancellation(),
    automaticGainControl: g.Z.getAutomaticGainControl(),
    vadAutoThreshold: g.Z.getModeOptions().autoThreshold,
    vadUseKrisp: g.Z.getModeOptions().vadUseKrisp,
    bypassSystemInputProcessing: g.Z.getBypassSystemInputProcessing()
  })), {
    hasEchoCancellation: b,
    hasNoiseSuppression: O,
    hasAutomaticGainControl: v
  } = (0, a.cj)([p.Z], () => ({
    hasEchoCancellation: p.Z.hasEchoCancellation(r),
    hasNoiseSuppression: p.Z.hasNoiseSuppression(r),
    hasAutomaticGainControl: p.Z.hasAutomaticGainControl(r)
  }), [r]), S = n === j.pM4.VOICE_ACTIVITY && u, T = (0, i.jsxs)(x.Z, {
    children: [(b || O || v) && (0, i.jsx)(o.R94, {
      className: t ? true : C.marginBottom20,
      type: o.R94.Types.DESCRIPTION,
      children: E.intl.string(E.t["/Whuzs"])
    }), (0, i.jsx)(m.F, {
      setting: _.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_ECHO_CANCELLATION,
      children: (0, i.jsx)(o.j7V, {
        className: t ? true : s()(C.marginTop8, C.marginBottom20),
        value: l,
        onChange: e => c.Z.setEchoCancellation(e, {
          page: j.ZY5.USER_SETTINGS,
          section: j.jXE.SETTINGS_VOICE_AND_VIDEO
        }),
        disabled: b,
        hideBorder: t,
        children: E.intl.string(E.t.iWTwu7)
      })
    }), (0, i.jsx)(m.F, {
      setting: _.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_NOISE_SUPPRESSION,
      children: (0, i.jsx)(I, {
        refreshStyles: t
      })
    }), (0, i.jsx)(m.F, {
      setting: _.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_ADVANCED_VOICE_ACTIVITY,
      children: (0, i.jsx)(o.j7V, {
        value: h,
        onChange: e => c.Z.setMode(n, {
          vadUseKrisp: e
        }),
        note: E.intl.string(E.t.LoOB1N),
        disabled: !S,
        hideBorder: t,
        children: E.intl.string(E.t.BbESsr)
      })
    }), (0, i.jsx)(m.F, {
      setting: _.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_AUTOMATIC_GAIN_CONTROL,
      children: (0, i.jsx)(o.j7V, {
        value: d,
        onChange: e => c.Z.setAutomaticGainControl(e, {
          page: j.ZY5.USER_SETTINGS,
          section: j.jXE.SETTINGS_VOICE_AND_VIDEO
        }),
        note: E.intl.string(E.t["6EjbvL"]),
        disabled: v,
        hideBorder: t,
        children: E.intl.string(E.t.cUMdHx)
      })
    }), (0, i.jsx)(m.F, {
      setting: _.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_BYPASS_SYSTEM_INPUT_PROCESSING,
      children: (0, i.jsx)(o.j7V, {
        value: f,
        onChange: e => {
          c.Z.setBypassSystemInputProcessing(e)
        },
        note: E.intl.string(E.t["UyRX+P"]),
        hideBorder: t,
        children: E.intl.string(E.t.DFPXIC)
      })
    })]
  });
  return t ? T : (0, i.jsx)(o.hjN, {
    className: C.marginBottom20,
    title: E.intl.string(E.t["6I6GUl"]),
    children: T
  })
}