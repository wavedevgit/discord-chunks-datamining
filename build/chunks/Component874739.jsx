/** Chunk was on 44669 **/
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
    selectedParticipant: s,
    participantsVersion: j,
    layout: x,
    onSelectParticipant: _,
    onContextMenuParticipant: v,
    onFullscreenParticipant: E,
    channel: C,
    hasConnectPermission: S,
    className: I,
    inCall: N,
    showParticipants: T = true,
    width: P,
    height: w,
    idle: R,
    mode: D,
    popoutType: L,
    awaitingRemoteSessionInfo: M,
    callContainerDimensions: G
  } = e;
  l.useEffect(() => {
    p._.dispatch(A.jej.REMEASURE_TARGET)
  }, [P, w, G.width, G.height]);
  let k = l.useMemo(() => n.filter(e => e.type !== y.lp.ACTIVITY || !e.participants.some(e => (0, a.S)(e))), [n, j]),
    U = (0, i.bG)([o.A], () => o.A.getVoiceParticipantsHidden(C.id), [C.id]);
  if ((null == M ? true : M.channelId) === C.id) return (0, r.jsx)(g.A, {
    height: w
  });
  if ((null == C ? true : C.isGuildVocalOrThread()) && !N) return (0, r.jsx)(h.A, {
    channel: C,
    participants: t,
    hasConnectPermission: S
  });
  if (n = N ? n : t, x === A.DUB.HAVEN) return (0, r.jsx)(d.A, {
    participants: n,
    channel: C,
    idle: R
  });
  if (D === A._Of.VOICE) return (0, r.jsx)(c.A, {
    guildId: C.guild_id,
    width: P,
    className: O.Er,
    participants: t,
    onContextMenu: v
  });
  if (null == s) {
    if (0 === n.length) {
      let e = t.length > 0 && !U;
      return (0, r.jsx)(b.A, {
        channelId: C.id,
        allPoppedOut: e
      })
    }
    return (0, r.jsx)(u.A, {
      className: O.HA,
      justify: u.A.Justify.CENTER,
      align: u.A.Align.CENTER,
      children: (0, r.jsx)(f.A, {
        channel: C,
        className: O.g9,
        participants: k,
        totalNumberOfParticipants: t.length,
        onClick: _,
        onDoubleClick: E,
        onContextMenu: v,
        inCall: N,
        popoutType: L
      })
    })
  }
  return (0, r.jsx)(m.A, {
    onFullscreenParticipant: E,
    onContextMenuParticipant: v,
    onSelectParticipant: _,
    selectedParticipant: s,
    filteredParticipants: k,
    participants: t,
    popoutType: L,
    className: I,
    idle: R,
    height: w,
    width: P,
    layout: x,
    inCall: N,
    channel: C,
    showParticipants: T
  })
})