/** Chunk was on 50751 **/
/** chunk id: 588909, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => D
}), require("./539854.js"), require("./388685.js"), require("./290780.js");
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk793030 = require("./793030.js"),
  Chunk704215 = require("./704215.js"),
  Chunk952265 = require("./952265.js"),
  Chunk755721 = require("./755721.js"),
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

function P(e, t) {
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

function A(e) {
  let {
    game: t
  } = e, n = (0, p.q)(t.id);
  return null == n ? null : (0, i.jsx)(f.f, {
    src: n.getIconURL(j.Si.LARGE),
    size: 40
  })
}

function D(e, t) {
  if (E.Z.isNotificationDisabled(x.n0.WelcomeNudge)) return null;
  let {
    enabled: r
  } = (0, y.KK)("welcomeNotification"), {
    trackView: p,
    trackClick: f
  } = (0, S.Rg)(x.n0.WelcomeNudge, {
    notif_type: x.n0.WelcomeNudge,
    secondary_notif_types: t.map(e => x.nc[e.type])
  }), j = {}, D = [], k = [];
  for (let o of t) switch (o.type) {
    case x.nc.WELCOME: {
      let t = (null == e ? true : e.altId) != null ? g.Z.getApplicationActivity(e.altId) : (null == e ? true : e.id) != null ? g.Z.getApplicationActivity(e.id) : null;
      null != t && (0, h.Z)(t, I.xjy.JOIN) && (j.cancelText = N.intl.string(N.t["6F9ivu"]), j.onCancelClick = (e, n) => {
        f("unlock"), d.Z.updateNotificationStatus(n), d.Z.setInputLocked(false, b.Z.getTargetPID()), (0, u.h7)(t, false, I.IlC.POPOUT)
      }), r && k.push((0, i.jsx)("div", {
        className: w.keybindShortcutReminder,
        children: (0, _.Ae)((0, S.wq)(), N.t.mRbUco)
      }));
      break
    }
    case x.nc.GO_LIVE_VOICE:
    case x.nc.GO_LIVE_NON_VOICE: {
      let {
        oneClickGoLiveEnabled: e,
        useStreamCtaCopy: t
      } = (0, y.tU)("welcomeNotification"), l = N.intl.string(t ? N.t.pEuzii : N.t.U76Ft2), a = e ? e => {
        let t = () => {
            f("go-live-modal"), d.Z.setInputLocked(false, b.Z.getTargetPID())
          },
          n = () => {
            f("one-click-go-live")
          };
        (0, v.N)({
          pid: b.Z.getTargetPID(),
          analyticsLocation: I.Sbl.OVERLAY_NUDGE,
          allowOneClickGoLive: true,
          onBeforeShowModal: t,
          onOneClickGoLive: n,
          appContext: I.IlC.POPOUT
        })
      } : e => {
        f("go-live-modal");
        let t = b.Z.getTargetPID();
        d.Z.setInputLocked(false, t), (0, s.ZD)(async () => {
          let {
            default: e
          } = await Promise.all([n.e("38697"), n.e("4093"), n.e("47863"), n.e("39173")]).then(n.bind(n, 60594));
          return n => (0, i.jsx)(e, P(T({}, n), {
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
      r ? k.push((0, i.jsx)(c.zx, {
        className: w.button,
        size: c.zx.Sizes.SMALL,
        color: c.zx.Colors.GREEN,
        onClick: e => a(e),
        children: l
      })) : (j.confirmText = l, j.onConfirmClick = (e, t) => {
        d.Z.updateNotificationStatus(t), a(e)
      });
      break
    }
    case x.nc.CONTENT_INVENTORY:
      if ((0, y.Rb)("welcomeNotification").allowActivityWidget) {
        j.onNotificationShow = () => {
          d.Z.track(I.rMx.OVERLAY_GAME_INVITE_NOTIFICATION_SHOWN, {
            user_ids: o.entries.map(e => e.author_id),
            entry_ids: o.entries.map(e => e.id)
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
        r ? D.push(t) : j.renderFooter = t
      }
  }
  k.length > 0 && D.unshift(() => (0, i.jsx)("div", {
    className: l()(w.container, w.containerFaint, w.keybindStreamContainer),
    children: k
  })), null == j.renderFooter && D.length > 0 && (j.renderFooter = (e, t, n) => (0, i.jsx)("div", {
    className: w.footerSection,
    children: D.filter(e => null != e).map(i => i(e, t, n))
  }));
  let R = (0, m.zu)(a.z.OVERLAY_OOP_WELCOME_NUX),
    L = r ? true : () => (0, _.QR)((0, S.Pb)(), N.t["z8/sgJ"], N.intl.string(N.t.jZkzVJ), {
      highlightAdminWarningIfElevated: true
    }),
    M = r ? (0, i.jsx)(o.X6q, {
      variant: "heading-md/semibold",
      color: "text-primary",
      children: N.intl.string(N.t.KWDIrh)
    }) : N.intl.string(N.t.KWDIrh),
    z = null != e ? (0, i.jsx)(A, {
      game: e
    }) : (0, i.jsx)("img", {
      src: n(328756),
      className: Z.icon,
      alt: ""
    });
  return P(T({
    className: r ? w.notificationContainer : true,
    icon: z,
    title: M,
    hint: L
  }, j), {
    onNotificationShow: e => {
      var t;
      p(), R || (0, m.Q3)(a.z.OVERLAY_OOP_WELCOME_NUX), null == (t = j.onNotificationShow) || t.call(j, e)
    },
    onNotificationClick: (e, t) => {
      var n;
      f("unlock"), d.Z.setInputLocked(false, b.Z.getTargetPID()), R || (0, m.Q3)(a.z.OVERLAY_OOP_WELCOME_NUX), null == (n = j.onNotificationClick) || n.call(j, e, t)
    },
    onDismissClick: (e, t) => {
      var n;
      f("dismiss"), R || (0, m.Q3)(a.z.OVERLAY_OOP_WELCOME_NUX), null == (n = j.onDismissClick) || n.call(j, e, t)
    }
  })
}