/** Chunk was on web.js **/
/** chunk id: 546997, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  E: () => E,
  Z: () => b
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk442837 = require("./442837.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk846027 = require("./846027.js"),
  Chunk579806 = require("./579806.js"),
  Chunk921801 = require("./921801.js"),
  Chunk131951 = require("./131951.js"),
  Chunk358085 = require("./358085.js"),
  Chunk726985 = require("./726985.js"),
  Chunk388032 = require("./388032.jsx");

function p(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function h(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      p(e, t, n[t])
    })
  }
  return e
}

function m(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function g(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : m(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function E(e) {
  (0, d.isMac)() && e ? (0, o.ZDy)(async () => {
    let {
      ConfirmModal: t
    } = await Promise.resolve().then(n.bind(n, 878678));
    return n => (0, r.jsx)(t, g(h({}, n), {
      onConfirm: () => {
        s.Z.setUseSystemScreensharePicker(e), l.Z.app.relaunch()
      },
      confirmButtonColor: a.zx.Colors.BRAND,
      header: _.intl.string(_.t["9jf31O"]),
      cancelText: _.intl.string(_.t["ETE/oC"]),
      confirmText: _.intl.string(_.t.BddRzS),
      children: (0, r.jsx)(o.Text, {
        variant: "text-md/normal",
        children: _.intl.string(_.t.uBd6JW)
      })
    }))
  }) : s.Z.setUseSystemScreensharePicker(e)
}

function b() {
  let {
    videoHook: e,
    experimentalSoundshare: t,
    supportsExperimentalSoundshare: n,
    supportsHookSoundshare: a,
    useSystemScreensharePicker: l
  } = (0, Chunk442837.cj)([Chunk131951.Z], () => ({
    videoHook: Chunk131951.Z.getVideoHook(),
    experimentalSoundshare: Chunk131951.Z.getExperimentalSoundshare(),
    supportsExperimentalSoundshare: Chunk131951.Z.supportsExperimentalSoundshare(),
    supportsHookSoundshare: Chunk131951.Z.supportsHookSoundshare(),
    useSystemScreensharePicker: Chunk131951.Z.getUseSystemScreensharePicker()
  }));
  return (0, Chunk951288.jsxs)(Chunk921801.F, {
    setting: Chunk726985.s6.VOICE_AND_VIDEO_ADVANCED_SCREENSHARE,
    children: [(0, Chunk951288.jsx)(Chunk921801.F, {
      setting: Chunk726985.s6.VOICE_AND_VIDEO_ADVANCED_SCREENSHARE_VIDEO_HOOK,
      children: (0, Chunk951288.jsx)(Chunk481060.rsf, {
        label: Chunk388032.intl.string(Chunk388032.t.GmWk2E),
        description: Chunk388032.intl.string(Chunk388032.t["Fj/xn1"]),
        checked: module,
        onChange: e => s.Z.setVideoHook(e)
      })
    }), require && Chunk755721 && (0, Chunk951288.jsx)(Chunk921801.F, {
      setting: Chunk726985.s6.VOICE_AND_VIDEO_ADVANCED_SCREENSHARE_EXPERIMENTAL_SOUNDSHARE,
      children: (0, Chunk951288.jsx)(Chunk481060.rsf, {
        label: Chunk388032.intl.string(Chunk388032.t["4I0qzZ"]),
        checked: exports,
        onChange: e => s.Z.setExperimentalSoundshare(e)
      })
    }), (0, Chunk951288.jsx)(Chunk921801.F, {
      setting: Chunk726985.s6.VOICE_AND_VIDEO_ADVANCED_SCREENSHARE_SYSTEM_PICKER,
      children: (0, Chunk951288.jsx)(Chunk481060.rsf, {
        label: Chunk388032.intl.string(Chunk388032.t.ie1mgY),
        checked: Chunk579806,
        onChange: E
      })
    })]
  })
}