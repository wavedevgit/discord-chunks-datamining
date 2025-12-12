/** Chunk was on web.js **/
/** chunk id: 874748, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  BC: () => h,
  LR: () => _,
  ku: () => p
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

function p(e) {
  var t, n, r, i, o;
  let {
    mediaPostEmbedData: c,
    guild: p,
    parentChannel: _,
    postThread: h,
    user: g,
    selectedGuildId: E,
    canAccess: b = false
  } = e;
  if (null == c) return null;
  let y = (0, l.EY)(c.thumbnail),
    O = !b && c.has_media_attachment,
    v = b ? d.intl.string(d.t.UsZEBI) : d.intl.string(d.t.ReFzYZ),
    S = null != g ? s.ZP.getName(c.guild_id, c.channel_id, g) : true,
    I = null == g ? true : g.getAvatarURL(null == p ? true : p.id, f);
  (null == I || E !== c.guild_id) && (I = a.ZP.getGuildIconURL({
    id: c.guild_id,
    icon: c.guild_icon,
    size: f,
    canAnimate: false
  }));
  let T = m(c.thumbnail) && !O,
    C = (null == (t = c.thumbnail) ? true : t.filename) != null && (null == (r = c.thumbnail) || null == (n = r.filename) ? true : n.startsWith(u._j));
  return {
    title: null != (i = c.title) ? i : "",
    subtitle: c.description,
    ctaText: v,
    coverImage: y,
    coverImageOverlayText: O ? d.intl.string(d.t.Yonlia) : true,
    parentChannelId: c.parent_channel_id,
    threadId: c.channel_id,
    postThread: h,
    messageId: c.message_id,
    canAccess: b,
    guildId: c.guild_id,
    guildName: null != (o = null == p ? true : p.name) ? o : c.guild_name,
    authorId: null == c ? true : c.author_id,
    authorName: S,
    channelName: null == _ ? true : _.name,
    avatarUrl: I,
    shouldShowBlurredThumbnailImage: O,
    shouldContainMediaWithBackground: T,
    shouldSpoiler: C,
    obscureAwaitingScan: false,
    flags: c.flags,
    contentScanVersion: c.content_scan_version
  }
}

function _(e) {
  if (null == e) return;
  let t = (0, r.FO)(e);
  if (null == t) return;
  let n = (0, r.Sq)(t);
  if (null != n) return (0, i.Qj)(n)
}

function m(e) {
  if (null == e) returnfalse;
  let {
    height: t,
    width: n
  } = e;
  return null != t && null != n && t >= n
}

function h(e, t) {
  let n = o.Z.getGuild(e);
  if (null == n || null == t) returnfalse;
  let r = n.features.has(c.GuildFeatures.CREATOR_MONETIZABLE) || n.features.has(c.GuildFeatures.CREATOR_MONETIZABLE_PROVISIONAL);
  returntrue === t.isMediaChannel() && r
}