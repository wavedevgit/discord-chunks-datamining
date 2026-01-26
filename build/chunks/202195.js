/** Chunk was on web.js **/
/** chunk id: 202195, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => p
});
var Chunk311907 = require("./311907.js"),
  Chunk6161 = require("./6161.js"),
  Chunk890615 = require("./890615.js"),
  Chunk450149 = require("./450149.js"),
  Chunk616356 = require("./616356.js"),
  Chunk734057 = require("./734057.js"),
  Chunk576705 = require("./576705.js"),
  Chunk290863 = require("./290863.js"),
  Chunk977997 = require("./977997.js"),
  Chunk583846 = require("./583846.js");

function p(e) {
  let t = (0, f.JM)(e),
    n = (0, r.bG)([d.A, l.A, c.A], () => {
      if (!t || e.author_type !== i.ContentInventoryAuthorType.USER) return null;
      let n = d.A.getVoiceStateForUser(e.author_id),
        r = l.A.getChannel(null == n ? true : n.channelId),
        s = "channel_id" in e ? e.channel_id : null;
      return (null == s || s === (null == n ? true : n.channelId)) && (null == r || (0, a.A)(r, c.A)) ? r : null
    }, [e, t]),
    p = (0, r.bG)([u.A], () => null != t ? u.A.getPrimaryActivity(e.author_id, null == n ? true : n.guild_id) : null, [n, e.author_id, t]),
    _ = (0, r.bG)([o.A], () => t ? o.A.getStreamForUser(e.author_id, null == n ? true : n.guild_id) : null, [n, e.author_id, t]),
    {
      previewUrl: h
    } = (0, s.A)(null == _ ? true : _.guildId, null == _ ? true : _.channelId, null == _ ? true : _.ownerId);
  return {
    channel: n,
    activity: p,
    streamPreviewUrl: h,
    stream: _
  }
}