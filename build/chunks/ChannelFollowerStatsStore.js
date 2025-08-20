/** Chunk was on 6310 **/
/** chunk id: 606956, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => c
});
var s, l, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js");
let a = {};
class r extends(l = Chunk442837.ZP.Store) {
  getFollowerStatsForChannel(e) {
    return a[e]
  }
}(s = "displayName") in r ? Object.defineProperty(r, s, {
  value: "ChannelFollowerStatsStore",
  enumerable: true,
  configurable: true,
  writable: true
}) : r[s] = "ChannelFollowerStatsStore";
let c = new r(Chunk570140.Z, {
  CONNECTION_OPEN: function() {
    a = {}
  },
  CHANNEL_FOLLOWER_STATS_FETCH_SUCCESS: function(e) {
    let {
      channelId: n,
      stats: t
    } = e;
    t = null != t ? t : {}, a[n] = {
      loadingStatus: "succeeded",
      lastFetched: Date.now(),
      channelsFollowing: t.channels_following,
      guildMembers: t.guild_members,
      guildsFollowing: t.guilds_following,
      usersSeenEver: t.users_seen_ever,
      subscribersGainedSinceLastPost: t.subscribers_gained_since_last_post,
      subscribersLostSinceLastPost: t.subscribers_lost_since_last_post
    }
  },
  CHANNEL_FOLLOWER_STATS_FETCH_FAILURE: function(e) {
    let {
      channelId: n
    } = e;
    a[n] = {
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
})