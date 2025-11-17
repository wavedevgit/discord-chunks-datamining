/** Chunk was on web.js **/
/** chunk id: 787014, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  S1: () => u,
  ZP: () => g,
  pW: () => p,
  wk: () => h,
  xv: () => f,
  zc: () => _,
  zz: () => m
}), require("./997841.js");
var Chunk544891 = require("./544891.js"),
  Chunk570140 = require("./570140.js"),
  Chunk408987 = require("./408987.js");
require("./777639.js");
var Chunk346479 = require("./346479.js");
require("./388610.js");
var Chunk592125 = require("./592125.js"),
  Chunk37234 = require("./37234.js"),
  Chunk981631 = require("./981631.js");

function u(e, t, n) {
  i.Z.dispatch({
    type: "CHANNEL_SETTINGS_INIT",
    channelId: e,
    location: t,
    subsection: n
  })
}

function d(e, t, n) {
  u(e, t, n), (0, l.jN)(c.S9g.CHANNEL_SETTINGS)
}

function f() {
  Chunk570140.Z.dispatch({
    type: "CHANNEL_SETTINGS_CLOSE"
  })
}

function _(e) {
  i.Z.dispatch({
    type: "CHANNEL_SETTINGS_SET_SECTION",
    section: e
  })
}

function p(e) {
  let {
    name: t,
    type: n,
    topic: r,
    bitrate: a,
    userLimit: o,
    nsfw: s,
    flags: l,
    rateLimitPerUser: c,
    defaultThreadRateLimitPerUser: u,
    defaultAutoArchiveDuration: d,
    template: f,
    defaultReactionEmoji: _,
    rtcRegion: p,
    videoQualityMode: h,
    autoArchiveDuration: m,
    locked: g,
    invitable: E,
    availableTags: b,
    defaultSortOrder: y,
    defaultForumLayout: O,
    defaultTagSetting: v,
    iconEmoji: I,
    themeColor: T
  } = e;
  i.Z.dispatch({
    type: "CHANNEL_SETTINGS_UPDATE",
    name: t,
    channelType: n,
    topic: r,
    bitrate: a,
    userLimit: o,
    nsfw: s,
    flags: l,
    rateLimitPerUser: c,
    defaultThreadRateLimitPerUser: u,
    defaultAutoArchiveDuration: d,
    template: f,
    defaultReactionEmoji: _,
    rtcRegion: p,
    videoQualityMode: h,
    autoArchiveDuration: m,
    locked: g,
    invitable: E,
    availableTags: b,
    defaultSortOrder: y,
    defaultForumLayout: O,
    defaultTagSetting: v,
    iconEmoji: I,
    themeColor: T
  })
}
async function h(e, t) {
  let {
    name: n,
    type: l,
    position: u,
    topic: d,
    bitrate: f,
    userLimit: _,
    nsfw: p,
    flags: h,
    permissionOverwrites: m,
    rateLimitPerUser: g,
    defaultThreadRateLimitPerUser: E,
    defaultAutoArchiveDuration: b,
    template: y,
    defaultReactionEmoji: O,
    rtcRegion: v,
    videoQualityMode: I,
    autoArchiveDuration: T,
    locked: S,
    invitable: A,
    availableTags: C,
    defaultSortOrder: N,
    defaultForumLayout: R,
    defaultTagSetting: P,
    iconEmoji: D,
    themeColor: w
  } = t, x = s.Z.getChannel(e);
  return i.Z.dispatch({
    type: "CHANNEL_SETTINGS_SUBMIT"
  }), await o.Z.unarchiveThreadIfNecessary(e), r.tn.patch({
    url: c.ANM.CHANNEL(e),
    body: {
      name: n,
      type: l,
      position: u,
      topic: d,
      bitrate: f,
      user_limit: _,
      nsfw: p,
      flags: h,
      permission_overwrites: m,
      rate_limit_per_user: g,
      default_thread_rate_limit_per_user: E,
      default_auto_archive_duration: b,
      template: y,
      rtc_region: v,
      video_quality_mode: I,
      auto_archive_duration: T,
      locked: S,
      invitable: A,
      default_reaction_emoji: null != O ? {
        emoji_id: null == O ? true : O.emojiId,
        emoji_name: null == O ? true : O.emojiName
      } : null === O ? null : true,
      available_tags: null == C ? true : C.map(e => ({
        id: e.id,
        name: e.name,
        emoji_id: e.emojiId,
        emoji_name: e.emojiName,
        moderated: e.moderated
      })),
      default_sort_order: N,
      default_forum_layout: R,
      default_tag_setting: P,
      icon_emoji: null != D ? {
        id: D.id,
        name: D.name
      } : null === D ? null : true,
      theme_color: w
    },
    oldFormErrors: true,
    rejectWithError: false
  }).then(t => {
    i.Z.dispatch({
      type: "CHANNEL_SETTINGS_SUBMIT_SUCCESS",
      channelId: e
    });
    let n = null == x ? true : x.getGuildId();
    return null == n || (null == x ? true : x.isThread()) || a.Z.checkGuildTemplateDirty(n), t
  }, e => (i.Z.dispatch({
    type: "CHANNEL_SETTINGS_SUBMIT_FAILURE",
    errors: e.body
  }), e))
}
async function m(e) {
  let t = s.Z.getChannel(e);
  await r.tn.del({
    url: c.ANM.CHANNEL(e),
    oldFormErrors: true,
    rejectWithError: true
  });
  let n = null == t ? true : t.getGuildId();
  null == n || (null == t ? true : t.isThread()) || a.Z.checkGuildTemplateDirty(n), f()
}
let g = {
  init: u,
  open: d,
  close: f,
  setSection: _,
  selectPermissionOverwrite: function(e) {
    i.Z.dispatch({
      type: "CHANNEL_SETTINGS_OVERWRITE_SELECT",
      overwriteId: e
    })
  },
  updateChannel: p,
  saveChannel: h,
  deleteChannel: m,
  updateVoiceChannelStatus: function(e, t) {
    return r.tn.put({
      url: c.ANM.UPDATE_VOICE_CHANNEL_STATUS(e),
      body: {
        status: t
      },
      rejectWithError: false
    })
  },
  removeLinkedLobby: function(e) {
    return r.tn.del({
      url: c.ANM.CHANNEL_LINKED_LOBBY(e),
      rejectWithError: true
    })
  }
}