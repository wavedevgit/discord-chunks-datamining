/** Chunk was on 96750 **/
/** chunk id: 850827, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => D
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk512722 = require("./512722.js"),
  o = require.n(Chunk512722),
  Chunk442837 = require("./442837.js"),
  Chunk755721 = require("./755721.js"),
  Chunk730749 = require("./730749.jsx"),
  Chunk726542 = require("./726542.js"),
  Chunk600164 = require("./600164.jsx"),
  Chunk750154 = require("./750154.js"),
  Chunk592125 = require("./592125.js"),
  Chunk594174 = require("./594174.js"),
  Chunk979651 = require("./979651.js"),
  Chunk374129 = require("./374129.jsx"),
  Chunk639351 = require("./639351.jsx"),
  Chunk503438 = require("./503438.js"),
  Chunk802856 = require("./802856.js"),
  Chunk387903 = require("./387903.jsx"),
  Chunk606925 = require("./606925.jsx"),
  Chunk719216 = require("./719216.jsx"),
  Chunk429589 = require("./429589.jsx"),
  Chunk276149 = require("./276149.jsx"),
  Chunk636245 = require("./636245.jsx"),
  Chunk697761 = require("./697761.jsx"),
  Chunk611459 = require("./611459.jsx"),
  Chunk544671 = require("./544671.jsx"),
  Chunk757182 = require("./757182.jsx"),
  Chunk910424 = require("./910424.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk964719 = require("./964719.js");
let D = (0, Chunk730749.Z)(e => {
  let {
    activity: t,
    embeddedActivity: n,
    user: i,
    applicationStream: a,
    className: u,
    guildId: D,
    channelId: k,
    source: L,
    color: M = c.zx.Colors.WHITE,
    look: U = c.zx.Looks.OUTLINED,
    type: R,
    onAction: V
  } = e, F = (0, s.e7)([g.default], () => {
    let e = g.default.getCurrentUser();
    return o()(null != e, "UserActivityActions: currentUser cannot be undefined"), e
  }), B = R === O.Y.STREAM_PREVIEW || null != a, W = (0, h.Z)(t), Y = W || B ? p.Z.Direction.HORIZONTAL : p.Z.Direction.VERTICAL, H = (null == t ? true : t.type) === Z.IIU.HANG_STATUS, G = (0, s.e7)([v.Z, m.Z], () => {
    var e;
    return H ? m.Z.getChannel(null == (e = v.Z.getVoiceStateForUser(i.id)) ? true : e.channelId) : null
  }), z = Y === p.Z.Direction.VERTICAL;
  return (0, r.jsx)(p.Z, {
    grow: 0,
    align: p.Z.Align.STRETCH,
    direction: Y,
    wrap: z ? p.Z.Wrap.WRAP : p.Z.Wrap.NO_WRAP,
    className: l()(u, A.buttonsWrapper, z ? A.vertical : A.horizontal),
    children: (() => {
      if ((0, y.Z)(t)) return (0, r.jsx)(j.Z, {
        platform: d.Z.get(Z.ABu.XBOX),
        look: U,
        color: M,
        onAction: V,
        Icon: b.Z
      }, "ConnectPlatformActivityButton");
      if ((null == t ? true : t.platform) === Z.M7m.PS4 || (null == t ? true : t.platform) === Z.M7m.PS5) return (0, r.jsx)(j.Z, {
        look: U,
        color: M,
        platform: d.Z.get(Z.ABu.PLAYSTATION),
        onAction: V,
        Icon: _.Z
      }, "ConnectPlatformActivityButton");
      if (W) {
        let e = (0, r.jsx)(w.Z, {
            activity: t,
            user: i,
            guildId: D,
            channelId: k,
            source: L,
            look: U,
            color: M,
            onAction: V
          }, "spotify-activity-sync-button"),
          n = (0, r.jsx)(E.Z, {
            activity: t,
            user: i,
            source: L,
            look: U,
            color: M,
            onAction: V
          }, "spotify-activity-play-button");
        return (0, r.jsxs)(r.Fragment, {
          children: [n, e]
        })
      }
      if ((0, f.dS)(t)) {
        let e = (0, f.rq)(t);
        return null == e ? null : (0, r.jsx)(P.Z, {
          guildId: e.guildId,
          channelId: e.channelId,
          color: M,
          look: U,
          onAction: V
        }, e.channelId)
      }
      return B ? (0, r.jsx)(N.Z, {
        isCurrentUser: F.id === i.id,
        color: M,
        look: U,
        applicationStream: a,
        onAction: V
      }, "watch-button") : H && null != G ? (0, r.jsx)(I.Z, {
        color: M,
        look: U,
        hangStatusChannel: G,
        onAction: V
      }, "hang-status-button") : (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(T.Z, {
          activity: t,
          color: M,
          look: U,
          onAction: V
        }, "watch-button"), (0, r.jsx)(x.Z, {
          activity: t,
          embeddedActivity: n,
          user: i,
          color: M,
          look: U,
          onAction: V
        }, "join-activity-button"), (0, r.jsx)(C.Z, {
          activity: t,
          user: i,
          color: M,
          look: U,
          onAction: V
        }, "notify-button"), (0, r.jsx)(S.Z, {
          user: i,
          color: M,
          look: U,
          activity: t,
          onAction: V
        }, "custom-activity-button")]
      })
    })()
  })
})