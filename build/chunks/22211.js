/** Chunk was on web (https://canary.discord.comweb.895a2488cd77ea6e.js.js) **/
"use strict";
n.d(t, {
  Z: () => p
});
var r = n(442837),
  i = n(661869),
  o = n(387343),
  a = n(449605),
  s = n(199902),
  l = n(592125),
  c = n(496675),
  u = n(158776),
  d = n(979651),
  f = n(561308);

function p(e) {
  let t = (0, f.kr)(e),
    n = (0, r.e7)([d.Z, l.Z, c.Z], () => {
      if (!t || e.author_type !== i.i.USER) return null;
      let n = d.Z.getVoiceStateForUser(e.author_id),
        r = l.Z.getChannel(null == n ? void 0 : n.channelId),
        a = "channel_id" in e ? e.channel_id : null;
      return (null == a || a === (null == n ? void 0 : n.channelId)) && (null == r || (0, o.Z)(r, c.Z)) ? r : null
    }, [e, t]),
    p = (0, r.e7)([u.Z], () => null != t ? u.Z.getPrimaryActivity(e.author_id, null == n ? void 0 : n.guild_id) : null, [n, e.author_id, t]),
    _ = (0, r.e7)([s.Z], () => t ? s.Z.getStreamForUser(e.author_id, null == n ? void 0 : n.guild_id) : null, [n, e.author_id, t]),
    {
      previewUrl: h
    } = (0, a.Z)(null == _ ? void 0 : _.guildId, null == _ ? void 0 : _.channelId, null == _ ? void 0 : _.ownerId);
  return {
    channel: n,
    activity: p,
    streamPreviewUrl: h,
    stream: _
  }
}