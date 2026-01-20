/** Chunk was on 63141 **/
/** chunk id: 158979, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => b
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk481060 = require("./481060.js"),
  Chunk13245 = require("./13245.js"),
  Chunk100527 = require("./100527.js"),
  Chunk371651 = require("./371651.js"),
  Chunk594174 = require("./594174.js"),
  Chunk145597 = require("./145597.js"),
  Chunk312839 = require("./312839.js"),
  Chunk987650 = require("./987650.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk433461 = require("./433461.js");

function p(e) {
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
}

function g(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(e);
      n.push.apply(n, i)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function m() {
  return (0, i.jsx)("div", {
    className: f.footer,
    children: (0, i.jsx)(r.Button, {
      variant: "active",
      size: "sm",
      text: h.intl.string(h.t.U76Ft2),
      fullWidth: true
    })
  })
}

function b(e) {
  switch (e.type) {
    case u.nc.GO_LIVE_VOICE: {
      let {
        game: t,
        voiceGuild: f
      } = e, {
        trackView: b,
        trackClick: y
      } = (0, d.R)(u.n0.GoLiveNudge, {
        notif_type: u.n0.GoLiveNudge
      });
      return {
        icon: n(847881),
        title: null,
        body: h.intl.formatToPlainString(h.t.z9znpa, {
          game: t.name,
          server: f.name
        }),
        hint: () => (0, i.jsx)(m, {}),
        renderFooter: () => (0, i.jsx)(m, {}),
        onNotificationShow: () => {
          b()
        },
        onNotificationClick: (e, t) => {
          y("unlock");
          let d = (0, c.getPID)();
          s.Z.updateNotificationStatus(t);
          let u = a.default.isOverlayOOPEnabledForPid(d);
          if (u ? s.Z.setInputLocked(false, d) : s.Z.setInstanceLocked(false), null == l.default.getCurrentUser()) return;
          let h = u ? {
            contextKey: r.u1M
          } : true;
          (0, r.ZDy)(async () => {
            let {
              default: e
            } = await Promise.all([n.e("46746"), n.e("95200")]).then(n.bind(n, 60594));
            return t => (0, i.jsx)(e, g(p({}, t), {
              sourcePID: d,
              selectSource: false,
              analyticsLocations: [o.Z.OVERLAY_NUDGE]
            }))
          }, h)
        },
        onDismissClick: () => {
          y("dismiss")
        }
      }
    }
    case u.nc.GO_LIVE_NON_VOICE: {
      let {
        game: t
      } = e, {
        trackView: l,
        trackClick: f
      } = (0, d.R)(u.n0.GoLiveNonVoiceNudge, {
        notif_type: u.n0.GoLiveNonVoiceNudge
      });
      return {
        icon: n(847881),
        title: null,
        body: h.intl.formatToPlainString(h.t["0SVWgF"], {
          game: t.name
        }),
        hint: () => (0, i.jsx)(m, {}),
        renderFooter: () => (0, i.jsx)(m, {}),
        onNotificationShow: () => {
          l()
        },
        onNotificationClick: (e, t) => {
          f("unlock");
          let l = (0, c.getPID)();
          s.Z.updateNotificationStatus(t);
          let d = a.default.isOverlayOOPEnabledForPid(l);
          d ? s.Z.setInputLocked(false, l) : s.Z.setInstanceLocked(false);
          let u = d ? {
            contextKey: r.u1M
          } : true;
          (0, r.ZDy)(async () => {
            let {
              default: e
            } = await Promise.all([n.e("46746"), n.e("95200")]).then(n.bind(n, 60594));
            return t => (0, i.jsx)(e, g(p({}, t), {
              sourcePID: l,
              selectSource: false,
              analyticsLocations: [o.Z.OVERLAY_NUDGE]
            }))
          }, u)
        },
        onDismissClick: () => {
          f("dismiss")
        }
      }
    }
  }
}