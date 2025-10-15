/** Chunk was on 50118 **/
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
  } = e, A = (0, m.bp)() === j.IlC.POPOUT, w = (0, o.e7)([C.Z], () => C.Z.getGuild(I.guild_id), [I.guild_id]), {
    dismissedActivityEntryPointTileChannel: M
  } = (0, x.d)(), R = (0, o.e7)([p.Z], () => p.Z.getUserParticipantCount(I.id), [I]), L = (0, b.bt)(I.id, t), D = r.useCallback(() => {
    (0, a.j)(() => {
      x.d.setState({
        dismissedActivityEntryPointTileChannel: I.id
      })
    })
  }, [I.id]);
  r.useEffect(() => {
    null != M && I.id !== M && (0, a.j)(() => {
      x.d.setState({
        dismissedActivityEntryPointTileChannel: null
      })
    })
  }, [I.id, M]);
  let k = (0, o.e7)([y.Z], () => I.isPrivate() || (0, f.b)(y.Z, w, I), [w, I]),
    U = (null == w ? true : w.afkChannelId) === I.id,
    B = I.userLimit <= 0 || I.userLimit > 1,
    H = (0, o.e7)([c.ZP], () => c.ZP.getEmbeddedActivitiesForChannel(I.id).length <= 0),
    V = (0, h.Nj)(s.z.VC_TILE_ACTIVITIES_ENTRY_POINT),
    F = (0, u.KF)(I.id) !== u.jy.CAN_LAUNCH,
    G = null != M && M === I.id,
    W = L.map(e => t => (0, i.jsx)(v.ZP, {
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
      can_invite: k,
      is_afk_channel: U,
      channel_user_limit: I.userLimit
    }
  }, {
    trackOnInitialLoad: true
  }, []), null != w && !U && (!(R >= 2) || !H || F || V || G ? B && 1 === R && k && (H && !F ? W.push(e => (0, i.jsx)(_.h, {
    channel: I,
    guild: w,
    width: e,
    inPopout: A,
    handleClose: D,
    userParticipantCount: R
  })) : W.push(e => (0, i.jsx)(O.Z, {
    width: e,
    channel: I,
    guild: w,
    inPopout: A
  }))) : W.push(e => (0, i.jsx)(_.h, {
    channel: I,
    guild: w,
    width: e,
    inPopout: A,
    handleClose: D,
    userParticipantCount: R
  })));
  let z = r.useCallback(e => {
    var t, n;
    return null != (n = null == (t = L[e]) ? true : t.id) ? n : "empty-tile"
  }, [L]);
  return (0, i.jsx)(g.Z, {
    className: Z,
    keyExtractor: z,
    paddingTop: 64,
    paddingBottom: 64,
    children: W
  })
}