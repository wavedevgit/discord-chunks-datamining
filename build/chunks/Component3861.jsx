/** Chunk was on web.js **/
/** chunk id: 3861, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => E
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
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
  Chunk363987 = require("./363987.js");
let E = (0, Chunk112724.Z)(e => {
  let {
    participants: t,
    filteredParticipants: n,
    selectedParticipant: o,
    participantsVersion: E,
    layout: b,
    onSelectParticipant: y,
    onContextMenuParticipant: O,
    onFullscreenParticipant: v,
    channel: I,
    hasConnectPermission: T,
    className: S,
    inCall: A,
    showParticipants: N = true,
    width: C,
    height: R,
    idle: P,
    mode: w,
    popoutWindow: D,
    awaitingRemoteSessionInfo: L,
    callContainerDimensions: x
  } = e;
  i.useEffect(() => {
    c.S.dispatch(h.CkL.REMEASURE_TARGET)
  }, [C, R, x.width, x.height]);
  let M = i.useMemo(() => n.filter(e => e.type !== m.fO.ACTIVITY || !e.participants.some(e => (0, a.J)(e))), [n, E]);
  return (null == L ? true : L.channelId) === I.id ? (0, r.jsx)(d.Z, {
    height: R
  }) : (null == I ? true : I.isGuildVocal()) && !A ? (0, r.jsx)(u.Z, {
    channel: I,
    participants: t,
    hasConnectPermission: T
  }) : w === h.WtW.VOICE ? (0, r.jsx)(s.Z, {
    guildId: I.guild_id,
    width: C,
    className: g.voiceCallWrapper,
    participants: t,
    onContextMenu: O
  }) : (n = A ? n : t, null == o) ? 0 === n.length ? (0, r.jsx)(p.Z, {
    channelId: I.id
  }) : (0, r.jsx)(l.Z, {
    className: g.videoGridWrapper,
    justify: l.Z.Justify.CENTER,
    align: l.Z.Align.CENTER,
    children: (0, r.jsx)(f.Z, {
      channel: I,
      className: g.videoGrid,
      participants: M,
      totalNumberOfParticipants: t.length,
      onClick: y,
      onDoubleClick: v,
      onContextMenu: O,
      inCall: A
    })
  }) : (0, r.jsx)(_.Z, {
    onFullscreenParticipant: v,
    onContextMenuParticipant: O,
    onSelectParticipant: y,
    selectedParticipant: o,
    filteredParticipants: M,
    participants: t,
    popoutWindow: D,
    className: S,
    idle: P,
    height: R,
    width: C,
    layout: b,
    inCall: A,
    channel: I,
    showParticipants: N
  })
})