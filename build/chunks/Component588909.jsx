/** Chunk was on 46290 **/
/** chunk id: 588909, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => w
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
  Chunk618373 = require("./618373.jsx"),
  Chunk620954 = require("./620954.js"),
  Chunk987650 = require("./987650.js"),
  Chunk981631 = require("./981631.js"),
  Chunk602091 = require("./602091.js"),
  Chunk701488 = require("./701488.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk968803 = require("./968803.js"),
  Chunk336501 = require("./336501.js");

function j(e) {
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

function C(e, t) {
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

function N(e) {
  let {
    game: t
  } = e, n = (0, c.q)(t.id);
  return null == n ? null : (0, i.jsx)(u.f, {
    src: n.getIconURL(_.Si.LARGE),
    size: 40
  })
}

function w(e, t) {
  let {
    trackView: c,
    trackClick: u
  } = (0, O.R)(b.n0.WelcomeNudge, {
    notif_type: b.n0.WelcomeNudge,
    secondary_notif_types: t.map(e => b.nc[e.type])
  }), _ = {};
  for (let r of t) switch (r.type) {
    case b.nc.WELCOME: {
      let t = (null == e ? true : e.altId) != null ? p.Z.getApplicationActivity(e.altId) : (null == e ? true : e.id) != null ? p.Z.getApplicationActivity(e.id) : null;
      null != t && (0, s.Z)(t, v.xjy.JOIN) && (_.cancelText = S.intl.string(S.t["6F9ivr"]), _.onCancelClick = (e, n) => {
        u("unlock"), a.Z.updateNotificationStatus(n), a.Z.setInputLocked(false, (0, f.getPID)()), (0, l.h7)(t, false, v.IlC.POPOUT)
      });
      break
    }
    case b.nc.GO_LIVE_VOICE:
    case b.nc.GO_LIVE_NON_VOICE: {
      let {
        oneClickGoLiveEnabled: e,
        useStreamCtaCopy: t
      } = (0, h.tU)("welcomeNotification");
      _.confirmText = S.intl.string(t ? S.t.pEuzio : S.t.U76Ft7), _.onConfirmClick = e ? (e, t) => {
        a.Z.updateNotificationStatus(t);
        let n = () => {
            u("unlock"), a.Z.setInputLocked(false, (0, f.getPID)())
          },
          i = () => {
            u("confirm")
          };
        (0, g.N)({
          pid: (0, f.getPID)(),
          analyticsLocation: v.Sbl.OVERLAY_NUDGE,
          allowOneClickGoLive: true,
          onBeforeShowModal: n,
          onOneClickGoLive: i,
          appContext: v.IlC.POPOUT
        })
      } : (e, t) => {
        u("unlock"), a.Z.updateNotificationStatus(t), a.Z.setInputLocked(false, (0, f.getPID)()), (0, o.ZD)(async () => {
          let {
            default: e
          } = await Promise.all([n.e("38697"), n.e("46746"), n.e("79839")]).then(n.bind(n, 60594));
          return t => (0, i.jsx)(e, C(j({}, t), {
            selectSource: false,
            sourcePID: (0, f.getPID)(),
            guildId: r.type === b.nc.GO_LIVE_VOICE ? r.voiceGuild.id : true,
            selectGuild: r.type === b.nc.GO_LIVE_NON_VOICE,
            analyticsLocation: v.Sbl.OVERLAY_NUDGE
          }))
        }, {
          contextKey: E.u1
        })
      };
      break
    }
    case b.nc.CONTENT_INVENTORY:
      (0, h.Rb)("welcomeNotification").allowActivityWidget && (_.renderFooter = () => (0, i.jsx)(m.lX, {
        gamingId: null == e ? true : e.id,
        maxUserShowCount: 5,
        className: x.container
      }), _.onNotificationShow = () => {
        a.Z.track(v.rMx.OVERLAY_GAME_INVITE_NOTIFICATION_SHOWN, {
          user_ids: r.entries.map(e => e.author_id),
          entry_ids: r.entries.map(e => e.id)
        })
      })
  }
  let w = (0, d.zu)(r.z.OVERLAY_OOP_WELCOME_NUX),
    Z = w ? S.intl.string(S.t.KWDIrq) : S.intl.string(S.t["prl+ra"]),
    P = w ? true : S.intl.string(S.t.R3CpPT),
    T = null != e ? (0, i.jsx)(N, {
      game: e
    }) : (0, i.jsx)("img", {
      src: n(328756),
      className: I.icon,
      alt: ""
    });
  return C(j({
    icon: T,
    title: Z,
    body: P,
    hint: () => (0, y.Q)((0, O.P)(), S.t["z8/sgI"], S.intl.string(S.t.jZkzVF), true),
    confirmText: w ? true : S.intl.string(S.t.TxyTbm),
    onConfirmClick: w ? true : () => {
      u("unlock"), a.Z.setInputLocked(false, (0, f.getPID)()), w || (0, d.Q3)(r.z.OVERLAY_OOP_WELCOME_NUX)
    }
  }, _), {
    onNotificationShow: e => {
      var t;
      c(), w || (0, d.Q3)(r.z.OVERLAY_OOP_WELCOME_NUX), null == (t = _.onNotificationShow) || t.call(_, e)
    },
    onNotificationClick: (e, t) => {
      var n;
      u("unlock"), a.Z.setInputLocked(false, (0, f.getPID)()), w || (0, d.Q3)(r.z.OVERLAY_OOP_WELCOME_NUX), null == (n = _.onNotificationClick) || n.call(_, e, t)
    },
    onDismissClick: (e, t) => {
      var n;
      u("dismiss"), w || (0, d.Q3)(r.z.OVERLAY_OOP_WELCOME_NUX), null == (n = _.onDismissClick) || n.call(_, e, t)
    }
  })
}