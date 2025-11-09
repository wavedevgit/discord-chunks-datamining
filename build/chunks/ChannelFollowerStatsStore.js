/** Chunk was on 50642 **/
/** chunk id: 606956, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => c
});
var i, r, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js");
let o = {};
class s extends(r = Chunk442837.ZP.Store) {
  getFollowerStatsForChannel(e) {
    return o[e]
  }
}(i = "displayName") in s ? Object.defineProperty(s, i, {
  value: "ChannelFollowerStatsStore",
  enumerable: true,
  configurable: true,
  writable: true
}) : s[i] = "ChannelFollowerStatsStore";
let c = new s(Chunk570140.Z, {
  CONNECTION_OPEN: function() {
    o = {}
  },
  CHANNEL_FOLLOWER_STATS_FETCH_SUCCESS: function(e) {
    let {
      channelId: t,
      stats: n
    } = e;
    n = null != n ? n : {}, o[t] = {
      loadingStatus: "succeeded",
      lastFetched: Date.now(),
      channelsFollowing: n.channels_following,
      guildMembers: n.guild_members,
      guildsFollowing: n.guilds_following,
      usersSeenEver: n.users_seen_ever,
      subscribersGainedSinceLastPost: n.subscribers_gained_since_last_post,
      subscribersLostSinceLastPost: n.subscribers_lost_since_last_post
    }
  },
  CHANNEL_FOLLOWER_STATS_FETCH_FAILURE: function(e) {
    let {
      channelId: t
    } = e;
    o[t] = {
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