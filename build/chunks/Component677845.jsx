/** Chunk was on 32202 **/
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
    totalNumberOfParticipants: N
  } = e, A = (0, m.bp)() === j.IlC.POPOUT, w = (0, o.e7)([y.Z], () => y.Z.getGuild(I.guild_id), [I.guild_id]), {
    dismissedActivityEntryPointTileChannel: M
  } = (0, x.d)(), R = (0, o.e7)([p.Z], () => p.Z.getUserParticipantCount(I.id), [I]), k = (0, b.bt)(I.id, t), L = i.useCallback(() => {
    (0, a.j)(() => {
      x.d.setState({
        dismissedActivityEntryPointTileChannel: I.id
      })
    })
  }, [I.id]);
  i.useEffect(() => {
    null != M && I.id !== M && (0, a.j)(() => {
      x.d.setState({
        dismissedActivityEntryPointTileChannel: null
      })
    })
  }, [I.id, M]);
  let D = (0, o.e7)([C.Z], () => I.isPrivate() || (0, f.b)(C.Z, w, I), [w, I]),
    U = (null == w ? true : w.afkChannelId) === I.id,
    B = I.userLimit <= 0 || I.userLimit > 1,
    H = (0, o.e7)([c.ZP], () => c.ZP.getEmbeddedActivitiesForChannel(I.id).length <= 0),
    F = (0, h.Nj)(s.z.VC_TILE_ACTIVITIES_ENTRY_POINT),
    V = (0, u.KF)(I.id) !== u.jy.CAN_LAUNCH,
    G = null != M && M === I.id,
    z = k.map(e => t => (0, r.jsx)(v.ZP, {
      participant: e,
      channel: I,
      className: E.tile,
      onClick: n,
      onDoubleClick: S,
      onContextMenu: P,
      inCall: T,
      width: t,
      inPopout: A
    }, e.id));
  (0, d.Z)({
    type: l.ImpressionTypes.VIEW,
    name: l.ImpressionNames.CHANNEL_CALL_VIDEO_GRID_VIEW,
    properties: {
      total_participants: N,
      can_invite: D,
      is_afk_channel: U,
      channel_user_limit: I.userLimit
    }
  }, {
    trackOnInitialLoad: true
  }, []), null != w && !U && (!(R >= 2) || !H || V || F || G ? B && 1 === R && D && (H && !V ? z.push(e => (0, r.jsx)(_.h, {
    channel: I,
    guild: w,
    width: e,
    inPopout: A,
    handleClose: L,
    userParticipantCount: R
  })) : z.push(e => (0, r.jsx)(O.Z, {
    width: e,
    channel: I,
    guild: w,
    inPopout: A
  }))) : z.push(e => (0, r.jsx)(_.h, {
    channel: I,
    guild: w,
    width: e,
    inPopout: A,
    handleClose: L,
    userParticipantCount: R
  })));
  let W = i.useCallback(e => {
    var t, n;
    return null != (n = null == (t = k[e]) ? true : t.id) ? n : "empty-tile"
  }, [k]);
  return (0, r.jsx)(g.Z, {
    className: Z,
    keyExtractor: W,
    paddingTop: 64,
    paddingBottom: 64,
    children: z
  })
}