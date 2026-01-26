/** Chunk was on 97887 **/
/** chunk id: 560010, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => c
});
var r, l, Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js");
let a = {};
class o extends(l = Chunk311907.Ay.Store) {
  getFollowerStatsForChannel(e) {
    return a[e]
  }
}(r = "displayName") in o ? Object.defineProperty(o, r, {
  value: "ChannelFollowerStatsStore",
  enumerable: true,
  configurable: true,
  writable: true
}) : o[r] = "ChannelFollowerStatsStore";
let c = new o(Chunk73153.h, {
  CONNECTION_OPEN: function() {
    a = {}
  },
  CHANNEL_FOLLOWER_STATS_FETCH_SUCCESS: function(e) {
    let {
      channelId: t,
      stats: n
    } = e;
    n = null != n ? n : {}, a[t] = {
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
    a[t] = {
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