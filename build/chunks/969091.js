/** Chunk was on web.js **/
/** chunk id: 969091, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => l,
  p: () => o.p
}), require("./938796.js"), require("./896048.js"), require("./457529.js");
var Chunk143236 = require("./143236.js"),
  Chunk873985 = require("./873985.js"),
  Chunk661191 = require("./661191.js"),
  Chunk353198 = require("./353198.js");
let s = 15360;
class l extends Chunk143236.EventEmitter {
  presenceUpdate(e, t, n, r) {
    this.send(o.p.PRESENCE_UPDATE, {
      status: e,
      since: t,
      activities: n,
      afk: r
    })
  }
  voiceStateUpdate(e) {
    let {
      guildId: t = null,
      channelId: n = null,
      selfMute: r = false,
      selfDeaf: a = false,
      selfVideo: s = false,
      preferredRegion: l = null,
      preferredRegions: c = null,
      videoStreamParameters: u = null,
      flags: d = 0
    } = e, f = {
      guild_id: t,
      channel_id: n,
      self_mute: r,
      self_deaf: a,
      self_video: s,
      flags: d
    };
    null != n && i.A.shouldIncludePreferredRegion() && (f.preferred_region = l, f.preferred_regions = c), null != u && (f.tracks = null == u ? true : u.map(e => ({
      type: e.type,
      rid: e.rid,
      quality: e.quality
    }))), this.send(o.p.VOICE_STATE_UPDATE, f)
  }
  voiceServerPing() {
    this.send(o.p.VOICE_SERVER_PING, null)
  }
  requestGuildMembers(e, t) {
    let {
      query: n,
      limit: r,
      userIds: i,
      presences: a
    } = t;
    this.send(o.p.REQUEST_GUILD_MEMBERS, {
      guild_id: e,
      query: n,
      limit: r,
      user_ids: i,
      presences: a
    })
  }
  searchRecentMembers(e, t) {
    let {
      query: n,
      continuationToken: r
    } = t;
    this.send(o.p.SEARCH_RECENT_MEMBERS, {
      guild_id: e,
      query: null != n ? n : "",
      continuation_token: null != r ? r : null
    })
  }
  updateGuildSubscriptions(e) {
    let t = {},
      n = 0;
    a.default.keys(e).forEach(r => {
      let i = e[r],
        a = JSON.stringify([r, i]).length;
      n + a > s && (this.send(o.p.GUILD_SUBSCRIPTIONS_BULK, {
        subscriptions: t
      }), t = {}, n = 0), t[r] = i, n += a
    }), n > 0 && this.send(o.p.GUILD_SUBSCRIPTIONS_BULK, {
      subscriptions: t
    })
  }
  callConnect(e) {
    this.send(o.p.CALL_CONNECT, {
      channel_id: e
    })
  }
  streamCreate(e, t, n) {
    let r = arguments.length > 3 && true !== arguments[3] ? arguments[3] : null;
    this.send(o.p.STREAM_CREATE, {
      type: e,
      guild_id: t,
      channel_id: n,
      preferred_region: r
    })
  }
  streamWatch(e) {
    this.send(o.p.STREAM_WATCH, {
      stream_key: e
    })
  }
  streamPing(e) {
    this.send(o.p.STREAM_PING, {
      stream_key: e
    })
  }
  streamDelete(e) {
    this.send(o.p.STREAM_DELETE, {
      stream_key: e
    })
  }
  streamSetPaused(e, t) {
    this.send(o.p.STREAM_SET_PAUSED, {
      stream_key: e,
      paused: t
    })
  }
  requestForumUnreads(e, t, n) {
    this.send(o.p.REQUEST_FORUM_UNREADS, {
      guild_id: e,
      channel_id: t,
      threads: n.map(e => ({
        thread_id: e.threadId,
        ack_message_id: e.ackMessageId
      }))
    })
  }
  requestSoundboardSounds(e) {
    this.send(o.p.REQUEST_SOUNDBOARD_SOUNDS, {
      guild_ids: e
    })
  }
  requestLastMessages(e, t) {
    this.send(o.p.REQUEST_LAST_MESSAGES, {
      guild_id: e,
      channel_ids: t
    })
  }
  getDeletedEntityIdsNotMatchingHash(e, t, n, r, i) {
    this.send(o.p.GET_DELETED_ENTITY_IDS_NOT_MATCHING_HASH, {
      guild_id: e,
      channel_ids_hash: t,
      role_ids_hash: n,
      emoji_ids_hash: r,
      sticker_ids_hash: i
    })
  }
  triggerGuildChannelResync(e, t) {
    this.send(o.p.GUILD_CHANNELS_RESYNC, {
      guild_id: e,
      obfuscated_channel_ids: t
    })
  }
  requestChannelStatuses(e) {
    this.send(o.p.REQUEST_CHANNEL_STATUSES, {
      guild_id: e
    })
  }
  requestChannelInfo(e, t) {
    this.send(o.p.REQUEST_CHANNEL_INFO, {
      guild_id: e,
      fields: t
    })
  }
  requestChannelMemberCount(e, t) {
    this.send(o.p.REQUEST_CHANNEL_MEMBER_COUNT, {
      guild_id: e,
      channel_id: t
    })
  }
  remoteCommand(e, t) {
    this.send(o.p.REMOTE_COMMAND, {
      target_session_id: e,
      payload: t
    })
  }
}