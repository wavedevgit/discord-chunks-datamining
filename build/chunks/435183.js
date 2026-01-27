/** Chunk was on web.js **/
/** chunk id: 435183, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Ay: () => g,
  D3: () => m,
  RT: () => h,
  Ts: () => u,
  VN: () => f,
  c4: () => p,
  fy: () => _
}), require("./938796.js");
var Chunk562465 = require("./562465.js"),
  Chunk73153 = require("./73153.js"),
  Chunk568185 = require("./568185.js");
require("./250953.js");
var Chunk867455 = require("./867455.js");
require("./863036.js");
var Chunk734057 = require("./734057.js"),
  Chunk398590 = require("./398590.js"),
  Chunk652215 = require("./652215.js");

function u(e, t, n) {
  i.h.dispatch({
    type: "CHANNEL_SETTINGS_INIT",
    channelId: e,
    location: t,
    subsection: n
  })
}

function d(e, t, n) {
  u(e, t, n), (0, l.id)(c.zgK.CHANNEL_SETTINGS)
}

function f() {
  i.h.dispatch({
    type: "CHANNEL_SETTINGS_CLOSE"
  })
}

function p(e) {
  i.h.dispatch({
    type: "CHANNEL_SETTINGS_SET_SECTION",
    section: e
  })
}

function _(e) {
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
    defaultReactionEmoji: p,
    rtcRegion: _,
    videoQualityMode: h,
    autoArchiveDuration: m,
    locked: g,
    invitable: E,
    availableTags: y,
    defaultSortOrder: b,
    defaultForumLayout: O,
    defaultTagSetting: v,
    iconEmoji: A,
    themeColor: I
  } = e;
  i.h.dispatch({
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
    defaultReactionEmoji: p,
    rtcRegion: _,
    videoQualityMode: h,
    autoArchiveDuration: m,
    locked: g,
    invitable: E,
    availableTags: y,
    defaultSortOrder: b,
    defaultForumLayout: O,
    defaultTagSetting: v,
    iconEmoji: A,
    themeColor: I
  })
}
async function h(e, t) {
  let {
    name: n,
    type: l,
    position: u,
    topic: d,
    bitrate: f,
    userLimit: p,
    nsfw: _,
    flags: h,
    permissionOverwrites: m,
    rateLimitPerUser: g,
    defaultThreadRateLimitPerUser: E,
    defaultAutoArchiveDuration: y,
    template: b,
    defaultReactionEmoji: O,
    rtcRegion: v,
    videoQualityMode: A,
    autoArchiveDuration: I,
    locked: S,
    invitable: T,
    availableTags: C,
    defaultSortOrder: N,
    defaultForumLayout: w,
    defaultTagSetting: R,
    iconEmoji: P,
    themeColor: D
  } = t, L = s.A.getChannel(e);
  return i.h.dispatch({
    type: "CHANNEL_SETTINGS_SUBMIT"
  }), await o.A.unarchiveThreadIfNecessary(e), r.Bo.patch({
    url: c.Rsh.CHANNEL(e),
    body: {
      name: n,
      type: l,
      position: u,
      topic: d,
      bitrate: f,
      user_limit: p,
      nsfw: _,
      flags: h,
      permission_overwrites: m,
      rate_limit_per_user: g,
      default_thread_rate_limit_per_user: E,
      default_auto_archive_duration: y,
      template: b,
      rtc_region: v,
      video_quality_mode: A,
      auto_archive_duration: I,
      locked: S,
      invitable: T,
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
      default_forum_layout: w,
      default_tag_setting: R,
      icon_emoji: null != P ? {
        id: P.id,
        name: P.name
      } : null === P ? null : true,
      theme_color: D
    },
    oldFormErrors: true,
    rejectWithError: false
  }).then(t => {
    i.h.dispatch({
      type: "CHANNEL_SETTINGS_SUBMIT_SUCCESS",
      channelId: e
    });
    let n = null == L ? true : L.getGuildId();
    return null == n || (null == L ? true : L.isThread()) || a.A.checkGuildTemplateDirty(n), t
  }, e => (i.h.dispatch({
    type: "CHANNEL_SETTINGS_SUBMIT_FAILURE",
    errors: e.body
  }), e))
}
async function m(e) {
  let t = s.A.getChannel(e);
  await r.Bo.del({
    url: c.Rsh.CHANNEL(e),
    oldFormErrors: true,
    rejectWithError: true
  });
  let n = null == t ? true : t.getGuildId();
  null == n || (null == t ? true : t.isThread()) || a.A.checkGuildTemplateDirty(n), f()
}
let g = {
  init: u,
  open: d,
  close: f,
  setSection: p,
  selectPermissionOverwrite: function(e) {
    i.h.dispatch({
      type: "CHANNEL_SETTINGS_OVERWRITE_SELECT",
      overwriteId: e
    })
  },
  updateChannel: _,
  saveChannel: h,
  deleteChannel: m,
  updateVoiceChannelStatus: function(e, t) {
    return r.Bo.put({
      url: c.Rsh.UPDATE_VOICE_CHANNEL_STATUS(e),
      body: {
        status: t
      },
      rejectWithError: false
    })
  },
  removeLinkedLobby: function(e) {
    return r.Bo.del({
      url: c.Rsh.CHANNEL_LINKED_LOBBY(e),
      rejectWithError: true
    })
  }
}