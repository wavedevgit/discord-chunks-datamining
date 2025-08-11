/** Chunk was on 89298 **/
/** chunk id: 588909, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => N
}), require("./388685.js");
var Chunk255367 = require("./255367.js");
require("./73800.js");
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
  Chunk618373 = require("./618373.jsx"),
  Chunk620954 = require("./620954.js"),
  Chunk987650 = require("./987650.js"),
  Chunk981631 = require("./981631.js"),
  Chunk602091 = require("./602091.js"),
  Chunk701488 = require("./701488.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk560226 = require("./560226.js"),
  Chunk19782 = require("./19782.js");

function I(e) {
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

function j(e, t) {
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

function C(e) {
  let {
    game: t
  } = e, n = (0, c.q)(t.id);
  return null == n ? null : (0, i.jsx)(u.f, {
    src: n.getIconURL(E.Si.LARGE),
    size: 40
  })
}

function N(e, t) {
  let {
    trackView: c,
    trackClick: u
  } = (0, y.R)(O.n0.WelcomeNudge, {
    notif_type: O.n0.WelcomeNudge,
    secondary_notif_types: t.map(e => O.nc[e.type])
  }), E = {};
  for (let r of t) switch (r.type) {
    case O.nc.WELCOME: {
      let t = (null == e ? true : e.altId) != null ? p.Z.getApplicationActivity(e.altId) : (null == e ? true : e.id) != null ? p.Z.getApplicationActivity(e.id) : null;
      null != t && (0, s.Z)(t, b.xjy.JOIN) && (E.cancelText = _.intl.string(_.t["6F9ivr"]), E.onCancelClick = (e, n) => {
        u("unlock"), a.Z.updateNotificationStatus(n), a.Z.setInputLocked(false, (0, f.getPID)()), (0, l.h7)(t, false, b.IlC.POPOUT)
      });
      break
    }
    case O.nc.GO_LIVE_VOICE:
    case O.nc.GO_LIVE_NON_VOICE:
      E.confirmText = _.intl.string(_.t.U76Ft7), E.onConfirmClick = (e, t) => {
        u("unlock"), a.Z.updateNotificationStatus(t), a.Z.setInputLocked(false, (0, f.getPID)()), (0, o.ZD)(async () => {
          let {
            default: e
          } = await Promise.all([n.e("46746"), n.e("74304")]).then(n.bind(n, 60594));
          return t => (0, i.jsx)(e, j(I({}, t), {
            selectSource: false,
            sourcePID: (0, f.getPID)(),
            guildId: r.type === O.nc.GO_LIVE_VOICE ? r.voiceGuild.id : true,
            selectGuild: r.type === O.nc.GO_LIVE_NON_VOICE,
            analyticsLocation: b.Sbl.OVERLAY_NUDGE
          }))
        }, {
          contextKey: v.u1
        })
      };
      break;
    case O.nc.CONTENT_INVENTORY:
      (0, h.Rb)("welcomeNotification").allowActivityWidget && (E.renderFooter = () => (0, i.jsx)(m.lX, {
        gamingId: null == e ? true : e.id,
        maxUserShowCount: 5,
        className: S.container
      }), E.onNotificationShow = () => {
        a.Z.track(b.rMx.OVERLAY_GAME_INVITE_NOTIFICATION_SHOWN, {
          user_ids: r.entries.map(e => e.author_id),
          entry_ids: r.entries.map(e => e.id)
        })
      })
  }
  let N = (0, d.zu)(r.z.OVERLAY_OOP_WELCOME_NUX),
    w = N ? _.intl.string(_.t.KWDIrq) : _.intl.string(_.t["prl+ra"]),
    Z = N ? true : _.intl.string(_.t.R3CpPT),
    P = null != e ? (0, i.jsx)(C, {
      game: e
    }) : (0, i.jsx)("img", {
      src: n(328756),
      className: x.icon,
      alt: ""
    });
  return j(I({
    icon: P,
    title: w,
    body: Z,
    hint: () => (0, g.Q)((0, y.P)(), _.t["z8/sgI"], _.intl.string(_.t.jZkzVF), true),
    confirmText: N ? true : _.intl.string(_.t.TxyTbm),
    onConfirmClick: N ? true : () => {
      u("unlock"), a.Z.setInputLocked(false, (0, f.getPID)()), N || (0, d.Q3)(r.z.OVERLAY_OOP_WELCOME_NUX)
    }
  }, E), {
    onNotificationShow: e => {
      var t;
      c(), N || (0, d.Q3)(r.z.OVERLAY_OOP_WELCOME_NUX), null == (t = E.onNotificationShow) || t.call(E, e)
    },
    onNotificationClick: (e, t) => {
      var n;
      u("unlock"), a.Z.setInputLocked(false, (0, f.getPID)()), N || (0, d.Q3)(r.z.OVERLAY_OOP_WELCOME_NUX), null == (n = E.onNotificationClick) || n.call(E, e, t)
    },
    onDismissClick: (e, t) => {
      var n;
      u("dismiss"), N || (0, d.Q3)(r.z.OVERLAY_OOP_WELCOME_NUX), null == (n = E.onDismissClick) || n.call(E, e, t)
    }
  })
}