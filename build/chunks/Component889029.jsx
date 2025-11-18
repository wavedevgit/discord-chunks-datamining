/** Chunk was on web.js **/
/** chunk id: 889029, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => b
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk223245 = require("./223245.js"),
  Chunk921801 = require("./921801.js"),
  Chunk246946 = require("./246946.js"),
  Chunk358085 = require("./358085.js"),
  Chunk313789 = require("./313789.js"),
  Chunk273313 = require("./273313.jsx"),
  Chunk518596 = require("./518596.jsx"),
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
  } = (0, Chunk442837.cj)([Chunk246946.Z], () => E({}, Chunk246946.Z.getSettings())), I = () => (0, Chunk54381.jsxs)(Chunk481060.Zbd, {
    type: Chunk481060.Zbd.Types.PRIMARY,
    className: Chunk459289.noticeCard,
    children: [(0, Chunk54381.jsxs)("div", {
      children: [(0, Chunk54381.jsx)(Chunk481060.Heading, {
        variant: "heading-md/medium",
        children: Chunk388032.intl.string(Chunk388032.t.bxGbHL)
      }), (0, Chunk54381.jsx)(Chunk481060.Text, {
        variant: "text-sm/normal",
        children: Chunk388032.intl.format(Chunk388032.t["4rmZnx"], {
          streamkitURL: Chunk981631.EYA.STREAMKIT
        })
      })]
    }), (0, Chunk54381.jsx)("img", {
      src: require("./560264.js"),
      width: 184,
      height: 110,
      alt: "",
      className: Chunk459289.noticeImage
    })]
  }), T = () => {
    if (Chunk358085.isPlatformEmbedded) return (0, Chunk54381.jsx)(Chunk481060.rsf, {
      label: Chunk388032.intl.string(Chunk388032.t["PKDAJ/"]),
      description: Chunk388032.intl.string(Chunk388032.t.ZPi4lM),
      checked: exports,
      onChange: e => S("autoToggle", e)
    })
  }, S = (e, t) => {
    o.Z.update({
      [e]: t
    })
  }, A = () => {
    (0, Chunk518596.openUserSettings)(Chunk313789.n.KEYBINDS_PANEL, {
      section: Chunk981631.oAB.KEYBINDS
    })
  };
  return (0, Chunk54381.jsx)(Chunk273313.Z, {
    title: Chunk388032.intl.string(Chunk388032.t.S5GfOW),
    children: (0, Chunk54381.jsxs)(Chunk481060.Kqy, {
      gap: 24,
      children: [(0, Chunk54381.jsx)(Chunk921801.F, {
        setting: Chunk726985.s6.STREAMER_MODE_INTEGRATIONS,
        children: I()
      }), (0, Chunk54381.jsx)(Chunk921801.F, {
        setting: Chunk726985.s6.STREAMER_MODE_ENABLE,
        children: (0, Chunk54381.jsxs)(Chunk481060.Kqy, {
          gap: 16,
          children: [(0, Chunk54381.jsx)(Chunk481060.rsf, {
            label: Chunk388032.intl.string(Chunk388032.t.p9ZAJZ),
            description: Chunk388032.intl.format(Chunk388032.t.MLVL2M, {
              onClick: A
            }),
            checked: module,
            onChange: e => S("enabled", e)
          }), T(), (0, Chunk54381.jsx)(Chunk481060.izJ, {})]
        })
      }), (0, Chunk54381.jsxs)(Chunk481060.C3N, {
        label: Chunk388032.intl.string(Chunk388032.t["+1H47t"]),
        className: Chunk459289.sectionLabel,
        children: [(0, Chunk54381.jsx)(Chunk921801.F, {
          setting: Chunk726985.s6.STREAMER_MODE_HIDE_PERSONAL_INFORMATION,
          children: (0, Chunk54381.jsx)(Chunk481060.rsf, {
            label: Chunk388032.intl.string(Chunk388032.t.UpQziA),
            description: Chunk388032.intl.string(Chunk388032.t["+9Lra7"]),
            checked: b,
            onChange: e => S("hidePersonalInformation", e)
          })
        }), (0, Chunk54381.jsx)(Chunk921801.F, {
          setting: Chunk726985.s6.STREAMER_MODE_HIDE_INVITE_LINKS,
          children: (0, Chunk54381.jsx)(Chunk481060.rsf, {
            label: Chunk388032.intl.string(Chunk388032.t.q7WNGv),
            description: Chunk388032.intl.string(Chunk388032.t.m7mS2U),
            checked: g,
            onChange: e => S("hideInstantInvites", e)
          })
        }), (0, Chunk54381.jsx)(Chunk921801.F, {
          setting: Chunk726985.s6.STREAMER_MODE_DISABLE_SOUNDS,
          children: (0, Chunk54381.jsx)(Chunk481060.rsf, {
            label: Chunk388032.intl.string(Chunk388032.t.o56OZu),
            description: Chunk388032.intl.string(Chunk388032.t.eAkaik),
            checked: y,
            onChange: e => S("disableSounds", e)
          })
        }), (0, Chunk54381.jsx)(Chunk921801.F, {
          setting: Chunk726985.s6.STREAMER_MODE_DISABLE_NOTIFICATIONS,
          children: (0, Chunk54381.jsx)(Chunk481060.rsf, {
            label: Chunk388032.intl.string(Chunk388032.t.qmYiYd),
            description: Chunk388032.intl.string(Chunk388032.t["ZAmpQ/"]),
            checked: O,
            onChange: e => S("disableNotifications", e)
          })
        }), (0, Chunk54381.jsx)(Chunk921801.F, {
          setting: Chunk726985.s6.STREAMER_MODE_HIDE_DISCORD_WINDOW_FROM_SCREEN_CAPTURE,
          children: (0, Chunk54381.jsx)(Chunk481060.rsf, {
            label: Chunk388032.intl.string(Chunk388032.t["iA81+a"]),
            description: Chunk388032.intl.string(Chunk388032.t.P4vj0h),
            checked: v,
            onChange: e => S("enableContentProtection", e)
          })
        })]
      })]
    })
  })
}