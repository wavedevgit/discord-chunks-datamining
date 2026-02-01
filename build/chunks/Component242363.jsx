/** Chunk was on 84018 **/
/** chunk id: 242363, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => A
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk397927 = require("./397927.js"),
  Chunk684013 = require("./684013.js"),
  Chunk793574 = require("./793574.js"),
  Chunk833551 = require("./833551.js"),
  Chunk287809 = require("./287809.js"),
  Chunk9302 = require("./9302.js"),
  Chunk684748 = require("./684748.js"),
  Chunk672396 = require("./672396.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk821700 = require("./821700.js");

function f(e) {
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

function y() {
  return (0, i.jsx)("div", {
    className: p.q,
    children: (0, i.jsx)(r.Button, {
      variant: "active",
      size: "sm",
      text: h.intl.string(h.t.U76Ft2),
      fullWidth: true
    })
  })
}

function A(e) {
  switch (e.type) {
    case u.Jr.GO_LIVE_VOICE: {
      let {
        game: t,
        voiceGuild: p
      } = e, {
        trackView: A,
        trackClick: m
      } = (0, d.Y)(u.KS.GoLiveNudge, {
        notif_type: u.KS.GoLiveNudge
      });
      return {
        icon: n(334260),
        title: null,
        body: h.intl.formatToPlainString(h.t.z9znpa, {
          game: t.name,
          server: p.name
        }),
        hint: () => (0, i.jsx)(y, {}),
        renderFooter: () => (0, i.jsx)(y, {}),
        onNotificationShow: () => {
          A()
        },
        onNotificationClick: (e, t) => {
          m("unlock");
          let d = (0, c.getPID)();
          s.A.updateNotificationStatus(t);
          let u = o.default.isOverlayOOPEnabledForPid(d);
          if (u ? s.A.setInputLocked(false, d) : s.A.setInstanceLocked(false), null == a.default.getCurrentUser()) return;
          let h = u ? {
            contextKey: r.KX8
          } : true;
          (0, r.mMO)(async () => {
            let {
              default: e
            } = await Promise.all([n.e("96811"), n.e("13337")]).then(n.bind(n, 648230));
            return t => (0, i.jsx)(e, g(f({}, t), {
              sourcePID: d,
              selectSource: false,
              analyticsLocations: [l.A.OVERLAY_NUDGE]
            }))
          }, h)
        },
        onDismissClick: () => {
          m("dismiss")
        }
      }
    }
    case u.Jr.GO_LIVE_NON_VOICE: {
      let {
        game: t
      } = e, {
        trackView: a,
        trackClick: p
      } = (0, d.Y)(u.KS.GoLiveNonVoiceNudge, {
        notif_type: u.KS.GoLiveNonVoiceNudge
      });
      return {
        icon: n(334260),
        title: null,
        body: h.intl.formatToPlainString(h.t["0SVWgF"], {
          game: t.name
        }),
        hint: () => (0, i.jsx)(y, {}),
        renderFooter: () => (0, i.jsx)(y, {}),
        onNotificationShow: () => {
          a()
        },
        onNotificationClick: (e, t) => {
          p("unlock");
          let a = (0, c.getPID)();
          s.A.updateNotificationStatus(t);
          let d = o.default.isOverlayOOPEnabledForPid(a);
          d ? s.A.setInputLocked(false, a) : s.A.setInstanceLocked(false);
          let u = d ? {
            contextKey: r.KX8
          } : true;
          (0, r.mMO)(async () => {
            let {
              default: e
            } = await Promise.all([n.e("96811"), n.e("13337")]).then(n.bind(n, 648230));
            return t => (0, i.jsx)(e, g(f({}, t), {
              sourcePID: a,
              selectSource: false,
              analyticsLocations: [l.A.OVERLAY_NUDGE]
            }))
          }, u)
        },
        onDismissClick: () => {
          p("dismiss")
        }
      }
    }
  }
}