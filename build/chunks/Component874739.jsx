/** Chunk was on 97492 **/
/** chunk id: 874739, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => j
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk456412 = require("./456412.jsx"),
  Chunk878549 = require("./878549.js"),
  Chunk313961 = require("./313961.js"),
  Chunk493387 = require("./493387.jsx"),
  Chunk235986 = require("./235986.jsx"),
  Chunk808124 = require("./808124.jsx"),
  Chunk203982 = require("./203982.js"),
  Chunk484191 = require("./484191.jsx"),
  Chunk665450 = require("./665450.jsx"),
  Chunk526369 = require("./526369.jsx"),
  Chunk699707 = require("./699707.jsx"),
  Chunk713397 = require("./713397.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk806931 = require("./806931.js"),
  Chunk403264 = require("./403264.js");
let j = (0, Chunk456412.A)(e => {
  let {
    participants: t,
    filteredParticipants: n,
    selectedParticipant: a,
    participantsVersion: j,
    layout: v,
    onSelectParticipant: x,
    onContextMenuParticipant: E,
    onFullscreenParticipant: _,
    channel: C,
    hasConnectPermission: S,
    className: I,
    inCall: N,
    showParticipants: T = true,
    width: P,
    height: w,
    idle: R,
    mode: D,
    popoutType: M,
    awaitingRemoteSessionInfo: L,
    callContainerDimensions: G
  } = e;
  l.useEffect(() => {
    f._.dispatch(A.jej.REMEASURE_TARGET)
  }, [P, w, G.width, G.height]);
  let k = l.useMemo(() => n.filter(e => e.type !== y.lp.ACTIVITY || !e.participants.some(e => (0, s.S)(e))), [n, j]),
    U = (0, i.bG)([o.A], () => o.A.getVoiceParticipantsHidden(C.id), [C.id]);
  if ((null == L ? true : L.channelId) === C.id) return (0, r.jsx)(h.A, {
    height: w
  });
  if ((null == C ? true : C.isGuildVocalOrThread()) && !N) return (0, r.jsx)(p.A, {
    channel: C,
    participants: t,
    hasConnectPermission: S
  });
  if (n = N ? n : t, v === A.DUB.HAVEN) return (0, r.jsx)(d.A, {
    participants: n,
    channel: C,
    idle: R
  });
  if (D === A._Of.VOICE) return (0, r.jsx)(c.A, {
    guildId: C.guild_id,
    width: P,
    className: O.Er,
    participants: t,
    onContextMenu: E
  });
  if (null == a) {
    if (0 === n.length) {
      let e = t.length > 0 && !U;
      return (0, r.jsx)(m.A, {
        channelId: C.id,
        allPoppedOut: e
      })
    }
    return (0, r.jsx)(u.A, {
      className: O.HA,
      justify: u.A.Justify.CENTER,
      align: u.A.Align.CENTER,
      children: (0, r.jsx)(b.A, {
        channel: C,
        className: O.g9,
        participants: k,
        totalNumberOfParticipants: t.length,
        onClick: x,
        onDoubleClick: _,
        onContextMenu: E,
        inCall: N,
        popoutType: M
      })
    })
  }
  return (0, r.jsx)(g.A, {
    onFullscreenParticipant: _,
    onContextMenuParticipant: E,
    onSelectParticipant: x,
    selectedParticipant: a,
    filteredParticipants: k,
    participants: t,
    popoutType: M,
    className: I,
    idle: R,
    height: w,
    width: P,
    layout: v,
    inCall: N,
    channel: C,
    showParticipants: T
  })
})