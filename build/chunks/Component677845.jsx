/** Chunk was on web.js **/
/** chunk id: 677845, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => A
}), require("./539854.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
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

function A(e) {
  let {
    participants: t,
    onClick: n,
    onDoubleClick: A,
    onContextMenu: N,
    channel: C,
    className: R,
    inCall: P,
    totalNumberOfParticipants: w
  } = e, D = (0, c.bp)() === T.IlC.POPOUT, L = (0, s.e7)([E.Z], () => E.Z.getGuild(C.guild_id), [C.guild_id]), {
    dismissedActivityEntryPointTileChannel: x
  } = (0, v.d)(), M = (0, s.e7)([_.Z], () => _.Z.getUserParticipantCount(C.id), [C]), k = (0, g.bt)(C.id, t), j = i.useCallback(() => {
    (0, a.j)(() => {
      v.d.setState({
        dismissedActivityEntryPointTileChannel: C.id
      })
    })
  }, [C.id]);
  i.useEffect(() => {
    null != x && C.id !== x && (0, a.j)(() => {
      v.d.setState({
        dismissedActivityEntryPointTileChannel: null
      })
    })
  }, [C.id, x]);
  let U = (0, s.e7)([b.Z], () => C.isPrivate() || (0, h.b)(b.Z, L, C), [L, C]),
    G = (null == L ? true : L.afkChannelId) === C.id,
    B = C.userLimit <= 0 || C.userLimit > 1,
    Z = (0, s.e7)([u.ZP], () => u.ZP.getEmbeddedActivitiesForChannel(C.id).length <= 0),
    F = (0, p.Nj)(l.z.VC_TILE_ACTIVITIES_ENTRY_POINT),
    V = (0, d.KF)(C.id) !== d.jy.CAN_LAUNCH,
    H = null != x && x === C.id,
    Y = k.map(e => t => (0, r.jsx)(O.ZP, {
      participant: e,
      channel: C,
      className: S.tile,
      onClick: n,
      onDoubleClick: A,
      onContextMenu: N,
      inCall: P,
      width: t,
      inPopout: D
    }, e.id));
  (0, f.Z)({
    type: o.ImpressionTypes.VIEW,
    name: o.ImpressionNames.CHANNEL_CALL_VIDEO_GRID_VIEW,
    properties: {
      total_participants: w,
      can_invite: U,
      is_afk_channel: G,
      channel_user_limit: C.userLimit
    }
  }, {
    trackOnInitialLoad: true
  }, []), null != L && !G && (!(M >= 2) || !Z || V || F || H ? B && 1 === M && U && (Z && !V ? Y.push(e => (0, r.jsx)(y.h, {
    channel: C,
    guild: L,
    width: e,
    inPopout: D,
    handleClose: j,
    userParticipantCount: M
  })) : Y.push(e => (0, r.jsx)(I.Z, {
    width: e,
    channel: C,
    guild: L,
    inPopout: D
  }))) : Y.push(e => (0, r.jsx)(y.h, {
    channel: C,
    guild: L,
    width: e,
    inPopout: D,
    handleClose: j,
    userParticipantCount: M
  })));
  let W = i.useCallback(e => {
    var t, n;
    return null != (n = null == (t = k[e]) ? true : t.id) ? n : "empty-tile"
  }, [k]);
  return (0, r.jsx)(m.Z, {
    className: R,
    keyExtractor: W,
    paddingTop: 64,
    paddingBottom: 64,
    children: Y
  })
}