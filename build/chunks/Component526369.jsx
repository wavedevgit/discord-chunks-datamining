/** Chunk was on 44669 **/
/** chunk id: 526369, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => C
}), require("./321073.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk110259 = require("./110259.js"),
  Chunk121894 = require("./121894.js"),
  Chunk311907 = require("./311907.js"),
  Chunk554146 = require("./554146.js"),
  Chunk933958 = require("./933958.js"),
  Chunk782091 = require("./782091.js"),
  Chunk139286 = require("./139286.js"),
  Chunk313961 = require("./313961.js"),
  Chunk826673 = require("./826673.js"),
  Chunk855687 = require("./855687.js"),
  Chunk267102 = require("./267102.jsx"),
  Chunk733586 = require("./733586.jsx"),
  Chunk530804 = require("./530804.js"),
  Chunk71393 = require("./71393.js"),
  Chunk576705 = require("./576705.js"),
  Chunk686502 = require("./686502.jsx"),
  Chunk175203 = require("./175203.jsx"),
  Chunk263854 = require("./263854.js"),
  Chunk794927 = require("./794927.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk439197 = require("./439197.js");

function C(e) {
  let {
    participants: t,
    onClick: n,
    onDoubleClick: C,
    onContextMenu: S,
    channel: I,
    className: N,
    inCall: T,
    totalNumberOfParticipants: P,
    popoutType: w
  } = e, R = (0, f.Us)() === v.BRT.POPOUT, D = (0, a.bG)([A.A], () => A.A.getGuild(I.guild_id), [I.guild_id]), {
    dismissedActivityEntryPointTileChannel: L
  } = (0, _.P)(), M = (0, a.bG)([p.A], () => p.A.getUserParticipantCount(I.id), [I]), G = (0, b.vp)(I.id, t), k = l.useCallback(() => {
    (0, s.r)(() => {
      _.P.setState({
        dismissedActivityEntryPointTileChannel: I.id
      })
    })
  }, [I.id]);
  l.useEffect(() => {
    null != L && I.id !== L && (0, s.r)(() => {
      _.P.setState({
        dismissedActivityEntryPointTileChannel: null
      })
    })
  }, [I.id, L]);
  let U = (0, a.bG)([y.A], () => I.isPrivate() || (0, g.K)(y.A, D, I), [D, I]),
    V = (null == D ? true : D.afkChannelId) === I.id,
    B = I.userLimit <= 0 || I.userLimit > 1,
    H = (0, a.bG)([c.Ay], () => c.Ay.getEmbeddedActivitiesForChannel(I.id).length <= 0),
    F = (0, h.JZ)(o.M.VC_TILE_ACTIVITIES_ENTRY_POINT),
    Y = (0, u.et)(I.id) !== u.xy.CAN_LAUNCH,
    K = null != L && L === I.id,
    W = G.map(e => t => (0, r.jsx)(j.Ay, {
      participant: e,
      channel: I,
      className: E.V,
      onClick: n,
      onDoubleClick: C,
      onContextMenu: S,
      inCall: T,
      width: t,
      popoutType: w
    }, e.id));
  (0, d.A)({
    type: i.ImpressionTypes.VIEW,
    name: i.ImpressionNames.CHANNEL_CALL_VIDEO_GRID_VIEW,
    properties: {
      total_participants: P,
      can_invite: U,
      is_afk_channel: V,
      channel_user_limit: I.userLimit
    }
  }, {
    trackOnInitialLoad: true
  }, []), null != D && !V && (!(M >= 2) || !H || Y || F || K ? B && 1 === M && U && (H && !Y ? W.push(e => (0, r.jsx)(O.y, {
    channel: I,
    guild: D,
    width: e,
    inPopout: R,
    handleClose: k,
    userParticipantCount: M
  })) : W.push(e => (0, r.jsx)(x.A, {
    width: e,
    channel: I,
    guild: D,
    inPopout: R
  }))) : W.push(e => (0, r.jsx)(O.y, {
    channel: I,
    guild: D,
    width: e,
    inPopout: R,
    handleClose: k,
    userParticipantCount: M
  })));
  let z = l.useCallback(e => {
    var t, n;
    return null != (t = null == (n = G[e]) ? true : n.id) ? t : "empty-tile"
  }, [G]);
  return (0, r.jsx)(m.A, {
    className: N,
    keyExtractor: z,
    paddingTop: 64,
    paddingBottom: 64,
    children: W
  })
}