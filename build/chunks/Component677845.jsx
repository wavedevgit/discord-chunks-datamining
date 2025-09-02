/** Chunk was on 62987 **/
/** chunk id: 677845, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => S
}), require("./539854.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk990547 = require("./990547.js"),
  Chunk731965 = require("./731965.js"),
  Chunk442837 = require("./442837.js"),
  Chunk704215 = require("./704215.js"),
  Chunk40851 = require("./40851.jsx"),
  Chunk317381 = require("./317381.js"),
  Chunk374065 = require("./374065.js"),
  Chunk213609 = require("./213609.js"),
  Chunk358221 = require("./358221.js"),
  Chunk266454 = require("./266454.js"),
  Chunk159300 = require("./159300.js"),
  Chunk800329 = require("./800329.jsx"),
  Chunk470956 = require("./470956.js"),
  Chunk430824 = require("./430824.js"),
  Chunk496675 = require("./496675.js"),
  Chunk434488 = require("./434488.jsx"),
  Chunk27457 = require("./27457.jsx"),
  Chunk251564 = require("./251564.js"),
  Chunk695492 = require("./695492.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk312439 = require("./312439.js");

function S(e) {
  let {
    participants: t,
    onClick: n,
    onDoubleClick: S,
    onContextMenu: I,
    channel: P,
    className: Z,
    inCall: T,
    totalNumberOfParticipants: N
  } = e, A = (0, c.bp)() === j.IlC.POPOUT, w = (0, o.e7)([y.Z], () => y.Z.getGuild(P.guild_id), [P.guild_id]), {
    dismissedActivityEntryPointTileChannel: R
  } = (0, v.d)(), M = (0, o.e7)([h.Z], () => h.Z.getUserParticipantCount(P.id), [P]), D = (0, b.bt)(P.id, t), L = i.useCallback(() => {
    (0, a.j)(() => {
      v.d.setState({
        dismissedActivityEntryPointTileChannel: P.id
      })
    })
  }, [P.id]);
  i.useEffect(() => {
    null != R && P.id !== R && (0, a.j)(() => {
      v.d.setState({
        dismissedActivityEntryPointTileChannel: null
      })
    })
  }, [P.id, R]);
  let k = (0, o.e7)([_.Z], () => P.isPrivate() || (0, m.b)(_.Z, w, P), [w, P]),
    U = (null == w ? true : w.afkChannelId) === P.id,
    B = P.userLimit <= 0 || P.userLimit > 1,
    G = (0, o.e7)([u.ZP], () => u.ZP.getEmbeddedActivitiesForChannel(P.id).length <= 0),
    H = (0, f.Nj)(s.z.VC_TILE_ACTIVITIES_ENTRY_POINT),
    F = (0, d.KF)(P.id) !== d.jy.CAN_LAUNCH,
    V = null != R && R === P.id,
    z = D.map(e => t => (0, r.jsx)(x.ZP, {
      participant: e,
      channel: P,
      className: E.tile,
      onClick: n,
      onDoubleClick: S,
      onContextMenu: I,
      inCall: T,
      width: t,
      inPopout: A
    }, e.id));
  (0, p.Z)({
    type: l.ImpressionTypes.VIEW,
    name: l.ImpressionNames.CHANNEL_CALL_VIDEO_GRID_VIEW,
    properties: {
      total_participants: N,
      can_invite: k,
      is_afk_channel: U,
      channel_user_limit: P.userLimit
    }
  }, {
    trackOnInitialLoad: true
  }, []), null != w && !U && (!(M >= 2) || !G || F || H || V ? B && 1 === M && k && (G && !F ? z.push(e => (0, r.jsx)(C.h, {
    channel: P,
    guild: w,
    width: e,
    inPopout: A,
    handleClose: L,
    userParticipantCount: M
  })) : z.push(e => (0, r.jsx)(O.Z, {
    width: e,
    channel: P,
    guild: w,
    inPopout: A
  }))) : z.push(e => (0, r.jsx)(C.h, {
    channel: P,
    guild: w,
    width: e,
    inPopout: A,
    handleClose: L,
    userParticipantCount: M
  })));
  let W = i.useCallback(e => {
    var t, n;
    return null != (n = null == (t = D[e]) ? true : t.id) ? n : "empty-tile"
  }, [D]);
  return (0, r.jsx)(g.Z, {
    className: Z,
    keyExtractor: W,
    paddingTop: 64,
    paddingBottom: 64,
    children: z
  })
}