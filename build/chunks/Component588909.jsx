/** Chunk was on 50751 **/
/** chunk id: 588909, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => D
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
  Chunk100527 = require("./100527.js"),
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

function _(e) {
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
    src: n.getIconURL(C.Si.LARGE),
    size: 40
  })
}

function D(e, t) {
  if (v.Z.isNotificationDisabled(j.n0.WelcomeNudge)) return null;
  let {
    enabled: r
  } = (0, y.KK)("welcomeNotification"), {
    trackView: p,
    trackClick: f
  } = (0, x.Rg)(j.n0.WelcomeNudge, {
    notif_type: j.n0.WelcomeNudge,
    secondary_notif_types: t.map(e => j.nc[e.type])
  }), C = {}, D = [], R = [];
  for (let a of t) switch (a.type) {
    case j.nc.WELCOME: {
      let t = (null == e ? true : e.altId) != null ? g.Z.getApplicationActivity(e.altId) : (null == e ? true : e.id) != null ? g.Z.getApplicationActivity(e.id) : null;
      null != t && (0, d.Z)(t, I.xjy.JOIN) && (C.cancelText = N.intl.string(N.t["6F9ivu"]), C.onCancelClick = (e, n) => {
        f("unlock"), c.Z.updateNotificationStatus(n), c.Z.setInputLocked(false, b.Z.getTargetPID()), (0, u.h7)(t, false, I.IlC.POPOUT)
      }), r && R.push((0, i.jsx)("div", {
        className: T.keybindShortcutReminder,
        children: (0, S.Ae)((0, x.wq)(), N.t.mRbUco)
      }));
      break
    }
    case j.nc.GO_LIVE_VOICE:
    case j.nc.GO_LIVE_NON_VOICE: {
      let {
        oneClickGoLiveEnabled: e,
        useStreamCtaCopy: t
      } = (0, y.tU)("welcomeNotification"), l = N.intl.string(t ? N.t.pEuzii : N.t.U76Ft2), a = e ? e => {
        let t = () => {
            f("go-live-modal"), c.Z.setInputLocked(false, b.Z.getTargetPID())
          },
          n = () => {
            f("one-click-go-live")
          };
        (0, E.N)({
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
        c.Z.setInputLocked(false, t), (0, s.openModalLazy)(async () => {
          let {
            default: e
          } = await Promise.all([n.e("46746"), n.e("84064")]).then(n.bind(n, 60594));
          return n => (0, i.jsx)(e, P(_({}, n), {
            selectSource: false,
            sourcePID: t,
            analyticsLocations: [h.Z.OVERLAY_NUDGE]
          }))
        }, {
          contextKey: Z.u1
        })
      };
      r ? R.push((0, i.jsx)(o.zxk, {
        size: "sm",
        variant: "active",
        onClick: e => a(e),
        text: l
      })) : (C.confirmText = l, C.onConfirmClick = (e, t) => {
        c.Z.updateNotificationStatus(t), a(e)
      });
      break
    }
    case j.nc.CONTENT_INVENTORY: {
      C.onNotificationShow = () => {
        c.Z.track(I.rMx.OVERLAY_GAME_INVITE_NOTIFICATION_SHOWN, {
          user_ids: a.entries.map(e => e.author_id),
          entry_ids: a.entries.map(e => e.id)
        })
      };
      let t = () => (0, i.jsx)(O.lX, {
        gamingId: null == e ? true : e.id,
        maxUserShowCount: 5,
        variant: r ? "subtle" : "default",
        className: l()({
          [T.container]: true,
          [T.containerFaint]: r
        })
      });
      r ? D.push(t) : C.renderFooter = t
    }
  }
  R.length > 0 && D.unshift(() => (0, i.jsx)("div", {
    className: l()(T.container, T.containerFaint, T.keybindStreamContainer),
    children: R
  })), null == C.renderFooter && D.length > 0 && (C.renderFooter = (e, t, n) => (0, i.jsx)("div", {
    className: T.footerSection,
    children: D.filter(e => null != e).map(i => i(e, t, n))
  }));
  let k = (0, m.zu)(a.z.OVERLAY_OOP_WELCOME_NUX),
    L = r ? true : () => (0, S.QR)((0, x.Pb)(), N.t["z8/sgJ"], N.intl.string(N.t.jZkzVJ), {
      highlightAdminWarningIfElevated: true
    }),
    M = r ? (0, i.jsx)(o.X6q, {
      variant: "heading-md/semibold",
      color: "text-strong",
      children: N.intl.string(N.t.KWDIrh)
    }) : N.intl.string(N.t.KWDIrh),
    V = null != e ? (0, i.jsx)(A, {
      game: e
    }) : (0, i.jsx)("img", {
      src: n(328756),
      className: w.icon,
      alt: ""
    });
  return P(_({
    className: r ? T.notificationContainer : true,
    icon: V,
    title: M,
    hint: L
  }, C), {
    onNotificationShow: e => {
      var t;
      p(), k || (0, m.Q3)(a.z.OVERLAY_OOP_WELCOME_NUX), null == (t = C.onNotificationShow) || t.call(C, e)
    },
    onNotificationClick: (e, t) => {
      var n;
      f("unlock"), c.Z.setInputLocked(false, b.Z.getTargetPID()), k || (0, m.Q3)(a.z.OVERLAY_OOP_WELCOME_NUX), null == (n = C.onNotificationClick) || n.call(C, e, t)
    },
    onDismissClick: (e, t) => {
      var n;
      f("dismiss"), k || (0, m.Q3)(a.z.OVERLAY_OOP_WELCOME_NUX), null == (n = C.onDismissClick) || n.call(C, e, t)
    }
  })
}