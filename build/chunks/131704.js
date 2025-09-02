/** Chunk was on web.js **/
/** chunk id: 131704, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  $N: () => ei,
  AW: () => T,
  CG: () => ef,
  Ec: () => H,
  Em: () => z,
  Gz: () => e_,
  Km: () => P,
  Lr: () => x,
  Q5: () => W,
  Qm: () => G,
  Sf: () => eg,
  TK: () => J,
  Ti: () => N,
  Um: () => er,
  X_: () => et,
  Y0: () => Q,
  _H: () => eB,
  bc: () => k,
  bw: () => D,
  dF: () => X,
  hv: () => j,
  iR: () => ea,
  jD: () => eU,
  kt: () => eZ,
  mn: () => eD,
  nl: () => eE,
  oj: () => R,
  ov: () => $,
  q_: () => ek,
  r8: () => S,
  sR: () => U,
  tx: () => w,
  uC: () => Y,
  vc: () => V,
  vd: () => Z,
  vg: () => en,
  xL: () => ee,
  zS: () => q,
  zi: () => C
}), require("./388685.js"), require("./997841.js"), require("./642613.js");
var Chunk392711 = require("./392711.js"),
  i = require.n(Chunk392711),
  Chunk31775 = require("./31775.js"),
  o = require.n(Chunk31775),
  Chunk313361 = require("./313361.js"),
  Chunk697988 = require("./697988.js"),
  Chunk683860 = require("./683860.js"),
  Chunk149765 = require("./149765.js"),
  Chunk283693 = require("./283693.js"),
  Chunk860987 = require("./860987.js"),
  Chunk146085 = require("./146085.js"),
  Chunk427679 = require("./427679.js"),
  Chunk630388 = require("./630388.js"),
  Chunk709054 = require("./709054.js"),
  Chunk981631 = require("./981631.js"),
  Chunk176505 = require("./176505.js");

function b(e, t, n) {
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
      b(e, t, n[t])
    })
  }
  return e
}

function O(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function v(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : O(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let I = new Set([Chunk981631.d4z.GUILD_TEXT, Chunk981631.d4z.GUILD_ANNOUNCEMENT, Chunk981631.d4z.GUILD_STORE, Chunk981631.d4z.ANNOUNCEMENT_THREAD, Chunk981631.d4z.PUBLIC_THREAD, Chunk981631.d4z.PRIVATE_THREAD, Chunk981631.d4z.GUILD_DIRECTORY, Chunk981631.d4z.GUILD_FORUM, Chunk981631.d4z.GUILD_MEDIA, Chunk981631.d4z.DM, Chunk981631.d4z.GROUP_DM]);

function S(e) {
  return I.has(e)
}
let T = new Set([Chunk981631.d4z.DM, Chunk981631.d4z.GROUP_DM, Chunk981631.d4z.GUILD_TEXT, Chunk981631.d4z.GUILD_VOICE, Chunk981631.d4z.GUILD_STAGE_VOICE, Chunk981631.d4z.GUILD_CATEGORY, Chunk981631.d4z.GUILD_ANNOUNCEMENT, Chunk981631.d4z.GUILD_STORE, Chunk981631.d4z.ANNOUNCEMENT_THREAD, Chunk981631.d4z.PUBLIC_THREAD, Chunk981631.d4z.PRIVATE_THREAD, Chunk981631.d4z.GUILD_DIRECTORY, Chunk981631.d4z.GUILD_FORUM, Chunk981631.d4z.GUILD_MEDIA]),
  A = new Set([Chunk981631.d4z.GUILD_TEXT, Chunk981631.d4z.GUILD_ANNOUNCEMENT, Chunk981631.d4z.ANNOUNCEMENT_THREAD, Chunk981631.d4z.PUBLIC_THREAD, Chunk981631.d4z.PRIVATE_THREAD]);

function C(e) {
  return A.has(e)
}
let N = new Set([Chunk981631.d4z.GUILD_TEXT, Chunk981631.d4z.GUILD_ANNOUNCEMENT, Chunk981631.d4z.GUILD_FORUM, Chunk981631.d4z.GUILD_MEDIA, Chunk981631.d4z.GUILD_VOICE, Chunk981631.d4z.GUILD_STAGE_VOICE]),
  R = new Set([Chunk981631.d4z.GUILD_TEXT, Chunk981631.d4z.GUILD_VOICE, Chunk981631.d4z.GUILD_STAGE_VOICE, Chunk981631.d4z.GUILD_CATEGORY, Chunk981631.d4z.GUILD_ANNOUNCEMENT, Chunk981631.d4z.GUILD_STORE, Chunk981631.d4z.ANNOUNCEMENT_THREAD, Chunk981631.d4z.PUBLIC_THREAD, Chunk981631.d4z.PRIVATE_THREAD, Chunk981631.d4z.GUILD_DIRECTORY, Chunk981631.d4z.GUILD_FORUM, Chunk981631.d4z.GUILD_MEDIA]);

function P(e) {
  return R.has(e)
}
Chunk981631.d4z.GUILD_TEXT, Chunk981631.d4z.GUILD_ANNOUNCEMENT, Chunk981631.d4z.GUILD_FORUM, Chunk981631.d4z.GUILD_MEDIA;
let w = new Set([Chunk981631.d4z.GUILD_VOICE, Chunk981631.d4z.GUILD_STAGE_VOICE]);

function D(e) {
  return "SELECTABLE" !== e && w.has(e)
}
let x = new Set([Chunk981631.d4z.GUILD_STAGE_VOICE]),
  L = new Set([Chunk981631.d4z.DM, Chunk981631.d4z.GROUP_DM]);

function j(e) {
  return L.has(e)
}
let M = new Set([Chunk981631.d4z.GROUP_DM]);

function k(e) {
  return M.has(e)
}
let U = new Set([Chunk981631.d4z.DM, Chunk981631.d4z.GROUP_DM, Chunk981631.d4z.GUILD_TEXT, Chunk981631.d4z.GUILD_ANNOUNCEMENT, Chunk981631.d4z.ANNOUNCEMENT_THREAD, Chunk981631.d4z.PUBLIC_THREAD, Chunk981631.d4z.PRIVATE_THREAD]);

function G(e) {
  return U.has(e)
}
let B = new Set([Chunk981631.d4z.DM, Chunk981631.d4z.GROUP_DM, Chunk981631.d4z.GUILD_VOICE, Chunk981631.d4z.GUILD_STAGE_VOICE, Chunk981631.d4z.PUBLIC_THREAD, Chunk981631.d4z.PRIVATE_THREAD]);

function Z(e) {
  return B.has(e)
}
let F = new Set([Chunk981631.d4z.GUILD_TEXT, Chunk981631.d4z.GUILD_ANNOUNCEMENT, Chunk981631.d4z.ANNOUNCEMENT_THREAD, Chunk981631.d4z.PUBLIC_THREAD, Chunk981631.d4z.PRIVATE_THREAD, Chunk981631.d4z.GUILD_DIRECTORY, Chunk981631.d4z.GUILD_FORUM, Chunk981631.d4z.GUILD_MEDIA, Chunk981631.d4z.DM, Chunk981631.d4z.GROUP_DM]);

function V(e) {
  return F.has(e)
}
let H = new Set([Chunk981631.d4z.ANNOUNCEMENT_THREAD, Chunk981631.d4z.PUBLIC_THREAD, Chunk981631.d4z.PRIVATE_THREAD]),
  Y = new Set([Chunk981631.d4z.GUILD_TEXT, Chunk981631.d4z.GUILD_ANNOUNCEMENT, Chunk981631.d4z.GUILD_FORUM, Chunk981631.d4z.GUILD_MEDIA]);

function W(e) {
  return H.has(e)
}
let K = new Set([Chunk981631.d4z.DM, Chunk981631.d4z.GROUP_DM, Chunk981631.d4z.GUILD_TEXT, Chunk981631.d4z.GUILD_ANNOUNCEMENT, Chunk981631.d4z.ANNOUNCEMENT_THREAD, Chunk981631.d4z.PUBLIC_THREAD, Chunk981631.d4z.PRIVATE_THREAD, Chunk981631.d4z.GUILD_FORUM, Chunk981631.d4z.GUILD_MEDIA, Chunk981631.d4z.GUILD_DIRECTORY, Chunk981631.d4z.GUILD_VOICE, Chunk981631.d4z.GUILD_STAGE_VOICE]);

function z(e) {
  return K.has(e)
}
let q = new Set([Chunk981631.d4z.GUILD_TEXT, Chunk981631.d4z.GUILD_ANNOUNCEMENT, Chunk981631.d4z.GUILD_STORE, Chunk981631.d4z.GUILD_VOICE, Chunk981631.d4z.GUILD_STAGE_VOICE, Chunk981631.d4z.ANNOUNCEMENT_THREAD, Chunk981631.d4z.PUBLIC_THREAD, Chunk981631.d4z.PRIVATE_THREAD, Chunk981631.d4z.GUILD_DIRECTORY, Chunk981631.d4z.GUILD_FORUM, Chunk981631.d4z.GUILD_MEDIA]),
  X = new Set([Chunk981631.d4z.GUILD_ANNOUNCEMENT, Chunk981631.d4z.GUILD_CATEGORY, Chunk981631.d4z.GUILD_STORE, Chunk981631.d4z.GUILD_TEXT, Chunk981631.d4z.GUILD_VOICE, Chunk981631.d4z.GUILD_STAGE_VOICE, Chunk981631.d4z.GUILD_DIRECTORY, Chunk981631.d4z.GUILD_FORUM, Chunk981631.d4z.GUILD_MEDIA]),
  Q = new Set([Chunk981631.d4z.GUILD_TEXT, Chunk981631.d4z.GUILD_ANNOUNCEMENT]),
  J = new Set([Chunk981631.d4z.GUILD_TEXT, Chunk981631.d4z.GUILD_ANNOUNCEMENT, Chunk981631.d4z.GUILD_FORUM, Chunk981631.d4z.GUILD_MEDIA]),
  $ = new Set([Chunk981631.d4z.GUILD_TEXT, Chunk981631.d4z.GUILD_ANNOUNCEMENT, Chunk981631.d4z.GUILD_FORUM, Chunk981631.d4z.GUILD_MEDIA, Chunk981631.d4z.GUILD_VOICE, Chunk981631.d4z.GUILD_STAGE_VOICE]),
  ee = new Set([Chunk981631.d4z.GUILD_ANNOUNCEMENT, Chunk981631.d4z.GUILD_TEXT, Chunk981631.d4z.GUILD_FORUM, Chunk981631.d4z.GUILD_MEDIA, Chunk981631.d4z.ANNOUNCEMENT_THREAD]),
  et = new Set([Chunk981631.d4z.GUILD_TEXT, Chunk981631.d4z.GUILD_FORUM, Chunk981631.d4z.GUILD_MEDIA, Chunk981631.d4z.ANNOUNCEMENT_THREAD, Chunk981631.d4z.PUBLIC_THREAD, Chunk981631.d4z.PRIVATE_THREAD, Chunk981631.d4z.GUILD_VOICE, Chunk981631.d4z.GUILD_STAGE_VOICE]),
  en = new Set([Chunk981631.d4z.PUBLIC_THREAD, Chunk981631.d4z.PRIVATE_THREAD, Chunk981631.d4z.GUILD_VOICE, Chunk981631.d4z.GUILD_STAGE_VOICE]),
  er = new Set([Chunk981631.d4z.GUILD_TEXT, Chunk981631.d4z.GUILD_FORUM, Chunk981631.d4z.GUILD_MEDIA]),
  ei = new Set([Chunk981631.d4z.GUILD_TEXT, Chunk981631.d4z.GUILD_CATEGORY, Chunk981631.d4z.GUILD_FORUM, Chunk981631.d4z.GUILD_ANNOUNCEMENT]),
  ea = new Set([Chunk981631.d4z.GUILD_TEXT, Chunk981631.d4z.GUILD_ANNOUNCEMENT, Chunk981631.d4z.GUILD_FORUM, Chunk981631.d4z.GUILD_VOICE]);

function eo(e) {
  let t = {};
  return null == e || e.forEach(e => {
    t[e.id] = {
      id: e.id,
      type: e.type,
      allow: u.vB(e.allow),
      deny: u.vB(e.deny)
    }
  }), t
}

function es(e) {
  return null == e ? {} : i().reduce(e, (e, t) => (e[t.id] = t.nick, e), {})
}

function el(e) {
  return null == e ? [] : e.map(e => ({
    id: e.id,
    name: e.name,
    emojiId: 0 !== e.emoji_id ? e.emoji_id : true,
    emojiName: e.emoji_name,
    moderated: e.moderated,
    color: e.color
  }))
}

function ec(e) {
  return null != e ? {
    id: e.id,
    name: e.name
  } : true
}
let eu = Chunk149765.$e(Chunk981631.Plq.CONNECT, Chunk981631.Plq.VIEW_CHANNEL),
  ed = Chunk981631.S7T.CONNECT | Chunk981631.S7T.VIEW_CHANNEL;

function ef(e) {
  return D(e) ? eu : g.Plq.VIEW_CHANNEL
}

function e_(e) {
  return D(e) ? ed : g.S7T.VIEW_CHANNEL
}
class ep {
  constructor(e) {
    var t, n, r;
    b(this, "id", true), b(this, "type", true), b(this, "name", true), b(this, "guild_id", true), b(this, "topic_", true), b(this, "position_", true), b(this, "permissionOverwrites_", true), b(this, "bitrate_", true), b(this, "rtcRegion", true), b(this, "videoQualityMode", true), b(this, "userLimit_", true), b(this, "recipients", true), b(this, "rawRecipients", true), b(this, "ownerId", true), b(this, "icon", true), b(this, "application_id", true), b(this, "nicks", true), b(this, "nsfw_", true), b(this, "parent_id", true), b(this, "memberListId", true), b(this, "rateLimitPerUser_", true), b(this, "defaultThreadRateLimitPerUser", true), b(this, "defaultAutoArchiveDuration", true), b(this, "flags_", true), b(this, "originChannelId", true), b(this, "lastMessageId", true), b(this, "lastPinTimestamp", true), b(this, "availableTags", true), b(this, "appliedTags", true), b(this, "messageCount", true), b(this, "memberCount", true), b(this, "threadMetadata", true), b(this, "memberIdsPreview", true), b(this, "member", true), b(this, "parentChannelThreadType", true), b(this, "template", true), b(this, "defaultReactionEmoji", true), b(this, "isMessageRequest", true), b(this, "isMessageRequestTimestamp", true), b(this, "isSpam", true), b(this, "totalMessageSent", true), b(this, "defaultSortOrder", true), b(this, "version", true), b(this, "defaultForumLayout", true), b(this, "defaultTagSetting", true), b(this, "iconEmoji", true), b(this, "themeColor", true), b(this, "safetyWarnings", true), b(this, "blockedUserWarningDismissed", true), b(this, "recipientFlags", true), b(this, "linkedLobby", true), b(this, "hdStreamingUntil", true), b(this, "hdStreamingBuyerId", true), b(this, "wallpaper", true), this.id = e.id, this.type = null != (t = e.type) ? t : g.d4z.GUILD_TEXT, this.name = null != (n = e.name) ? n : "", this.guild_id = null != (r = e.guild_id) ? r : null
  }
}

function eh(e) {
  let t = e;
  return "topic" in e && (t.topic_ = e.topic, delete e.topic), "position" in e && (t.position_ = e.position, delete e.position), "permissionOverwrites" in e && (t.permissionOverwrites_ = e.permissionOverwrites, delete e.permissionOverwrites), "bitrate" in e && (t.bitrate_ = e.bitrate, delete e.bitrate), "userLimit" in e && (t.userLimit_ = e.userLimit, delete e.userLimit), "nsfw" in e && (t.nsfw_ = e.nsfw, delete e.nsfw), "rateLimitPerUser" in e && (t.rateLimitPerUser_ = e.rateLimitPerUser, delete e.rateLimitPerUser), "flags" in e && (t.flags_ = e.flags, delete e.flags), t
}
let em = Object.freeze({});
class eg extends ep {
  get permissionOverwrites() {
    var e;
    return null != (e = this.permissionOverwrites_) ? module : em
  }
  get topic() {
    var e;
    return null != (e = this.topic_) ? module : ""
  }
  get position() {
    var e;
    return null != (e = this.position_) ? module : 0
  }
  get bitrate() {
    var e;
    return null != (e = this.bitrate_) ? module : Chunk981631.epw
  }
  get userLimit() {
    var e;
    return null != (e = this.userLimit_) ? module : 0
  }
  get nsfw() {
    var e;
    return null != (e = this.nsfw_) && module
  }
  get rateLimitPerUser() {
    var e;
    return null != (e = this.rateLimitPerUser_) ? module : 0
  }
  get flags() {
    var e;
    return null != (e = this.flags_) ? module : 0
  }
  toJS() {
    return y({}, this)
  }
  set(e, t) {
    return this.merge(eh({
      [e]: t
    }))
  }
  merge(e) {
    let t = null,
      n = eh(e);
    for (let e in n) n.hasOwnProperty(e) && this[e] !== n[e] && (null == t && (t = this.toJS()), t[e] = n[e]);
    return null != t ? new this.constructor(t) : this
  }
  computeLurkerPermissionsAllowList() {
    if (this.isGuildStageVoice() && Chunk427679.Z.isPublic(this.id)) return Chunk146085.L_
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
    return this.type === Chunk981631.d4z.GROUP_DM
  }
  isMultiUserDM() {
    return k(this.type)
  }
  isDM() {
    return this.type === Chunk981631.d4z.DM
  }
  isSystemDM() {
    returnfalse
  }
  isArchivedThread() {
    var e;
    return this.isThread() && (null == (e = this.threadMetadata) ? true : module.archived) === true
  }
  isLockedThread() {
    var e;
    return this.isThread() && (null == (e = this.threadMetadata) ? true : module.locked) === true
  }
  isScheduledForDeletion() {
    return this.hasFlag(Chunk176505.zZ.IS_SCHEDULED_FOR_DELETION)
  }
  isArchivedLockedThread() {
    var e, t;
    return H.has(this.type) && (null == (e = this.threadMetadata) ? true : module.archived) === true && (null == (t = this.threadMetadata) ? true : exports.locked) === true
  }
  isForumPost() {
    return this.type === Chunk981631.d4z.PUBLIC_THREAD && null != this.parentChannelThreadType && Chunk981631.TPd.GUILD_THREADS_ONLY.has(this.parentChannelThreadType)
  }
  isRingable() {
    return Chunk981631.TPd.CALLABLE.has(this.type) || this.type === Chunk981631.d4z.GUILD_VOICE
  }
  isCategory() {
    return this.type === Chunk981631.d4z.GUILD_CATEGORY
  }
  isVocal() {
    return Z(this.type)
  }
  isGuildVocal() {
    return D(this.type)
  }
  isGuildVocalOrThread() {
    return this.isGuildVocal() || this.isVocalThread()
  }
  isGuildVoice() {
    return this.type === Chunk981631.d4z.GUILD_VOICE
  }
  isGuildStageVoice() {
    return this.type === Chunk981631.d4z.GUILD_STAGE_VOICE
  }
  isListenModeCapable() {
    return this.isGuildStageVoice()
  }
  isThread() {
    return W(this.type)
  }
  isAnnouncementThread() {
    return this.type === Chunk981631.d4z.ANNOUNCEMENT_THREAD
  }
  isVocalThread() {
    return this.type === Chunk981631.d4z.PUBLIC_THREAD || this.type === Chunk981631.d4z.PRIVATE_THREAD
  }
  isActiveThread() {
    var e;
    return this.isThread() && (null == (e = this.threadMetadata) ? true : module.archived) !== true
  }
  isDirectory() {
    return this.type === Chunk981631.d4z.GUILD_DIRECTORY
  }
  isForumLikeChannel() {
    return this.isForumChannel() || this.isMediaChannel()
  }
  isForumChannel() {
    return this.type === Chunk981631.d4z.GUILD_FORUM
  }
  isMediaChannel() {
    return this.type === Chunk981631.d4z.GUILD_MEDIA
  }
  isMediaPost() {
    return this.type === Chunk981631.d4z.PUBLIC_THREAD && this.parentChannelThreadType === Chunk981631.d4z.GUILD_MEDIA
  }
  isRoleSubscriptionTemplatePreviewChannel() {
    return this.hasFlag(Chunk176505.zZ.IS_ROLE_SUBSCRIPTION_TEMPLATE_PREVIEW_CHANNEL)
  }
  isOwner(e) {
    return this.ownerId === e
  }
  getGuildId() {
    return this.guild_id
  }
  getApplicationId() {
    return this.application_id
  }
  getDefaultSortOrder() {
    var e;
    return null != (e = this.defaultSortOrder) ? module : Chunk683860.z.LATEST_ACTIVITY
  }
  getDefaultLayout() {
    return this.isMediaChannel() ? Chunk313361.X.GRID : null == this.defaultForumLayout || this.defaultForumLayout === Chunk313361.X.DEFAULT ? Chunk313361.X.LIST : this.defaultForumLayout
  }
  getDefaultTagSetting() {
    var e;
    return null != (e = this.defaultTagSetting) ? module : Chunk697988.z.MATCH_SOME
  }
  isModeratorReportChannel() {
    return this.hasFlag(Chunk176505.zZ.IS_MODERATOR_REPORT_CHANNEL)
  }
  get accessPermissions() {
    return ef(this.type)
  }
  hasFlag(e) {
    return (0, h.yE)(this.flags, e)
  }
  get isHDStreamSplashed() {
    return null != this.hdStreamingUntil && new Date(this.hdStreamingUntil) > new Date
  }
  get isChatWallpaperEnabled() {
    return this.isDM() || this.isMultiUserDM() || this.isGroupDM()
  }
}
class eE extends eg {
  static fromServer(e, t) {
    var n, r, i;
    let a = {
      application_id: e.application_id,
      appliedTags: e.applied_tags,
      availableTags: null != e.available_tags ? el(e.available_tags) : true,
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
      iconEmoji: ec(e.icon_emoji),
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
      nicks: es(e.nicks),
      nsfw_: e.nsfw,
      originChannelId: e.origin_channel_id,
      ownerId: e.owner_id,
      parent_id: e.parent_id,
      parentChannelThreadType: true,
      permissionOverwrites_: eo(e.permission_overwrites),
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
      type: null != e.type ? e.type : g.d4z.UNKNOWN,
      userLimit_: e.user_limit,
      version: e.version,
      videoQualityMode: e.video_quality_mode,
      linkedLobby: e.linked_lobby,
      hdStreamingUntil: e.hd_streaming_until,
      hdStreamingBuyerId: e.hd_streaming_buyer_id,
      wallpaper: (0, f.L)(e.wallpaper)
    };
    return (0, d.gh)(a, eE)
  }
  constructor(e) {
    super(e), this.application_id = e.application_id, this.appliedTags = e.appliedTags, this.availableTags = e.availableTags, this.bitrate_ = e.bitrate_, this.defaultAutoArchiveDuration = e.defaultAutoArchiveDuration, this.defaultForumLayout = e.defaultForumLayout, this.defaultReactionEmoji = e.defaultReactionEmoji, this.defaultSortOrder = e.defaultSortOrder, this.defaultTagSetting = e.defaultTagSetting, this.defaultThreadRateLimitPerUser = e.defaultThreadRateLimitPerUser, this.flags_ = e.flags_, this.icon = e.icon, this.iconEmoji = e.iconEmoji, this.isMessageRequest = e.isMessageRequest, this.isMessageRequestTimestamp = e.isMessageRequestTimestamp, this.isSpam = e.isSpam, this.lastMessageId = e.lastMessageId, this.lastPinTimestamp = e.lastPinTimestamp, this.member = e.member, this.memberCount = e.memberCount, this.memberIdsPreview = e.memberIdsPreview, this.memberListId = e.memberListId, this.messageCount = e.messageCount, this.nicks = e.nicks, this.nsfw_ = e.nsfw_, this.originChannelId = e.originChannelId, this.ownerId = e.ownerId, this.parent_id = e.parent_id, this.parentChannelThreadType = e.parentChannelThreadType, this.permissionOverwrites_ = e.permissionOverwrites_, this.position_ = e.position_, this.rateLimitPerUser_ = e.rateLimitPerUser_, this.rawRecipients = e.rawRecipients, this.recipients = e.recipients, this.recipientFlags = e.recipientFlags, this.rtcRegion = e.rtcRegion, this.safetyWarnings = e.safetyWarnings, this.blockedUserWarningDismissed = e.blockedUserWarningDismissed, this.template = e.template, this.themeColor = e.themeColor, this.threadMetadata = e.threadMetadata, this.topic_ = e.topic_, this.userLimit_ = e.userLimit_, this.version = e.version, this.videoQualityMode = e.videoQualityMode, this.linkedLobby = e.linkedLobby, this.hdStreamingUntil = e.hdStreamingUntil, this.hdStreamingBuyerId = e.hdStreamingBuyerId, this.wallpaper = e.wallpaper
  }
}
class eb extends eg {
  static fromServer(e, t) {
    var n, r, i, a;
    return eB({
      application_id: e.application_id,
      bitrate_: e.bitrate,
      flags_: e.flags,
      guild_id: null != (n = null != t ? t : e.guild_id) ? n : null,
      iconEmoji: ec(e.icon_emoji),
      id: e.id,
      lastMessageId: e.last_message_id,
      lastPinTimestamp: e.last_pin_timestamp,
      memberListId: e.member_list_id,
      name: null != (r = e.name) ? r : "",
      nsfw_: null != (i = e.nsfw) && i,
      originChannelId: e.origin_channel_id,
      parent_id: e.parent_id,
      permissionOverwrites_: eo(e.permission_overwrites),
      position_: e.position,
      rateLimitPerUser_: null != (a = e.rate_limit_per_user) ? a : 0,
      rtcRegion: e.rtc_region,
      themeColor: e.theme_color,
      topic_: e.topic,
      type: null != e.type ? e.type : g.d4z.GUILD_VOICE,
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
class ey extends eg {
  static fromServer(e, t) {
    var n, r, i, a;
    return eB({
      application_id: e.application_id,
      defaultAutoArchiveDuration: e.default_auto_archive_duration,
      defaultThreadRateLimitPerUser: e.default_thread_rate_limit_per_user,
      flags_: e.flags,
      guild_id: null != (n = null != t ? t : e.guild_id) ? n : null,
      iconEmoji: ec(e.icon_emoji),
      id: e.id,
      lastMessageId: e.last_message_id,
      lastPinTimestamp: e.last_pin_timestamp,
      memberListId: e.member_list_id,
      name: null != (r = e.name) ? r : "",
      nsfw_: null != (i = e.nsfw) && i,
      parent_id: e.parent_id,
      permissionOverwrites_: eo(e.permission_overwrites),
      position_: e.position,
      rateLimitPerUser_: null != (a = e.rate_limit_per_user) ? a : 0,
      themeColor: e.theme_color,
      topic_: e.topic,
      type: null != e.type ? e.type : g.d4z.GUILD_TEXT,
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
class eO extends ey {}
class ev extends ey {}
class eI extends ey {}
class eS extends eb {}
class eT extends ey {}
class eA extends ey {}
class eC extends eb {}
class eN extends eg {
  static fromServer(e, t) {
    var n, r, i, a;
    let o = {
      availableTags: null != e.available_tags ? el(e.available_tags) : [],
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
      iconEmoji: ec(e.icon_emoji),
      id: e.id,
      lastMessageId: e.last_message_id,
      lastPinTimestamp: e.last_pin_timestamp,
      memberListId: e.member_list_id,
      name: null != (r = e.name) ? r : "",
      nsfw_: null != (i = e.nsfw) && i,
      parent_id: e.parent_id,
      permissionOverwrites_: eo(e.permission_overwrites),
      position_: e.position,
      rateLimitPerUser_: null != (a = e.rate_limit_per_user) ? a : 0,
      template: e.template,
      themeColor: e.theme_color,
      topic_: e.topic,
      type: null != e.type ? e.type : g.d4z.GUILD_TEXT,
      version: e.version
    };
    return (0, d.gh)(o, eN)
  }
  constructor(e) {
    var t, n;
    super(e), this.availableTags = null != (t = e.availableTags) ? t : [], this.defaultAutoArchiveDuration = e.defaultAutoArchiveDuration, this.defaultForumLayout = e.defaultForumLayout, this.defaultReactionEmoji = e.defaultReactionEmoji, this.defaultSortOrder = e.defaultSortOrder, this.defaultTagSetting = e.defaultTagSetting, this.defaultThreadRateLimitPerUser = e.defaultThreadRateLimitPerUser, this.flags_ = e.flags_, this.iconEmoji = e.iconEmoji, this.lastMessageId = e.lastMessageId, this.lastPinTimestamp = e.lastPinTimestamp, this.memberListId = e.memberListId, this.nsfw_ = e.nsfw_, this.parent_id = e.parent_id, this.permissionOverwrites_ = null != (n = e.permissionOverwrites_) ? n : {}, this.position_ = e.position_, this.rateLimitPerUser_ = e.rateLimitPerUser_, this.template = e.template, this.themeColor = e.themeColor, this.topic_ = e.topic_, this.version = e.version
  }
}
class eR {
  getOrCompute(e) {
    let t = this.cache.get(e);
    if (null != t) return t;
    {
      let t = parseInt(e, 10);
      return this.cache.set(e, t), t
    }
  }
  constructor(e = 100) {
    b(this, "cache", true), this.cache = new(o())(e)
  }
}
let eP = new eR,
  ew = new eR;
class eD extends eg {
  static sortRecipients(e, t) {
    let n = eP.getOrCompute(t);
    return [...null != e ? e : []].sort((e, t) => (ew.getOrCompute(e.id) ^ n) - (ew.getOrCompute(t.id) ^ n))
  }
  static fromServer(e) {
    var t, n;
    let r = eD.sortRecipients(e.recipients, e.id),
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
        nicks: es(e.nicks),
        ownerId: e.owner_id,
        rawRecipients: r,
        recipients: r.map(e => e.id),
        recipientFlags: e.recipient_flags,
        safetyWarnings: e.safety_warnings,
        blockedUserWarningDismissed: e.blocked_user_warning_dismissed,
        type: null != e.type ? e.type : g.d4z.DM,
        wallpaper: (0, f.L)(e.wallpaper)
      };
    return (0, d.gh)(i, eD)
  }
  isSystemDM() {
    let e = this.rawRecipients[0];
    return this.type === Chunk981631.d4z.DM && null != module && true === module.system
  }
  getRecipientId() {
    return this.recipients[0]
  }
  addRecipient(e, t, n) {
    if (e === n) return this;
    {
      var r;
      let n = this.set("recipients", i().uniq([...null != (r = this.recipients) ? r : [], e]).sort(m.default.compare));
      return null == t ? n : n.set("nicks", v(y({}, n.nicks), {
        [e]: t
      }))
    }
  }
  removeRecipient(e) {
    return this.set("recipients", i().without(this.recipients, e))
  }
  constructor(e) {
    var t, n;
    super(e), this.application_id = e.application_id, this.flags_ = e.flags_, this.icon = e.icon, this.isMessageRequest = e.isMessageRequest, this.isMessageRequestTimestamp = e.isMessageRequestTimestamp, this.isSpam = e.isSpam, this.lastMessageId = e.lastMessageId, this.lastPinTimestamp = e.lastPinTimestamp, this.nicks = e.nicks, this.ownerId = e.ownerId, this.rawRecipients = eD.sortRecipients(e.rawRecipients, this.id), this.recipients = [...null != (t = e.recipients) ? t : []].sort(m.default.compare), this.recipientFlags = e.recipientFlags, this.safetyWarnings = null != (n = e.safetyWarnings) ? n : [], this.blockedUserWarningDismissed = e.blockedUserWarningDismissed, this.wallpaper = e.wallpaper
  }
}
class ex extends eD {}
class eL extends eD {}
class ej extends eg {
  static fromServer(e, t) {
    var n, r, i, a, o;
    let s = {
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
        invitable: null == (o = e.thread_metadata.invitable) || o
      } : true,
      totalMessageSent: e.total_message_sent,
      type: null != e.type ? e.type : g.d4z.PUBLIC_THREAD,
      userLimit_: e.user_limit,
      videoQualityMode: e.video_quality_mode
    };
    return (0, d.gh)(s, ej)
  }
  constructor(e) {
    var t;
    super(e), this.appliedTags = null != (t = e.appliedTags) ? t : [], this.bitrate_ = e.bitrate_, this.flags_ = e.flags_, this.lastMessageId = e.lastMessageId, this.lastPinTimestamp = e.lastPinTimestamp, this.member = e.member, this.memberCount = e.memberCount, this.memberIdsPreview = e.memberIdsPreview, this.messageCount = e.messageCount, this.nsfw_ = e.nsfw_, this.ownerId = e.ownerId, this.parent_id = e.parent_id, this.parentChannelThreadType = e.parentChannelThreadType, this.rateLimitPerUser_ = e.rateLimitPerUser_, this.rtcRegion = e.rtcRegion, this.threadMetadata = e.threadMetadata, this.userLimit_ = e.userLimit_, this.videoQualityMode = e.videoQualityMode
  }
}
let eM = {
  [Chunk981631.d4z.DM]: eD.fromServer,
  [Chunk981631.d4z.GROUP_DM]: eD.fromServer,
  [Chunk981631.d4z.GUILD_TEXT]: ey.fromServer,
  [Chunk981631.d4z.GUILD_VOICE]: eb.fromServer,
  [Chunk981631.d4z.GUILD_STAGE_VOICE]: eb.fromServer,
  [Chunk981631.d4z.GUILD_CATEGORY]: ey.fromServer,
  [Chunk981631.d4z.GUILD_ANNOUNCEMENT]: ey.fromServer,
  [Chunk981631.d4z.GUILD_STORE]: ey.fromServer,
  [Chunk981631.d4z.ANNOUNCEMENT_THREAD]: ej.fromServer,
  [Chunk981631.d4z.PUBLIC_THREAD]: ej.fromServer,
  [Chunk981631.d4z.PRIVATE_THREAD]: ej.fromServer,
  [Chunk981631.d4z.GUILD_DIRECTORY]: ey.fromServer,
  [Chunk981631.d4z.GUILD_FORUM]: eN.fromServer,
  [Chunk981631.d4z.GUILD_MEDIA]: eN.fromServer
};

function ek(e, t) {
  var n, r;
  return (null != (r = eM[null != (n = e.type) ? n : g.d4z.GUILD_TEXT]) ? r : eE.fromServer)(e, t)
}

function eU(e) {
  return eZ(e)
}
let eG = {
  [Chunk981631.d4z.DM]: ex,
  [Chunk981631.d4z.GROUP_DM]: eL,
  [Chunk981631.d4z.GUILD_TEXT]: eA,
  [Chunk981631.d4z.GUILD_VOICE]: eC,
  [Chunk981631.d4z.GUILD_STAGE_VOICE]: eS,
  [Chunk981631.d4z.GUILD_CATEGORY]: ev,
  [Chunk981631.d4z.GUILD_ANNOUNCEMENT]: eO,
  [Chunk981631.d4z.GUILD_STORE]: eT,
  [Chunk981631.d4z.ANNOUNCEMENT_THREAD]: ej,
  [Chunk981631.d4z.PUBLIC_THREAD]: ej,
  [Chunk981631.d4z.PRIVATE_THREAD]: ej,
  [Chunk981631.d4z.GUILD_DIRECTORY]: eI,
  [Chunk981631.d4z.GUILD_FORUM]: eN,
  [Chunk981631.d4z.GUILD_MEDIA]: eN
};

function eB(e) {
  var t, n;
  let r = null != (n = eG[null != (t = e.type) ? t : g.d4z.GUILD_TEXT]) ? n : eE;
  return (0, d.gh)(e, r)
}

function eZ(e) {
  var t, n;
  return new(null != (n = eG[null != (t = e.type) ? t : g.d4z.GUILD_TEXT]) ? n : eE)(eh(e))
}