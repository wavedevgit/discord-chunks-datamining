/** Chunk was on 9753 **/
/** chunk id: 857182, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => a
});
var Chunk562465 = require("./562465.js"),
  Chunk73153 = require("./73153.js"),
  Chunk652215 = require("./652215.js");
let a = {
  createChannelFollower: (e, t) => r.Bo.post({
    url: l.Rsh.CHANNEL_FOLLOWERS(t),
    body: {
      webhook_channel_id: e
    },
    oldFormErrors: true,
    rejectWithError: false
  }),
  async fetchChannelFollowerStats(e) {
    i.h.dispatch({
      type: "CHANNEL_FOLLOWER_STATS_FETCH_START"
    });
    try {
      let t = await r.Bo.get({
        url: l.Rsh.CHANNEL_FOLLOWER_STATS(e),
        body: {
          channel_id: e
        },
        oldFormErrors: true,
        rejectWithError: true
      });
      i.h.dispatch({
        type: "CHANNEL_FOLLOWER_STATS_FETCH_SUCCESS",
        stats: t.body,
        channelId: e
      })
    } catch (t) {
      i.h.dispatch({
        type: "CHANNEL_FOLLOWER_STATS_FETCH_FAILURE",
        channelId: e
      })
    }
  },
  dismissPublishBump(e) {
    i.h.dispatch({
      type: "CHANNEL_FOLLOWING_PUBLISH_BUMP_DISMISSED",
      messageId: e
    })
  },
  permanentlyHidePublishBump(e) {
    i.h.dispatch({
      type: "CHANNEL_FOLLOWING_PUBLISH_BUMP_HIDE_PERMANENTLY",
      channelId: e
    })
  }
}