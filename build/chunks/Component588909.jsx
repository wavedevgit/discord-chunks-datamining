/** Chunk was on 50751 **/
/** chunk id: 588909, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => A
}), require("./539854.js"), require("./388685.js"), require("./290780.js");
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk793030 = require("./793030.js"),
  Chunk704215 = require("./704215.js"),
  Chunk952265 = require("./952265.js"),
  Chunk24124 = require("./24124.js"),
  Chunk13245 = require("./13245.js"),
  Chunk620662 = require("./620662.js"),
  Chunk835473 = require("./835473.js"),
  Chunk442550 = require("./442550.jsx"),
  Chunk266454 = require("./266454.js"),
  Chunk293273 = require("./293273.js"),
  Chunk32300 = require("./32300.js"),
  Chunk603618 = require("./603618.jsx"),
  Chunk371053 = require("./371053.jsx"),
  Chunk624864 = require("./624864.js"),
  Chunk610394 = require("./610394.js"),
  Chunk618373 = require("./618373.jsx"),
  Chunk620954 = require("./620954.js"),
  Chunk987650 = require("./987650.js"),
  Chunk981631 = require("./981631.js"),
  Chunk602091 = require("./602091.js"),
  Chunk701488 = require("./701488.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk199757 = require("./199757.js"),
  Chunk24303 = require("./24303.js");

function w(e) {
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

function T(e, t) {
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

function P(e) {
  let {
    game: t
  } = e, n = (0, f.q)(t.id);
  return null == n ? null : (0, i.jsx)(h.f, {
    src: n.getIconURL(j.Si.LARGE),
    size: 40
  })
}

function A(e, t) {
  if (O.Z.isNotificationDisabled(x.n0.WelcomeNudge)) return null;
  let {
    enabled: r
  } = (0, g.KK)("welcomeNotification"), {
    trackView: f,
    trackClick: h
  } = (0, S.Rg)(x.n0.WelcomeNudge, {
    notif_type: x.n0.WelcomeNudge,
    secondary_notif_types: t.map(e => x.nc[e.type])
  }), j = {}, A = [], k = [];
  for (let o of t) switch (o.type) {
    case x.nc.WELCOME: {
      let t = (null == e ? true : e.altId) != null ? m.Z.getApplicationActivity(e.altId) : (null == e ? true : e.id) != null ? m.Z.getApplicationActivity(e.id) : null;
      null != t && (0, d.Z)(t, I.xjy.JOIN) && (j.cancelText = _.intl.string(_.t["6F9ivu"]), j.onCancelClick = (e, n) => {
        h("unlock"), u.Z.updateNotificationStatus(n), u.Z.setInputLocked(false, v.Z.getTargetPID()), (0, c.h7)(t, false, I.IlC.POPOUT)
      }), r && k.push((0, i.jsx)("div", {
        className: N.keybindShortcutReminder,
        children: (0, E.Ae)((0, S.wq)(), _.t.mRbUco)
      }));
      break
    }
    case x.nc.GO_LIVE_VOICE:
    case x.nc.GO_LIVE_NON_VOICE: {
      let {
        oneClickGoLiveEnabled: e,
        useStreamCtaCopy: t
      } = (0, g.tU)("welcomeNotification"), l = _.intl.string(t ? _.t.pEuzii : _.t.U76Ft2), c = e ? e => {
        let t = () => {
            h("go-live-modal"), u.Z.setInputLocked(false, v.Z.getTargetPID())
          },
          n = () => {
            h("one-click-go-live")
          };
        (0, y.N)({
          pid: v.Z.getTargetPID(),
          analyticsLocation: I.Sbl.OVERLAY_NUDGE,
          allowOneClickGoLive: true,
          onBeforeShowModal: t,
          onOneClickGoLive: n,
          appContext: I.IlC.POPOUT
        })
      } : e => {
        h("go-live-modal");
        let t = v.Z.getTargetPID();
        u.Z.setInputLocked(false, t), (0, s.openModalLazy)(async () => {
          let {
            default: e
          } = await Promise.all([n.e("38697"), n.e("4093"), n.e("44183"), n.e("59416")]).then(n.bind(n, 60594));
          return n => (0, i.jsx)(e, T(w({}, n), {
            selectSource: false,
            sourcePID: t,
            guildId: o.type === x.nc.GO_LIVE_VOICE ? o.voiceGuild.id : true,
            selectGuild: o.type === x.nc.GO_LIVE_NON_VOICE,
            analyticsLocation: I.Sbl.OVERLAY_NUDGE
          }))
        }, {
          contextKey: C.u1
        })
      };
      r ? k.push((0, i.jsx)(a.zxk, {
        size: "sm",
        variant: "active",
        onClick: e => c(e),
        text: l
      })) : (j.confirmText = l, j.onConfirmClick = (e, t) => {
        u.Z.updateNotificationStatus(t), c(e)
      });
      break
    }
    case x.nc.CONTENT_INVENTORY: {
      j.onNotificationShow = () => {
        u.Z.track(I.rMx.OVERLAY_GAME_INVITE_NOTIFICATION_SHOWN, {
          user_ids: o.entries.map(e => e.author_id),
          entry_ids: o.entries.map(e => e.id)
        })
      };
      let t = () => (0, i.jsx)(b.lX, {
        gamingId: null == e ? true : e.id,
        maxUserShowCount: 5,
        variant: r ? "subtle" : "default",
        className: l()({
          [N.container]: true,
          [N.containerFaint]: r
        })
      });
      r ? A.push(t) : j.renderFooter = t
    }
  }
  k.length > 0 && A.unshift(() => (0, i.jsx)("div", {
    className: l()(N.container, N.containerFaint, N.keybindStreamContainer),
    children: k
  })), null == j.renderFooter && A.length > 0 && (j.renderFooter = (e, t, n) => (0, i.jsx)("div", {
    className: N.footerSection,
    children: A.filter(e => null != e).map(i => i(e, t, n))
  }));
  let D = (0, p.zu)(o.z.OVERLAY_OOP_WELCOME_NUX),
    R = r ? true : () => (0, E.QR)((0, S.Pb)(), _.t["z8/sgJ"], _.intl.string(_.t.jZkzVJ), {
      highlightAdminWarningIfElevated: true
    }),
    L = r ? (0, i.jsx)(a.X6q, {
      variant: "heading-md/semibold",
      color: "text-strong",
      children: _.intl.string(_.t.KWDIrh)
    }) : _.intl.string(_.t.KWDIrh),
    M = null != e ? (0, i.jsx)(P, {
      game: e
    }) : (0, i.jsx)("img", {
      src: n(328756),
      className: Z.icon,
      alt: ""
    });
  return T(w({
    className: r ? N.notificationContainer : true,
    icon: M,
    title: L,
    hint: R
  }, j), {
    onNotificationShow: e => {
      var t;
      f(), D || (0, p.Q3)(o.z.OVERLAY_OOP_WELCOME_NUX), null == (t = j.onNotificationShow) || t.call(j, e)
    },
    onNotificationClick: (e, t) => {
      var n;
      h("unlock"), u.Z.setInputLocked(false, v.Z.getTargetPID()), D || (0, p.Q3)(o.z.OVERLAY_OOP_WELCOME_NUX), null == (n = j.onNotificationClick) || n.call(j, e, t)
    },
    onDismissClick: (e, t) => {
      var n;
      h("dismiss"), D || (0, p.Q3)(o.z.OVERLAY_OOP_WELCOME_NUX), null == (n = j.onDismissClick) || n.call(j, e, t)
    }
  })
}