/** Chunk was on web.js **/
/** chunk id: 461715, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  $m: () => m,
  CI: () => _,
  tU: () => p
}), require("./228524.js"), require("./938796.js");
var Chunk833291 = require("./833291.js"),
  Chunk376943 = require("./376943.js"),
  Chunk71393 = require("./71393.js"),
  Chunk486020 = require("./486020.js"),
  Chunk562153 = require("./562153.js"),
  Chunk304162 = require("./304162.js"),
  Chunk652215 = require("./652215.js"),
  Chunk381941 = require("./381941.js"),
  Chunk985018 = require("./985018.jsx");
let f = 40;

function p(e) {
  var t, n, r, i, a;
  let {
    mediaPostEmbedData: c,
    guild: p,
    parentChannel: _,
    postThread: m,
    user: g,
    selectedGuildId: E,
    canAccess: y = false
  } = e;
  if (null == c) return null;
  let b = (0, l.et)(c.thumbnail),
    O = !y && c.has_media_attachment,
    v = y ? d.intl.string(d.t.UsZEBI) : d.intl.string(d.t.ReFzYZ),
    A = null != g ? s.Ay.getName(c.guild_id, c.channel_id, g) : true,
    I = null == g ? true : g.getAvatarURL(null == p ? true : p.id, f);
  (null == I || E !== c.guild_id) && (I = o.Ay.getGuildIconURL({
    id: c.guild_id,
    icon: c.guild_icon,
    size: f,
    canAnimate: false
  }));
  let S = h(c.thumbnail) && !O,
    T = (null == (r = c.thumbnail) ? true : r.filename) != null && (null == (a = c.thumbnail) || null == (i = a.filename) ? true : i.startsWith(u._W));
  return {
    title: null != (t = c.title) ? t : "",
    subtitle: c.description,
    ctaText: v,
    coverImage: b,
    coverImageOverlayText: O ? d.intl.string(d.t.Yonlia) : true,
    parentChannelId: c.parent_channel_id,
    threadId: c.channel_id,
    postThread: m,
    messageId: c.message_id,
    canAccess: y,
    guildId: c.guild_id,
    guildName: null != (n = null == p ? true : p.name) ? n : c.guild_name,
    authorId: null == c ? true : c.author_id,
    authorName: A,
    channelName: null == _ ? true : _.name,
    avatarUrl: I,
    shouldShowBlurredThumbnailImage: O,
    shouldContainMediaWithBackground: S,
    shouldSpoiler: T,
    obscureAwaitingScan: false,
    flags: c.flags,
    contentScanVersion: c.content_scan_version
  }
}

function _(e) {
  if (null == e) return;
  let t = (0, r.l7)(e);
  if (null == t) return;
  let n = (0, r.tl)(t);
  if (null != n) return (0, i.vu)(n)
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
  let n = a.A.getGuild(e);
  if (null == n || null == t) returnfalse;
  let r = n.features.has(c.GuildFeatures.CREATOR_MONETIZABLE) || n.features.has(c.GuildFeatures.CREATOR_MONETIZABLE_PROVISIONAL);
  returntrue === t.isMediaChannel() && r
}