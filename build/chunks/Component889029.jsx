/** Chunk was on web.js **/
/** chunk id: 889029, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => b
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk223245 = require("./223245.js"),
  Chunk921801 = require("./921801.js"),
  Chunk246946 = require("./246946.js"),
  Chunk358085 = require("./358085.js"),
  Chunk313789 = require("./313789.js"),
  Chunk273313 = require("./273313.jsx"),
  Chunk947889 = require("./947889.js"),
  Chunk726985 = require("./726985.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk459289 = require("./459289.js");

function g(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function E(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      g(e, t, n[t])
    })
  }
  return e
}

function b() {
  let {
    enabled: e,
    autoToggle: t,
    hideInstantInvites: g,
    hidePersonalInformation: b,
    disableSounds: y,
    disableNotifications: O,
    enableContentProtection: v
  } = (0, Chunk442837.cj)([Chunk246946.Z], () => E({}, Chunk246946.Z.getSettings())), I = (0, Chunk947889.Z)(), T = () => (0, Chunk951288.jsx)(Chunk481060.ToO, {
    iconClassName: Chunk459289.noticeIcon,
    type: Chunk481060.Dd5.PRIMARY,
    imageData: {
      src: require("./560264.js"),
      width: 184,
      height: 110,
      position: Chunk481060.SwA.RIGHT
    },
    title: Chunk388032.intl.string(Chunk388032.t.bxGbHB),
    body: Chunk388032.intl.format(Chunk388032.t["4rmZn5"], {
      streamkitURL: Chunk981631.EYA.STREAMKIT
    })
  }), S = () => {
    if (Chunk358085.isPlatformEmbedded) return (0, Chunk951288.jsx)(Chunk481060.rsf, {
      label: Chunk388032.intl.string(Chunk388032.t.PKDAJy),
      description: Chunk388032.intl.string(Chunk388032.t.ZPi4lJ),
      checked: exports,
      onChange: e => A("autoToggle", e)
    })
  }, A = (e, t) => {
    o.Z.update({
      [e]: t
    })
  }, C = () => {
    I(Chunk313789.n.KEYBINDS_PANEL, {
      section: Chunk981631.oAB.KEYBINDS
    })
  };
  return (0, Chunk951288.jsx)(Chunk273313.Z, {
    title: Chunk388032.intl.string(Chunk388032.t.S5GfOT),
    children: (0, Chunk951288.jsxs)(Chunk481060.Kqy, {
      gap: 24,
      children: [(0, Chunk951288.jsx)(Chunk921801.F, {
        setting: Chunk726985.s6.STREAMER_MODE_INTEGRATIONS,
        children: T()
      }), (0, Chunk951288.jsx)(Chunk921801.F, {
        setting: Chunk726985.s6.STREAMER_MODE_ENABLE,
        children: (0, Chunk951288.jsxs)(Chunk481060.Kqy, {
          gap: 16,
          children: [(0, Chunk951288.jsx)(Chunk481060.rsf, {
            label: Chunk388032.intl.string(Chunk388032.t.p9ZAJS),
            description: Chunk388032.intl.format(Chunk388032.t.MLVL2N, {
              onClick: C
            }),
            checked: module,
            onChange: e => A("enabled", e)
          }), S(), (0, Chunk951288.jsx)(Chunk481060.izJ, {})]
        })
      }), (0, Chunk951288.jsxs)(Chunk481060.C3N, {
        label: Chunk388032.intl.string(Chunk388032.t["+1H47u"]),
        className: Chunk459289.sectionLabel,
        children: [(0, Chunk951288.jsx)(Chunk921801.F, {
          setting: Chunk726985.s6.STREAMER_MODE_HIDE_PERSONAL_INFORMATION,
          children: (0, Chunk951288.jsx)(Chunk481060.rsf, {
            label: Chunk388032.intl.string(Chunk388032.t.UpQziI),
            description: Chunk388032.intl.string(Chunk388032.t["+9Lra2"]),
            checked: b,
            onChange: e => A("hidePersonalInformation", e)
          })
        }), (0, Chunk951288.jsx)(Chunk921801.F, {
          setting: Chunk726985.s6.STREAMER_MODE_HIDE_INVITE_LINKS,
          children: (0, Chunk951288.jsx)(Chunk481060.rsf, {
            label: Chunk388032.intl.string(Chunk388032.t.q7WNGh),
            description: Chunk388032.intl.string(Chunk388032.t.m7mS2d),
            checked: g,
            onChange: e => A("hideInstantInvites", e)
          })
        }), (0, Chunk951288.jsx)(Chunk921801.F, {
          setting: Chunk726985.s6.STREAMER_MODE_DISABLE_SOUNDS,
          children: (0, Chunk951288.jsx)(Chunk481060.rsf, {
            label: Chunk388032.intl.string(Chunk388032.t.o56OZm),
            description: Chunk388032.intl.string(Chunk388032.t.eAkaio),
            checked: y,
            onChange: e => A("disableSounds", e)
          })
        }), (0, Chunk951288.jsx)(Chunk921801.F, {
          setting: Chunk726985.s6.STREAMER_MODE_DISABLE_NOTIFICATIONS,
          children: (0, Chunk951288.jsx)(Chunk481060.rsf, {
            label: Chunk388032.intl.string(Chunk388032.t.qmYiYW),
            description: Chunk388032.intl.string(Chunk388032.t.ZAmpQ0),
            checked: O,
            onChange: e => A("disableNotifications", e)
          })
        }), (0, Chunk951288.jsx)(Chunk921801.F, {
          setting: Chunk726985.s6.STREAMER_MODE_HIDE_DISCORD_WINDOW_FROM_SCREEN_CAPTURE,
          children: (0, Chunk951288.jsx)(Chunk481060.rsf, {
            label: Chunk388032.intl.string(Chunk388032.t["iA81+f"]),
            description: Chunk388032.intl.string(Chunk388032.t.P4vj0t),
            checked: v,
            onChange: e => A("enableContentProtection", e)
          })
        })]
      })]
    })
  })
}