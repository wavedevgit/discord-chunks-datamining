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
  if (b.A.isNotificationDisabled(_.KS.WelcomeNudge)) return null;
  let {
    enabled: r
  } = (0, y.o0)("welcomeNotification"), {
    trackView: p,
    trackClick: f
  } = (0, x.Y9)(_.KS.WelcomeNudge, {
    notif_type: _.KS.WelcomeNudge,
    secondary_notif_types: t.map(e => _.Jr[e.type])
  }), j = {}, R = [], k = [];
  for (let s of t) switch (s.type) {
    case _.Jr.WELCOME: {
      let t = (null == e ? true : e.altId) != null ? m.A.getApplicationActivity(e.altId) : (null == e ? true : e.id) != null ? m.A.getApplicationActivity(e.id) : null;
      null != t && (0, d.A)(t, S.jUm.JOIN) && (j.cancelText = T.intl.string(T.t["6F9ivu"]), j.onCancelClick = (e, n) => {
        f("unlock"), c.A.updateNotificationStatus(n), c.A.setInputLocked(false, E.A.getTargetPID()), (0, u.qf)(t, false, S.BRT.POPOUT)
      }), r && k.push((0, i.jsx)("div", {
        className: N.N7,
        children: (0, O.bi)((0, x.hM)(), T.t.mRbUco)
      }));
      break
    }
    case _.Jr.GO_LIVE_VOICE:
    case _.Jr.GO_LIVE_NON_VOICE: {
      let {
        oneClickGoLiveEnabled: e,
        useStreamCtaCopy: t
      } = (0, y.m5)("welcomeNotification"), l = T.intl.string(t ? T.t.pEuzii : T.t.U76Ft2), s = e ? e => {
        let t = () => {
            f("go-live-modal"), c.A.setInputLocked(false, E.A.getTargetPID())
          },
          n = () => {
            f("one-click-go-live")
          };
        (0, v.H)({
          pid: E.A.getTargetPID(),
          analyticsLocation: S.ThZ.OVERLAY_NUDGE,
          allowOneClickGoLive: true,
          onBeforeShowModal: t,
          onOneClickGoLive: n,
          appContext: S.BRT.POPOUT
        })
      } : e => {
        f("go-live-modal");
        let t = E.A.getTargetPID();
        c.A.setInputLocked(false, t), (0, o.openModalLazy)(async () => {
          let {
            default: e
          } = await Promise.all([n.e("96811"), n.e("48697")]).then(n.bind(n, 648230));
          return n => (0, i.jsx)(e, P(w({}, n), {
            selectSource: false,
            sourcePID: t,
            analyticsLocations: [h.A.OVERLAY_NUDGE]
          }))
        }, {
          contextKey: I.KX
        })
      };
      r ? k.push((0, i.jsx)(a.$nd, {
        size: "sm",
        variant: "active",
        onClick: e => s(e),
        text: l
      })) : (j.confirmText = l, j.onConfirmClick = (e, t) => {
        c.A.updateNotificationStatus(t), s(e)
      });
      break
    }
    case _.Jr.CONTENT_INVENTORY: {
      j.onNotificationShow = () => {
        c.A.track(S.HAw.OVERLAY_GAME_INVITE_NOTIFICATION_SHOWN, {
          user_ids: s.entries.map(e => e.author_id),
          entry_ids: s.entries.map(e => e.id)
        })
      };
      let t = () => (0, i.jsx)(A.ru, {
        gamingId: null == e ? true : e.id,
        maxUserShowCount: 5,
        variant: r ? "subtle" : "default",
        className: l()({
          [N.kL]: true,
          [N.Wz]: r
        })
      });
      r ? R.push(t) : j.renderFooter = t
    }
  }
  k.length > 0 && R.unshift(() => (0, i.jsx)("div", {
    className: l()(N.kL, N.Wz, N.SH),
    children: k
  })), null == j.renderFooter && R.length > 0 && (j.renderFooter = (e, t, n) => (0, i.jsx)("div", {
    className: N.NG,
    children: R.filter(e => null != e).map(i => i(e, t, n))
  }));
  let M = (0, g.k8)(s.M.OVERLAY_OOP_WELCOME_NUX),
    L = r ? true : () => (0, O.sI)((0, x.Jn)(), T.t["z8/sgJ"], T.intl.string(T.t.jZkzVJ), {
      highlightAdminWarningIfElevated: true
    }),
    U = r ? (0, i.jsx)(a.DZT, {
      variant: "heading-md/semibold",
      color: "text-strong",
      children: T.intl.string(T.t.KWDIrh)
    }) : T.intl.string(T.t.KWDIrh),
    G = null != e ? (0, i.jsx)(D, {
      game: e
    }) : (0, i.jsx)("img", {
      src: n(513653),
      className: C.Kk,
      alt: ""
    });
  return P(w({
    className: r ? N.fV : true,
    icon: G,
    title: U,
    hint: L
  }, j), {
    onNotificationShow: e => {
      var t;
      p(), M || (0, g.Dr)(s.M.OVERLAY_OOP_WELCOME_NUX), null == (t = j.onNotificationShow) || t.call(j, e)
    },
    onNotificationClick: (e, t) => {
      var n;
      f("unlock"), c.A.setInputLocked(false, E.A.getTargetPID()), M || (0, g.Dr)(s.M.OVERLAY_OOP_WELCOME_NUX), null == (n = j.onNotificationClick) || n.call(j, e, t)
    },
    onDismissClick: (e, t) => {
      var n;
      f("dismiss"), M || (0, g.Dr)(s.M.OVERLAY_OOP_WELCOME_NUX), null == (n = j.onDismissClick) || n.call(j, e, t)
    }
  })
}