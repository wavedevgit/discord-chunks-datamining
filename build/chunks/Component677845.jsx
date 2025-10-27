/** Chunk was on 47840 **/
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
  Chunk312439 = require("./312439.js");

function S(e) {
  let {
    participants: t,
    onClick: n,
    onDoubleClick: S,
    onContextMenu: P,
    channel: I,
    className: Z,
    inCall: T,
    totalNumberOfParticipants: N,
    popoutType: A
  } = e, w = (0, m.bp)() === j.IlC.POPOUT, M = (0, o.e7)([C.Z], () => C.Z.getGuild(I.guild_id), [I.guild_id]), {
    dismissedActivityEntryPointTileChannel: R
  } = (0, x.d)(), L = (0, o.e7)([p.Z], () => p.Z.getUserParticipantCount(I.id), [I]), D = (0, b.bt)(I.id, t), k = r.useCallback(() => {
    (0, a.j)(() => {
      x.d.setState({
        dismissedActivityEntryPointTileChannel: I.id
      })
    })
  }, [I.id]);
  r.useEffect(() => {
    null != R && I.id !== R && (0, a.j)(() => {
      x.d.setState({
        dismissedActivityEntryPointTileChannel: null
      })
    })
  }, [I.id, R]);
  let U = (0, o.e7)([y.Z], () => I.isPrivate() || (0, f.b)(y.Z, M, I), [M, I]),
    B = (null == M ? true : M.afkChannelId) === I.id,
    H = I.userLimit <= 0 || I.userLimit > 1,
    F = (0, o.e7)([c.ZP], () => c.ZP.getEmbeddedActivitiesForChannel(I.id).length <= 0),
    V = (0, h.Nj)(s.z.VC_TILE_ACTIVITIES_ENTRY_POINT),
    G = (0, u.KF)(I.id) !== u.jy.CAN_LAUNCH,
    z = null != R && R === I.id,
    W = D.map(e => t => (0, i.jsx)(v.ZP, {
      participant: e,
      channel: I,
      className: E.tile,
      onClick: n,
      onDoubleClick: S,
      onContextMenu: P,
      inCall: T,
      width: t,
      popoutType: A
    }, e.id));
  (0, d.Z)({
    type: l.ImpressionTypes.VIEW,
    name: l.ImpressionNames.CHANNEL_CALL_VIDEO_GRID_VIEW,
    properties: {
      total_participants: N,
      can_invite: U,
      is_afk_channel: B,
      channel_user_limit: I.userLimit
    }
  }, {
    trackOnInitialLoad: true
  }, []), null != M && !B && (!(L >= 2) || !F || G || V || z ? H && 1 === L && U && (F && !G ? W.push(e => (0, i.jsx)(_.h, {
    channel: I,
    guild: M,
    width: e,
    inPopout: w,
    handleClose: k,
    userParticipantCount: L
  })) : W.push(e => (0, i.jsx)(O.Z, {
    width: e,
    channel: I,
    guild: M,
    inPopout: w
  }))) : W.push(e => (0, i.jsx)(_.h, {
    channel: I,
    guild: M,
    width: e,
    inPopout: w,
    handleClose: k,
    userParticipantCount: L
  })));
  let q = r.useCallback(e => {
    var t, n;
    return null != (n = null == (t = D[e]) ? true : t.id) ? n : "empty-tile"
  }, [D]);
  return (0, i.jsx)(g.Z, {
    className: Z,
    keyExtractor: q,
    paddingTop: 64,
    paddingBottom: 64,
    children: W
  })
}