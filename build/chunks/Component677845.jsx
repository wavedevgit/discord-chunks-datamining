/** Chunk was on 36499 **/
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
    onContextMenu: P,
    channel: I,
    className: Z,
    inCall: T,
    totalNumberOfParticipants: N
  } = e, A = (0, c.bp)() === O.IlC.POPOUT, w = (0, o.e7)([y.Z], () => y.Z.getGuild(I.guild_id), [I.guild_id]), {
    dismissedActivityEntryPointTileChannel: R
  } = (0, v.d)(), M = (0, o.e7)([h.Z], () => h.Z.getUserParticipantCount(I.id), [I]), k = (0, b.bt)(I.id, t), D = i.useCallback(() => {
    (0, a.j)(() => {
      v.d.setState({
        dismissedActivityEntryPointTileChannel: I.id
      })
    })
  }, [I.id]);
  i.useEffect(() => {
    null != R && I.id !== R && (0, a.j)(() => {
      v.d.setState({
        dismissedActivityEntryPointTileChannel: null
      })
    })
  }, [I.id, R]);
  let L = (0, o.e7)([_.Z], () => I.isPrivate() || (0, m.b)(_.Z, w, I), [w, I]),
    U = (null == w ? true : w.afkChannelId) === I.id,
    B = I.userLimit <= 0 || I.userLimit > 1,
    F = (0, o.e7)([u.ZP], () => u.ZP.getEmbeddedActivitiesForChannel(I.id).length <= 0),
    H = (0, f.Nj)(s.z.VC_TILE_ACTIVITIES_ENTRY_POINT),
    G = (0, d.KF)(I.id) !== d.jy.CAN_LAUNCH,
    V = null != R && R === I.id,
    z = k.map(e => t => (0, r.jsx)(x.ZP, {
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
  (0, p.Z)({
    type: l.ImpressionTypes.VIEW,
    name: l.ImpressionNames.CHANNEL_CALL_VIDEO_GRID_VIEW,
    properties: {
      total_participants: N,
      can_invite: L,
      is_afk_channel: U,
      channel_user_limit: I.userLimit
    }
  }, {
    trackOnInitialLoad: true
  }, []), null != w && !U && (!(M >= 2) || !F || G || H || V ? B && 1 === M && L && (F && !G ? z.push(e => (0, r.jsx)(C.h, {
    channel: I,
    guild: w,
    width: e,
    inPopout: A,
    handleClose: D,
    userParticipantCount: M
  })) : z.push(e => (0, r.jsx)(j.Z, {
    width: e,
    channel: I,
    guild: w,
    inPopout: A
  }))) : z.push(e => (0, r.jsx)(C.h, {
    channel: I,
    guild: w,
    width: e,
    inPopout: A,
    handleClose: D,
    userParticipantCount: M
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