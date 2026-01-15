/** Chunk was on web.js **/
/** chunk id: 22211, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => p
});
var Chunk442837 = require("./442837.js"),
  Chunk661869 = require("./661869.js"),
  Chunk387343 = require("./387343.js"),
  Chunk449605 = require("./449605.js"),
  Chunk199902 = require("./199902.js"),
  Chunk592125 = require("./592125.js"),
  Chunk496675 = require("./496675.js"),
  Chunk158776 = require("./158776.js"),
  Chunk979651 = require("./979651.js"),
  Chunk561308 = require("./561308.js");

function p(e) {
  let t = (0, f.kr)(e),
    n = (0, r.e7)([d.Z, l.Z, c.Z], () => {
      if (!t || e.author_type !== i.i.USER) return null;
      let n = d.Z.getVoiceStateForUser(e.author_id),
        r = l.Z.getChannel(null == n ? true : n.channelId),
        o = "channel_id" in e ? e.channel_id : null;
      return (null == o || o === (null == n ? true : n.channelId)) && (null == r || (0, a.Z)(r, c.Z)) ? r : null
    }, [e, t]),
    p = (0, r.e7)([u.Z], () => null != t ? u.Z.getPrimaryActivity(e.author_id, null == n ? true : n.guild_id) : null, [n, e.author_id, t]),
    _ = (0, r.e7)([s.Z], () => t ? s.Z.getStreamForUser(e.author_id, null == n ? true : n.guild_id) : null, [n, e.author_id, t]),
    {
      previewUrl: h
    } = (0, o.Z)(null == _ ? true : _.guildId, null == _ ? true : _.channelId, null == _ ? true : _.ownerId);
  return {
    channel: n,
    activity: p,
    streamPreviewUrl: h,
    stream: _
  }
}