/** Chunk was on web.js **/
/** chunk id: 874748, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  BC: () => m,
  LR: () => p,
  ku: () => _
}), require("./953529.js"), require("./997841.js");
var Chunk830121 = require("./830121.js"),
  Chunk754688 = require("./754688.js"),
  Chunk430824 = require("./430824.js"),
  Chunk768581 = require("./768581.js"),
  Chunk5192 = require("./5192.js"),
  Chunk154135 = require("./154135.js"),
  Chunk981631 = require("./981631.js"),
  Chunk959517 = require("./959517.js"),
  Chunk388032 = require("./388032.jsx");
let f = 40;

function _(e) {
  var t, n, r, i, a;
  let {
    mediaPostEmbedData: c,
    guild: _,
    parentChannel: p,
    postThread: m,
    user: g,
    selectedGuildId: E,
    canAccess: b = false
  } = e;
  if (null == c) return null;
  let y = (0, l.EY)(c.thumbnail),
    O = !b && c.has_media_attachment,
    v = b ? d.intl.string(d.t.UsZEBI) : d.intl.string(d.t.ReFzYZ),
    I = null != g ? s.ZP.getName(c.guild_id, c.channel_id, g) : true,
    T = null == g ? true : g.getAvatarURL(null == _ ? true : _.id, f);
  (null == T || E !== c.guild_id) && (T = o.ZP.getGuildIconURL({
    id: c.guild_id,
    icon: c.guild_icon,
    size: f,
    canAnimate: false
  }));
  let S = h(c.thumbnail) && !O,
    A = (null == (t = c.thumbnail) ? true : t.filename) != null && (null == (r = c.thumbnail) || null == (n = r.filename) ? true : n.startsWith(u._j));
  return {
    title: null != (i = c.title) ? i : "",
    subtitle: c.description,
    ctaText: v,
    coverImage: y,
    coverImageOverlayText: O ? d.intl.string(d.t.Yonlia) : true,
    parentChannelId: c.parent_channel_id,
    threadId: c.channel_id,
    postThread: m,
    messageId: c.message_id,
    canAccess: b,
    guildId: c.guild_id,
    guildName: null != (a = null == _ ? true : _.name) ? a : c.guild_name,
    authorId: null == c ? true : c.author_id,
    authorName: I,
    channelName: null == p ? true : p.name,
    avatarUrl: T,
    shouldShowBlurredThumbnailImage: O,
    shouldContainMediaWithBackground: S,
    shouldSpoiler: A,
    obscureAwaitingScan: false,
    flags: c.flags,
    contentScanVersion: c.content_scan_version
  }
}

function p(e) {
  if (null == e) return;
  let t = (0, r.FO)(e);
  if (null == t) return;
  let n = (0, r.Sq)(t);
  if (null != n) return (0, i.Qj)(n)
}

function h(e) {
  if (null == e) returnfalse;
  let {
    height: t,
    width: n
  } = e;
  return null != t && null != n && t >= n
}

function m(e, t) {
  let n = a.Z.getGuild(e);
  if (null == n || null == t) returnfalse;
  let r = n.features.has(c.GuildFeatures.CREATOR_MONETIZABLE) || n.features.has(c.GuildFeatures.CREATOR_MONETIZABLE_PROVISIONAL);
  returntrue === t.isMediaChannel() && r
}