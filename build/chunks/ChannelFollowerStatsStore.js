/** Chunk was on 90850 **/
/** chunk id: 560010, original params: e,l,t (module,exports,require) **/
require.d(exports, {
  A: () => c
});
var n, s, Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js");
let r = {};
class a extends(s = Chunk311907.Ay.Store) {
  getFollowerStatsForChannel(e) {
    return r[e]
  }
}(n = "displayName") in a ? Object.defineProperty(a, n, {
  value: "ChannelFollowerStatsStore",
  enumerable: true,
  configurable: true,
  writable: true
}) : a[n] = "ChannelFollowerStatsStore";
let c = new a(Chunk73153.h, {
  CONNECTION_OPEN: function() {
    r = {}
  },
  CHANNEL_FOLLOWER_STATS_FETCH_SUCCESS: function(e) {
    let {
      channelId: l,
      stats: t
    } = e;
    t = null != t ? t : {}, r[l] = {
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
      channelId: l
    } = e;
    r[l] = {
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