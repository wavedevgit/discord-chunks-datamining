/** Chunk was on 40184 **/
/** chunk id: 3861, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => x
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
let x = (0, Chunk112724.Z)(e => {
  let {
    participants: t,
    filteredParticipants: n,
    selectedParticipant: a,
    participantsVersion: x,
    layout: O,
    onSelectParticipant: E,
    onContextMenuParticipant: j,
    onFullscreenParticipant: S,
    channel: _,
    hasConnectPermission: P,
    className: I,
    inCall: Z,
    showParticipants: T = true,
    width: N,
    height: A,
    idle: w,
    mode: M,
    popoutType: R,
    awaitingRemoteSessionInfo: D,
    callContainerDimensions: k
  } = e;
  r.useEffect(() => {
    p.S.dispatch(y.CkL.REMEASURE_TARGET)
  }, [N, A, k.width, k.height]);
  let L = r.useMemo(() => n.filter(e => e.type !== C.fO.ACTIVITY || !e.participants.some(e => (0, o.J)(e))), [n, x]),
    U = (0, l.e7)([s.Z], () => s.Z.getVoiceParticipantsHidden(_.id), [_.id]);
  if ((null == D ? true : D.channelId) === _.id) return (0, i.jsx)(h.Z, {
    height: A
  });
  if ((null == _ ? true : _.isGuildVocalOrThread()) && !Z) return (0, i.jsx)(f.Z, {
    channel: _,
    participants: t,
    hasConnectPermission: P
  });
  if (n = Z ? n : t, O === y.AEg.HAVEN) return (0, i.jsx)(d.Z, {
    participants: n,
    channel: _,
    idle: w
  });
  if (M === y.WtW.VOICE) return (0, i.jsx)(c.Z, {
    guildId: _.guild_id,
    width: N,
    className: v.voiceCallWrapper,
    participants: t,
    onContextMenu: j
  });
  if (null == a) {
    if (0 === n.length) {
      let e = t.length > 0 && !U;
      return (0, i.jsx)(b.Z, {
        channelId: _.id,
        allPoppedOut: e
      })
    }
    return (0, i.jsx)(u.Z, {
      className: v.videoGridWrapper,
      justify: u.Z.Justify.CENTER,
      align: u.Z.Align.CENTER,
      children: (0, i.jsx)(m.Z, {
        channel: _,
        className: v.videoGrid,
        participants: L,
        totalNumberOfParticipants: t.length,
        onClick: E,
        onDoubleClick: S,
        onContextMenu: j,
        inCall: Z,
        popoutType: R
      })
    })
  }
  return (0, i.jsx)(g.Z, {
    onFullscreenParticipant: S,
    onContextMenuParticipant: j,
    onSelectParticipant: E,
    selectedParticipant: a,
    filteredParticipants: L,
    participants: t,
    popoutType: R,
    className: I,
    idle: w,
    height: A,
    width: N,
    layout: O,
    inCall: Z,
    channel: _,
    showParticipants: T
  })
})