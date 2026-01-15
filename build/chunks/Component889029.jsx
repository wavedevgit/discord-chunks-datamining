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
  Chunk921801 = require("./921801.jsx"),
  Chunk246946 = require("./246946.js"),
  Chunk358085 = require("./358085.js"),
  Chunk313789 = require("./313789.js"),
  Chunk273313 = require("./273313.jsx"),
  Chunk518596 = require("./518596.jsx"),
  Chunk726985 = require("./726985.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk268622 = require("./268622.js");

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
  } = (0, i.cj)([l.Z], () => E({}, l.Z.getSettings())), S = () => (0, r.jsxs)(a.Zbd, {
    type: a.Zbd.Types.PRIMARY,
    className: m.noticeCard,
    children: [(0, r.jsxs)("div", {
      children: [(0, r.jsx)(a.Heading, {
        variant: "heading-md/medium",
        children: h.intl.string(h.t.bxGbHL)
      }), (0, r.jsx)(a.Text, {
        variant: "text-sm/normal",
        children: h.intl.format(h.t["4rmZnx"], {
          streamkitURL: _.EYA.STREAMKIT
        })
      })]
    }), (0, r.jsx)("img", {
      src: n(560264),
      width: 184,
      height: 110,
      alt: "",
      className: m.noticeImage
    })]
  }), I = () => {
    if (c.isPlatformEmbedded) return (0, r.jsx)(a.rsf, {
      label: h.intl.string(h.t["PKDAJ/"]),
      description: h.intl.string(h.t.ZPi4lM),
      checked: t,
      onChange: e => T("autoToggle", e)
    })
  }, T = (e, t) => {
    o.Z.update({
      [e]: t
    })
  }, C = () => {
    (0, f.openUserSettings)(u.n.KEYBINDS_PANEL, {
      section: _.oAB.KEYBINDS
    })
  };
  return (0, r.jsx)(d.Z, {
    title: h.intl.string(h.t.S5GfOW),
    children: (0, r.jsxs)(a.Kqy, {
      gap: 24,
      children: [(0, r.jsx)(s.F, {
        setting: p.s6.STREAMER_MODE_INTEGRATIONS,
        children: S()
      }), (0, r.jsx)(s.F, {
        setting: p.s6.STREAMER_MODE_ENABLE,
        children: (0, r.jsxs)(a.Kqy, {
          gap: 16,
          children: [(0, r.jsx)(a.rsf, {
            label: h.intl.string(h.t.p9ZAJZ),
            description: h.intl.format(h.t.MLVL2M, {
              onClick: C
            }),
            checked: e,
            onChange: e => T("enabled", e)
          }), I(), (0, r.jsx)(a.izJ, {})]
        })
      }), (0, r.jsxs)(a.C3N, {
        label: h.intl.string(h.t["+1H47t"]),
        className: m.sectionLabel,
        children: [(0, r.jsx)(s.F, {
          setting: p.s6.STREAMER_MODE_HIDE_PERSONAL_INFORMATION,
          children: (0, r.jsx)(a.rsf, {
            label: h.intl.string(h.t.UpQziA),
            description: h.intl.string(h.t["+9Lra7"]),
            checked: b,
            onChange: e => T("hidePersonalInformation", e)
          })
        }), (0, r.jsx)(s.F, {
          setting: p.s6.STREAMER_MODE_HIDE_INVITE_LINKS,
          children: (0, r.jsx)(a.rsf, {
            label: h.intl.string(h.t.q7WNGv),
            description: h.intl.string(h.t.m7mS2U),
            checked: g,
            onChange: e => T("hideInstantInvites", e)
          })
        }), (0, r.jsx)(s.F, {
          setting: p.s6.STREAMER_MODE_DISABLE_SOUNDS,
          children: (0, r.jsx)(a.rsf, {
            label: h.intl.string(h.t.o56OZu),
            description: h.intl.string(h.t.eAkaik),
            checked: y,
            onChange: e => T("disableSounds", e)
          })
        }), (0, r.jsx)(s.F, {
          setting: p.s6.STREAMER_MODE_DISABLE_NOTIFICATIONS,
          children: (0, r.jsx)(a.rsf, {
            label: h.intl.string(h.t.qmYiYd),
            description: h.intl.string(h.t["ZAmpQ/"]),
            checked: O,
            onChange: e => T("disableNotifications", e)
          })
        }), (0, r.jsx)(s.F, {
          setting: p.s6.STREAMER_MODE_HIDE_DISCORD_WINDOW_FROM_SCREEN_CAPTURE,
          children: (0, r.jsx)(a.rsf, {
            label: h.intl.string(h.t["iA81+a"]),
            description: h.intl.string(h.t.P4vj0h),
            checked: v,
            onChange: e => T("enableContentProtection", e)
          })
        })]
      })]
    })
  })
}