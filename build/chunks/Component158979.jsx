/** Chunk was on 63141 **/
/** chunk id: 158979, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => O
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk13245 = require("./13245.js"),
  Chunk371651 = require("./371651.js"),
  Chunk594174 = require("./594174.js"),
  Chunk145597 = require("./145597.js"),
  Chunk312839 = require("./312839.js"),
  Chunk981631 = require("./981631.js"),
  Chunk987650 = require("./987650.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk926046 = require("./926046.js");

function g(e) {
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

function m(e, t) {
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

function y() {
  return (0, Chunk255367.jsx)("div", {
    className: Chunk926046.footer,
    children: (0, Chunk255367.jsx)(Chunk755721.zx, {
      color: Chunk755721.zx.Colors.GREEN,
      size: Chunk755721.zx.Sizes.SMALL,
      className: Chunk926046.ctaButton,
      children: Chunk388032.intl.string(Chunk388032.t.U76Ft7)
    })
  })
}

function O(e) {
  switch (e.type) {
    case h.nc.GO_LIVE_VOICE: {
      let {
        game: t,
        voiceGuild: r
      } = e, {
        trackView: f,
        trackClick: O
      } = (0, d.R)(h.n0.GoLiveNudge, {
        notif_type: h.n0.GoLiveNudge
      });
      return {
        icon: n(847881),
        title: null,
        body: p.intl.formatToPlainString(p.t.z9znpa, {
          game: t.name,
          server: r.name
        }),
        hint: () => (0, i.jsx)(y, {}),
        renderFooter: () => (0, i.jsx)(y, {}),
        onNotificationShow: () => {
          f()
        },
        onNotificationClick: (e, t) => {
          O("unlock"), l.Z.updateNotificationStatus(t);
          let d = s.default.isOverlayOOPEnabledForPid((0, c.getPID)());
          if (d ? l.Z.setInputLocked(false, (0, c.getPID)()) : l.Z.setInstanceLocked(false), null == a.default.getCurrentUser()) return;
          let h = d ? {
            contextKey: o.u1M
          } : true;
          (0, o.ZDy)(async () => {
            let {
              default: e
            } = await Promise.all([n.e("46746"), n.e("33641")]).then(n.bind(n, 60594));
            return t => (0, i.jsx)(e, m(g({}, t), {
              sourcePID: (0, c.getPID)(),
              selectSource: false,
              guildId: r.id,
              analyticsLocation: u.Sbl.OVERLAY_NUDGE
            }))
          }, h)
        },
        onDismissClick: () => {
          O("dismiss")
        }
      }
    }
    case h.nc.GO_LIVE_NON_VOICE: {
      let {
        game: t
      } = e, {
        trackView: r,
        trackClick: a
      } = (0, d.R)(h.n0.GoLiveNonVoiceNudge, {
        notif_type: h.n0.GoLiveNonVoiceNudge
      });
      return {
        icon: n(847881),
        title: null,
        body: p.intl.formatToPlainString(p.t["0SVWgI"], {
          game: t.name
        }),
        hint: () => (0, i.jsx)(y, {}),
        renderFooter: () => (0, i.jsx)(y, {}),
        onNotificationShow: () => {
          r()
        },
        onNotificationClick: (e, t) => {
          a("unlock"), l.Z.updateNotificationStatus(t);
          let r = s.default.isOverlayOOPEnabledForPid((0, c.getPID)());
          r ? l.Z.setInputLocked(false, (0, c.getPID)()) : l.Z.setInstanceLocked(false);
          let d = r ? {
            contextKey: o.u1M
          } : true;
          (0, o.ZDy)(async () => {
            let {
              default: e
            } = await Promise.all([n.e("46746"), n.e("33641")]).then(n.bind(n, 60594));
            return t => (0, i.jsx)(e, m(g({}, t), {
              sourcePID: (0, c.getPID)(),
              selectSource: false,
              selectGuild: true,
              analyticsLocation: u.Sbl.OVERLAY_NUDGE
            }))
          }, d)
        },
        onDismissClick: () => {
          a("dismiss")
        }
      }
    }
  }
}