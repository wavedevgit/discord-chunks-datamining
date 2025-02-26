/** Chunk was on 79120 **/
n.d(t, {
  Z: () => C
});
var r = n(200651);
n(192379);
var l = n(120356),
  i = n.n(l),
  o = n(512722),
  a = n.n(o),
  s = n(442837),
  c = n(481060),
  u = n(730749),
  d = n(726542),
  f = n(600164),
  p = n(750154),
  m = n(594174),
  g = n(374129),
  b = n(639351),
  y = n(503438),
  O = n(802856),
  h = n(387903),
  v = n(606925),
  j = n(719216),
  S = n(429589),
  P = n(636245),
  N = n(697761),
  x = n(611459),
  I = n(544671),
  E = n(757182),
  Z = n(910424),
  w = n(981631),
  T = n(688354);
let C = (0, u.Z)(e => {
  let {
    activity: t,
    embeddedActivity: n,
    user: l,
    applicationStream: o,
    className: u,
    guildId: C,
    channelId: A,
    source: D,
    color: _ = c.zxk.Colors.WHITE,
    look: k = c.zxk.Looks.OUTLINED,
    type: W,
    onAction: M
  } = e, L = (0, s.e7)([m.default], () => {
    let e = m.default.getCurrentUser();
    return a()(null != e, "UserActivityActions: currentUser cannot be undefined"), e
  }), U = W === h.Y.STREAM_PREVIEW || null != o, R = (0, y.Z)(t), V = R || U ? f.Z.Direction.HORIZONTAL : f.Z.Direction.VERTICAL, B = V === f.Z.Direction.VERTICAL;
  return (0, r.jsx)(f.Z, {
    grow: 0,
    align: f.Z.Align.STRETCH,
    direction: V,
    wrap: B ? f.Z.Wrap.WRAP : f.Z.Wrap.NO_WRAP,
    className: i()(u, T.buttonsWrapper, B ? T.vertical : T.horizontal),
    children: (() => {
      if ((0, O.Z)(t)) return (0, r.jsx)(v.Z, {
        platform: d.Z.get(w.ABu.XBOX),
        look: k,
        color: _,
        onAction: M,
        Icon: b.Z
      }, "ConnectPlatformActivityButton");
      if ((null == t ? void 0 : t.platform) === w.M7m.PS4 || (null == t ? void 0 : t.platform) === w.M7m.PS5) return (0, r.jsx)(v.Z, {
        look: k,
        color: _,
        platform: d.Z.get(w.ABu.PLAYSTATION),
        onAction: M,
        Icon: g.Z
      }, "ConnectPlatformActivityButton");
      if (R) {
        let e = (0, r.jsx)(I.Z, {
            activity: t,
            user: l,
            guildId: C,
            channelId: A,
            source: D,
            look: k,
            color: _,
            onAction: M
          }, "spotify-activity-sync-button"),
          n = (0, r.jsx)(x.Z, {
            activity: t,
            user: l,
            source: D,
            look: k,
            color: _,
            onAction: M
          }, "spotify-activity-play-button");
        return (0, r.jsxs)(r.Fragment, {
          children: [n, e]
        })
      }
      if ((0, p.dS)(t)) {
        let e = (0, p.rq)(t);
        return null == e ? null : (0, r.jsx)(P.Z, {
          guildId: e.guildId,
          channelId: e.channelId,
          color: _,
          look: k,
          onAction: M
        }, e.channelId)
      }
      return U ? (0, r.jsx)(Z.Z, {
        isCurrentUser: L.id === l.id,
        color: _,
        look: k,
        applicationStream: o,
        onAction: M
      }, "watch-button") : (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(E.Z, {
          activity: t,
          color: _,
          look: k,
          onAction: M
        }, "watch-button"), (0, r.jsx)(S.Z, {
          activity: t,
          embeddedActivity: n,
          user: l,
          color: _,
          look: k,
          onAction: M
        }, "join-activity-button"), (0, r.jsx)(N.Z, {
          activity: t,
          user: l,
          color: _,
          look: k,
          onAction: M
        }, "notify-button"), (0, r.jsx)(j.Z, {
          user: l,
          color: _,
          look: k,
          activity: t,
          onAction: M
        }, "custom-activity-button")]
      })
    })()
  })
})