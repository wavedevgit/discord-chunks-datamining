/** Chunk was on 49613 **/
/** chunk id: 3861, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => y
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk112724 = require("./112724.jsx"),
  Chunk413458 = require("./413458.js"),
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
  Chunk450906 = require("./450906.js");
let y = (0, Chunk112724.Z)(e => {
  let {
    participants: t,
    filteredParticipants: n,
    selectedParticipant: l,
    participantsVersion: y,
    layout: C,
    onSelectParticipant: _,
    onContextMenuParticipant: v,
    onFullscreenParticipant: x,
    channel: O,
    hasConnectPermission: j,
    className: E,
    inCall: S,
    showParticipants: P = true,
    width: I,
    height: Z,
    idle: N,
    mode: T,
    popoutWindow: A,
    awaitingRemoteSessionInfo: w,
    callContainerDimensions: M
  } = e;
  i.useEffect(() => {
    c.S.dispatch(m.CkL.REMEASURE_TARGET)
  }, [I, Z, M.width, M.height]);
  let R = i.useMemo(() => n.filter(e => e.type !== g.fO.ACTIVITY || !e.participants.some(e => (0, a.J)(e))), [n, y]);
  return (null == w ? true : w.channelId) === O.id ? (0, r.jsx)(d.Z, {
    height: Z
  }) : (null == O ? true : O.isGuildVocal()) && !S ? (0, r.jsx)(u.Z, {
    channel: O,
    participants: t,
    hasConnectPermission: j
  }) : T === m.WtW.VOICE ? (0, r.jsx)(o.Z, {
    guildId: O.guild_id,
    width: I,
    className: b.voiceCallWrapper,
    participants: t,
    onContextMenu: v
  }) : (n = S ? n : t, null == l) ? 0 === n.length ? (0, r.jsx)(f.Z, {
    channelId: O.id
  }) : (0, r.jsx)(s.Z, {
    className: b.videoGridWrapper,
    justify: s.Z.Justify.CENTER,
    align: s.Z.Align.CENTER,
    children: (0, r.jsx)(p.Z, {
      channel: O,
      className: b.videoGrid,
      participants: R,
      totalNumberOfParticipants: t.length,
      onClick: _,
      onDoubleClick: x,
      onContextMenu: v,
      inCall: S
    })
  }) : (0, r.jsx)(h.Z, {
    onFullscreenParticipant: x,
    onContextMenuParticipant: v,
    onSelectParticipant: _,
    selectedParticipant: l,
    filteredParticipants: R,
    participants: t,
    popoutWindow: A,
    className: E,
    idle: N,
    height: Z,
    width: I,
    layout: C,
    inCall: S,
    channel: O,
    showParticipants: P
  })
})