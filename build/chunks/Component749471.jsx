/** Chunk was on 71447 **/
/** chunk id: 749471, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => R
}), require("./321073.js"), require("./896048.js"), require("./667532.js");
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  l = require.n(Chunk503698),
  Chunk158954 = require("./158954.js"),
  Chunk554146 = require("./554146.js"),
  Chunk192308 = require("./192308.js"),
  Chunk298990 = require("./298990.js"),
  Chunk684013 = require("./684013.js"),
  Chunk833349 = require("./833349.js"),
  Chunk793574 = require("./793574.js"),
  Chunk429913 = require("./429913.js"),
  Chunk263577 = require("./263577.jsx"),
  Chunk826673 = require("./826673.js"),
  Chunk375492 = require("./375492.js"),
  Chunk589051 = require("./589051.js"),
  Chunk547463 = require("./547463.jsx"),
  Chunk823901 = require("./823901.jsx"),
  Chunk592598 = require("./592598.js"),
  Chunk395011 = require("./395011.js"),
  Chunk119191 = require("./119191.jsx"),
  Chunk581730 = require("./581730.js"),
  Chunk672396 = require("./672396.js"),
  Chunk652215 = require("./652215.js"),
  Chunk231723 = require("./231723.js"),
  Chunk360469 = require("./360469.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk879716 = require("./879716.js"),
  Chunk573823 = require("./573823.js");

function N(e) {
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

function D(e) {
  let {
    game: t
  } = e, n = (0, p.h)(t.id);
  return null == n ? null : (0, i.jsx)(f.V, {
    src: n.getIconURL(j.iu.LARGE),
    size: 40
  })
}

function R(e, t) {
  if (v.A.isNotificationDisabled(S.KS.WelcomeNudge)) return null;
  let {
    enabled: r
  } = (0, A.o0)("welcomeNotification"), {
    trackView: p,
    trackClick: f
  } = (0, _.Y9)(S.KS.WelcomeNudge, {
    notif_type: S.KS.WelcomeNudge,
    secondary_notif_types: t.map(e => S.Jr[e.type])
  }), j = {}, R = [], L = [];
  for (let o of t) switch (o.type) {
    case S.Jr.WELCOME: {
      let t = (null == e ? true : e.altId) != null ? m.A.getApplicationActivity(e.altId) : (null == e ? true : e.id) != null ? m.A.getApplicationActivity(e.id) : null;
      null != t && (0, d.A)(t, x.jUm.JOIN) && (j.cancelText = C.intl.string(C.t["6F9ivu"]), j.onCancelClick = (e, n) => {
        f("unlock"), c.A.updateNotificationStatus(n), c.A.setInputLocked(false, b.A.getTargetPID()), (0, u.qf)(t, false, x.BRT.POPOUT)
      }), r && L.push((0, i.jsx)("div", {
        className: w.N7,
        children: (0, E.bi)((0, _.hM)(), C.t.mRbUco)
      }));
      break
    }
    case S.Jr.GO_LIVE_VOICE:
    case S.Jr.GO_LIVE_NON_VOICE: {
      let {
        oneClickGoLiveEnabled: e,
        useStreamCtaCopy: t
      } = (0, A.m5)("welcomeNotification"), l = C.intl.string(t ? C.t.pEuzii : C.t.U76Ft2), o = e ? e => {
        let t = () => {
            f("go-live-modal"), c.A.setInputLocked(false, b.A.getTargetPID())
          },
          n = () => {
            f("one-click-go-live")
          };
        (0, O.H)({
          pid: b.A.getTargetPID(),
          analyticsLocation: x.ThZ.OVERLAY_NUDGE,
          allowOneClickGoLive: true,
          onBeforeShowModal: t,
          onOneClickGoLive: n,
          appContext: x.BRT.POPOUT
        })
      } : e => {
        f("go-live-modal");
        let t = b.A.getTargetPID();
        c.A.setInputLocked(false, t), (0, s.openModalLazy)(async () => {
          let {
            default: e
          } = await Promise.all([n.e("96811"), n.e("48697")]).then(n.bind(n, 648230));
          return n => (0, i.jsx)(e, P(N({}, n), {
            selectSource: false,
            sourcePID: t,
            analyticsLocations: [h.A.OVERLAY_NUDGE]
          }))
        }, {
          contextKey: I.KX
        })
      };
      r ? L.push((0, i.jsx)(a.$nd, {
        size: "sm",
        variant: "active",
        onClick: e => o(e),
        text: l
      })) : (j.confirmText = l, j.onConfirmClick = (e, t) => {
        c.A.updateNotificationStatus(t), o(e)
      });
      break
    }
    case S.Jr.CONTENT_INVENTORY: {
      j.onNotificationShow = () => {
        c.A.track(x.HAw.OVERLAY_GAME_INVITE_NOTIFICATION_SHOWN, {
          user_ids: o.entries.map(e => e.author_id),
          entry_ids: o.entries.map(e => e.id)
        })
      };
      let t = () => (0, i.jsx)(y.ru, {
        gamingId: null == e ? true : e.id,
        maxUserShowCount: 5,
        variant: r ? "subtle" : "default",
        className: l()({
          [w.kL]: true,
          [w.Wz]: r
        })
      });
      r ? R.push(t) : j.renderFooter = t
    }
  }
  L.length > 0 && R.unshift(() => (0, i.jsx)("div", {
    className: l()(w.kL, w.Wz, w.SH),
    children: L
  })), null == j.renderFooter && R.length > 0 && (j.renderFooter = (e, t, n) => (0, i.jsx)("div", {
    className: w.NG,
    children: R.filter(e => null != e).map(i => i(e, t, n))
  }));
  let k = (0, g.k8)(o.M.OVERLAY_OOP_WELCOME_NUX),
    M = r ? true : () => (0, E.sI)((0, _.Jn)(), C.t["z8/sgJ"], C.intl.string(C.t.jZkzVJ), {
      highlightAdminWarningIfElevated: true
    }),
    z = r ? (0, i.jsx)(a.DZT, {
      variant: "heading-md/semibold",
      color: "text-strong",
      children: C.intl.string(C.t.KWDIrh)
    }) : C.intl.string(C.t.KWDIrh),
    V = null != e ? (0, i.jsx)(D, {
      game: e
    }) : (0, i.jsx)("img", {
      src: n(513653),
      className: T.Kk,
      alt: ""
    });
  return P(N({
    className: r ? w.fV : true,
    icon: V,
    title: z,
    hint: M
  }, j), {
    onNotificationShow: e => {
      var t;
      p(), k || (0, g.Dr)(o.M.OVERLAY_OOP_WELCOME_NUX), null == (t = j.onNotificationShow) || t.call(j, e)
    },
    onNotificationClick: (e, t) => {
      var n;
      f("unlock"), c.A.setInputLocked(false, b.A.getTargetPID()), k || (0, g.Dr)(o.M.OVERLAY_OOP_WELCOME_NUX), null == (n = j.onNotificationClick) || n.call(j, e, t)
    },
    onDismissClick: (e, t) => {
      var n;
      f("dismiss"), k || (0, g.Dr)(o.M.OVERLAY_OOP_WELCOME_NUX), null == (n = j.onDismissClick) || n.call(j, e, t)
    }
  })
}