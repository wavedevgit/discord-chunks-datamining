/** Chunk was on 6310 **/
t.d(n, {
  Z: () => u
});
var s, l, i, o = t(442837),
  a = t(570140);
let r = {};
class c extends(i = o.ZP.Store) {
  getFollowerStatsForChannel(e) {
    return r[e]
  }
}
l = "ChannelFollowerStatsStore", (s = "displayName") in c ? Object.defineProperty(c, s, {
  value: l,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : c[s] = l;
let u = new c(a.Z, {
  CONNECTION_OPEN: function() {
    r = {}
  },
  CHANNEL_FOLLOWER_STATS_FETCH_SUCCESS: function(e) {
    let {
      channelId: n,
      stats: t
    } = e;
    t = null != t ? t : {}, r[n] = {
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
    r[n] = {
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