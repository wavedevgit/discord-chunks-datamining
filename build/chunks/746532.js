/** Chunk was on 27601 **/
n.r(t), n.d(t, {
  default: () => x
}), n(177593), n(47120);
var l = n(392711),
  r = n.n(l),
  i = n(261470),
  a = n(524437),
  u = n(812206),
  o = n(339085),
  s = n(353926),
  c = n(653255),
  d = n(810788),
  f = n(355298),
  g = n(763296),
  Z = n(569471),
  S = n(260483),
  E = n(144140),
  P = n(581883),
  m = n(48481),
  p = n(199902),
  v = n(314897),
  I = n(523746),
  y = n(592125),
  O = n(757266),
  A = n(480294),
  b = n(831506),
  h = n(77498),
  R = n(486472),
  _ = n(650774),
  w = n(271383),
  N = n(430824),
  T = n(293273),
  D = n(131951),
  L = n(158776),
  U = n(19780),
  j = n(306680),
  C = n(699516),
  M = n(944486),
  k = n(9156),
  G = n(594174),
  V = n(979651),
  H = n(853872),
  F = n(695103),
  z = n(449224),
  W = n(181106),
  Y = n(237997),
  B = n(145597);
async function x(e, t) {
  let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new i.Z;
  await new Promise(e => setImmediate(e));
  let l = G.default.getCurrentUser();
  if (null == l) return new Promise(l => {
    n.fail(() => {
      l(x(e, t, n))
    })
  });
  n.succeed();
  let q = Object.values(G.default.getUsers()),
    J = Object.values(N.Z.getGuilds()),
    Q = N.Z.getAllGuildsRoles(),
    K = r().values(y.Z.getInitialOverlayState()),
    X = w.ZP.getMutableAllGuildsAndMembers(),
    $ = j.ZP.getAllReadStates(!0),
    ee = V.Z.getAllVoiceStates(),
    et = L.Z.getState(),
    en = R.Z.unavailableGuilds,
    el = r().mapValues(o.ZP.getGuilds(), e => e.emojis),
    er = k.ZP.getAllSettings(),
    ei = I.Z.getInternalState(),
    ea = W.Z.getStates(),
    eu = O.Z.getAllConnections(),
    eo = T.Z.getApplicationActivities(),
    es = b.Z.getParties(),
    ec = b.Z.getUserParties(),
    ed = v.default.getSessionId(),
    ef = v.default.getAnalyticsToken(),
    eg = z.Z.getGameForPID(t),
    eZ = _.Z.getMemberCounts(),
    eS = C.Z.getRelationships(),
    eE = Array.from(f.Z.getMessageRequestChannelIds()),
    eP = M.Z.getVoiceChannelId(),
    em = Y.default.getFocusedPID(),
    ep = Y.default.getSelectedGuildId(),
    ev = Y.default.getSelectedChannelId(),
    eI = D.Z.getState(),
    ey = h.Z.games,
    eO = Object.values(H.Z.paymentSources).map(e => e.toJS()),
    eA = H.Z.defaultPaymentSourceId,
    eb = H.Z.hasFetchedPaymentSources,
    eh = p.Z.getStreamingState(),
    eR = u.Z._getAllApplications().map(e => e.toJS()),
    e_ = F.Z.testModeApplicationId,
    ew = {
      null: {
        state: U.Z.getState(),
        pings: U.Z.getPings(),
        quality: U.Z.getQuality(),
        hostname: U.Z.getHostname(),
        lossRate: U.Z.getOutboundLossRate()
      }
    },
    eN = Array.from(d.Z.getState().hiddenHotspots),
    eT = s.Z.getSerializedState(),
    eD = c.Z.getState(),
    eL = Z.Z.getInitialOverlayState(),
    eU = S.Z.getInitialOverlayState(),
    ej = E.Z.getInitialOverlayState(),
    eC = (0, m.xU)(a.o8, P.Z.settings),
    eM = g.Z.getOverlaySerializedState(),
    ek = A.Z.consents;
  return {
    type: "OVERLAY_INITIALIZE",
    version: B.OVERLAY_VERSION,
    users: q,
    guilds: J,
    allGuildsRoles: Q,
    channels: K,
    guildMembers: X,
    readStates: $,
    voiceStates: ee,
    unavailableGuilds: en,
    emojis: el,
    allUserGuildSettings: er,
    callStoreInternalState: ei,
    activityLauncherStates: ea,
    connectedApps: eu,
    localActivities: eo,
    parties: es,
    userParties: ec,
    user: l,
    messageRequestChannelIds: eE,
    token: e,
    sessionId: ed,
    analyticsToken: ef,
    presences: et,
    currentGame: eg,
    selectedVoiceChannelId: eP,
    selectedChannelId: ev,
    selectedGuildId: ep,
    guildMemberCounts: eZ,
    relationships: eS,
    mediaEngineState: eI,
    rtcConnectionStates: ew,
    focusedPID: em,
    applications: eR,
    paymentSources: eO,
    defaultPaymentSourceId: eA,
    hasFetchedPaymentSources: eb,
    testModeApplicationId: e_,
    applicationStreamState: eh,
    hiddenHotspots: eN,
    serializedExperimentStore: eT,
    streamingCapabilitiesStoreState: eD,
    joinedThreads: eL,
    threadMembers: eU,
    threadMessages: ej,
    userSettingsProto: eC,
    soundboardStoreState: eM,
    detectableApplications: ey,
    consents: ek
  }
}