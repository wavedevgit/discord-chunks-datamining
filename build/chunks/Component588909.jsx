/** Chunk was on 50751 **/
/** chunk id: 588909, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => T
}), require("./388685.js");
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk704215 = require("./704215.js"),
  Chunk952265 = require("./952265.js"),
  Chunk24124 = require("./24124.js"),
  Chunk13245 = require("./13245.js"),
  Chunk620662 = require("./620662.js"),
  Chunk835473 = require("./835473.js"),
  Chunk442550 = require("./442550.jsx"),
  Chunk266454 = require("./266454.js"),
  Chunk293273 = require("./293273.js"),
  Chunk145597 = require("./145597.js"),
  Chunk32300 = require("./32300.js"),
  Chunk603618 = require("./603618.jsx"),
  Chunk371053 = require("./371053.jsx"),
  Chunk624864 = require("./624864.js"),
  Chunk618373 = require("./618373.jsx"),
  Chunk620954 = require("./620954.js"),
  Chunk987650 = require("./987650.js"),
  Chunk981631 = require("./981631.js"),
  Chunk602091 = require("./602091.js"),
  Chunk701488 = require("./701488.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk995544 = require("./995544.js"),
  Chunk638218 = require("./638218.js");

function Z(e) {
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

function N(e, t) {
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

function w(e) {
  let {
    game: t
  } = e, n = (0, u.q)(t.id);
  return null == n ? null : (0, i.jsx)(c.f, {
    src: n.getIconURL(x.Si.LARGE),
    size: 40
  })
}

function T(e, t) {
  if (y.Z.isNotificationDisabled(v.n0.WelcomeNudge)) return null;
  let {
    trackView: u,
    trackClick: c
  } = (0, E.R)(v.n0.WelcomeNudge, {
    notif_type: v.n0.WelcomeNudge,
    secondary_notif_types: t.map(e => v.nc[e.type])
  }), x = {};
  for (let r of t) switch (r.type) {
    case v.nc.WELCOME: {
      let t = (null == e ? true : e.altId) != null ? p.Z.getApplicationActivity(e.altId) : (null == e ? true : e.id) != null ? p.Z.getApplicationActivity(e.id) : null;
      null != t && (0, s.Z)(t, S.xjy.JOIN) && (x.cancelText = j.intl.string(j.t["6F9ivu"]), x.onCancelClick = (e, n) => {
        c("unlock"), a.Z.updateNotificationStatus(n), a.Z.setInputLocked(false, (0, h.getPID)()), (0, o.h7)(t, false, S.IlC.POPOUT)
      });
      break
    }
    case v.nc.GO_LIVE_VOICE:
    case v.nc.GO_LIVE_NON_VOICE: {
      let {
        oneClickGoLiveEnabled: e,
        useStreamCtaCopy: t
      } = (0, f.tU)("welcomeNotification");
      x.confirmText = j.intl.string(t ? j.t.pEuzii : j.t.U76Ft2), x.onConfirmClick = e ? (e, t) => {
        a.Z.updateNotificationStatus(t);
        let n = () => {
            c("go-live-modal"), a.Z.setInputLocked(false, (0, h.getPID)())
          },
          i = () => {
            c("one-click-go-live")
          };
        (0, g.N)({
          pid: (0, h.getPID)(),
          analyticsLocation: S.Sbl.OVERLAY_NUDGE,
          allowOneClickGoLive: true,
          onBeforeShowModal: n,
          onOneClickGoLive: i,
          appContext: S.IlC.POPOUT
        })
      } : (e, t) => {
        c("go-live-modal"), a.Z.updateNotificationStatus(t), a.Z.setInputLocked(false, (0, h.getPID)()), (0, l.ZD)(async () => {
          let {
            default: e
          } = await Promise.all([n.e("4093"), n.e("33840"), n.e("65174")]).then(n.bind(n, 60594));
          return t => (0, i.jsx)(e, N(Z({}, t), {
            selectSource: false,
            sourcePID: (0, h.getPID)(),
            guildId: r.type === v.nc.GO_LIVE_VOICE ? r.voiceGuild.id : true,
            selectGuild: r.type === v.nc.GO_LIVE_NON_VOICE,
            analyticsLocation: S.Sbl.OVERLAY_NUDGE
          }))
        }, {
          contextKey: b.u1
        })
      };
      break
    }
    case v.nc.CONTENT_INVENTORY:
      (0, f.Rb)("welcomeNotification").allowActivityWidget && (x.renderFooter = () => (0, i.jsx)(m.lX, {
        gamingId: null == e ? true : e.id,
        maxUserShowCount: 5,
        className: C.container
      }), x.onNotificationShow = () => {
        a.Z.track(S.rMx.OVERLAY_GAME_INVITE_NOTIFICATION_SHOWN, {
          user_ids: r.entries.map(e => e.author_id),
          entry_ids: r.entries.map(e => e.id)
        })
      })
  }
  let T = (0, d.zu)(r.z.OVERLAY_OOP_WELCOME_NUX),
    _ = T ? j.intl.string(j.t.KWDIrh) : j.intl.string(j.t["prl+rY"]),
    P = T ? true : j.intl.string(j.t.R3CpPU),
    A = null != e ? (0, i.jsx)(w, {
      game: e
    }) : (0, i.jsx)("img", {
      src: n(328756),
      className: I.icon,
      alt: ""
    });
  return N(Z({
    icon: A,
    title: _,
    body: P,
    hint: () => (0, O.Q)((0, E.P)(), j.t["z8/sgJ"], j.intl.string(j.t.jZkzVJ), {
      highlightAdminWarningIfElevated: true
    }),
    confirmText: T ? true : j.intl.string(j.t.TxyTbk),
    onConfirmClick: T ? true : () => {
      c("unlock"), a.Z.setInputLocked(false, (0, h.getPID)()), T || (0, d.Q3)(r.z.OVERLAY_OOP_WELCOME_NUX)
    }
  }, x), {
    onNotificationShow: e => {
      var t;
      u(), T || (0, d.Q3)(r.z.OVERLAY_OOP_WELCOME_NUX), null == (t = x.onNotificationShow) || t.call(x, e)
    },
    onNotificationClick: (e, t) => {
      var n;
      c("unlock"), a.Z.setInputLocked(false, (0, h.getPID)()), T || (0, d.Q3)(r.z.OVERLAY_OOP_WELCOME_NUX), null == (n = x.onNotificationClick) || n.call(x, e, t)
    },
    onDismissClick: (e, t) => {
      var n;
      c("dismiss"), T || (0, d.Q3)(r.z.OVERLAY_OOP_WELCOME_NUX), null == (n = x.onDismissClick) || n.call(x, e, t)
    }
  })
}