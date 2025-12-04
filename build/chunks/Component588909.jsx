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
  Chunk968803 = require("./968803.js"),
  Chunk336501 = require("./336501.js");

function T(e) {
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

function _(e, t) {
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
  } = e, n = (0, h.q)(t.id);
  return null == n ? null : (0, i.jsx)(p.f, {
    src: n.getIconURL(C.Si.LARGE),
    size: 40
  })
}

function A(e, t) {
  if (E.Z.isNotificationDisabled(x.n0.WelcomeNudge)) return null;
  let {
    enabled: r
  } = (0, g.KK)("welcomeNotification"), {
    trackView: h,
    trackClick: p
  } = (0, S.Rg)(x.n0.WelcomeNudge, {
    notif_type: x.n0.WelcomeNudge,
    secondary_notif_types: t.map(e => x.nc[e.type])
  }), C = {}, A = [], D = [];
  for (let a of t) switch (a.type) {
    case x.nc.WELCOME: {
      let t = (null == e ? true : e.altId) != null ? m.Z.getApplicationActivity(e.altId) : (null == e ? true : e.id) != null ? m.Z.getApplicationActivity(e.id) : null;
      null != t && (0, d.Z)(t, j.xjy.JOIN) && (C.cancelText = Z.intl.string(Z.t["6F9ivu"]), C.onCancelClick = (e, n) => {
        p("unlock"), c.Z.updateNotificationStatus(n), c.Z.setInputLocked(false, v.Z.getTargetPID()), (0, u.h7)(t, false, j.IlC.POPOUT)
      }), r && D.push((0, i.jsx)("div", {
        className: w.keybindShortcutReminder,
        children: (0, b.Ae)((0, S.wq)(), Z.t.mRbUco)
      }));
      break
    }
    case x.nc.GO_LIVE_VOICE:
    case x.nc.GO_LIVE_NON_VOICE: {
      let {
        oneClickGoLiveEnabled: e,
        useStreamCtaCopy: t
      } = (0, g.tU)("welcomeNotification"), l = Z.intl.string(t ? Z.t.pEuzii : Z.t.U76Ft2), u = e ? e => {
        let t = () => {
            p("go-live-modal"), c.Z.setInputLocked(false, v.Z.getTargetPID())
          },
          n = () => {
            p("one-click-go-live")
          };
        (0, y.N)({
          pid: v.Z.getTargetPID(),
          analyticsLocation: j.Sbl.OVERLAY_NUDGE,
          allowOneClickGoLive: true,
          onBeforeShowModal: t,
          onOneClickGoLive: n,
          appContext: j.IlC.POPOUT
        })
      } : e => {
        p("go-live-modal");
        let t = v.Z.getTargetPID();
        c.Z.setInputLocked(false, t), (0, s.openModalLazy)(async () => {
          let {
            default: e
          } = await Promise.all([n.e("38697"), n.e("4093"), n.e("47863"), n.e("59416")]).then(n.bind(n, 60594));
          return n => (0, i.jsx)(e, _(T({}, n), {
            selectSource: false,
            sourcePID: t,
            guildId: a.type === x.nc.GO_LIVE_VOICE ? a.voiceGuild.id : true,
            selectGuild: a.type === x.nc.GO_LIVE_NON_VOICE,
            analyticsLocation: j.Sbl.OVERLAY_NUDGE
          }))
        }, {
          contextKey: I.u1
        })
      };
      r ? D.push((0, i.jsx)(o.zxk, {
        size: "sm",
        variant: "active",
        onClick: e => u(e),
        text: l
      })) : (C.confirmText = l, C.onConfirmClick = (e, t) => {
        c.Z.updateNotificationStatus(t), u(e)
      });
      break
    }
    case x.nc.CONTENT_INVENTORY: {
      C.onNotificationShow = () => {
        c.Z.track(j.rMx.OVERLAY_GAME_INVITE_NOTIFICATION_SHOWN, {
          user_ids: a.entries.map(e => e.author_id),
          entry_ids: a.entries.map(e => e.id)
        })
      };
      let t = () => (0, i.jsx)(O.lX, {
        gamingId: null == e ? true : e.id,
        maxUserShowCount: 5,
        variant: r ? "subtle" : "default",
        className: l()({
          [w.container]: true,
          [w.containerFaint]: r
        })
      });
      r ? A.push(t) : C.renderFooter = t
    }
  }
  D.length > 0 && A.unshift(() => (0, i.jsx)("div", {
    className: l()(w.container, w.containerFaint, w.keybindStreamContainer),
    children: D
  })), null == C.renderFooter && A.length > 0 && (C.renderFooter = (e, t, n) => (0, i.jsx)("div", {
    className: w.footerSection,
    children: A.filter(e => null != e).map(i => i(e, t, n))
  }));
  let R = (0, f.zu)(a.z.OVERLAY_OOP_WELCOME_NUX),
    k = r ? true : () => (0, b.QR)((0, S.Pb)(), Z.t["z8/sgJ"], Z.intl.string(Z.t.jZkzVJ), {
      highlightAdminWarningIfElevated: true
    }),
    L = r ? (0, i.jsx)(o.X6q, {
      variant: "heading-md/semibold",
      color: "text-strong",
      children: Z.intl.string(Z.t.KWDIrh)
    }) : Z.intl.string(Z.t.KWDIrh),
    M = null != e ? (0, i.jsx)(P, {
      game: e
    }) : (0, i.jsx)("img", {
      src: n(328756),
      className: N.icon,
      alt: ""
    });
  return _(T({
    className: r ? w.notificationContainer : true,
    icon: M,
    title: L,
    hint: k
  }, C), {
    onNotificationShow: e => {
      var t;
      h(), R || (0, f.Q3)(a.z.OVERLAY_OOP_WELCOME_NUX), null == (t = C.onNotificationShow) || t.call(C, e)
    },
    onNotificationClick: (e, t) => {
      var n;
      p("unlock"), c.Z.setInputLocked(false, v.Z.getTargetPID()), R || (0, f.Q3)(a.z.OVERLAY_OOP_WELCOME_NUX), null == (n = C.onNotificationClick) || n.call(C, e, t)
    },
    onDismissClick: (e, t) => {
      var n;
      p("dismiss"), R || (0, f.Q3)(a.z.OVERLAY_OOP_WELCOME_NUX), null == (n = C.onDismissClick) || n.call(C, e, t)
    }
  })
}