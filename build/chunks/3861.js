/** Chunk was on 4566 **/
n.d(t, {
  Z: () => j
});
var r = n(200651),
  i = n(192379),
  l = n(120356),
  o = n.n(l),
  a = n(112724),
  s = n(413458),
  c = n(351248),
  u = n(600164),
  d = n(540059),
  p = n(594174),
  h = n(585483),
  f = n(340295),
  m = n(515334),
  g = n(677845),
  b = n(430371),
  _ = n(236564),
  C = n(45430),
  v = n(981631),
  y = n(354459),
  x = n(26128);
let j = (0, a.Z)(e => {
  var t, n;
  let {
    participants: l,
    filteredParticipants: a,
    selectedParticipant: j,
    participantsVersion: O,
    layout: N,
    onSelectParticipant: E,
    onContextMenuParticipant: I,
    onFullscreenParticipant: P,
    channel: S,
    hasConnectPermission: Z,
    className: T,
    inCall: A,
    showParticipants: w = !0,
    paused: R = !1,
    width: M,
    height: k,
    idle: L,
    mode: D,
    popoutWindow: W,
    awaitingRemoteSessionInfo: U,
    callContainerDimensions: B
  } = e;
  i.useEffect(() => {
    h.S.dispatch(v.CkL.REMEASURE_TARGET)
  }, [M, k, B.width, B.height]);
  let H = (0, d.Q3)("ChannelCallContent"),
    F = null !== (n = null === (t = p.default.getCurrentUser()) || void 0 === t ? void 0 : t.isStaff()) && void 0 !== n && n,
    G = i.useMemo(() => a.filter(e => e.type !== y.fO.ACTIVITY || !e.participants.some(e => (0, s.J)(e))), [a, O]);
  return (null == U ? void 0 : U.channelId) === S.id ? (0, r.jsx)(m.Z, {
    height: k
  }) : (null == S ? void 0 : S.isGuildVocal()) && !A ? (0, r.jsx)(f.Z, {
    channel: S,
    participants: l,
    hasConnectPermission: Z
  }) : D === v.WtW.VOICE ? (0, r.jsx)(c.Z, {
    guildId: S.guild_id,
    width: M,
    className: x.voiceCallWrapper,
    participants: l,
    onContextMenu: I
  }) : (a = A ? a : l, null == j) ? 0 === a.length ? H && F ? (0, r.jsx)(C.Z, {
    channelId: S.id
  }) : (0, r.jsx)(_.Z, {
    className: o()(x.videoGrid, x.hiddenParticipants),
    channelId: S.id,
    width: M
  }) : (0, r.jsx)(u.Z, {
    className: x.videoGridWrapper,
    justify: u.Z.Justify.CENTER,
    align: u.Z.Align.CENTER,
    children: (0, r.jsx)(g.Z, {
      channel: S,
      className: x.videoGrid,
      participants: G,
      totalNumberOfParticipants: l.length,
      onClick: E,
      onDoubleClick: P,
      onContextMenu: I,
      paused: R,
      inCall: A
    })
  }) : (0, r.jsx)(b.Z, {
    onFullscreenParticipant: P,
    onContextMenuParticipant: I,
    onSelectParticipant: E,
    selectedParticipant: j,
    filteredParticipants: G,
    participants: l,
    popoutWindow: W,
    className: T,
    idle: L,
    height: k,
    width: M,
    layout: N,
    inCall: A,
    channel: S,
    showParticipants: w
  })
})