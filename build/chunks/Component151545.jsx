/** Chunk was on web.js **/
/** chunk id: 151545, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => E
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk841784 = require("./841784.js"),
  Chunk503438 = require("./503438.js"),
  Chunk812206 = require("./812206.js"),
  Chunk835473 = require("./835473.js"),
  Chunk741570 = require("./741570.js"),
  Chunk592125 = require("./592125.js"),
  Chunk430824 = require("./430824.js"),
  Chunk979651 = require("./979651.js"),
  Chunk626135 = require("./626135.js"),
  Chunk409057 = require("./409057.jsx"),
  Chunk128277 = require("./128277.jsx"),
  Chunk981631 = require("./981631.js");

function E(e) {
  let {
    user: t,
    currentUser: n,
    activity: E,
    className: b,
    onClose: y
  } = e, {
    voiceGuild: O,
    voiceChannel: v
  } = (0, a.cj)([f.Z, _.Z, d.Z], () => {
    var e, n;
    let r = (0, o.Z)(E);
    if (!r && (null == E ? true : E.type) !== g.IIU.HANG_STATUS) return {};
    let i = r ? null == (e = _.Z.getVoiceStateForSession(t.id, null == E ? true : E.session_id)) ? true : e.channelId : null == (n = _.Z.getVoiceStateForUser(t.id)) ? true : n.channelId,
      a = d.Z.getChannel(i);
    return {
      voiceGuild: f.Z.getGuild(null == a ? true : a.getGuildId()),
      voiceChannel: a
    }
  }), I = (0, u.E)("UserProfileActivityCardWrapper", v), S = (null == E ? true : E.type) === g.IIU.HANG_STATUS && I ? v : null;
  (0, c.q)(null == E ? true : E.application_id);
  let T = (0, a.e7)([l.Z], () => (null == E ? true : E.application_id) != null ? l.Z.getApplication(E.application_id) : (null == E ? true : E.name) != null ? l.Z.getApplicationByName(E.name) : null);
  return (i.useEffect(() => {
    (null == E ? true : E.type) === g.IIU.HANG_STATUS && I && p.default.track(g.rMx.VIEW_HANG_STATUS, {
      source: "UserProfilePopout",
      guild_id: null == S ? true : S.guild_id,
      channel_id: null == S ? true : S.id
    })
  }, [null == E ? true : E.type, I, null == S ? true : S.id, null == S ? true : S.guild_id]), (null == E ? true : E.type) !== g.IIU.CUSTOM_STATUS && ((null == E ? true : E.type) !== g.IIU.HANG_STATUS || I)) ? (0, s.Z)(E) ? (0, r.jsx)(m.Z, {
    user: t,
    currentUser: n,
    activity: E,
    className: b,
    onClose: y
  }) : (0, r.jsx)(h.Z, {
    user: t,
    currentUser: n,
    activity: E,
    application: T,
    voiceGuild: O,
    voiceChannel: v,
    className: b,
    onClose: y
  }) : null
}