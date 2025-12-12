/** Chunk was on 63141 **/
/** chunk id: 158979, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => m
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk481060 = require("./481060.js"),
  Chunk13245 = require("./13245.js"),
  Chunk371651 = require("./371651.js"),
  Chunk594174 = require("./594174.js"),
  Chunk145597 = require("./145597.js"),
  Chunk312839 = require("./312839.js"),
  Chunk981631 = require("./981631.js"),
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

function b() {
  return (0, Chunk54381.jsx)("div", {
    className: Chunk433461.footer,
    children: (0, Chunk54381.jsx)(Chunk481060.Button, {
      variant: "active",
      size: "sm",
      text: Chunk388032.intl.string(Chunk388032.t.U76Ft2),
      fullWidth: true
    })
  })
}

function m(e) {
  switch (e.type) {
    case u.nc.GO_LIVE_VOICE: {
      let {
        game: t,
        voiceGuild: h
      } = e, {
        trackView: m,
        trackClick: y
      } = (0, c.R)(u.n0.GoLiveNudge, {
        notif_type: u.n0.GoLiveNudge
      });
      return {
        icon: n(847881),
        title: null,
        body: f.intl.formatToPlainString(f.t.z9znpa, {
          game: t.name,
          server: h.name
        }),
        hint: () => (0, i.jsx)(b, {}),
        renderFooter: () => (0, i.jsx)(b, {}),
        onNotificationShow: () => {
          m()
        },
        onNotificationClick: (e, t) => {
          y("unlock");
          let c = (0, l.getPID)();
          a.Z.updateNotificationStatus(t);
          let u = s.default.isOverlayOOPEnabledForPid(c);
          if (u ? a.Z.setInputLocked(false, c) : a.Z.setInstanceLocked(false), null == o.default.getCurrentUser()) return;
          let f = u ? {
            contextKey: r.u1M
          } : true;
          (0, r.ZDy)(async () => {
            let {
              default: e
            } = await Promise.all([n.e("4093"), n.e("44183"), n.e("50442")]).then(n.bind(n, 60594));
            return t => (0, i.jsx)(e, g(p({}, t), {
              sourcePID: c,
              selectSource: false,
              guildId: h.id,
              analyticsLocation: d.Sbl.OVERLAY_NUDGE
            }))
          }, f)
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
        trackView: o,
        trackClick: h
      } = (0, c.R)(u.n0.GoLiveNonVoiceNudge, {
        notif_type: u.n0.GoLiveNonVoiceNudge
      });
      return {
        icon: n(847881),
        title: null,
        body: f.intl.formatToPlainString(f.t["0SVWgF"], {
          game: t.name
        }),
        hint: () => (0, i.jsx)(b, {}),
        renderFooter: () => (0, i.jsx)(b, {}),
        onNotificationShow: () => {
          o()
        },
        onNotificationClick: (e, t) => {
          h("unlock");
          let o = (0, l.getPID)();
          a.Z.updateNotificationStatus(t);
          let c = s.default.isOverlayOOPEnabledForPid(o);
          c ? a.Z.setInputLocked(false, o) : a.Z.setInstanceLocked(false);
          let u = c ? {
            contextKey: r.u1M
          } : true;
          (0, r.ZDy)(async () => {
            let {
              default: e
            } = await Promise.all([n.e("4093"), n.e("44183"), n.e("50442")]).then(n.bind(n, 60594));
            return t => (0, i.jsx)(e, g(p({}, t), {
              sourcePID: o,
              selectSource: false,
              selectGuild: true,
              analyticsLocation: d.Sbl.OVERLAY_NUDGE
            }))
          }, u)
        },
        onDismissClick: () => {
          h("dismiss")
        }
      }
    }
  }
}