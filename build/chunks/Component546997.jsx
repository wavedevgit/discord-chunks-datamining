/** Chunk was on web.js **/
/** chunk id: 546997, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => y
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
  Chunk388032 = require("./388032.jsx"),
  Chunk197571 = require("./197571.js");

function h(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function m(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      h(e, t, n[t])
    })
  }
  return e
}

function g(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function E(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : g(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function b(e) {
  (0, d.isMac)() && e ? (0, o.ZDy)(async () => {
    let {
      ConfirmModal: t
    } = await Promise.resolve().then(n.bind(n, 878678));
    return n => (0, r.jsx)(t, E(m({}, n), {
      onConfirm: () => {
        s.Z.setUseSystemScreensharePicker(e), l.Z.app.relaunch()
      },
      confirmButtonColor: a.zx.Colors.BRAND,
      header: _.intl.string(_.t["9jf31N"]),
      cancelText: _.intl.string(_.t["ETE/oK"]),
      confirmText: _.intl.string(_.t.BddRzc),
      children: (0, r.jsx)(o.Text, {
        variant: "text-md/normal",
        children: _.intl.string(_.t.uBd6JS)
      })
    }))
  }) : s.Z.setUseSystemScreensharePicker(e)
}

function y(e) {
  let {
    refreshStyles: t = false
  } = e, {
    videoHook: n,
    experimentalSoundshare: a,
    supportsExperimentalSoundshare: l,
    supportsHookSoundshare: d,
    useSystemScreensharePicker: h
  } = (0, i.cj)([u.Z], () => ({
    videoHook: u.Z.getVideoHook(),
    experimentalSoundshare: u.Z.getExperimentalSoundshare(),
    supportsExperimentalSoundshare: u.Z.supportsExperimentalSoundshare(),
    supportsHookSoundshare: u.Z.supportsHookSoundshare(),
    useSystemScreensharePicker: u.Z.getUseSystemScreensharePicker()
  })), m = (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(c.F, {
      setting: f.s6.VOICE_AND_VIDEO_ADVANCED_SCREENSHARE_VIDEO_HOOK,
      children: (0, r.jsx)(o.j7V, {
        value: n,
        onChange: e => s.Z.setVideoHook(e),
        note: _.intl.string(_.t["Fj/xn5"]),
        hideBorder: t,
        children: _.intl.string(_.t.GmWk2N)
      })
    }), l && d && (0, r.jsx)(c.F, {
      setting: f.s6.VOICE_AND_VIDEO_ADVANCED_SCREENSHARE_EXPERIMENTAL_SOUNDSHARE,
      children: (0, r.jsx)(o.j7V, {
        value: a,
        onChange: e => s.Z.setExperimentalSoundshare(e),
        hideBorder: t,
        children: _.intl.string(_.t["4I0qzc"])
      })
    }), (0, r.jsx)(c.F, {
      setting: f.s6.VOICE_AND_VIDEO_ADVANCED_SCREENSHARE_SYSTEM_PICKER,
      children: (0, r.jsx)(o.j7V, {
        value: h,
        onChange: b,
        hideBorder: t,
        children: _.intl.string(_.t.ie1mgY)
      })
    })]
  });
  return (0, r.jsx)(c.F, {
    setting: f.s6.VOICE_AND_VIDEO_ADVANCED_SCREENSHARE,
    children: t ? m : (0, r.jsx)(o.hjN, {
      className: p.marginBottom20,
      title: _.intl.string(_.t.NMCIf3),
      children: m
    })
  })
}