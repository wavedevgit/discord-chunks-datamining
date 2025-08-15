/** Chunk was on 30202 **/
/** chunk id: 546997, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => f
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
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

function h(e) {
  (0, u.isMac)() && e ? (0, a.ZDy)(async () => {
    let {
      ConfirmModal: t
    } = await Promise.resolve().then(n.bind(n, 878678));
    return n => {
      var r, c;
      return (0, i.jsx)(t, (r = function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
          "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
          }))), i.forEach(function(t) {
            var i;
            i = n[t], t in e ? Object.defineProperty(e, t, {
              value: i,
              enumerable: true,
              configurable: true,
              writable: true
            }) : e[t] = i
          })
        }
        return e
      }({}, n), c = c = {
        onConfirm: () => {
          l.Z.setUseSystemScreensharePicker(e), o.Z.app.relaunch()
        },
        confirmButtonColor: s.zx.Colors.BRAND,
        header: p.intl.string(p.t["9jf31N"]),
        cancelText: p.intl.string(p.t["ETE/oK"]),
        confirmText: p.intl.string(p.t.BddRzc),
        children: (0, i.jsx)(a.Text, {
          variant: "text-md/normal",
          children: p.intl.string(p.t.uBd6JS)
        })
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(c)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          n.push.apply(n, i)
        }
        return n
      })(Object(c)).forEach(function(e) {
        Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(c, e))
      }), r))
    }
  }) : l.Z.setUseSystemScreensharePicker(e)
}

function f(e) {
  let {
    refreshStyles: t = false
  } = e, {
    videoHook: n,
    experimentalSoundshare: s,
    supportsExperimentalSoundshare: o,
    supportsHookSoundshare: u,
    useSystemScreensharePicker: f
  } = (0, r.cj)([d.Z], () => ({
    videoHook: d.Z.getVideoHook(),
    experimentalSoundshare: d.Z.getExperimentalSoundshare(),
    supportsExperimentalSoundshare: d.Z.supportsExperimentalSoundshare(),
    supportsHookSoundshare: d.Z.supportsHookSoundshare(),
    useSystemScreensharePicker: d.Z.getUseSystemScreensharePicker()
  })), b = (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)(c.F, {
      setting: m.s6.VOICE_AND_VIDEO_ADVANCED_SCREENSHARE_VIDEO_HOOK,
      children: (0, i.jsx)(a.j7V, {
        value: n,
        onChange: e => l.Z.setVideoHook(e),
        note: p.intl.string(p.t["Fj/xn5"]),
        hideBorder: t,
        children: p.intl.string(p.t.GmWk2N)
      })
    }), o && u && (0, i.jsx)(c.F, {
      setting: m.s6.VOICE_AND_VIDEO_ADVANCED_SCREENSHARE_EXPERIMENTAL_SOUNDSHARE,
      children: (0, i.jsx)(a.j7V, {
        value: s,
        onChange: e => l.Z.setExperimentalSoundshare(e),
        hideBorder: t,
        children: p.intl.string(p.t["4I0qzc"])
      })
    }), (0, i.jsx)(c.F, {
      setting: m.s6.VOICE_AND_VIDEO_ADVANCED_SCREENSHARE_SYSTEM_PICKER,
      children: (0, i.jsx)(a.j7V, {
        value: f,
        onChange: h,
        hideBorder: t,
        children: p.intl.string(p.t.ie1mgY)
      })
    })]
  });
  return (0, i.jsx)(c.F, {
    setting: m.s6.VOICE_AND_VIDEO_ADVANCED_SCREENSHARE,
    children: t ? b : (0, i.jsx)(a.hjN, {
      className: g.marginBottom20,
      title: p.intl.string(p.t.NMCIf3),
      children: b
    })
  })
}