/** Chunk was on web.js **/
/** chunk id: 448515, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => Q
}), require("./321073.js"), require("./896048.js"), require("./938796.js"), require("./65821.js");
var Chunk735438 = require("./735438.js"),
  i = require.n(Chunk735438);
require("./237751.js");
var Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk686956 = require("./686956.js"),
  Chunk73825 = require("./73825.js"),
  Chunk803306 = require("./803306.js"),
  Chunk507698 = require("./507698.js"),
  Chunk626584 = require("./626584.js"),
  Chunk945096 = require("./945096.js"),
  Chunk692744 = require("./692744.js"),
  Chunk814890 = require("./814890.js"),
  Chunk505527 = require("./505527.js"),
  Chunk756377 = require("./756377.js"),
  Chunk736130 = require("./736130.js"),
  Chunk614792 = require("./614792.js"),
  Chunk761821 = require("./761821.js"),
  Chunk95701 = require("./95701.js"),
  Chunk545934 = require("./545934.js"),
  Chunk427157 = require("./427157.js"),
  Chunk734057 = require("./734057.js"),
  Chunk696451 = require("./696451.js"),
  Chunk186111 = require("./186111.js"),
  Chunk287809 = require("./287809.js"),
  Chunk977997 = require("./977997.js"),
  Chunk97352 = require("./97352.js"),
  Chunk166403 = require("./166403.js"),
  Chunk107351 = require("./107351.js"),
  Chunk121254 = require("./121254.js"),
  Chunk877166 = require("./877166.js"),
  Chunk531013 = require("./531013.js"),
  Chunk652215 = require("./652215.js");

function M(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function j(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      M(e, t, n[t])
    })
  }
  return e
}

function k(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function U(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : k(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function G(e, t) {
  if (null == e) return {};
  var n, r, i, a = {};
  if ("u" > typeof Reflect && Reflect.ownKeys) {
    for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a
  }
  if (a = F(e, t), Object.getOwnPropertySymbols)
    for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
  return a
}

function F(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.getOwnPropertyNames(e);
  for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
  return i
}
let V = new Chunk626584.A("ConnectionStore");

function B(e) {
  return e.map(e => {
    var t;
    let n = null == (t = e.timestamps) ? true : t.end,
      r = e.created_at;
    return null != n && null != r ? U(j({}, e), {
      timestamps: U(j({}, e.timestamps), {
        isCountDown: n > r && e.type !== x.$pd.LISTENING
      })
    }) : e
  })
}
let H = new Chunk877166.A(Chunk531013.sZ, (e, t) => {
    var n;
    e = null != e ? e : {
      type: "CHANNEL_UPDATES",
      channels: []
    };
    let r = (0, b.UE)(t),
      i = A.A.getChannel(t.id),
      a = null == i ? true : i.merge(U(j({}, r), {
        recipients: i.recipients,
        bitrate: null != (n = r.bitrate) ? n : i.bitrate
      }));
    return e.channels.push(null != a ? a : r), e
  }, e => "CHANNEL_UPDATE" !== e),
  Y = new Chunk877166.A(Chunk531013.sZ, (e, t) => ((e = null == e ? {
    type: "SOUNDBOARD_SOUNDS_RECEIVED",
    updates: []
  } : e).updates.push({
    guildId: t.guild_id,
    sounds: t.soundboard_sounds.map(e => ({
      name: e.name,
      soundId: e.sound_id,
      emojiName: e.emoji_name,
      emojiId: e.emoji_id,
      userId: e.user_id,
      volume: e.volume,
      available: e.available,
      guildId: t.guild_id
    }))
  }), e), e => "SOUNDBOARD_SOUNDS" !== e),
  W = new Chunk877166.A(Chunk531013.sZ, (e, t) => ((e = null != e ? e : {
    type: "GUILD_MEMBERS_CHUNK_BATCH",
    chunks: []
  }).chunks.push(t), e), e => "GUILD_MEMBERS_CHUNK" !== e),
  K = new Chunk877166.A(Chunk531013.sZ, (e, t) => ((e = null == e ? {
    type: "PRESENCE_UPDATES",
    updates: []
  } : e).updates.push(t), e), e => "PRESENCE_UPDATE" !== e && "GUILD_MEMBERS_CHUNK" !== e),
  z = {};

function q(e, t) {
  for (let n of e) z[n] = {
    preload: () => null,
    dispatch: t
  }
}

function Z(e, t, n) {
  for (let r of e) z[r] = {
    preload: t,
    dispatch: n
  }
}

function Q(e) {
  return z[e]
}

function X(e) {
  let t = [];
  for (let i of e) {
    var n, r;
    null != i.member && $(i.guild_id, i.member.user, i.member), t.push({
      userId: i.user_id,
      guildId: i.guild_id,
      sessionId: i.session_id,
      channelId: i.channel_id,
      mute: i.mute,
      deaf: i.deaf,
      selfMute: i.self_mute,
      selfDeaf: i.self_deaf,
      selfVideo: i.self_video || false,
      suppress: i.suppress,
      selfStream: i.self_stream || false,
      requestToSpeakTimestamp: null != (n = i.request_to_speak_timestamp) ? n : null,
      discoverable: null == (r = i.discoverable) || r,
      oldChannelId: C.A.getUserVoiceChannelId(i.guild_id, i.user_id)
    })
  }
  J({
    type: "VOICE_STATE_UPDATES",
    voiceStates: t
  })
}

function J(e) {
  o.h.dispatch(e).catch(t => L.sZ.resetSocketOnDispatchError({
    error: t,
    action: e.type
  }))
}

function $(e, t, n) {
  var r, a, o, s;
  let {
    roles: l,
    nick: c,
    avatar: d,
    avatar_decoration_data: p,
    flags: _,
    premium_since: h,
    pending: m,
    joined_at: g,
    communication_disabled_until: E,
    unusual_dm_activity_until: y,
    collectibles: b,
    display_name_styles: O
  } = n, v = I.Ay.getMember(e, t.id), A = (0, f.mT)(O);
  null != v && v.nick === c && v.avatar === d && i().isEqual(v.roles, l) && (0, u.kn)(null != (r = v.avatarDecoration) ? r : null, null != p ? p : null) && v.premiumSince === h && v.isPending === m && v.joinedAt === g && v.communicationDisabledUntil === E && v.flags === _ && (null != (a = v.unusualDMActivityUntil) ? a : null) === (null != y ? y : null) && i().isEqual(null != (o = v.collectibles) ? o : null, null != b ? b : null) && i().isEqual(null != (s = v.displayNameStyles) ? s : null, null != A ? A : null) || J({
    type: "GUILD_MEMBER_ADD",
    guildId: e,
    user: t,
    roles: l,
    nick: c,
    avatar: d,
    avatarDecoration: p,
    premiumSince: h,
    isPending: m,
    joinedAt: g,
    communicationDisabledUntil: E,
    unusualDMActivityUntil: y,
    flags: _,
    collectibles: b,
    displayNameStyles: A
  })
}

function ee(e) {
  let {
    member: t,
    mentions: n,
    author: r,
    guild_id: i
  } = e;
  null != t && null != i && $(i, r, t), null != n && n.forEach(e => {
    if (null != e.member && null != i) {
      let {
        member: t
      } = e;
      delete e.member, $(i, e, t)
    }
  })
}

function et(e) {
  return e.map(e => {
    var t, n;
    return {
      sessionId: e.session_id,
      lastModified: e.last_modified,
      status: e.status,
      activities: B(null != (t = e.activities) ? t : []),
      hiddenActivities: null != (n = e.hidden_activities) ? n : [],
      active: !!e.active,
      clientInfo: e.client_info
    }
  })
}

function en(e) {
  let {
    guildId: t,
    user: n,
    status: r,
    activities: i,
    hiddenActivities: a,
    clientStatus: o,
    processedAtTimestamp: s
  } = e;
  K.add({
    guildId: t,
    user: n,
    status: r,
    clientStatus: o,
    activities: B(null != i ? i : []),
    hiddenActivities: a,
    processedAtTimestamp: s
  })
}
Z(["INITIAL_GUILD"], e => "full" === e.data_mode ? null : A.D.loadGuildIds([e.id]), e => {
  E.A.initialGuild.measure(() => {
    a.Ay.Emitter.batched(() => {
      let t = P.fq(e, L.sZ.identifyStartTime);
      null != T.default.getCurrentUser() && (J({
        type: "GUILD_CREATE",
        guild: t
      }), J({
        type: "VOICE_STATE_UPDATES",
        voiceStates: t.voice_states.map(e => {
          var n, r;
          return {
            userId: e.user_id,
            guildId: t.id,
            sessionId: e.session_id,
            channelId: e.channel_id,
            mute: e.mute,
            deaf: e.deaf,
            selfMute: e.self_mute,
            selfDeaf: e.self_deaf,
            selfVideo: e.self_video || false,
            suppress: e.suppress,
            selfStream: e.self_stream || false,
            requestToSpeakTimestamp: null != (n = e.request_to_speak_timestamp) ? n : null,
            discoverable: null == (r = e.discoverable) || r
          }
        })
      }), V.log("Dispatched INITIAL_GUILD ".concat(e.id)))
    })
  })
}), q(["READY_SUPPLEMENTAL"], e => {
  E.A.readySupplemental.measure(() => {
    a.Ay.Emitter.batched(() => {
      var t;
      e = E.A.hydrateReadySupplemental.measure(() => P.H3(e, L.sZ.identifyStartTime));
      let n = e => e.map(e => ({
          user: e.user,
          status: e.status,
          clientStatus: e.client_status,
          activities: e.activities,
          hiddenActivities: e.hidden_activities,
          processedAtTimestamp: e.processed_at_timestamp
        })),
        r = e.guilds.filter(e => true !== e.unavailable);
      r.forEach(e => {
        e.presences = n(e.presences || [])
      });
      let i = e.presences ? n(e.presences) : [],
        a = (null != (t = e.lazy_private_channels) ? t : []).map(e => (0, b.UE)(e));
      E.A.dispatchReadySupplemental.measure(() => {
        var t;
        J({
          type: "CONNECTION_OPEN_SUPPLEMENTAL",
          guilds: r,
          presences: i,
          lazyPrivateChannels: a,
          userActivities: null != (t = e.user_activities) ? t : true
        })
      });
      let o = [];
      r.forEach(e => {
        e.voice_states.forEach(t => {
          var n, r;
          o.push({
            userId: t.user_id,
            guildId: e.id,
            sessionId: t.session_id,
            channelId: t.channel_id,
            mute: t.mute,
            deaf: t.deaf,
            selfMute: t.self_mute,
            selfDeaf: t.self_deaf,
            selfVideo: t.self_video || false,
            suppress: t.suppress,
            selfStream: t.self_stream || false,
            requestToSpeakTimestamp: null != (n = t.request_to_speak_timestamp) ? n : null,
            discoverable: null == (r = t.discoverable) || r
          })
        })
      }), J({
        type: "VOICE_STATE_UPDATES",
        voiceStates: o,
        initial: true
      }), L.Xo.update()
    })
  }), setTimeout(() => J({
    type: "POST_CONNECTION_OPEN"
  }), 2e3)
}), Z(["READY"], e => {
  var t;
  let n = P.XD(),
    r = e.guilds.filter(e => {
      var t, n;
      return !e.unavailable && "partial" === e.data_mode && ((null != (t = e.partial_updates.channels) ? t : []).length > 0 || (null != (n = e.partial_updates.deleted_channel_ids) ? n : []).length > 0 || true)
    }).map(e => e.id);
  return Promise.all([n, null != (t = A.D.loadGuildIds(r)) ? t : Promise.resolve()]).then(e => {
    let [t] = e;
    return t
  })
}, (e, t, n) => {
  e.user.bot ? J({
    type: "LOGOUT"
  }) : E.A.ready.measure(() => {
    a.Ay.Emitter.batched(() => {
      let t = (e = E.A.hydrateReady.measure(() => P.un(e, L.sZ.identifyStartTime, n))).private_channels.map(e => (0, b.UE)(e)),
        r = e.guilds.filter(e => true === e.unavailable && true !== e.geo_restricted).map(e => e.id),
        i = e.guilds.filter(e => true !== e.unavailable),
        a = e.guilds.filter(e => true === e.geo_restricted);
      i.forEach(e => {
        e.presences = []
      });
      let o = null == e.user_settings_proto ? true : (0, y.Gd)(e.user_settings_proto);
      E.A.dispatchReady.measure(() => {
        var n, s, l, c;
        J({
          type: "CONNECTION_OPEN",
          sessionId: e.session_id,
          authSessionIdHash: e.auth_session_id_hash,
          staticAuthSessionId: e.static_client_session_id,
          user: e.user,
          users: e.users,
          guilds: i,
          initialPrivateChannels: t,
          unavailableGuilds: r,
          readState: e.read_state,
          userGuildSettings: e.user_guild_settings,
          tutorial: e.tutorial,
          relationships: e.relationships,
          gameRelationships: e.game_relationships,
          friendSuggestionCount: e.friend_suggestion_count,
          presences: e.presences,
          analyticsToken: e.analytics_token,
          experiments: e.experiments,
          connectedAccounts: e.connected_accounts,
          guildExperiments: e.guild_experiments,
          apexExperiments: null != (n = e.apex_experiments) ? n : true,
          requiredAction: e.required_action,
          consents: e.consents,
          sessions: et(e.sessions || []),
          pendingPayments: e.pending_payments,
          countryCode: null != (s = e.country_code) ? s : true,
          guildJoinRequests: e.guild_join_requests || [],
          userSettingsProto: o,
          apiCodeVersion: e.api_code_version,
          auth: e.auth,
          notificationSettings: {
            flags: e.notification_settings.flags
          },
          geoRestrictedGuilds: a,
          explicitContentScanVersion: e.explicit_content_scan_version,
          failedStates: e.failed_states,
          linkedUsers: null != (l = e.linked_users) ? l : true,
          regionalFeatureConfig: null != (c = e.regional_feature_config) ? c : true
        })
      }), null != e.auth_token && J({
        type: "UPDATE_TOKEN",
        token: e.auth_token,
        userId: e.user.id
      }), null != e.ad_personalization_toggles_disabled && J({
        type: "AD_PERSONALIZATION_TOGGLES_RESTRICTED",
        disabled: e.ad_personalization_toggles_disabled
      }), L.OV.update(), L.Xo.update()
    })
  })
}), q(["STATE_UPDATE"], e => {
  var t, n;
  J({
    type: "CONNECTION_OPEN_STATE_UPDATE",
    apexExperiments: null != (t = e.apex_experiments) ? t : true,
    userActivities: null != (n = e.user_activities) ? n : true
  })
}), q(["EXPERIMENT_SESSION_OVERRIDE_CREATE"], e => {
  o.h.dispatch({
    type: "APEX_EXPERIMENT_SESSION_OVERRIDE_CREATE",
    experimentName: e.experiment_name,
    variantId: e.variant_id
  })
}), q(["EXPERIMENT_SESSION_OVERRIDE_DELETE"], e => {
  o.h.dispatch({
    type: "APEX_EXPERIMENT_SESSION_OVERRIDE_DELETE",
    experimentName: e.experiment_name
  })
}), q(["RESUMED"], () => {
  L.OV.forceUpdate(), L.Xo.forceUpdate(), J({
    type: "CONNECTION_RESUMED"
  })
}), q(["TYPING_START"], e => {
  null != e.member && $(e.guild_id, e.member.user, e.member), J({
    type: "TYPING_START",
    channelId: e.channel_id,
    userId: e.user_id
  })
}), q(["GUILD_RING_START"], e => {
  J({
    type: "GUILD_RING_START",
    ringing: e.ringing,
    channelId: e.channel_id,
    guildId: e.guild_id
  })
}), q(["GUILD_RING_STOP"], e => {
  J({
    type: "GUILD_RING_STOP",
    ringing: e.ringing,
    channelId: e.channel_id,
    guildId: e.guild_id
  })
}), q(["ACTIVITY_START"], e => {
  J({
    type: "ACTIVITY_START",
    userId: e.user_id,
    activity: e.activity
  })
}), q(["ACTIVITY_USER_ACTION"], e => {
  J({
    type: "ACTIVITY_USER_ACTION",
    actionType: e.action_type,
    user: e.user,
    applicationId: e.application_id,
    channelId: e.channel_id,
    messageId: e.message_id
  })
}), Z(["MESSAGE_CREATE"], e => A.D.loadGuildIds([e.guild_id]), e => {
  ee(e), null != e.author && J({
    type: "MESSAGE_CREATE",
    guildId: e.guild_id,
    channelId: e.channel_id,
    message: e,
    optimistic: false,
    isPushNotification: false
  })
}), Z(["MESSAGE_UPDATE"], e => A.D.loadGuildIds([e.guild_id]), e => {
  ee(e), J({
    type: "MESSAGE_UPDATE",
    guildId: e.guild_id,
    message: e
  })
}), Z(["MESSAGE_DELETE"], e => A.D.loadGuildIds([e.guild_id]), e => {
  J({
    type: "MESSAGE_DELETE",
    guildId: e.guild_id,
    id: e.id,
    channelId: e.channel_id
  })
}), Z(["MESSAGE_DELETE_BULK"], e => A.D.loadGuildIds([e.guild_id]), e => {
  J({
    type: "MESSAGE_DELETE_BULK",
    guildId: e.guild_id,
    ids: e.ids,
    channelId: e.channel_id
  })
}), Z(["MESSAGE_ACK"], e => A.D.loadGuildFromChannelId(e.channel_id), e => {
  J({
    type: "MESSAGE_ACK",
    channelId: e.channel_id,
    messageId: e.message_id,
    manual: e.manual,
    newMentionCount: e.mention_count,
    version: e.version
  })
}), q(["GUILD_FEATURE_ACK"], e => {
  J({
    type: "GUILD_FEATURE_ACK",
    id: e.resource_id,
    ackType: e.ack_type,
    ackedId: e.entity_id
  })
}), q(["USER_NON_CHANNEL_ACK"], e => {
  J({
    type: "USER_NON_CHANNEL_ACK",
    ackType: e.ack_type,
    ackedId: e.entity_id
  })
}), Z(["CHANNEL_PINS_ACK"], e => A.D.loadGuildIds([e.guild_id]), e => {
  J({
    type: "CHANNEL_PINS_ACK",
    channelId: e.channel_id,
    timestamp: e.timestamp,
    version: e.version
  })
}), Z(["CHANNEL_PINS_UPDATE"], e => A.D.loadGuildIds([e.guild_id]), e => {
  J({
    type: "CHANNEL_PINS_UPDATE",
    channelId: e.channel_id,
    lastPinTimestamp: e.last_pin_timestamp
  })
}), Z(["CHANNEL_CREATE", "CHANNEL_DELETE"], e => A.D.loadGuildIds([e.guild_id]), (e, t) => {
  J({
    type: t,
    channel: (0, b.UE)(e)
  })
}), q(["VOICE_CHANNEL_STATUS_UPDATE"], (e, t) => {
  J({
    type: t,
    id: e.id,
    guildId: e.guild_id,
    status: e.status
  })
}), q(["VOICE_CHANNEL_START_TIME_UPDATE"], (e, t) => {
  var n;
  J({
    type: t,
    id: e.id,
    guildId: e.guild_id,
    voiceStartTime: null != (n = e.voice_start_time) ? n : true
  })
}), q(["CHANNEL_STATUSES"], (e, t) => {
  J({
    type: t,
    guildId: e.guild_id,
    channels: e.channels
  })
}), q(["CHANNEL_INFO"], (e, t) => {
  J({
    type: t,
    guildId: e.guild_id,
    channels: e.channels.map(e => ({
      id: e.id,
      status: e.status,
      voiceStartTime: e.voice_start_time
    }))
  })
}), q(["CHANNEL_MEMBER_COUNT_UPDATE"], (e, t) => {
  J({
    type: t,
    guildId: e.guild_id,
    channelId: e.channel_id,
    online: e.presence_count,
    total: e.member_count
  })
}), Z(["CHANNEL_UPDATE"], e => A.D.loadGuildIds([e.guild_id]), e => {
  H.add(e)
}), Z(["THREAD_CREATE", "THREAD_UPDATE", "THREAD_DELETE"], e => A.D.loadGuildIds([e.guild_id]), (e, t) => {
  let {
    newly_created: n
  } = e, r = G(e, ["newly_created"]);
  J({
    type: t,
    isNewlyCreated: n,
    channel: (0, b.UE)(r)
  })
}), Z(["THREAD_LIST_SYNC"], e => A.D.loadGuildIds([e.guild_id]), e => {
  J({
    type: "THREAD_LIST_SYNC",
    guildId: e.guild_id,
    threads: e.threads.map(e => {
      let t = A.A.getChannel(e.parent_id);
      return null != t && (e.nsfw = t.nsfw, e.parentChannelThreadType = t.type), (0, b.UE)(e)
    }),
    mostRecentMessages: e.most_recent_messages,
    members: e.members ? i().map(e.members, g.A) : true,
    channelIds: e.channel_ids
  })
}), q(["THREAD_MEMBER_UPDATE"], e => {
  J({
    type: "THREAD_MEMBER_UPDATE",
    id: e.id,
    guildId: e.guild_id,
    userId: e.user_id,
    flags: e.flags,
    muted: e.muted,
    muteConfig: e.mute_config,
    joinTimestamp: e.join_timestamp
  })
}), q(["THREAD_MEMBERS_UPDATE"], e => {
  var t;
  J({
    type: "THREAD_MEMBERS_UPDATE",
    id: e.id,
    guildId: e.guild_id,
    memberCount: e.member_count,
    addedMembers: null == (t = e.added_members) ? true : t.map(t => ({
      id: t.id,
      guildId: e.guild_id,
      userId: t.user_id,
      flags: t.flags,
      joinTimestamp: t.join_timestamp
    })),
    removedMemberIds: e.removed_member_ids,
    memberIdsPreview: e.member_ids_preview
  })
}), q(["FORUM_UNREADS"], e => {
  e.permission_denied || J({
    type: "FORUM_UNREADS",
    channelId: e.channel_id,
    threads: e.threads.map(e => ({
      threadId: e.thread_id,
      missing: e.missing,
      count: e.count
    }))
  })
}), q(["SOUNDBOARD_SOUNDS"], e => {
  Y.add(e)
}), q(["CHANNEL_RECIPIENT_ADD", "CHANNEL_RECIPIENT_REMOVE"], (e, t) => {
  let n = A.A.getBasicChannel(e.channel_id);
  J({
    type: t,
    channelId: e.channel_id,
    user: e.user,
    nick: e.nick,
    isMember: null != n
  })
}), Z(["GUILD_CREATE"], e => "full" === e.data_mode ? null : A.D.loadGuildIds([e.id]), e => {
  if (e.unavailable) J({
    type: "GUILD_UNAVAILABLE",
    guildId: e.id
  });
  else {
    let t = P.TI(e);
    s.A.createGuild(t), J({
      type: "VOICE_STATE_UPDATES",
      voiceStates: t.voice_states.map(e => {
        var n, r;
        return {
          userId: e.user_id,
          guildId: t.id,
          sessionId: e.session_id,
          channelId: e.channel_id,
          mute: e.mute,
          deaf: e.deaf,
          selfMute: e.self_mute,
          selfDeaf: e.self_deaf,
          selfVideo: e.self_video || false,
          suppress: e.suppress,
          selfStream: e.self_stream || false,
          requestToSpeakTimestamp: null != (n = e.request_to_speak_timestamp) ? n : null,
          discoverable: null == (r = e.discoverable) || r
        }
      })
    })
  }
}), q(["GUILD_UPDATE"], e => {
  J({
    type: "GUILD_UPDATE",
    guild: e
  }), e.unavailable && J({
    type: "GUILD_UNAVAILABLE",
    guildId: e.id
  })
}), q(["GUILD_PRUNE_UPDATE"], e => {
  J({
    type: "GUILD_PRUNE_UPDATE",
    guildId: e.guild_id,
    prune: {
      isPreview: e.prune.is_preview,
      days: e.prune.days,
      pruneCount: e.prune.prune_count,
      includeRoles: e.prune.include_roles
    }
  })
}), q(["GUILD_DELETE"], e => {
  J({
    type: "GUILD_DELETE",
    guild: e
  }), e.geo_restricted ? J({
    type: "GUILD_GEO_RESTRICTED",
    guildId: e.id,
    icon: e.icon,
    name: e.name
  }) : e.unavailable && J({
    type: "GUILD_UNAVAILABLE",
    guildId: e.id
  })
}), q(["GUILD_MEMBERS_CHUNK"], e => {
  a.Ay.Emitter.batched(() => {
    W.add({
      guildId: e.guild_id,
      members: e.members,
      notFound: e.not_found
    }), null != e.presences && e.presences.forEach(t => {
      let {
        user: n,
        status: r,
        client_status: i,
        activities: a,
        hidden_activities: o,
        processed_at_timestamp: s
      } = t;
      return en({
        guildId: e.guild_id,
        user: n,
        status: r,
        activities: a,
        hiddenActivities: o,
        clientStatus: i,
        processedAtTimestamp: s
      })
    }), D.A.flush("GUILD_MEMBERS_CHUNK")
  })
}), q(["THREAD_MEMBER_LIST_UPDATE"], e => {
  a.Ay.Emitter.batched(() => {
    J({
      type: "THREAD_MEMBER_LIST_UPDATE",
      guildId: e.guild_id,
      threadId: e.thread_id,
      members: e.members
    }), null != e.presences && e.presences.forEach(t => {
      let {
        user: n,
        status: r,
        client_status: i,
        activities: a,
        hidden_activities: o,
        processed_at_timestamp: s
      } = t;
      return en({
        guildId: e.guild_id,
        user: n,
        status: r,
        activities: a,
        hiddenActivities: o,
        clientStatus: i,
        processedAtTimestamp: s
      })
    }), D.A.flush()
  })
}), q(["GUILD_BAN_ADD", "GUILD_BAN_REMOVE", "GUILD_MEMBER_ADD", "GUILD_MEMBER_UPDATE", "GUILD_MEMBER_REMOVE"], (e, t) => {
  J({
    type: t,
    guildId: e.guild_id,
    user: e.user,
    avatar: e.avatar,
    avatarDecoration: e.avatar_decoration_data,
    roles: e.roles,
    nick: e.nick,
    premiumSince: e.premium_since,
    isPending: e.pending,
    joinedAt: e.joined_at,
    communicationDisabledUntil: e.communication_disabled_until,
    unusualDMActivityUntil: e.unusual_dm_activity_until,
    flags: e.flags,
    collectibles: e.collectibles,
    displayNameStyles: (0, f.mT)(e.display_name_styles)
  })
}), Z(["GUILD_ROLE_CREATE", "GUILD_ROLE_UPDATE"], e => A.D.loadGuildIds([e.guild_id]), (e, t) => {
  J({
    type: t,
    guildId: e.guild_id,
    role: e.role
  })
}), Z(["GUILD_ROLE_DELETE"], e => A.D.loadGuildIds([e.guild_id]), e => {
  J({
    type: "GUILD_ROLE_DELETE",
    guildId: e.guild_id,
    roleId: e.role_id,
    version: e.version
  })
}), q(["GUILD_EMOJIS_UPDATE"], e => {
  J({
    type: "GUILD_EMOJIS_UPDATE",
    guildId: e.guild_id,
    emojis: e.emojis
  })
}), q(["GUILD_STICKERS_UPDATE"], e => {
  J({
    type: "GUILD_STICKERS_UPDATE",
    guildId: e.guild_id,
    stickers: e.stickers
  })
}), q(["GUILD_INTEGRATIONS_UPDATE"], e => {
  J({
    type: "GUILD_INTEGRATIONS_UPDATE",
    guildId: e.guild_id
  })
}), q(["INTEGRATION_CREATE"], e => {
  J({
    type: "INTEGRATION_CREATE",
    application: e.application,
    guildId: e.guild_id
  })
}), q(["INTEGRATION_DELETE"], e => {
  J({
    type: "INTEGRATION_DELETE",
    applicationId: e.application_id,
    guildId: e.guild_id
  })
}), q(["USER_UPDATE"], e => {
  J({
    type: "CURRENT_USER_UPDATE",
    user: e
  })
}), q(["USER_SETTINGS_PROTO_UPDATE"], e => {
  let t = (0, y.Y5)(e.settings.type, e.settings.proto);
  if (null != t) {
    if ("string" == typeof t) throw console.error("Invalid proto: |".concat(t, "| |").concat(e.settings.proto, "|")), console.error({
      parsed: t,
      wire: e.settings.proto,
      type: e.settings.type
    }), Error("UserSettingsProto must not be a string");
    J({
      type: "USER_SETTINGS_PROTO_UPDATE",
      settings: {
        proto: t,
        type: e.settings.type
      },
      partial: e.partial
    })
  }
}), q(["USER_GUILD_SETTINGS_UPDATE"], e => {
  J({
    type: "USER_GUILD_SETTINGS_FULL_UPDATE",
    userGuildSettings: [e]
  })
}), q(["USER_CONNECTIONS_UPDATE"], () => {
  J({
    type: "USER_CONNECTIONS_UPDATE"
  })
}), q(["USER_REQUIRED_ACTION_UPDATE"], e => {
  J({
    type: "USER_REQUIRED_ACTION_UPDATE",
    requiredAction: e.required_action
  })
}), q(["USER_NOTE_UPDATE"], e => {
  J(j({
    type: "USER_NOTE_UPDATE"
  }, e))
}), q(["RELATIONSHIP_ADD"], e => {
  J({
    type: "RELATIONSHIP_ADD",
    relationship: {
      id: e.id,
      type: e.type,
      user: e.user,
      since: e.since,
      nickname: e.nickname,
      isSpamRequest: e.is_spam_request || false,
      isStrangerRequest: e.is_stranger_request || false,
      userIgnored: e.user_ignored || false,
      originApplicationId: e.origin_application_id
    },
    shouldNotify: true === e.should_notify
  })
}), q(["RELATIONSHIP_REMOVE"], e => {
  J({
    type: "RELATIONSHIP_REMOVE",
    relationship: e
  })
}), q(["RELATIONSHIP_UPDATE"], e => {
  J({
    type: "RELATIONSHIP_UPDATE",
    relationship: {
      id: e.id,
      type: e.type,
      user: e.user,
      nickname: e.nickname,
      since: e.since,
      isSpamRequest: e.is_spam_request || false,
      isStrangerRequest: e.is_stranger_request || false,
      userIgnored: e.user_ignored || false,
      originApplicationId: e.origin_application_id
    }
  })
}), q(["GAME_RELATIONSHIP_ADD"], e => {
  J({
    type: "GAME_RELATIONSHIP_ADD",
    gameRelationship: {
      id: e.id,
      applicationId: e.application_id,
      type: e.type,
      since: e.since,
      dmAccessType: e.dm_access_type,
      user: e.user
    }
  })
}), q(["GAME_RELATIONSHIP_REMOVE"], e => {
  J({
    type: "GAME_RELATIONSHIP_REMOVE",
    userId: e.id,
    applicationId: e.application_id
  })
}), q(["PRESENCE_UPDATE"], e => {
  en({
    guildId: e.guild_id,
    user: e.user,
    status: e.status,
    activities: e.activities,
    hiddenActivities: e.hidden_activities,
    clientStatus: e.client_status,
    processedAtTimestamp: e.processed_at_timestamp
  })
}), q(["PRESENCES_REPLACE"], e => {
  J({
    type: "PRESENCES_REPLACE",
    presences: e
  })
}), q(["SESSIONS_REPLACE"], e => {
  J({
    type: "SESSIONS_REPLACE",
    sessions: et(e)
  })
}), q(["VOICE_STATE_UPDATE"], e => {
  X([e])
}), q(["VOICE_STATE_UPDATE_BATCH"], e => {
  X(e.voice_states)
}), q(["VOICE_SERVER_UPDATE"], e => {
  J({
    type: "VOICE_SERVER_UPDATE",
    guildId: e.guild_id,
    channelId: e.channel_id,
    endpoint: e.endpoint,
    token: e.token
  })
}), q(["CALL_CREATE"], e => {
  J({
    type: "CALL_CREATE",
    channelId: e.channel_id,
    messageId: e.message_id,
    region: e.region,
    ringing: e.ringing
  });
  let t = e.voice_states;
  null != t && J({
    type: "VOICE_STATE_UPDATES",
    voiceStates: t.map(e => {
      var t, n;
      return {
        userId: e.user_id,
        guildId: null,
        sessionId: e.session_id,
        channelId: e.channel_id,
        mute: e.mute,
        deaf: e.deaf,
        selfMute: e.self_mute,
        selfDeaf: e.self_deaf,
        selfVideo: e.self_video || false,
        suppress: e.suppress,
        selfStream: e.self_stream || false,
        requestToSpeakTimestamp: null != (t = e.request_to_speak_timestamp) ? t : null,
        discoverable: null == (n = e.discoverable) || n
      }
    })
  })
}), q(["CALL_UPDATE"], e => {
  J({
    type: "CALL_UPDATE",
    channelId: e.channel_id,
    messageId: e.message_id,
    region: e.region,
    ringing: e.ringing
  })
}), q(["CALL_DELETE"], e => {
  J({
    type: "CALL_DELETE",
    channelId: e.channel_id,
    unavailable: e.unavailable
  })
}), q(["OAUTH2_TOKEN_CREATE"], e => {
  J({
    type: "OAUTH2_TOKEN_CREATE",
    id: e.id,
    scopes: e.scopes,
    application: e.application
  })
}), q(["OAUTH2_TOKEN_DELETE"], e => {
  J({
    type: "OAUTH2_TOKEN_DELETE",
    id: e.id,
    applicationId: e.application_id
  })
}), q(["OAUTH2_TOKEN_REVOKE"], e => {
  J({
    type: "OAUTH2_TOKEN_REVOKE",
    accessToken: e.access_token
  })
}), q(["RECENT_MENTION_DELETE"], e => {
  J({
    type: "RECENT_MENTION_DELETE",
    id: e.message_id
  })
}), q(["SAVED_MESSAGE_CREATE"], e => {
  J({
    type: "SAVED_MESSAGE_CREATE",
    savedMessage: (0, m.iz)(e)
  })
}), q(["SAVED_MESSAGE_DELETE"], e => {
  J({
    type: "SAVED_MESSAGE_DELETE",
    savedMessageData: (0, m.x6)(e)
  })
}), q(["FRIEND_SUGGESTION_CREATE"], e => {
  J({
    type: "FRIEND_SUGGESTION_CREATE",
    suggestion: e
  })
}), q(["FRIEND_SUGGESTION_DELETE"], e => {
  J({
    type: "FRIEND_SUGGESTION_DELETE",
    suggestedUserId: e.suggested_user_id
  })
}), q(["WEBHOOKS_UPDATE"], e => {
  J({
    type: "WEBHOOKS_UPDATE",
    guildId: e.guild_id,
    channelId: e.channel_id
  })
}), q(["MESSAGE_REACTION_ADD", "MESSAGE_REACTION_REMOVE"], (e, t) => {
  J({
    type: t,
    channelId: e.channel_id,
    messageId: e.message_id,
    userId: e.user_id,
    emoji: e.emoji,
    colors: e.burst_colors,
    reactionType: e.type,
    messageAuthorId: e.message_author_id
  })
}), q(["MESSAGE_POLL_VOTE_ADD", "MESSAGE_POLL_VOTE_REMOVE"], (e, t) => {
  J({
    type: "MESSAGE_POLL_VOTE_ADD" === t ? "MESSAGE_REACTION_ADD" : "MESSAGE_REACTION_REMOVE",
    channelId: e.channel_id,
    messageId: e.message_id,
    userId: e.user_id,
    emoji: {
      id: e.answer_id,
      name: ""
    },
    reactionType: h.v.VOTE
  })
}), q(["MESSAGE_POLL_VOTE_ADD_MANY"], e => {
  J({
    type: "MESSAGE_REACTION_ADD_MANY",
    channelId: e.channel_id,
    messageId: e.message_id,
    reactions: e.votes.map(e => U(j({}, e), {
      emoji: {
        id: e.answer_id,
        name: ""
      },
      reactionType: h.v.VOTE
    }))
  })
}), q(["MESSAGE_REACTION_REMOVE_ALL"], e => {
  J({
    type: "MESSAGE_REACTION_REMOVE_ALL",
    channelId: e.channel_id,
    messageId: e.message_id
  })
}), q(["MESSAGE_REACTION_REMOVE_EMOJI"], e => {
  J({
    type: "MESSAGE_REACTION_REMOVE_EMOJI",
    channelId: e.channel_id,
    messageId: e.message_id,
    emoji: e.emoji
  })
}), q(["MESSAGE_REACTION_ADD_MANY"], e => {
  J({
    type: "MESSAGE_REACTION_ADD_MANY",
    channelId: e.channel_id,
    messageId: e.message_id,
    reactions: e.reactions
  })
}), q(["PAYMENT_UPDATE"], e => {
  J({
    type: "PAYMENT_UPDATE",
    payment: e
  })
}), q(["ENTITLEMENT_CREATE", "ENTITLEMENT_UPDATE", "ENTITLEMENT_DELETE"], (e, t) => {
  J({
    type: t,
    entitlement: e
  })
}), q(["USER_PAYMENT_SOURCES_UPDATE"], () => {
  S.A.hasLayers() && (n(384904).$o(), l.jv(N.A.getFetchedSKUIDs()))
}), q(["USER_SUBSCRIPTIONS_UPDATE"], () => {
  c.rQ(), S.A.hasLayers() && n(384904).hP()
}), q(["WISHLIST_ITEM_PURCHASED"], e => {
  J({
    type: "WISHLIST_ITEM_PURCHASED",
    recipientId: e.recipient_id,
    skuId: e.sku_id
  })
}), q(["USER_PREMIUM_GUILD_SUBSCRIPTION_SLOT_CREATE"], e => {
  J({
    type: "GUILD_BOOST_SLOT_CREATE",
    guildBoostSlot: O.A.createFromServer(e, w.A.getSubscriptionById(e.subscription_id))
  })
}), q(["USER_PREMIUM_GUILD_SUBSCRIPTION_SLOT_UPDATE"], e => {
  J({
    type: "GUILD_BOOST_SLOT_UPDATE",
    guildBoostSlot: O.A.createFromServer(e, w.A.getSubscriptionById(e.subscription_id))
  })
}), q(["BILLING_POPUP_BRIDGE_CALLBACK"], e => {
  J({
    type: "BILLING_POPUP_BRIDGE_CALLBACK",
    paymentSourceType: e.payment_source_type,
    state: e.state,
    path: e.path,
    query: e.query
  })
}), q(["USER_PAYMENT_BROWSER_CHECKOUT_DONE"], e => {
  J({
    type: "USER_PAYMENT_BROWSER_CHECKOUT_DONE",
    loadId: e.load_id,
    skuId: e.sku_id,
    skuSubscriptionPlanId: e.sku_subscription_plan_id
  })
}), q(["USER_PAYMENT_CLIENT_ADD"], e => {
  (0, R.D)().then(t => {
    let n = e.purchase_token_hash;
    n === t && J({
      type: "USER_PAYMENT_CLIENT_ADD",
      purchaseTokenHash: n,
      expiresAt: e.expires_at
    })
  })
}), q(["GUILD_MEMBER_LIST_UPDATE"], e => {
  a.Ay.Emitter.batched(() => {
    let t = t => {
      if (null == t.member) return;
      let {
        member: n
      } = t;
      if ($(e.guild_id, n.user, n), null == n.presence) return;
      let {
        presence: r
      } = n;
      en({
        guildId: e.guild_id,
        user: r.user,
        status: r.status,
        activities: r.activities,
        hiddenActivities: r.hidden_activities,
        clientStatus: r.client_status,
        processedAtTimestamp: r.processed_at_timestamp
      })
    };
    e.ops.forEach(e => {
      let {
        op: n,
        items: r,
        item: i
      } = e;
      switch (n) {
        case "SYNC":
          r.forEach(t);
          break;
        case "UPDATE":
        case "INSERT":
          t(i)
      }
    }), D.A.flush(), J({
      type: "GUILD_MEMBER_LIST_UPDATE",
      guildId: e.guild_id,
      id: e.id,
      ops: e.ops,
      groups: e.groups,
      memberCount: e.member_count,
      onlineCount: e.online_count
    })
  })
}), q(["GIFT_CODE_UPDATE"], e => {
  J({
    type: "GIFT_CODE_UPDATE",
    uses: e.uses,
    code: e.code
  })
}), q(["GIFT_CODE_CREATE"], e => {
  J({
    type: "GIFT_CODE_CREATE",
    giftCode: e
  })
}), q(["LIBRARY_APPLICATION_UPDATE"], e => {
  J({
    type: "LIBRARY_APPLICATION_UPDATE",
    libraryApplication: e
  })
}), q(["STREAM_CREATE"], e => {
  J({
    type: "STREAM_CREATE",
    streamKey: e.stream_key,
    region: e.region,
    viewerIds: e.viewer_ids,
    rtcServerId: e.rtc_server_id,
    rtcChannelId: e.rtc_channel_id,
    paused: e.paused
  })
}), q(["STREAM_SERVER_UPDATE"], e => {
  J({
    type: "STREAM_SERVER_UPDATE",
    streamKey: e.stream_key,
    endpoint: e.endpoint,
    token: e.token
  })
}), q(["STREAM_UPDATE"], e => {
  J({
    type: "STREAM_UPDATE",
    streamKey: e.stream_key,
    region: e.region,
    viewerIds: e.viewer_ids,
    paused: e.paused
  })
}), q(["STREAM_DELETE"], e => {
  J({
    type: "STREAM_DELETE",
    streamKey: e.stream_key,
    unavailable: e.unavailable,
    reason: e.reason
  })
}), q(["GENERIC_PUSH_NOTIFICATION_SENT"], e => {
  J({
    type: "GENERIC_PUSH_NOTIFICATION_SENT",
    title: e.title,
    body: e.body,
    trackingType: e.tracking_type,
    icon: e.icon,
    route: e.route,
    tag: e.tag
  })
}), q(["REACTION_NOTIFICATION_SENT"], e => {
  J({
    type: "REACTION_NOTIFICATION_SENT",
    route: e.route,
    message: e.message,
    emoji: e.emoji,
    reactorUserId: e.reactor_user_id,
    title: e.title,
    body: e.body,
    trackingType: e.tracking_type,
    icon: e.icon
  })
}), q(["NOTIFICATION_CENTER_ITEM_CREATE"], e => {
  J({
    type: "NOTIFICATION_CENTER_ITEM_CREATE",
    item: e
  })
}), q(["NOTIFICATION_CENTER_ITEM_DELETE"], e => {
  J({
    type: "NOTIFICATION_CENTER_ITEM_DELETE",
    id: e.id
  })
}), q(["NOTIFICATION_CENTER_ITEMS_ACK"], e => {
  J({
    type: "NOTIFICATION_CENTER_ITEMS_ACK",
    ids: [e.id],
    optimistic: false
  })
}), q(["NOTIFICATION_CENTER_ITEM_COMPLETED"], e => {
  J({
    type: "NOTIFICATION_CENTER_ITEM_COMPLETED",
    item_enum: e.item_enum
  })
}), q(["QUESTS_USER_STATUS_UPDATE"], e => {
  J({
    type: "QUESTS_USER_STATUS_UPDATE",
    user_status: e.user_status
  })
}), q(["QUESTS_USER_COMPLETION_UPDATE"], e => {
  J({
    type: "QUESTS_USER_COMPLETION_UPDATE",
    quest_enrollment_blocked_until: e.quest_enrollment_blocked_until
  })
}), q(["QUEST_PREVIEW_UPDATE"], e => {
  J({
    type: "QUEST_PREVIEW_UPDATE",
    quest_id: e.quest_id
  })
}), q(["APPLICATION_COMMAND_PERMISSIONS_UPDATE"], (e, t) => {
  J({
    type: t,
    guildId: e.guild_id
  })
}), q(["GUILD_APPLICATION_COMMAND_INDEX_UPDATE"], e => {
  J({
    type: "GUILD_APPLICATION_COMMAND_INDEX_UPDATE",
    guildId: e.guild_id,
    version: e.version
  })
}), q(["GUILD_JOIN_REQUEST_CREATE"], e => {
  J({
    type: "GUILD_JOIN_REQUEST_CREATE",
    request: e.request,
    status: e.status,
    guildId: e.guild_id
  })
}), q(["GUILD_JOIN_REQUEST_UPDATE"], e => {
  J({
    type: "GUILD_JOIN_REQUEST_UPDATE",
    request: e.request,
    status: e.status,
    guildId: e.guild_id
  })
}), q(["GUILD_JOIN_REQUEST_DELETE"], e => {
  J({
    type: "GUILD_JOIN_REQUEST_DELETE",
    id: e.id,
    userId: e.user_id,
    guildId: e.guild_id
  })
}), q(["INTERACTION_CREATE"], e => {
  J({
    type: "INTERACTION_CREATE",
    interactionId: e.id,
    nonce: e.nonce
  })
}), q(["INTERACTION_SUCCESS"], e => {
  J({
    type: "INTERACTION_SUCCESS",
    interactionId: e.id,
    nonce: e.nonce
  })
}), q(["INTERACTION_FAILURE"], e => {
  J({
    type: "INTERACTION_FAILURE",
    interactionId: e.id,
    nonce: e.nonce,
    reasonCode: e.reason_code
  })
}), q(["APPLICATION_COMMAND_AUTOCOMPLETE_RESPONSE"], e => {
  J({
    type: "APPLICATION_COMMAND_AUTOCOMPLETE_RESPONSE",
    choices: e.choices,
    nonce: e.nonce
  })
}), q(["INTERACTION_MODAL_CREATE"], e => {
  J({
    type: "INTERACTION_MODAL_CREATE",
    id: e.id,
    channelId: e.channel_id,
    customId: e.custom_id,
    application: e.application,
    title: e.title,
    components: (0, _.ZV)(e.components),
    nonce: e.nonce,
    resolved: e.resolved
  })
}), q(["INTERACTION_IFRAME_MODAL_CREATE"], e => {
  J({
    type: "INTERACTION_IFRAME_MODAL_CREATE",
    id: e.id,
    channelId: e.channel_id,
    customId: e.custom_id,
    application: e.application,
    title: e.title,
    iframePath: e.iframe_path,
    modalSize: e.modal_size,
    nonce: e.nonce
  })
}), q(["STAGE_INSTANCE_CREATE"], e => {
  J({
    type: "STAGE_INSTANCE_CREATE",
    instance: e
  })
}), q(["STAGE_INSTANCE_UPDATE"], e => {
  J({
    type: "STAGE_INSTANCE_UPDATE",
    instance: e
  })
}), q(["STAGE_INSTANCE_DELETE"], e => {
  J({
    type: "STAGE_INSTANCE_DELETE",
    instance: e
  })
}), q(["GUILD_SCHEDULED_EVENT_CREATE"], e => {
  J({
    type: "GUILD_SCHEDULED_EVENT_CREATE",
    guildScheduledEvent: e
  })
}), q(["GUILD_SCHEDULED_EVENT_UPDATE"], e => {
  J({
    type: "GUILD_SCHEDULED_EVENT_UPDATE",
    guildScheduledEvent: e
  })
}), q(["GUILD_SCHEDULED_EVENT_DELETE"], e => {
  J({
    type: "GUILD_SCHEDULED_EVENT_DELETE",
    guildScheduledEvent: e
  })
}), q(["GUILD_SCHEDULED_EVENT_EXCEPTION_CREATE"], e => {
  J({
    type: "GUILD_SCHEDULED_EVENT_EXCEPTION_CREATE",
    eventException: e
  })
}), q(["GUILD_SCHEDULED_EVENT_EXCEPTION_UPDATE"], e => {
  J({
    type: "GUILD_SCHEDULED_EVENT_EXCEPTION_UPDATE",
    eventException: e
  })
}), q(["GUILD_SCHEDULED_EVENT_EXCEPTION_DELETE"], e => {
  J({
    type: "GUILD_SCHEDULED_EVENT_EXCEPTION_DELETE",
    eventException: e
  })
}), q(["GUILD_SCHEDULED_EVENT_EXCEPTIONS_DELETE"], e => {
  J({
    type: "GUILD_SCHEDULED_EVENT_EXCEPTIONS_DELETE",
    eventId: e.event_id
  })
}), q(["GUILD_SCHEDULED_EVENT_USER_ADD"], e => {
  J({
    type: "GUILD_SCHEDULED_EVENT_USER_ADD",
    userId: e.user_id,
    guildId: e.guild_id,
    guildEventId: e.guild_scheduled_event_id,
    guildEventExceptionId: e.guild_scheduled_event_exception_id,
    response: e.response
  })
}), q(["GUILD_SCHEDULED_EVENT_USER_REMOVE"], e => {
  J({
    type: "GUILD_SCHEDULED_EVENT_USER_REMOVE",
    userId: e.user_id,
    guildId: e.guild_id,
    guildEventId: e.guild_scheduled_event_id,
    guildEventExceptionId: e.guild_scheduled_event_exception_id,
    response: e.response
  })
}), q(["GUILD_DIRECTORY_ENTRY_CREATE"], e => {
  J({
    type: "GUILD_DIRECTORY_ENTRY_CREATE",
    channelId: e.directory_channel_id,
    entry: e
  })
}), q(["GUILD_DIRECTORY_ENTRY_UPDATE"], e => {
  J({
    type: "GUILD_DIRECTORY_ENTRY_UPDATE",
    channelId: e.directory_channel_id,
    entry: e
  })
}), q(["GUILD_DIRECTORY_ENTRY_DELETE"], e => {
  J({
    type: "GUILD_DIRECTORY_ENTRY_DELETE",
    channelId: e.directory_channel_id,
    guildId: e.entity_id
  })
}), q(["AUTO_MODERATION_MENTION_RAID_DETECTION"], e => {
  J({
    type: "AUTO_MODERATION_MENTION_RAID_DETECTION",
    guildId: e.guild_id,
    decisionId: e.decision_id,
    suspiciousMentionActivityUntil: e.suspicious_mention_activity_until
  })
}), q(["VOICE_CHANNEL_EFFECT_SEND"], e => {
  J({
    type: "VOICE_CHANNEL_EFFECT_SEND",
    emoji: e.emoji,
    channelId: e.channel_id,
    userId: e.user_id,
    animationType: e.animation_type,
    animationId: e.animation_id,
    soundId: e.sound_id,
    soundVolume: e.sound_volume,
    points: e.points,
    streamerId: e.streamer_id,
    lineId: e.line_id,
    emojiHose: e.emoji_hose
  })
}), q(["GUILD_SOUNDBOARD_SOUND_CREATE"], e => {
  J({
    type: "GUILD_SOUNDBOARD_SOUND_CREATE",
    sound: {
      guildId: e.guild_id,
      name: e.name,
      soundId: e.sound_id,
      user: new v.A(e.user),
      userId: e.user_id,
      volume: e.volume,
      emojiId: e.emoji_id,
      emojiName: e.emoji_name,
      available: e.available
    }
  })
}), q(["GUILD_SOUNDBOARD_SOUND_UPDATE"], e => {
  J({
    type: "GUILD_SOUNDBOARD_SOUND_UPDATE",
    sound: {
      guildId: e.guild_id,
      name: e.name,
      soundId: e.sound_id,
      user: new v.A(e.user),
      userId: e.user_id,
      volume: e.volume,
      emojiId: e.emoji_id,
      emojiName: e.emoji_name,
      available: e.available
    }
  })
}), q(["GUILD_SOUNDBOARD_SOUND_DELETE"], e => {
  J({
    type: "GUILD_SOUNDBOARD_SOUND_DELETE",
    guildId: e.guild_id,
    soundId: e.sound_id
  })
}), q(["GUILD_SOUNDBOARD_SOUNDS_UPDATE"], e => {
  J({
    type: "GUILD_SOUNDBOARD_SOUNDS_UPDATE",
    guildId: e.guild_id,
    soundboardSounds: e.soundboard_sounds.map(t => ({
      name: t.name,
      soundId: t.sound_id,
      emojiName: t.emoji_name,
      emojiId: t.emoji_id,
      userId: t.user_id,
      volume: t.volume,
      available: t.available,
      guildId: e.guild_id
    }))
  })
}), Z(["EMBEDDED_ACTIVITY_UPDATE_V2"], e => A.D.loadGuildIds([e.guild_id]), e => {
  J({
    type: "EMBEDDED_ACTIVITY_UPDATE_V2",
    applicationId: e.application_id,
    launchId: e.launch_id,
    compositeInstanceId: e.composite_instance_id,
    location: e.location,
    participants: e.participants
  })
}), q(["AUTH_SESSION_CHANGE"], e => {
  J({
    type: "AUTH_SESSION_CHANGE",
    authSessionIdHash: e.auth_session_id_hash
  })
}), q(["USER_CONNECTIONS_LINK_CALLBACK"], e => {
  J({
    type: "USER_CONNECTIONS_LINK_CALLBACK",
    provider: e.provider,
    callbackCode: e.callback_code,
    callbackState: e.callback_state
  })
}), q(["USER_CONNECTIONS_CALLBACK"], e => {
  J({
    type: "USER_CONNECTIONS_CALLBACK",
    provider: e.provider,
    code: e.code,
    state: e.state,
    openid_params: e.openid_params
  })
}), q(["DELETED_ENTITY_IDS"], e => {
  J(j({
    type: "DELETED_ENTITY_IDS"
  }, e))
}), Z(["CHANNEL_SYNC"], e => A.D.loadGuildIds([e.guild_id]), e => {
  e.channels.forEach(e => {
    H.add(e)
  }), J({
    type: "CHANNEL_SYNC",
    guild_id: e.guild_id,
    channels: e.channels,
    integrity_check: e.integrity_check
  })
}), q(["CONSOLE_COMMAND_UPDATE"], e => {
  J({
    type: "CONSOLE_COMMAND_UPDATE",
    id: e.id,
    result: e.result,
    error: e.error
  })
}), Z(["PASSIVE_UPDATE_V2"], e => A.D.loadGuildIds([e.guild_id]), e => {
  J({
    type: "PASSIVE_UPDATE_V2",
    guildId: e.guild_id,
    members: e.updated_members,
    channels: e.updated_channels.map(e => ({
      id: e.id,
      lastMessageId: e.last_message_id,
      lastPinTimestamp: e.last_pin_timestamp
    })),
    voiceStates: e.updated_voice_states.map(e => {
      var t, n;
      return {
        channelId: e.channel_id,
        deaf: e.deaf || false,
        mute: e.mute || false,
        requestToSpeakTimestamp: null != (t = e.request_to_speak_timestamp) ? t : null,
        selfDeaf: e.self_deaf || false,
        selfMute: e.self_mute || false,
        selfStream: e.self_stream || false,
        selfVideo: e.self_video || false,
        sessionId: e.session_id,
        suppress: e.suppress,
        userId: e.user_id,
        discoverable: null == (n = e.discoverable) || n
      }
    }),
    removedVoiceStateUsers: e.removed_voice_states
  })
}), q(["CREATOR_MONETIZATION_RESTRICTIONS_UPDATE"], e => {
  J({
    type: "GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_SUCCESS",
    guildId: e.guild_id,
    restrictions: e.restrictions
  })
}), q(["BILLING_REFERRAL_TRIAL_OFFER_UPDATE"], e => {
  J({
    type: "BILLING_REFERRAL_TRIAL_OFFER_UPDATE",
    userTrialOfferId: e.user_trial_offer_id,
    recipientId: e.recipient_id
  })
}), q(["LAST_MESSAGES"], e => {
  J({
    type: "MESSAGE_PREVIEWS_LOADED",
    guildId: e.guild_id,
    messages: e.messages
  })
}), q(["AUTHENTICATOR_UPDATE"], e => {
  J({
    type: "AUTHENTICATOR_UPDATE",
    credential: e
  })
}), q(["AUTHENTICATOR_CREATE"], e => {
  J({
    type: "AUTHENTICATOR_CREATE",
    credential: e
  })
}), q(["AUTHENTICATOR_DELETE"], e => {
  J({
    type: "AUTHENTICATOR_DELETE",
    credential: e
  })
}), q(["NOTIFICATION_SETTINGS_UPDATE"], e => {
  J({
    type: "NOTIFICATION_SETTINGS_UPDATE",
    settings: {
      flags: e.flags
    }
  })
}), q(["CONVERSATION_SUMMARY_UPDATE"], e => {
  J(j({
    type: "CONVERSATION_SUMMARY_UPDATE"
  }, e))
}), q(["PREMIUM_MARKETING_PREVIEW"], e => {
  J({
    type: "PREMIUM_MARKETING_PREVIEW",
    data: e
  })
}), q(["USER_APPLICATION_UPDATE"], e => {
  J({
    type: "USER_APPLICATION_UPDATE",
    applicationId: e.application_id
  })
}), q(["USER_APPLICATION_REMOVE"], e => {
  J({
    type: "USER_APPLICATION_REMOVE",
    applicationId: e.application_id
  })
}), q(["DM_SETTINGS_UPSELL_SHOW"], e => {
  J({
    type: "DM_SETTINGS_UPSELL_SHOW",
    guildId: e.guild_id
  })
}), q(["CONTENT_INVENTORY_INBOX_STALE"], e => {
  J({
    type: "CONTENT_INVENTORY_INBOX_STALE",
    refreshAfterMs: e.refresh_after_ms
  })
}), q(["VIRTUAL_CURRENCY_BALANCE_UPDATE"], e => {
  J({
    type: "VIRTUAL_CURRENCY_BALANCE_UPDATE",
    balance: e.balance
  })
}), q(["GUILD_POWERUP_ENTITLEMENTS_CREATE", "GUILD_POWERUP_ENTITLEMENTS_DELETE"], (e, t) => {
  J({
    type: t,
    guildId: e.guild_id,
    entitlements: e.entitlements
  })
}), q(["GAME_SERVER_CREATE", "GAME_SERVER_UPDATE"], (e, t) => {
  J({
    type: t,
    guildId: e.guild_id,
    gameServer: e.game_server
  })
}), q(["GAME_SERVER_DELETE"], (e, t) => {
  J({
    type: t,
    guildId: e.guild_id,
    gameServerId: e.game_server_id
  })
}), q(["GUILD_APPLIED_BOOSTS_UPDATE"], (e, t) => {
  J({
    type: t,
    guildId: e.guild_id
  })
}), q(["USER_APPLICATION_IDENTITY_UPDATE"], (e, t) => {
  J({
    type: t,
    user_id: e.user_id,
    application_id: e.application_id,
    username: e.username,
    avatar_hash: e.avatar_hash,
    metadata: e.metadata
  })
}), q(["USER_APPLICATION_IDENTITY_REMOVE"], (e, t) => {
  J({
    type: t,
    user_id: e.user_id,
    application_id: e.application_id
  })
}), q(["SOCIAL_LAYER_SKU_PURCHASE_ELIGIBILITY_RESPONSE"], e => {
  J({
    type: "SOCIAL_LAYER_SKU_PURCHASE_ELIGIBILITY_RESPONSE",
    interactionId: e.interaction_id,
    applicationId: e.application_id,
    skuId: e.sku_id,
    recipientId: e.recipient_id,
    eligible: e.eligible
  })
}), q(["HAVEN_CONNECT"], (e, t) => {
  J({
    type: t,
    room: (0, p.xf)(e)
  })
}), q(["HAVEN_DISCONNECT"], (e, t) => {
  J({
    type: t,
    userId: e.user_id,
    roomId: e.room_id
  })
}), q(["HAVEN_UPDATE"], (e, t) => {
  J({
    type: t,
    room: (0, p.xf)(e)
  })
})