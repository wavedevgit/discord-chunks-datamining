/** Chunk was on 73755 **/
/** chunk id: 3861, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => _
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk112724 = require("./112724.jsx"),
  Chunk413458 = require("./413458.js"),
  Chunk358221 = require("./358221.js"),
  Chunk351248 = require("./351248.jsx"),
  Chunk600164 = require("./600164.jsx"),
  Chunk585483 = require("./585483.js"),
  Chunk340295 = require("./340295.jsx"),
  Chunk171277 = require("./171277.jsx"),
  Chunk677845 = require("./677845.jsx"),
  Chunk430371 = require("./430371.jsx"),
  Chunk45430 = require("./45430.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk354459 = require("./354459.js"),
  Chunk394024 = require("./394024.js");
let _ = (0, Chunk112724.Z)(e => {
  let {
    participants: t,
    filteredParticipants: n,
    selectedParticipant: a,
    participantsVersion: _,
    layout: v,
    onSelectParticipant: O,
    onContextMenuParticipant: x,
    onFullscreenParticipant: E,
    channel: j,
    hasConnectPermission: S,
    className: P,
    inCall: I,
    showParticipants: Z = true,
    width: T,
    height: N,
    idle: A,
    mode: w,
    popoutType: M,
    awaitingRemoteSessionInfo: R,
    callContainerDimensions: L
  } = e;
  r.useEffect(() => {
    d.S.dispatch(b.CkL.REMEASURE_TARGET)
  }, [T, N, L.width, L.height]);
  let D = r.useMemo(() => n.filter(e => e.type !== C.fO.ACTIVITY || !e.participants.some(e => (0, o.J)(e))), [n, _]),
    k = (0, l.e7)([s.Z], () => s.Z.getVoiceParticipantsHidden(j.id), [j.id]);
  if ((null == R ? true : R.channelId) === j.id) return (0, i.jsx)(h.Z, {
    height: N
  });
  if ((null == j ? true : j.isGuildVocalOrThread()) && !I) return (0, i.jsx)(p.Z, {
    channel: j,
    participants: t,
    hasConnectPermission: S
  });
  if (w === b.WtW.VOICE) return (0, i.jsx)(c.Z, {
    guildId: j.guild_id,
    width: T,
    className: y.voiceCallWrapper,
    participants: t,
    onContextMenu: x
  });
  if (n = I ? n : t, null == a) {
    if (0 === n.length) {
      let e = t.length > 0 && !k;
      return (0, i.jsx)(g.Z, {
        channelId: j.id,
        allPoppedOut: e
      })
    }
    return (0, i.jsx)(u.Z, {
      className: y.videoGridWrapper,
      justify: u.Z.Justify.CENTER,
      align: u.Z.Align.CENTER,
      children: (0, i.jsx)(f.Z, {
        channel: j,
        className: y.videoGrid,
        participants: D,
        totalNumberOfParticipants: t.length,
        onClick: O,
        onDoubleClick: E,
        onContextMenu: x,
        inCall: I,
        popoutType: M
      })
    })
  }
  return (0, i.jsx)(m.Z, {
    onFullscreenParticipant: E,
    onContextMenuParticipant: x,
    onSelectParticipant: O,
    selectedParticipant: a,
    filteredParticipants: D,
    participants: t,
    popoutType: M,
    className: P,
    idle: A,
    height: N,
    width: T,
    layout: v,
    inCall: I,
    channel: j,
    showParticipants: Z
  })
})