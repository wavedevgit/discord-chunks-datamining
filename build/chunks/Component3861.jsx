/** Chunk was on 81985 **/
/** chunk id: 3861, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => j
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk112724 = require("./112724.jsx"),
  Chunk413458 = require("./413458.js"),
  Chunk358221 = require("./358221.js"),
  Chunk351248 = require("./351248.jsx"),
  Chunk600164 = require("./600164.jsx"),
  Chunk707920 = require("./707920.jsx"),
  Chunk585483 = require("./585483.js"),
  Chunk340295 = require("./340295.jsx"),
  Chunk171277 = require("./171277.jsx"),
  Chunk677845 = require("./677845.jsx"),
  Chunk430371 = require("./430371.jsx"),
  Chunk45430 = require("./45430.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk354459 = require("./354459.js"),
  Chunk676465 = require("./676465.js");
let j = (0, Chunk112724.Z)(e => {
  let {
    participants: t,
    filteredParticipants: n,
    selectedParticipant: a,
    participantsVersion: j,
    layout: x,
    onSelectParticipant: C,
    onContextMenuParticipant: E,
    onFullscreenParticipant: S,
    channel: _,
    hasConnectPermission: I,
    className: P,
    inCall: Z,
    showParticipants: N = true,
    width: T,
    height: A,
    idle: w,
    mode: R,
    popoutType: D,
    awaitingRemoteSessionInfo: M,
    callContainerDimensions: k
  } = e;
  i.useEffect(() => {
    p.S.dispatch(y.CkL.REMEASURE_TARGET)
  }, [T, A, k.width, k.height]);
  let L = i.useMemo(() => n.filter(e => e.type !== v.fO.ACTIVITY || !e.participants.some(e => (0, o.J)(e))), [n, j]),
    U = (0, l.e7)([s.Z], () => s.Z.getVoiceParticipantsHidden(_.id), [_.id]);
  if ((null == M ? true : M.channelId) === _.id) return (0, r.jsx)(h.Z, {
    height: A
  });
  if ((null == _ ? true : _.isGuildVocalOrThread()) && !Z) return (0, r.jsx)(f.Z, {
    channel: _,
    participants: t,
    hasConnectPermission: I
  });
  if (n = Z ? n : t, x === y.AEg.HAVEN) return (0, r.jsx)(d.Z, {
    participants: n,
    channel: _,
    idle: w
  });
  if (R === y.WtW.VOICE) return (0, r.jsx)(c.Z, {
    guildId: _.guild_id,
    width: T,
    className: O.voiceCallWrapper,
    participants: t,
    onContextMenu: E
  });
  if (null == a) {
    if (0 === n.length) {
      let e = t.length > 0 && !U;
      return (0, r.jsx)(b.Z, {
        channelId: _.id,
        allPoppedOut: e
      })
    }
    return (0, r.jsx)(u.Z, {
      className: O.videoGridWrapper,
      justify: u.Z.Justify.CENTER,
      align: u.Z.Align.CENTER,
      children: (0, r.jsx)(g.Z, {
        channel: _,
        className: O.videoGrid,
        participants: L,
        totalNumberOfParticipants: t.length,
        onClick: C,
        onDoubleClick: S,
        onContextMenu: E,
        inCall: Z,
        popoutType: D
      })
    })
  }
  return (0, r.jsx)(m.Z, {
    onFullscreenParticipant: S,
    onContextMenuParticipant: E,
    onSelectParticipant: C,
    selectedParticipant: a,
    filteredParticipants: L,
    participants: t,
    popoutType: D,
    className: P,
    idle: w,
    height: A,
    width: T,
    layout: x,
    inCall: Z,
    channel: _,
    showParticipants: N
  })
})