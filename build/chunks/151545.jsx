/** Chunk was on web.js **/
/** chunk id: 151545, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => O
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
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
  Chunk81570 = require("./81570.js"),
  Chunk409057 = require("./409057.js"),
  Chunk443375 = require("./443375.js"),
  Chunk128277 = require("./128277.jsx"),
  Chunk263059 = require("./263059.js"),
  Chunk981631 = require("./981631.js");

function O(e) {
  let {
    user: t,
    currentUser: n,
    activity: O,
    className: v,
    onClose: I,
    profileGuildId: T
  } = e, S = (0, h.T)({
    location: "UserProfileActivityCardWrapper"
  }), A = t.id === n.id, N = S && !A && !t.bot, {
    voiceGuild: C,
    voiceChannel: R
  } = (0, o.cj)([f.Z, _.Z, d.Z], () => {
    var e, n;
    let r = (0, a.Z)(O);
    if (!r && (null == O ? true : O.type) !== y.IIU.HANG_STATUS) return {};
    let i = r ? null == (e = _.Z.getVoiceStateForSession(t.id, null == O ? true : O.session_id)) ? true : e.channelId : null == (n = _.Z.getVoiceStateForUser(t.id)) ? true : n.channelId,
      o = d.Z.getChannel(i);
    return {
      voiceGuild: f.Z.getGuild(null == o ? true : o.getGuildId()),
      voiceChannel: o
    }
  }), P = (0, u.E)("UserProfileActivityCardWrapper", R), w = (null == O ? true : O.type) === y.IIU.HANG_STATUS && P ? R : null;
  (0, c.q)(null == O ? true : O.application_id);
  let D = (0, o.e7)([l.Z], () => (null == O ? true : O.application_id) != null ? l.Z.getApplication(O.application_id) : (null == O ? true : O.name) != null ? l.Z.getApplicationByName(O.name) : null);
  return (i.useEffect(() => {
    (null == O ? true : O.type) === y.IIU.HANG_STATUS && P && p.default.track(y.rMx.VIEW_HANG_STATUS, {
      source: "UserProfilePopout",
      guild_id: null == w ? true : w.guild_id,
      channel_id: null == w ? true : w.id
    })
  }, [null == O ? true : O.type, P, null == w ? true : w.id, null == w ? true : w.guild_id]), (null == O ? true : O.type) !== y.IIU.CUSTOM_STATUS && ((null == O ? true : O.type) !== y.IIU.HANG_STATUS || P)) ? (0, s.Z)(O) ? N ? <b.Z user={t} currentUser={n} activity={O} profileGuildId={T} className={v} onClose={I} /> : <E.Z user={t} currentUser={n} activity={O} className={v} onClose={I} /> : N ? <g.Z user={t} currentUser={n} activity={O} application={D} voiceGuild={C} voiceChannel={R} profileGuildId={T} className={v} onClose={I} /> : <m.Z user={t} currentUser={n} activity={O} application={D} voiceGuild={C} voiceChannel={R} className={v} onClose={I} /> : null
}