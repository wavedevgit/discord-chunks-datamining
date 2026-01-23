/** Chunk was on web.js **/
/** chunk id: 95701, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A_: () => I,
  B4: () => es,
  Do: () => x,
  Gw: () => j,
  IY: () => ee,
  JT: () => Q,
  LE: () => et,
  Le: () => Y,
  Lt: () => ek,
  MK: () => k,
  OU: () => R,
  OY: () => eV,
  QE: () => D,
  TA: () => e_,
  UE: () => eG,
  YB: () => ey,
  ZE: () => en,
  Z_: () => X,
  ay: () => P,
  bk: () => J,
  cq: () => eL,
  createChannelRecord: () => eH,
  fT: () => z,
  gV: () => F,
  ig: () => H,
  jb: () => eb,
  k: () => ei,
  k3: () => U,
  ke: () => T,
  kr: () => eo,
  nb: () => er,
  oH: () => C,
  oh: () => eB,
  p6: () => ea,
  pQ: () => G,
  pd: () => eh,
  tr: () => A,
  uL: () => N,
  wE: () => K,
  xR: () => $,
  zy: () => w
}), require("./896048.js"), require("./938796.js"), require("./638769.js");
var Chunk735438 = require("./735438.js"),
  i = require.n(Chunk735438),
  Chunk635377 = require("./635377.js"),
  s = require.n(Chunk635377),
  Chunk371444 = require("./371444.js"),
  Chunk392421 = require("./392421.js"),
  Chunk602137 = require("./602137.js"),
  Chunk136722 = require("./136722.js"),
  Chunk665260 = require("./665260.js"),
  Chunk933681 = require("./933681.js"),
  Chunk233993 = require("./233993.js"),
  Chunk446600 = require("./446600.js"),
  Chunk661191 = require("./661191.js"),
  Chunk652215 = require("./652215.js"),
  Chunk746080 = require("./746080.js");

function E(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function y(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      E(e, t, n[t])
    })
  }
  return e
}

function b(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function O(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : b(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let v = new Set([Chunk652215.rbe.GUILD_TEXT, Chunk652215.rbe.GUILD_ANNOUNCEMENT, Chunk652215.rbe.GUILD_STORE, Chunk652215.rbe.ANNOUNCEMENT_THREAD, Chunk652215.rbe.PUBLIC_THREAD, Chunk652215.rbe.PRIVATE_THREAD, Chunk652215.rbe.GUILD_DIRECTORY, Chunk652215.rbe.GUILD_FORUM, Chunk652215.rbe.GUILD_MEDIA, Chunk652215.rbe.DM, Chunk652215.rbe.GROUP_DM]);

function A(e) {
  return v.has(e)
}
let I = new Set([Chunk652215.rbe.DM, Chunk652215.rbe.GROUP_DM, Chunk652215.rbe.GUILD_TEXT, Chunk652215.rbe.GUILD_VOICE, Chunk652215.rbe.GUILD_STAGE_VOICE, Chunk652215.rbe.GUILD_CATEGORY, Chunk652215.rbe.GUILD_ANNOUNCEMENT, Chunk652215.rbe.GUILD_STORE, Chunk652215.rbe.ANNOUNCEMENT_THREAD, Chunk652215.rbe.PUBLIC_THREAD, Chunk652215.rbe.PRIVATE_THREAD, Chunk652215.rbe.GUILD_DIRECTORY, Chunk652215.rbe.GUILD_FORUM, Chunk652215.rbe.GUILD_MEDIA]),
  S = new Set([Chunk652215.rbe.GUILD_TEXT, Chunk652215.rbe.GUILD_ANNOUNCEMENT, Chunk652215.rbe.ANNOUNCEMENT_THREAD, Chunk652215.rbe.PUBLIC_THREAD, Chunk652215.rbe.PRIVATE_THREAD]);

function T(e) {
  return S.has(e)
}
let C = new Set([Chunk652215.rbe.GUILD_TEXT, Chunk652215.rbe.GUILD_ANNOUNCEMENT, Chunk652215.rbe.GUILD_FORUM, Chunk652215.rbe.GUILD_MEDIA, Chunk652215.rbe.GUILD_VOICE, Chunk652215.rbe.GUILD_STAGE_VOICE]),
  N = new Set([Chunk652215.rbe.GUILD_TEXT, Chunk652215.rbe.GUILD_VOICE, Chunk652215.rbe.GUILD_STAGE_VOICE, Chunk652215.rbe.GUILD_CATEGORY, Chunk652215.rbe.GUILD_ANNOUNCEMENT, Chunk652215.rbe.GUILD_STORE, Chunk652215.rbe.ANNOUNCEMENT_THREAD, Chunk652215.rbe.PUBLIC_THREAD, Chunk652215.rbe.PRIVATE_THREAD, Chunk652215.rbe.GUILD_DIRECTORY, Chunk652215.rbe.GUILD_FORUM, Chunk652215.rbe.GUILD_MEDIA]);

function w(e) {
  return N.has(e)
}
Chunk652215.rbe.GUILD_TEXT, Chunk652215.rbe.GUILD_ANNOUNCEMENT, Chunk652215.rbe.GUILD_FORUM, Chunk652215.rbe.GUILD_MEDIA;
let R = new Set([Chunk652215.rbe.GUILD_VOICE, Chunk652215.rbe.GUILD_STAGE_VOICE]);

function P(e) {
  return "SELECTABLE" !== e && R.has(e)
}

function D(e) {
  return P(e) || q(e)
}
let x = new Set([Chunk652215.rbe.GUILD_STAGE_VOICE]),
  L = new Set([Chunk652215.rbe.DM, Chunk652215.rbe.GROUP_DM]);

function j(e) {
  return L.has(e)
}
let M = new Set([Chunk652215.rbe.GROUP_DM]);

function k(e) {
  return M.has(e)
}
let U = new Set([Chunk652215.rbe.DM, Chunk652215.rbe.GROUP_DM, Chunk652215.rbe.GUILD_TEXT, Chunk652215.rbe.GUILD_ANNOUNCEMENT, Chunk652215.rbe.ANNOUNCEMENT_THREAD, Chunk652215.rbe.PUBLIC_THREAD, Chunk652215.rbe.PRIVATE_THREAD]);

function G(e) {
  return U.has(e)
}
let V = new Set([Chunk652215.rbe.DM, Chunk652215.rbe.GROUP_DM, Chunk652215.rbe.GUILD_VOICE, Chunk652215.rbe.GUILD_STAGE_VOICE, Chunk652215.rbe.PUBLIC_THREAD, Chunk652215.rbe.PRIVATE_THREAD]);

function F(e) {
  return V.has(e)
}
let B = new Set([Chunk652215.rbe.GUILD_TEXT, Chunk652215.rbe.GUILD_ANNOUNCEMENT, Chunk652215.rbe.ANNOUNCEMENT_THREAD, Chunk652215.rbe.PUBLIC_THREAD, Chunk652215.rbe.PRIVATE_THREAD, Chunk652215.rbe.GUILD_DIRECTORY, Chunk652215.rbe.GUILD_FORUM, Chunk652215.rbe.GUILD_MEDIA, Chunk652215.rbe.DM, Chunk652215.rbe.GROUP_DM]);

function H(e) {
  return B.has(e)
}
let Y = new Set([Chunk652215.rbe.ANNOUNCEMENT_THREAD, Chunk652215.rbe.PUBLIC_THREAD, Chunk652215.rbe.PRIVATE_THREAD]),
  W = new Set([Chunk652215.rbe.PUBLIC_THREAD, Chunk652215.rbe.PRIVATE_THREAD]),
  K = new Set([Chunk652215.rbe.GUILD_TEXT, Chunk652215.rbe.GUILD_ANNOUNCEMENT, Chunk652215.rbe.GUILD_FORUM, Chunk652215.rbe.GUILD_MEDIA]);

function z(e) {
  return Y.has(e)
}

function q(e) {
  return W.has(e)
}
let Z = new Set([Chunk652215.rbe.DM, Chunk652215.rbe.GROUP_DM, Chunk652215.rbe.GUILD_TEXT, Chunk652215.rbe.GUILD_ANNOUNCEMENT, Chunk652215.rbe.ANNOUNCEMENT_THREAD, Chunk652215.rbe.PUBLIC_THREAD, Chunk652215.rbe.PRIVATE_THREAD, Chunk652215.rbe.GUILD_FORUM, Chunk652215.rbe.GUILD_MEDIA, Chunk652215.rbe.GUILD_DIRECTORY, Chunk652215.rbe.GUILD_VOICE, Chunk652215.rbe.GUILD_STAGE_VOICE]);

function X(e) {
  return Z.has(e)
}
let Q = new Set([Chunk652215.rbe.GUILD_TEXT, Chunk652215.rbe.GUILD_ANNOUNCEMENT, Chunk652215.rbe.GUILD_STORE, Chunk652215.rbe.GUILD_VOICE, Chunk652215.rbe.GUILD_STAGE_VOICE, Chunk652215.rbe.ANNOUNCEMENT_THREAD, Chunk652215.rbe.PUBLIC_THREAD, Chunk652215.rbe.PRIVATE_THREAD, Chunk652215.rbe.GUILD_DIRECTORY, Chunk652215.rbe.GUILD_FORUM, Chunk652215.rbe.GUILD_MEDIA]),
  J = new Set([Chunk652215.rbe.GUILD_ANNOUNCEMENT, Chunk652215.rbe.GUILD_CATEGORY, Chunk652215.rbe.GUILD_STORE, Chunk652215.rbe.GUILD_TEXT, Chunk652215.rbe.GUILD_VOICE, Chunk652215.rbe.GUILD_STAGE_VOICE, Chunk652215.rbe.GUILD_DIRECTORY, Chunk652215.rbe.GUILD_FORUM, Chunk652215.rbe.GUILD_MEDIA]),
  $ = new Set([Chunk652215.rbe.GUILD_TEXT, Chunk652215.rbe.GUILD_ANNOUNCEMENT]),
  ee = new Set([Chunk652215.rbe.GUILD_TEXT, Chunk652215.rbe.GUILD_ANNOUNCEMENT, Chunk652215.rbe.GUILD_FORUM, Chunk652215.rbe.GUILD_MEDIA]),
  et = new Set([Chunk652215.rbe.GUILD_TEXT, Chunk652215.rbe.GUILD_ANNOUNCEMENT, Chunk652215.rbe.GUILD_FORUM, Chunk652215.rbe.GUILD_MEDIA, Chunk652215.rbe.GUILD_VOICE, Chunk652215.rbe.GUILD_STAGE_VOICE]),
  en = new Set([Chunk652215.rbe.GUILD_ANNOUNCEMENT, Chunk652215.rbe.GUILD_TEXT, Chunk652215.rbe.GUILD_FORUM, Chunk652215.rbe.GUILD_MEDIA, Chunk652215.rbe.ANNOUNCEMENT_THREAD]),
  er = new Set([Chunk652215.rbe.GUILD_TEXT, Chunk652215.rbe.GUILD_FORUM, Chunk652215.rbe.GUILD_MEDIA, Chunk652215.rbe.ANNOUNCEMENT_THREAD, Chunk652215.rbe.PUBLIC_THREAD, Chunk652215.rbe.PRIVATE_THREAD, Chunk652215.rbe.GUILD_VOICE, Chunk652215.rbe.GUILD_STAGE_VOICE]),
  ei = new Set([Chunk652215.rbe.PUBLIC_THREAD, Chunk652215.rbe.PRIVATE_THREAD, Chunk652215.rbe.GUILD_VOICE, Chunk652215.rbe.GUILD_STAGE_VOICE]),
  ea = new Set([Chunk652215.rbe.GUILD_TEXT, Chunk652215.rbe.GUILD_FORUM, Chunk652215.rbe.GUILD_MEDIA]),
  es = new Set([Chunk652215.rbe.GUILD_TEXT, Chunk652215.rbe.GUILD_CATEGORY, Chunk652215.rbe.GUILD_FORUM, Chunk652215.rbe.GUILD_ANNOUNCEMENT]),
  eo = new Set([Chunk652215.rbe.GUILD_TEXT, Chunk652215.rbe.GUILD_ANNOUNCEMENT, Chunk652215.rbe.GUILD_FORUM, Chunk652215.rbe.GUILD_VOICE]);

function el(e) {
  let t = {};
  return null == e || e.forEach(e => {
    t[e.id] = {
      id: e.id,
      type: e.type,
      allow: u.iu(e.allow),
      deny: u.iu(e.deny)
    }
  }), t
}

function ec(e) {
  return null == e ? {} : i().reduce(e, (e, t) => (e[t.id] = t.nick, e), {})
}

function eu(e) {
  return null == e ? [] : e.map(e => ({
    id: e.id,
    name: e.name,
    emojiId: 0 !== e.emoji_id ? e.emoji_id : true,
    emojiName: e.emoji_name,
    moderated: e.moderated,
    color: e.color
  }))
}

function ed(e) {
  return null != e ? {
    id: e.id,
    name: e.name
  } : true
}
let ef = Chunk136722.kg(Chunk652215.xBc.CONNECT, Chunk652215.xBc.VIEW_CHANNEL),
  ep = Chunk652215.hVb.CONNECT | Chunk652215.hVb.VIEW_CHANNEL;

function e_(e) {
  return P(e) ? ef : m.xBc.VIEW_CHANNEL
}

function eh(e) {
  return P(e) ? ep : m.hVb.VIEW_CHANNEL
}
class em {
  constructor(e) {
    var t, n, r;
    E(this, "id", true), E(this, "type", true), E(this, "name", true), E(this, "guild_id", true), E(this, "topic_", true), E(this, "position_", true), E(this, "permissionOverwrites_", true), E(this, "bitrate_", true), E(this, "rtcRegion", true), E(this, "videoQualityMode", true), E(this, "userLimit_", true), E(this, "recipients", true), E(this, "rawRecipients", true), E(this, "ownerId", true), E(this, "icon", true), E(this, "application_id", true), E(this, "nicks", true), E(this, "nsfw_", true), E(this, "parent_id", true), E(this, "memberListId", true), E(this, "rateLimitPerUser_", true), E(this, "defaultThreadRateLimitPerUser", true), E(this, "defaultAutoArchiveDuration", true), E(this, "flags_", true), E(this, "originChannelId", true), E(this, "lastMessageId", true), E(this, "lastPinTimestamp", true), E(this, "availableTags", true), E(this, "appliedTags", true), E(this, "messageCount", true), E(this, "memberCount", true), E(this, "threadMetadata", true), E(this, "memberIdsPreview", true), E(this, "member", true), E(this, "parentChannelThreadType", true), E(this, "template", true), E(this, "defaultReactionEmoji", true), E(this, "isMessageRequest", true), E(this, "isMessageRequestTimestamp", true), E(this, "isSpam", true), E(this, "totalMessageSent", true), E(this, "defaultSortOrder", true), E(this, "version", true), E(this, "defaultForumLayout", true), E(this, "defaultTagSetting", true), E(this, "iconEmoji", true), E(this, "themeColor", true), E(this, "safetyWarnings", true), E(this, "blockedUserWarningDismissed", true), E(this, "recipientFlags", true), E(this, "linkedLobby", true), E(this, "hdStreamingUntil", true), E(this, "hdStreamingBuyerId", true), this.id = e.id, this.type = null != (t = e.type) ? t : m.rbe.GUILD_TEXT, this.name = null != (n = e.name) ? n : "", this.guild_id = null != (r = e.guild_id) ? r : null
  }
}

function eg(e) {
  let t = e;
  return "topic" in e && (t.topic_ = e.topic, delete e.topic), "position" in e && (t.position_ = e.position, delete e.position), "permissionOverwrites" in e && (t.permissionOverwrites_ = e.permissionOverwrites, delete e.permissionOverwrites), "bitrate" in e && (t.bitrate_ = e.bitrate, delete e.bitrate), "userLimit" in e && (t.userLimit_ = e.userLimit, delete e.userLimit), "nsfw" in e && (t.nsfw_ = e.nsfw, delete e.nsfw), "rateLimitPerUser" in e && (t.rateLimitPerUser_ = e.rateLimitPerUser, delete e.rateLimitPerUser), "flags" in e && (t.flags_ = e.flags, delete e.flags), t
}
let eE = Object.freeze({});
class ey extends em {
  get permissionOverwrites() {
    var e;
    return null != (e = this.permissionOverwrites_) ? e : eE
  }
  get topic() {
    var e;
    return null != (e = this.topic_) ? e : ""
  }
  get position() {
    var e;
    return null != (e = this.position_) ? e : 0
  }
  get bitrate() {
    var e;
    return null != (e = this.bitrate_) ? e : m.gp3
  }
  get userLimit() {
    var e;
    return null != (e = this.userLimit_) ? e : 0
  }
  get nsfw() {
    var e;
    return null != (e = this.nsfw_) && e
  }
  get rateLimitPerUser() {
    var e;
    return null != (e = this.rateLimitPerUser_) ? e : 0
  }
  get flags() {
    var e;
    return null != (e = this.flags_) ? e : 0
  }
  toJS() {
    return y({}, this)
  }
  set(e, t) {
    return this.merge(eg({
      [e]: t
    }))
  }
  merge(e) {
    let t = null,
      n = eg(e);
    for (let e in n) n.hasOwnProperty(e) && this[e] !== n[e] && (null == t && (t = this.toJS()), t[e] = n[e]);
    return null != t ? new this.constructor(t) : this
  }
  computeLurkerPermissionsAllowList() {
    if (this.isGuildStageVoice() && _.A.isPublic(this.id)) return p.Uu
  }
  isNSFW() {
    return this.nsfw
  }
  isManaged() {
    return null != this.application_id
  }
  isPrivate() {
    return j(this.type)
  }
  isGroupDM() {
    return this.type === m.rbe.GROUP_DM
  }
  isMultiUserDM() {
    return k(this.type)
  }
  isDM() {
    return this.type === m.rbe.DM
  }
  isSystemDM() {
    returnfalse
  }
  isArchivedThread() {
    var e;
    return this.isThread() && (null == (e = this.threadMetadata) ? true : e.archived) === true
  }
  isLockedThread() {
    var e;
    return this.isThread() && (null == (e = this.threadMetadata) ? true : e.locked) === true
  }
  isScheduledForDeletion() {
    return this.hasFlag(g.lx.IS_SCHEDULED_FOR_DELETION)
  }
  isArchivedLockedThread() {
    var e, t;
    return Y.has(this.type) && (null == (e = this.threadMetadata) ? true : e.archived) === true && (null == (t = this.threadMetadata) ? true : t.locked) === true
  }
  isForumPost() {
    return this.type === m.rbe.PUBLIC_THREAD && null != this.parentChannelThreadType && m.kvI.GUILD_THREADS_ONLY.has(this.parentChannelThreadType)
  }
  isRingable() {
    return m.kvI.CALLABLE.has(this.type) || this.type === m.rbe.GUILD_VOICE
  }
  isCategory() {
    return this.type === m.rbe.GUILD_CATEGORY
  }
  isVocal() {
    return F(this.type)
  }
  isGuildVocal() {
    return P(this.type)
  }
  isGuildVocalOrThread() {
    return this.isGuildVocal() || this.isVocalThread()
  }
  isGuildVoice() {
    return this.type === m.rbe.GUILD_VOICE
  }
  isGuildVoiceOrThread() {
    return this.isGuildVoice() || this.isVocalThread()
  }
  isGuildStageVoice() {
    return this.type === m.rbe.GUILD_STAGE_VOICE
  }
  isListenModeCapable() {
    return this.isGuildStageVoice()
  }
  isThread() {
    return z(this.type)
  }
  isAnnouncementThread() {
    return this.type === m.rbe.ANNOUNCEMENT_THREAD
  }
  isVocalThread() {
    return this.type === m.rbe.PUBLIC_THREAD || this.type === m.rbe.PRIVATE_THREAD
  }
  isActiveThread() {
    var e;
    return this.isThread() && (null == (e = this.threadMetadata) ? true : e.archived) !== true
  }
  isDirectory() {
    return this.type === m.rbe.GUILD_DIRECTORY
  }
  isForumLikeChannel() {
    return this.isForumChannel() || this.isMediaChannel()
  }
  isForumChannel() {
    return this.type === m.rbe.GUILD_FORUM
  }
  isMediaChannel() {
    return this.type === m.rbe.GUILD_MEDIA
  }
  isMediaPost() {
    return this.type === m.rbe.PUBLIC_THREAD && this.parentChannelThreadType === m.rbe.GUILD_MEDIA
  }
  isRoleSubscriptionTemplatePreviewChannel() {
    return this.hasFlag(g.lx.IS_ROLE_SUBSCRIPTION_TEMPLATE_PREVIEW_CHANNEL)
  }
  isOwner(e) {
    return this.ownerId === e
  }
  isObfuscated() {
    return this.hasFlag(g.lx.OBFUSCATED)
  }
  getGuildId() {
    return this.guild_id
  }
  getApplicationId() {
    return this.application_id
  }
  getDefaultSortOrder() {
    var e;
    return null != (e = this.defaultSortOrder) ? e : c.T.LATEST_ACTIVITY
  }
  getDefaultLayout() {
    return this.isMediaChannel() ? o.C.GRID : null == this.defaultForumLayout || this.defaultForumLayout === o.C.DEFAULT ? o.C.LIST : this.defaultForumLayout
  }
  getDefaultTagSetting() {
    var e;
    return null != (e = this.defaultTagSetting) ? e : l.n.MATCH_SOME
  }
  isModeratorReportChannel() {
    return this.hasFlag(g.lx.IS_MODERATOR_REPORT_CHANNEL)
  }
  get accessPermissions() {
    return e_(this.type)
  }
  hasFlag(e) {
    return (0, d.Lt)(this.flags, e)
  }
  get isHDStreamSplashed() {
    return null != this.hdStreamingUntil && new Date(this.hdStreamingUntil) > new Date
  }
}
class eb extends ey {
  static fromServer(e, t) {
    var n, r, i;
    let a = {
      application_id: e.application_id,
      appliedTags: e.applied_tags,
      availableTags: null != e.available_tags ? eu(e.available_tags) : true,
      bitrate_: e.bitrate,
      defaultAutoArchiveDuration: e.default_auto_archive_duration,
      defaultForumLayout: e.default_forum_layout,
      defaultReactionEmoji: null != e.default_reaction_emoji ? {
        emojiId: 0 !== e.default_reaction_emoji.emoji_id ? e.default_reaction_emoji.emoji_id : true,
        emojiName: e.default_reaction_emoji.emoji_name
      } : true,
      defaultSortOrder: e.default_sort_order,
      defaultTagSetting: e.default_tag_setting,
      defaultThreadRateLimitPerUser: e.default_thread_rate_limit_per_user,
      flags_: e.flags,
      guild_id: null != (n = null != t ? t : e.guild_id) ? n : null,
      icon: e.icon,
      iconEmoji: ed(e.icon_emoji),
      id: e.id,
      isMessageRequest: e.is_message_request,
      isMessageRequestTimestamp: e.is_message_request_timestamp,
      isSpam: e.is_spam,
      lastMessageId: e.last_message_id,
      lastPinTimestamp: e.last_pin_timestamp,
      member: null != e.member ? {
        flags: e.member.flags,
        muted: e.member.muted,
        muteConfig: e.member.mute_config,
        joinTimestamp: e.member.join_timestamp
      } : true,
      memberCount: e.member_count,
      memberIdsPreview: e.member_ids_preview,
      memberListId: e.member_list_id,
      messageCount: e.message_count,
      name: null != (r = e.name) ? r : "",
      nicks: ec(e.nicks),
      nsfw_: e.nsfw,
      originChannelId: e.origin_channel_id,
      ownerId: e.owner_id,
      parent_id: e.parent_id,
      parentChannelThreadType: true,
      permissionOverwrites_: el(e.permission_overwrites),
      position_: e.position,
      rateLimitPerUser_: e.rate_limit_per_user,
      rawRecipients: null != e.recipients ? e.recipients : [],
      recipients: null != e.recipients ? e.recipients.map(e => e.id) : [],
      recipientFlags: e.recipient_flags,
      rtcRegion: e.rtc_region,
      safetyWarnings: e.safety_warnings,
      blockedUserWarningDismissed: e.blocked_user_warning_dismissed,
      template: e.template,
      themeColor: e.theme_color,
      threadMetadata: null != e.thread_metadata ? {
        archived: e.thread_metadata.archived,
        autoArchiveDuration: e.thread_metadata.auto_archive_duration,
        archiveTimestamp: e.thread_metadata.archive_timestamp,
        createTimestamp: e.thread_metadata.create_timestamp,
        locked: e.thread_metadata.locked,
        invitable: null == (i = e.thread_metadata.invitable) || i
      } : true,
      topic_: e.topic,
      totalMessageSent: e.total_message_sent,
      type: null != e.type ? e.type : m.rbe.UNKNOWN,
      userLimit_: e.user_limit,
      version: e.version,
      videoQualityMode: e.video_quality_mode,
      linkedLobby: e.linked_lobby,
      hdStreamingUntil: e.hd_streaming_until,
      hdStreamingBuyerId: e.hd_streaming_buyer_id
    };
    return (0, f.pp)(a, eb)
  }
  constructor(e) {
    super(e), this.application_id = e.application_id, this.appliedTags = e.appliedTags, this.availableTags = e.availableTags, this.bitrate_ = e.bitrate_, this.defaultAutoArchiveDuration = e.defaultAutoArchiveDuration, this.defaultForumLayout = e.defaultForumLayout, this.defaultReactionEmoji = e.defaultReactionEmoji, this.defaultSortOrder = e.defaultSortOrder, this.defaultTagSetting = e.defaultTagSetting, this.defaultThreadRateLimitPerUser = e.defaultThreadRateLimitPerUser, this.flags_ = e.flags_, this.icon = e.icon, this.iconEmoji = e.iconEmoji, this.isMessageRequest = e.isMessageRequest, this.isMessageRequestTimestamp = e.isMessageRequestTimestamp, this.isSpam = e.isSpam, this.lastMessageId = e.lastMessageId, this.lastPinTimestamp = e.lastPinTimestamp, this.member = e.member, this.memberCount = e.memberCount, this.memberIdsPreview = e.memberIdsPreview, this.memberListId = e.memberListId, this.messageCount = e.messageCount, this.nicks = e.nicks, this.nsfw_ = e.nsfw_, this.originChannelId = e.originChannelId, this.ownerId = e.ownerId, this.parent_id = e.parent_id, this.parentChannelThreadType = e.parentChannelThreadType, this.permissionOverwrites_ = e.permissionOverwrites_, this.position_ = e.position_, this.rateLimitPerUser_ = e.rateLimitPerUser_, this.rawRecipients = e.rawRecipients, this.recipients = e.recipients, this.recipientFlags = e.recipientFlags, this.rtcRegion = e.rtcRegion, this.safetyWarnings = e.safetyWarnings, this.blockedUserWarningDismissed = e.blockedUserWarningDismissed, this.template = e.template, this.themeColor = e.themeColor, this.threadMetadata = e.threadMetadata, this.topic_ = e.topic_, this.userLimit_ = e.userLimit_, this.version = e.version, this.videoQualityMode = e.videoQualityMode, this.linkedLobby = e.linkedLobby, this.hdStreamingUntil = e.hdStreamingUntil, this.hdStreamingBuyerId = e.hdStreamingBuyerId
  }
}
class eO extends ey {
  static fromServer(e, t) {
    var n, r, i, a;
    return eB({
      application_id: e.application_id,
      bitrate_: e.bitrate,
      flags_: e.flags,
      guild_id: null != (n = null != t ? t : e.guild_id) ? n : null,
      iconEmoji: ed(e.icon_emoji),
      id: e.id,
      lastMessageId: e.last_message_id,
      lastPinTimestamp: e.last_pin_timestamp,
      memberListId: e.member_list_id,
      name: null != (r = e.name) ? r : "",
      nsfw_: null != (i = e.nsfw) && i,
      originChannelId: e.origin_channel_id,
      parent_id: e.parent_id,
      permissionOverwrites_: el(e.permission_overwrites),
      position_: e.position,
      rateLimitPerUser_: null != (a = e.rate_limit_per_user) ? a : 0,
      rtcRegion: e.rtc_region,
      themeColor: e.theme_color,
      topic_: e.topic,
      type: null != e.type ? e.type : m.rbe.GUILD_VOICE,
      userLimit_: e.user_limit,
      version: e.version,
      videoQualityMode: e.video_quality_mode,
      hdStreamingUntil: e.hd_streaming_until,
      hdStreamingBuyerId: e.hd_streaming_buyer_id
    })
  }
  constructor(e) {
    var t;
    super(e), this.application_id = e.application_id, this.bitrate_ = e.bitrate_, this.flags_ = e.flags_, this.iconEmoji = e.iconEmoji, this.lastMessageId = e.lastMessageId, this.lastPinTimestamp = e.lastPinTimestamp, this.memberListId = e.memberListId, this.nsfw_ = e.nsfw_, this.originChannelId = e.originChannelId, this.parent_id = e.parent_id, this.permissionOverwrites_ = null != (t = e.permissionOverwrites_) ? t : {}, this.position_ = e.position_, this.rateLimitPerUser_ = e.rateLimitPerUser_, this.rtcRegion = e.rtcRegion, this.themeColor = e.themeColor, this.topic_ = e.topic_, this.userLimit_ = e.userLimit_, this.version = e.version, this.videoQualityMode = e.videoQualityMode, this.hdStreamingUntil = e.hdStreamingUntil, this.hdStreamingBuyerId = e.hdStreamingBuyerId
  }
}
class ev extends ey {
  static fromServer(e, t) {
    var n, r, i, a;
    return eB({
      application_id: e.application_id,
      defaultAutoArchiveDuration: e.default_auto_archive_duration,
      defaultThreadRateLimitPerUser: e.default_thread_rate_limit_per_user,
      flags_: e.flags,
      guild_id: null != (n = null != t ? t : e.guild_id) ? n : null,
      iconEmoji: ed(e.icon_emoji),
      id: e.id,
      lastMessageId: e.last_message_id,
      lastPinTimestamp: e.last_pin_timestamp,
      memberListId: e.member_list_id,
      name: null != (r = e.name) ? r : "",
      nsfw_: null != (i = e.nsfw) && i,
      parent_id: e.parent_id,
      permissionOverwrites_: el(e.permission_overwrites),
      position_: e.position,
      rateLimitPerUser_: null != (a = e.rate_limit_per_user) ? a : 0,
      themeColor: e.theme_color,
      topic_: e.topic,
      type: null != e.type ? e.type : m.rbe.GUILD_TEXT,
      linkedLobby: e.linked_lobby,
      hdStreamingUntil: e.hd_streaming_until,
      hdStreamingBuyerId: e.hd_streaming_buyer_id,
      version: e.version
    })
  }
  constructor(e) {
    var t;
    super(e), this.application_id = e.application_id, this.defaultAutoArchiveDuration = e.defaultAutoArchiveDuration, this.defaultThreadRateLimitPerUser = e.defaultThreadRateLimitPerUser, this.flags_ = e.flags_, this.iconEmoji = e.iconEmoji, this.lastMessageId = e.lastMessageId, this.lastPinTimestamp = e.lastPinTimestamp, this.memberListId = e.memberListId, this.nsfw_ = e.nsfw_, this.parent_id = e.parent_id, this.permissionOverwrites_ = null != (t = e.permissionOverwrites_) ? t : {}, this.position_ = e.position_, this.rateLimitPerUser_ = e.rateLimitPerUser_, this.themeColor = e.themeColor, this.topic_ = e.topic_, this.version = e.version, this.linkedLobby = e.linkedLobby, this.hdStreamingBuyerId = e.hdStreamingBuyerId, this.hdStreamingUntil = e.hdStreamingUntil
  }
}
class eA extends ev {}
class eI extends ev {}
class eS extends ev {}
class eT extends eO {}
class eC extends ev {}
class eN extends ev {}
class ew extends eO {}
class eR extends ey {
  static fromServer(e, t) {
    var n, r, i, a;
    let s = {
      availableTags: null != e.available_tags ? eu(e.available_tags) : [],
      defaultAutoArchiveDuration: e.default_auto_archive_duration,
      defaultForumLayout: e.default_forum_layout,
      defaultReactionEmoji: null != e.default_reaction_emoji ? {
        emojiId: 0 !== e.default_reaction_emoji.emoji_id ? e.default_reaction_emoji.emoji_id : true,
        emojiName: e.default_reaction_emoji.emoji_name
      } : true,
      defaultSortOrder: e.default_sort_order,
      defaultTagSetting: e.default_tag_setting,
      defaultThreadRateLimitPerUser: e.default_thread_rate_limit_per_user,
      flags_: e.flags,
      guild_id: null != (n = null != t ? t : e.guild_id) ? n : null,
      iconEmoji: ed(e.icon_emoji),
      id: e.id,
      lastMessageId: e.last_message_id,
      lastPinTimestamp: e.last_pin_timestamp,
      memberListId: e.member_list_id,
      name: null != (r = e.name) ? r : "",
      nsfw_: null != (i = e.nsfw) && i,
      parent_id: e.parent_id,
      permissionOverwrites_: el(e.permission_overwrites),
      position_: e.position,
      rateLimitPerUser_: null != (a = e.rate_limit_per_user) ? a : 0,
      template: e.template,
      themeColor: e.theme_color,
      topic_: e.topic,
      type: null != e.type ? e.type : m.rbe.GUILD_TEXT,
      version: e.version
    };
    return (0, f.pp)(s, eR)
  }
  constructor(e) {
    var t, n;
    super(e), this.availableTags = null != (t = e.availableTags) ? t : [], this.defaultAutoArchiveDuration = e.defaultAutoArchiveDuration, this.defaultForumLayout = e.defaultForumLayout, this.defaultReactionEmoji = e.defaultReactionEmoji, this.defaultSortOrder = e.defaultSortOrder, this.defaultTagSetting = e.defaultTagSetting, this.defaultThreadRateLimitPerUser = e.defaultThreadRateLimitPerUser, this.flags_ = e.flags_, this.iconEmoji = e.iconEmoji, this.lastMessageId = e.lastMessageId, this.lastPinTimestamp = e.lastPinTimestamp, this.memberListId = e.memberListId, this.nsfw_ = e.nsfw_, this.parent_id = e.parent_id, this.permissionOverwrites_ = null != (n = e.permissionOverwrites_) ? n : {}, this.position_ = e.position_, this.rateLimitPerUser_ = e.rateLimitPerUser_, this.template = e.template, this.themeColor = e.themeColor, this.topic_ = e.topic_, this.version = e.version
  }
}
class eP {
  getOrCompute(e) {
    let t = this.cache.get(e);
    if (null != t) return t;
    {
      let t = parseInt(e, 10);
      return this.cache.set(e, t), t
    }
  }
  constructor(e = 100) {
    E(this, "cache", true), this.cache = new(s())(e)
  }
}
let eD = new eP,
  ex = new eP;
class eL extends ey {
  static sortRecipients(e, t) {
    let n = eD.getOrCompute(t);
    return [...null != e ? e : []].sort((e, t) => (ex.getOrCompute(e.id) ^ n) - (ex.getOrCompute(t.id) ^ n))
  }
  static fromServer(e) {
    var t, n;
    let r = eL.sortRecipients(e.recipients, e.id),
      i = {
        application_id: e.application_id,
        flags_: e.flags,
        guild_id: null,
        icon: e.icon,
        id: e.id,
        isMessageRequest: e.is_message_request,
        isMessageRequestTimestamp: e.is_message_request_timestamp,
        isSpam: null != (t = e.is_spam) && t,
        lastMessageId: e.last_message_id,
        lastPinTimestamp: e.last_pin_timestamp,
        name: null != (n = e.name) ? n : "",
        nicks: ec(e.nicks),
        ownerId: e.owner_id,
        rawRecipients: r,
        recipients: r.map(e => e.id),
        recipientFlags: e.recipient_flags,
        safetyWarnings: e.safety_warnings,
        blockedUserWarningDismissed: e.blocked_user_warning_dismissed,
        type: null != e.type ? e.type : m.rbe.DM
      };
    return (0, f.pp)(i, eL)
  }
  isSystemDM() {
    let e = this.rawRecipients[0];
    return this.type === m.rbe.DM && null != e && true === e.system
  }
  getRecipientId() {
    return this.recipients[0]
  }
  addRecipient(e, t, n) {
    if (e === n) return this;
    {
      var r;
      let n = this.set("recipients", i().uniq([...null != (r = this.recipients) ? r : [], e]).sort(h.default.compare));
      return null == t ? n : n.set("nicks", O(y({}, n.nicks), {
        [e]: t
      }))
    }
  }
  removeRecipient(e) {
    return this.set("recipients", i().without(this.recipients, e))
  }
  constructor(e) {
    var t, n;
    super(e), this.application_id = e.application_id, this.flags_ = e.flags_, this.icon = e.icon, this.isMessageRequest = e.isMessageRequest, this.isMessageRequestTimestamp = e.isMessageRequestTimestamp, this.isSpam = e.isSpam, this.lastMessageId = e.lastMessageId, this.lastPinTimestamp = e.lastPinTimestamp, this.nicks = e.nicks, this.ownerId = e.ownerId, this.rawRecipients = eL.sortRecipients(e.rawRecipients, this.id), this.recipients = [...null != (t = e.recipients) ? t : []].sort(h.default.compare), this.recipientFlags = e.recipientFlags, this.safetyWarnings = null != (n = e.safetyWarnings) ? n : [], this.blockedUserWarningDismissed = e.blockedUserWarningDismissed
  }
}
class ej extends eL {}
class eM extends eL {}
class ek extends ey {
  static fromServer(e, t) {
    var n, r, i, a, s;
    let o = {
      appliedTags: null != (n = e.applied_tags) ? n : [],
      bitrate_: e.bitrate,
      flags_: e.flags,
      guild_id: null != (r = null != t ? t : e.guild_id) ? r : null,
      id: e.id,
      lastMessageId: e.last_message_id,
      lastPinTimestamp: e.last_pin_timestamp,
      member: null != e.member ? {
        flags: e.member.flags,
        muted: e.member.muted,
        muteConfig: e.member.mute_config,
        joinTimestamp: e.member.join_timestamp
      } : true,
      memberCount: e.member_count,
      memberIdsPreview: e.member_ids_preview,
      messageCount: e.message_count,
      name: null != (i = e.name) ? i : "",
      nsfw_: null != (a = e.nsfw) && a,
      ownerId: e.owner_id,
      parent_id: e.parent_id,
      parentChannelThreadType: e.parentChannelThreadType,
      rateLimitPerUser_: e.rate_limit_per_user,
      rtcRegion: e.rtc_region,
      threadMetadata: null != e.thread_metadata ? {
        archived: e.thread_metadata.archived,
        autoArchiveDuration: e.thread_metadata.auto_archive_duration,
        archiveTimestamp: e.thread_metadata.archive_timestamp,
        createTimestamp: e.thread_metadata.create_timestamp,
        locked: e.thread_metadata.locked,
        invitable: null == (s = e.thread_metadata.invitable) || s
      } : true,
      totalMessageSent: e.total_message_sent,
      type: null != e.type ? e.type : m.rbe.PUBLIC_THREAD,
      userLimit_: e.user_limit,
      videoQualityMode: e.video_quality_mode
    };
    return (0, f.pp)(o, ek)
  }
  constructor(e) {
    var t;
    super(e), this.appliedTags = null != (t = e.appliedTags) ? t : [], this.bitrate_ = e.bitrate_, this.flags_ = e.flags_, this.lastMessageId = e.lastMessageId, this.lastPinTimestamp = e.lastPinTimestamp, this.member = e.member, this.memberCount = e.memberCount, this.memberIdsPreview = e.memberIdsPreview, this.messageCount = e.messageCount, this.nsfw_ = e.nsfw_, this.ownerId = e.ownerId, this.parent_id = e.parent_id, this.parentChannelThreadType = e.parentChannelThreadType, this.rateLimitPerUser_ = e.rateLimitPerUser_, this.rtcRegion = e.rtcRegion, this.threadMetadata = e.threadMetadata, this.userLimit_ = e.userLimit_, this.videoQualityMode = e.videoQualityMode
  }
}
let eU = {
  [Chunk652215.rbe.DM]: eL.fromServer,
  [Chunk652215.rbe.GROUP_DM]: eL.fromServer,
  [Chunk652215.rbe.GUILD_TEXT]: ev.fromServer,
  [Chunk652215.rbe.GUILD_VOICE]: eO.fromServer,
  [Chunk652215.rbe.GUILD_STAGE_VOICE]: eO.fromServer,
  [Chunk652215.rbe.GUILD_CATEGORY]: ev.fromServer,
  [Chunk652215.rbe.GUILD_ANNOUNCEMENT]: ev.fromServer,
  [Chunk652215.rbe.GUILD_STORE]: ev.fromServer,
  [Chunk652215.rbe.ANNOUNCEMENT_THREAD]: ek.fromServer,
  [Chunk652215.rbe.PUBLIC_THREAD]: ek.fromServer,
  [Chunk652215.rbe.PRIVATE_THREAD]: ek.fromServer,
  [Chunk652215.rbe.GUILD_DIRECTORY]: ev.fromServer,
  [Chunk652215.rbe.GUILD_FORUM]: eR.fromServer,
  [Chunk652215.rbe.GUILD_MEDIA]: eR.fromServer
};

function eG(e, t) {
  var n, r;
  return (null != (n = eU[null != (r = e.type) ? r : m.rbe.GUILD_TEXT]) ? n : eb.fromServer)(e, t)
}

function eV(e) {
  return eH(e)
}
let eF = {
  [Chunk652215.rbe.DM]: ej,
  [Chunk652215.rbe.GROUP_DM]: eM,
  [Chunk652215.rbe.GUILD_TEXT]: eN,
  [Chunk652215.rbe.GUILD_VOICE]: ew,
  [Chunk652215.rbe.GUILD_STAGE_VOICE]: eT,
  [Chunk652215.rbe.GUILD_CATEGORY]: eI,
  [Chunk652215.rbe.GUILD_ANNOUNCEMENT]: eA,
  [Chunk652215.rbe.GUILD_STORE]: eC,
  [Chunk652215.rbe.ANNOUNCEMENT_THREAD]: ek,
  [Chunk652215.rbe.PUBLIC_THREAD]: ek,
  [Chunk652215.rbe.PRIVATE_THREAD]: ek,
  [Chunk652215.rbe.GUILD_DIRECTORY]: eS,
  [Chunk652215.rbe.GUILD_FORUM]: eR,
  [Chunk652215.rbe.GUILD_MEDIA]: eR
};

function eB(e) {
  var t, n;
  let r = null != (t = eF[null != (n = e.type) ? n : m.rbe.GUILD_TEXT]) ? t : eb;
  return (0, f.pp)(e, r)
}

function eH(e) {
  var t, n;
  return new(null != (t = eF[null != (n = e.type) ? n : m.rbe.GUILD_TEXT]) ? t : eb)(eg(e))
}