/** Chunk was on web.js **/
/** chunk id: 850827, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => L
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk512722 = require("./512722.js"),
  s = require.n(Chunk512722),
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
let L = (0, Chunk730749.Z)(e => {
  let {
    activity: t,
    embeddedActivity: n,
    user: i,
    applicationStream: o,
    className: u,
    guildId: L,
    channelId: j,
    source: M,
    color: k = c.zx.Colors.WHITE,
    look: U = c.zx.Looks.OUTLINED,
    type: G,
    onAction: B
  } = e, Z = (0, l.e7)([h.default], () => {
    let e = h.default.getCurrentUser();
    return s()(null != e, "UserActivityActions: currentUser cannot be undefined"), e
  }), V = G === O.Y.STREAM_PREVIEW || null != o, F = (0, b.Z)(t), H = F || V ? f.Z.Direction.HORIZONTAL : f.Z.Direction.VERTICAL, Y = (null == t ? true : t.type) === D.IIU.HANG_STATUS, W = (0, l.e7)([m.Z, p.Z], () => {
    var e;
    return Y ? p.Z.getChannel(null == (e = m.Z.getVoiceStateForUser(i.id)) ? true : e.channelId) : null
  }), K = () => {
    if ((0, y.Z)(t)) return (0, r.jsx)(v.Z, {
      platform: d.Z.get(D.ABu.XBOX),
      look: U,
      color: k,
      onAction: B,
      Icon: E.Z
    }, "ConnectPlatformActivityButton");
    if ((null == t ? true : t.platform) === D.M7m.PS4 || (null == t ? true : t.platform) === D.M7m.PS5) return (0, r.jsx)(v.Z, {
      look: U,
      color: k,
      platform: d.Z.get(D.ABu.PLAYSTATION),
      onAction: B,
      Icon: g.Z
    }, "ConnectPlatformActivityButton");
    if (F) {
      let e = (0, r.jsx)(R.Z, {
          activity: t,
          user: i,
          guildId: L,
          channelId: j,
          source: M,
          look: U,
          color: k,
          onAction: B
        }, "spotify-activity-sync-button"),
        n = (0, r.jsx)(N.Z, {
          activity: t,
          user: i,
          source: M,
          look: U,
          color: k,
          onAction: B
        }, "spotify-activity-play-button");
      return (0, r.jsxs)(r.Fragment, {
        children: [n, e]
      })
    }
    if ((0, _.dS)(t)) {
      let e = (0, _.rq)(t);
      return null == e ? null : (0, r.jsx)(A.Z, {
        guildId: e.guildId,
        channelId: e.channelId,
        color: k,
        look: U,
        onAction: B
      }, e.channelId)
    }
    return V ? (0, r.jsx)(w.Z, {
      isCurrentUser: Z.id === i.id,
      color: k,
      look: U,
      applicationStream: o,
      onAction: B
    }, "watch-button") : Y && null != W ? (0, r.jsx)(S.Z, {
      color: k,
      look: U,
      hangStatusChannel: W,
      onAction: B
    }, "hang-status-button") : (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(P.Z, {
        activity: t,
        color: k,
        look: U,
        onAction: B
      }, "watch-button"), (0, r.jsx)(T.Z, {
        activity: t,
        embeddedActivity: n,
        user: i,
        color: k,
        look: U,
        onAction: B
      }, "join-activity-button"), (0, r.jsx)(C.Z, {
        activity: t,
        user: i,
        color: k,
        look: U,
        onAction: B
      }, "notify-button"), (0, r.jsx)(I.Z, {
        user: i,
        color: k,
        look: U,
        activity: t,
        onAction: B
      }, "custom-activity-button")]
    })
  }, z = H === f.Z.Direction.VERTICAL;
  return (0, r.jsx)(f.Z, {
    grow: 0,
    align: f.Z.Align.STRETCH,
    direction: H,
    wrap: z ? f.Z.Wrap.WRAP : f.Z.Wrap.NO_WRAP,
    className: a()(u, x.buttonsWrapper, z ? x.vertical : x.horizontal),
    children: K()
  })
})