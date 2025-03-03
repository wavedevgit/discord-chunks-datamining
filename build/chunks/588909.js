/** Chunk was on 50751 **/
n.d(t, {
  Z: () => Z
}), n(47120);
var i = n(200651);
n(192379);
var r = n(704215),
  o = n(952265),
  l = n(24124),
  a = n(13245),
  s = n(620662),
  u = n(835473),
  c = n(442550),
  d = n(605236),
  p = n(293273),
  h = n(145597),
  f = n(32300),
  m = n(603618),
  g = n(380736),
  O = n(620954),
  y = n(987650),
  v = n(981631),
  E = n(602091),
  b = n(701488),
  j = n(388032),
  x = n(563797),
  S = n(101646);

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
        enumerable: !0,
        configurable: !0,
        writable: !0
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
  } = e, n = (0, u.q)(t.id);
  return null == n ? null : (0, i.jsx)(c.f, {
    src: n.getIconURL(b.Si.LARGE),
    size: 40
  })
}

function Z(e, t) {
  let {
    trackView: u,
    trackClick: c
  } = (0, O.R)(y.n0.WelcomeNudge, {
    notif_type: y.n0.WelcomeNudge,
    secondary_notif_types: t.map(e => y.nc[e.type])
  }), b = {};
  for (let r of t) switch (r.type) {
    case y.nc.WELCOME: {
      let t = (null == e ? void 0 : e.altId) != null ? p.Z.getApplicationActivity(e.altId) : (null == e ? void 0 : e.id) != null ? p.Z.getApplicationActivity(e.id) : null;
      null != t && (0, s.Z)(t, v.xjy.JOIN) && (b.cancelText = j.NW.string(j.t["6F9ivr"]), b.onCancelClick = (e, n) => {
        c("unlock"), a.Z.updateNotificationStatus(n), a.Z.setInputLocked(!1, (0, h.getPID)()), (0, l.h7)(t, !1, v.IlC.POPOUT)
      });
      break
    }
    case y.nc.GO_LIVE_VOICE:
    case y.nc.GO_LIVE_NON_VOICE:
      b.confirmText = j.NW.string(j.t.U76Ft7), b.onConfirmClick = (e, t) => {
        c("unlock"), a.Z.updateNotificationStatus(t), a.Z.setInputLocked(!1, (0, h.getPID)()), (0, o.ZD)(async () => {
          let {
            default: e
          } = await Promise.all([n.e("46746"), n.e("28965")]).then(n.bind(n, 60594));
          return t => (0, i.jsx)(e, C(I({}, t), {
            selectSource: !1,
            sourcePID: (0, h.getPID)(),
            guildId: r.type === y.nc.GO_LIVE_VOICE ? r.voiceGuild.id : void 0,
            selectGuild: r.type === y.nc.GO_LIVE_NON_VOICE,
            analyticsLocation: v.Sbl.OVERLAY_NUDGE
          }))
        }, {
          contextKey: E.u1
        })
      };
      break;
    case y.nc.CONTENT_INVENTORY:
      (0, f.Rb)("welcomeNotification").allowActivityWidget && (b.renderFooter = () => (0, i.jsx)("div", {
        className: S.container,
        children: (0, i.jsx)(m.lX, {
          gamingId: null == e ? void 0 : e.id,
          maxUserShowCount: 5
        })
      }), b.onNotificationShow = () => {
        a.Z.track(v.rMx.OVERLAY_GAME_INVITE_NOTIFICATION_SHOWN, {
          user_ids: r.entries.map(e => e.author_id),
          entry_ids: r.entries.map(e => e.id)
        })
      })
  }
  let Z = (0, d.un)(r.z.OVERLAY_OOP_WELCOME_NUX),
    w = null != e ? j.NW.format(j.t.bJ1QAQ, {
      gameName: e.name
    }) : j.NW.string(j.t.KWDIrq),
    P = null != e ? void 0 : j.NW.string(j.t.y7BLbm),
    _ = Z ? w : j.NW.string(j.t["prl+ra"]),
    T = null != e && Z ? e.name : _,
    D = Z ? P : j.NW.string(j.t.R3CpPT),
    A = null != e ? (0, i.jsx)(N, {
      game: e
    }) : (0, i.jsx)("img", {
      src: n(328756),
      className: x.icon,
      alt: ""
    });
  return C(I({
    icon: A,
    title: T,
    body: D,
    hint: () => (0, g.QR)((0, O.P)(), j.t.e6giBQ, j.NW.string(j.t.jZkzVF)),
    confirmText: Z ? void 0 : j.NW.string(j.t.TxyTbm),
    onConfirmClick: Z ? void 0 : () => {
      c("unlock"), a.Z.setInputLocked(!1, (0, h.getPID)()), Z || (0, d.EW)(r.z.OVERLAY_OOP_WELCOME_NUX)
    }
  }, b), {
    onNotificationShow: e => {
      var t;
      u(), Z || (0, d.EW)(r.z.OVERLAY_OOP_WELCOME_NUX), null === (t = b.onNotificationShow) || void 0 === t || t.call(b, e)
    },
    onNotificationClick: (e, t) => {
      var n;
      c("unlock"), a.Z.setInputLocked(!1, (0, h.getPID)()), Z || (0, d.EW)(r.z.OVERLAY_OOP_WELCOME_NUX), null === (n = b.onNotificationClick) || void 0 === n || n.call(b, e, t)
    },
    onDismissClick: (e, t) => {
      var n;
      c("dismiss"), Z || (0, d.EW)(r.z.OVERLAY_OOP_WELCOME_NUX), null === (n = b.onDismissClick) || void 0 === n || n.call(b, e, t)
    }
  })
}