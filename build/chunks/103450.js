/** Chunk was on web.js **/
"use strict";
n.d(t, {
  e: () => B
}), n(47120);
var r = n(192379),
  i = n(115911),
  o = n(442837),
  a = n(278323),
  s = n(224706),
  l = n(287734),
  c = n(2052),
  u = n(774226),
  d = n(317381),
  f = n(638880),
  p = n(255621),
  _ = n(16609),
  h = n(452634),
  m = n(527805),
  g = n(620662),
  E = n(841784),
  v = n(275920),
  b = n(906732),
  y = n(835473),
  O = n(592745),
  S = n(592125),
  I = n(757266),
  T = n(650774),
  N = n(430824),
  A = n(283595),
  C = n(496675),
  R = n(699516),
  P = n(944486),
  D = n(594174),
  w = n(979651),
  L = n(181106),
  x = n(417363),
  M = n(358085),
  j = n(804739),
  k = n(981631),
  U = n(701488),
  G = n(388032);

function B(e) {
  var t, n;
  let B;
  let {
    activity: F,
    embeddedActivity: V,
    user: Z,
    onGameJoin: H,
    onClose: W
  } = e, {
    analyticsLocations: Y
  } = (0, b.ZP)(), [K, z] = r.useState(!1), q = null !== (t = null == V ? void 0 : V.applicationId) && void 0 !== t ? t : null == F ? void 0 : F.application_id, Q = null != V || (0, E.Z)(F), X = (0, o.e7)([D.default], () => D.default.getCurrentUser()), J = Z.id === (null == X ? void 0 : X.id), $ = (0, h.Z)({
    channelId: (0, _.pY)(null == V ? void 0 : V.location),
    userId: Z.id,
    activity: F
  }), ee = (0, o.e7)([A.Z, O.Z, x.Z, I.Z], () => Q || null != q && (0, j.t)({
    LibraryApplicationStore: A.Z,
    LaunchableGameStore: O.Z,
    DispatchApplicationStore: x.Z,
    ConnectedAppsStore: I.Z,
    applicationId: q
  })), et = (0, o.e7)([d.ZP], () => Array.from(d.ZP.getSelfEmbeddedActivities().values()).some(e => {
    let {
      applicationId: t,
      location: n
    } = e;
    return (t === (null == F ? void 0 : F.application_id) || t === (null == V ? void 0 : V.applicationId)) && (0, _.pY)(n) === $
  })), en = (0, o.e7)([L.Z], () => null != F && null != F.application_id && L.Z.getState(F.application_id, k.mFx.JOIN) === k.OcF.LOADING), er = (0, y.q)(q), ei = (0, m.s5)({
    userId: Z.id,
    activity: F,
    channelId: $,
    application: er
  }), eo = (0, u.GK)(), ea = (0, o.e7)([S.Z, N.Z, T.Z, R.Z, P.Z, w.Z, C.Z], () => null != V ? ei === m.Fw.CAN_JOIN : (0, p.Z)({
    user: Z,
    activity: F,
    application: er,
    channelId: $,
    currentUser: X,
    isEmbedded: Q,
    ChannelStore: S.Z,
    GuildStore: N.Z,
    GuildMemberCountStore: T.Z,
    RelationshipStore: R.Z,
    SelectedChannelStore: P.Z,
    VoiceStateStore: w.Z,
    PermissionStore: C.Z
  })), es = (0, o.e7)([d.ZP], () => {
    if (Array.from(d.ZP.getSelfEmbeddedActivities().values()).some(e => e.applicationId === (null == V ? void 0 : V.applicationId) && e.location.id === (null == V ? void 0 : V.location.id))) return !0;
    let e = d.ZP.getCurrentEmbeddedActivity();
    return null != e && e.applicationId === (null == F ? void 0 : F.application_id) && e.location.kind === i.X.CONTEXTLESS
  }), el = (0, c.O)(), ec = !M.isPlatformEmbedded, eu = (0, g.Z)(F, k.xjy.JOIN) || Q, ed = (0, g.Z)(F, k.xjy.CONTEXTLESS) && Q;
  if (!eu || null == q) return null;
  let ef = !J || Q && !es,
    ep = ef && (ec || ee) && !K && !et;
  ef ? ec || ee || null == F || (B = G.NW.formatToPlainString(G.t.SqJBnJ, {
    name: F.name
  })) : B = G.NW.string(G.t["0OiwfH"]);
  let e_ = null !== (n = null == V ? void 0 : V.launchId) && void 0 !== n ? n : null == F ? void 0 : F.session_id,
    eh = async (e, t) => {
      var n, r;
      if (null == e_ || null == q) return;
      let i = (0, g.Z)(t, k.xjy.EMBEDDED),
        o = P.Z.getVoiceChannelId(),
        a = S.Z.getChannel(o);
      await s.Z.join({
        userId: e.id,
        sessionId: e_,
        applicationId: q,
        channelId: o,
        messageId: null,
        intent: U.Ws.PLAY,
        embedded: i,
        partyId: null != t ? null == t ? void 0 : null === (n = t.party) || void 0 === n ? void 0 : n.id : "",
        locationObject: el.location,
        analyticsLocations: Y
      }), i || (0, v.Z)({
        type: k.q5t.JOIN,
        userId: e.id,
        guildId: null == a ? void 0 : a.guild_id,
        channelId: o,
        channelType: null == a ? void 0 : a.type,
        applicationId: q,
        partyId: null != t ? null == t ? void 0 : null === (r = t.party) || void 0 === r ? void 0 : r.id : "",
        locationObject: el.location,
        analyticsLocations: Y
      })
    }, em = async () => {
      let e = !1;
      async function t() {
        let e;
        z(!0), null != F && (e = await a.Z.sendActivityInviteUser({
          type: k.mFx.JOIN_REQUEST,
          userId: Z.id,
          activity: F,
          location: k.Sbl.PROFILE_POPOUT
        })), null != e && l.default.selectPrivateChannel(e.id)
      }
      if (Q) {
        if (null == q) return;
        if (!ea) return t();
        if (e = await (0, f.Z)({
            applicationId: q,
            activityChannelId: $,
            locationObject: el.location,
            analyticsLocations: Y,
            joinUserId: Z.id,
            joinSessionId: null == F ? void 0 : F.session_id,
            isContextlessActivity: ed
          })) {
          null == W || W();
          return
        }
      }
      if (!e) {
        if (ea) {
          null == H || H(), eh(Z, F);
          return
        }
        await t()
      }
    }, eg = ea ? G.NW.string(G.t.VJlc0d) : G.NW.string(G.t.OKsSCQ);
  return Q && !eo && (eg = G.NW.string(G.t["4i2vj4"])), es && (eg = G.NW.string(G.t.DPfdsr)), {
    buttonCTA: eg,
    tooltip: B,
    handleJoinRequest: em,
    isEnabled: ep,
    isJoining: en,
    isEmbedded: Q
  }
}