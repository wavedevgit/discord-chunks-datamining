/** Chunk was on 81985 **/
/** chunk id: 677845, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => _
}), require("./539854.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk990547 = require("./990547.js"),
  Chunk731965 = require("./731965.js"),
  Chunk442837 = require("./442837.js"),
  Chunk704215 = require("./704215.js"),
  Chunk317381 = require("./317381.js"),
  Chunk374065 = require("./374065.js"),
  Chunk213609 = require("./213609.js"),
  Chunk358221 = require("./358221.js"),
  Chunk266454 = require("./266454.js"),
  Chunk159300 = require("./159300.js"),
  Chunk728285 = require("./728285.jsx"),
  Chunk800329 = require("./800329.jsx"),
  Chunk470956 = require("./470956.js"),
  Chunk430824 = require("./430824.js"),
  Chunk496675 = require("./496675.js"),
  Chunk434488 = require("./434488.jsx"),
  Chunk27457 = require("./27457.jsx"),
  Chunk251564 = require("./251564.js"),
  Chunk695492 = require("./695492.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk106076 = require("./106076.js");

function _(e) {
  let {
    participants: t,
    onClick: n,
    onDoubleClick: _,
    onContextMenu: I,
    channel: P,
    className: Z,
    inCall: N,
    totalNumberOfParticipants: T,
    popoutType: A
  } = e, w = (0, g.bp)() === E.IlC.POPOUT, R = (0, o.e7)([y.Z], () => y.Z.getGuild(P.guild_id), [P.guild_id]), {
    dismissedActivityEntryPointTileChannel: D
  } = (0, x.d)(), M = (0, o.e7)([p.Z], () => p.Z.getUserParticipantCount(P.id), [P]), k = (0, b.bt)(P.id, t), L = i.useCallback(() => {
    (0, a.j)(() => {
      x.d.setState({
        dismissedActivityEntryPointTileChannel: P.id
      })
    })
  }, [P.id]);
  i.useEffect(() => {
    null != D && P.id !== D && (0, a.j)(() => {
      x.d.setState({
        dismissedActivityEntryPointTileChannel: null
      })
    })
  }, [P.id, D]);
  let U = (0, o.e7)([v.Z], () => P.isPrivate() || (0, h.b)(v.Z, R, P), [R, P]),
    G = (null == R ? true : R.afkChannelId) === P.id,
    B = P.userLimit <= 0 || P.userLimit > 1,
    F = (0, o.e7)([c.ZP], () => c.ZP.getEmbeddedActivitiesForChannel(P.id).length <= 0),
    H = (0, f.Nj)(s.z.VC_TILE_ACTIVITIES_ENTRY_POINT),
    V = (0, u.KF)(P.id) !== u.jy.CAN_LAUNCH,
    z = null != D && D === P.id,
    W = k.map(e => t => (0, r.jsx)(j.ZP, {
      participant: e,
      channel: P,
      className: S.tile,
      onClick: n,
      onDoubleClick: _,
      onContextMenu: I,
      inCall: N,
      width: t,
      popoutType: A
    }, e.id));
  (0, d.Z)({
    type: l.ImpressionTypes.VIEW,
    name: l.ImpressionNames.CHANNEL_CALL_VIDEO_GRID_VIEW,
    properties: {
      total_participants: T,
      can_invite: U,
      is_afk_channel: G,
      channel_user_limit: P.userLimit
    }
  }, {
    trackOnInitialLoad: true
  }, []), null != R && !G && (!(M >= 2) || !F || V || H || z ? B && 1 === M && U && (F && !V ? W.push(e => (0, r.jsx)(O.h, {
    channel: P,
    guild: R,
    width: e,
    inPopout: w,
    handleClose: L,
    userParticipantCount: M
  })) : W.push(e => (0, r.jsx)(C.Z, {
    width: e,
    channel: P,
    guild: R,
    inPopout: w
  }))) : W.push(e => (0, r.jsx)(O.h, {
    channel: P,
    guild: R,
    width: e,
    inPopout: w,
    handleClose: L,
    userParticipantCount: M
  })));
  let K = i.useCallback(e => {
    var t, n;
    return null != (n = null == (t = k[e]) ? true : t.id) ? n : "empty-tile"
  }, [k]);
  return (0, r.jsx)(m.Z, {
    className: Z,
    keyExtractor: K,
    paddingTop: 64,
    paddingBottom: 64,
    children: W
  })
}