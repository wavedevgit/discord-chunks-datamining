/** Chunk was on 70045 **/
n.d(t, {
  Z: () => w
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
  y = n(639351),
  b = n(503438),
  O = n(802856),
  h = n(387903),
  v = n(606925),
  j = n(719216),
  S = n(429589),
  P = n(636245),
  N = n(697761),
  I = n(611459),
  E = n(544671),
  x = n(757182),
  A = n(910424),
  Z = n(981631),
  T = n(688354);
let w = (0, u.Z)(e => {
  let {
    activity: t,
    embeddedActivity: n,
    user: l,
    applicationStream: o,
    className: u,
    guildId: w,
    channelId: C,
    source: _,
    color: D = c.zxk.Colors.WHITE,
    look: L = c.zxk.Looks.OUTLINED,
    type: k,
    onAction: W
  } = e, M = (0, s.e7)([m.default], () => {
    let e = m.default.getCurrentUser();
    return a()(null != e, "UserActivityActions: currentUser cannot be undefined"), e
  }), U = k === h.Y.STREAM_PREVIEW || null != o, R = (0, b.Z)(t), G = R || U ? f.Z.Direction.HORIZONTAL : f.Z.Direction.VERTICAL, F = G === f.Z.Direction.VERTICAL;
  return (0, r.jsx)(f.Z, {
    grow: 0,
    align: f.Z.Align.STRETCH,
    direction: G,
    wrap: F ? f.Z.Wrap.WRAP : f.Z.Wrap.NO_WRAP,
    className: i()(u, T.buttonsWrapper, F ? T.vertical : T.horizontal),
    children: (() => {
      if ((0, O.Z)(t)) return (0, r.jsx)(v.Z, {
        platform: d.Z.get(Z.ABu.XBOX),
        look: L,
        color: D,
        onAction: W,
        Icon: y.Z
      }, "ConnectPlatformActivityButton");
      if ((null == t ? void 0 : t.platform) === Z.M7m.PS4 || (null == t ? void 0 : t.platform) === Z.M7m.PS5) return (0, r.jsx)(v.Z, {
        look: L,
        color: D,
        platform: d.Z.get(Z.ABu.PLAYSTATION),
        onAction: W,
        Icon: g.Z
      }, "ConnectPlatformActivityButton");
      if (R) {
        let e = (0, r.jsx)(E.Z, {
            activity: t,
            user: l,
            guildId: w,
            channelId: C,
            source: _,
            look: L,
            color: D,
            onAction: W
          }, "spotify-activity-sync-button"),
          n = (0, r.jsx)(I.Z, {
            activity: t,
            user: l,
            source: _,
            look: L,
            color: D,
            onAction: W
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
          color: D,
          look: L,
          onAction: W
        }, e.channelId)
      }
      return U ? (0, r.jsx)(A.Z, {
        isCurrentUser: M.id === l.id,
        color: D,
        look: L,
        applicationStream: o,
        onAction: W
      }, "watch-button") : (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(x.Z, {
          activity: t,
          color: D,
          look: L,
          onAction: W
        }, "watch-button"), (0, r.jsx)(S.Z, {
          activity: t,
          embeddedActivity: n,
          user: l,
          color: D,
          look: L,
          onAction: W
        }, "join-activity-button"), (0, r.jsx)(N.Z, {
          activity: t,
          user: l,
          color: D,
          look: L,
          onAction: W
        }, "notify-button"), (0, r.jsx)(j.Z, {
          user: l,
          color: D,
          look: L,
          activity: t,
          onAction: W
        }, "custom-activity-button")]
      })
    })()
  })
})