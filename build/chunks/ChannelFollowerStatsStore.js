/** Chunk was on web.js **/
/** chunk id: 606956, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => f
});
var r, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js");

function a(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let s = {};

function l() {
  s = {}
}

function c(e) {
  let {
    channelId: t,
    stats: n
  } = e;
  n = null != n ? n : {}, s[t] = {
    loadingStatus: "succeeded",
    lastFetched: Date.now(),
    channelsFollowing: n.channels_following,
    guildMembers: n.guild_members,
    guildsFollowing: n.guilds_following,
    usersSeenEver: n.users_seen_ever,
    subscribersGainedSinceLastPost: n.subscribers_gained_since_last_post,
    subscribersLostSinceLastPost: n.subscribers_lost_since_last_post
  }
}

function u(e) {
  let {
    channelId: t
  } = e;
  s[t] = {
    loadingStatus: "failed",
    lastFetched: Date.now(),
    channelsFollowing: 0,
    guildMembers: 0,
    guildsFollowing: 0,
    usersSeenEver: 0,
    subscribersGainedSinceLastPost: 0,
    subscribersLostSinceLastPost: 0
  }
}
class d extends(r = Chunk442837.ZP.Store) {
  getFollowerStatsForChannel(e) {
    return s[e]
  }
}
a(d, "displayName", "ChannelFollowerStatsStore");
let f = new d(Chunk570140.Z, {
  CONNECTION_OPEN: l,
  CHANNEL_FOLLOWER_STATS_FETCH_SUCCESS: c,
  CHANNEL_FOLLOWER_STATS_FETCH_FAILURE: u
})