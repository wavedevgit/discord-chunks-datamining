/** Chunk was on web.js **/
/** chunk id: 362969, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => y
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk55619 = require("./55619.js"),
  Chunk195043 = require("./195043.jsx"),
  Chunk351906 = require("./351906.js"),
  Chunk723702 = require("./723702.js"),
  Chunk780964 = require("./780964.js"),
  Chunk790174 = require("./790174.jsx"),
  Chunk840065 = require("./840065.jsx"),
  Chunk531525 = require("./531525.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk884269 = require("./884269.js");

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

function y() {
  let {
    enabled: e,
    autoToggle: t,
    hideInstantInvites: g,
    hidePersonalInformation: y,
    disableSounds: b,
    disableNotifications: O,
    enableContentProtection: v
  } = (0, i.cf)([l.A], () => E({}, l.A.getSettings())), A = () => (0, r.jsxs)(a.ZpM, {
    type: a.ZpM.Types.PRIMARY,
    className: m.dH,
    children: [(0, r.jsxs)("div", {
      children: [(0, r.jsx)(a.Heading, {
        variant: "heading-md/medium",
        children: h.intl.string(h.t.bxGbHL)
      }), (0, r.jsx)(a.Text, {
        variant: "text-sm/normal",
        children: h.intl.format(h.t["4rmZnx"], {
          streamkitURL: _.X7G.STREAMKIT
        })
      })]
    }), (0, r.jsx)("img", {
      src: n(582343),
      width: 184,
      height: 110,
      alt: "",
      className: m.Ox
    })]
  }), I = () => {
    if (c.isPlatformEmbedded) return (0, r.jsx)(a.dOG, {
      label: h.intl.string(h.t["PKDAJ/"]),
      description: h.intl.string(h.t.ZPi4lM),
      checked: t,
      onChange: e => S("autoToggle", e)
    })
  }, S = (e, t) => {
    s.A.update({
      [e]: t
    })
  }, T = () => {
    (0, f.openUserSettings)(u.X.KEYBINDS_PANEL, {
      section: _.nc_.KEYBINDS
    })
  };
  return (0, r.jsx)(d.A, {
    title: h.intl.string(h.t.S5GfOW),
    children: (0, r.jsxs)(a.BJc, {
      gap: 24,
      children: [(0, r.jsx)(o.x, {
        setting: p.H.STREAMER_MODE_INTEGRATIONS,
        children: A()
      }), (0, r.jsx)(o.x, {
        setting: p.H.STREAMER_MODE_ENABLE,
        children: (0, r.jsxs)(a.BJc, {
          gap: 16,
          children: [(0, r.jsx)(a.dOG, {
            label: h.intl.string(h.t.p9ZAJZ),
            description: h.intl.format(h.t.MLVL2M, {
              onClick: T
            }),
            checked: e,
            onChange: e => S("enabled", e)
          }), I(), (0, r.jsx)(a.cGx, {})]
        })
      }), (0, r.jsxs)(a.nVY, {
        label: h.intl.string(h.t["+1H47t"]),
        className: m.a9,
        children: [(0, r.jsx)(o.x, {
          setting: p.H.STREAMER_MODE_HIDE_PERSONAL_INFORMATION,
          children: (0, r.jsx)(a.dOG, {
            label: h.intl.string(h.t.UpQziA),
            description: h.intl.string(h.t["+9Lra7"]),
            checked: y,
            onChange: e => S("hidePersonalInformation", e)
          })
        }), (0, r.jsx)(o.x, {
          setting: p.H.STREAMER_MODE_HIDE_INVITE_LINKS,
          children: (0, r.jsx)(a.dOG, {
            label: h.intl.string(h.t.q7WNGv),
            description: h.intl.string(h.t.m7mS2U),
            checked: g,
            onChange: e => S("hideInstantInvites", e)
          })
        }), (0, r.jsx)(o.x, {
          setting: p.H.STREAMER_MODE_DISABLE_SOUNDS,
          children: (0, r.jsx)(a.dOG, {
            label: h.intl.string(h.t.o56OZu),
            description: h.intl.string(h.t.eAkaik),
            checked: b,
            onChange: e => S("disableSounds", e)
          })
        }), (0, r.jsx)(o.x, {
          setting: p.H.STREAMER_MODE_DISABLE_NOTIFICATIONS,
          children: (0, r.jsx)(a.dOG, {
            label: h.intl.string(h.t.qmYiYd),
            description: h.intl.string(h.t["ZAmpQ/"]),
            checked: O,
            onChange: e => S("disableNotifications", e)
          })
        }), (0, r.jsx)(o.x, {
          setting: p.H.STREAMER_MODE_HIDE_DISCORD_WINDOW_FROM_SCREEN_CAPTURE,
          children: (0, r.jsx)(a.dOG, {
            label: h.intl.string(h.t["iA81+a"]),
            description: h.intl.string(h.t.P4vj0h),
            checked: v,
            onChange: e => S("enableContentProtection", e)
          })
        })]
      })]
    })
  })
}