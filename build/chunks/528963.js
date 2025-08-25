/** Chunk was on web.js **/
/** chunk id: 528963, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => a
});
var Chunk544891 = require("./544891.js"),
  Chunk570140 = require("./570140.js"),
  Chunk981631 = require("./981631.js");
let a = {
  createChannelFollower: (e, t) => r.tn.post({
    url: o.ANM.CHANNEL_FOLLOWERS(t),
    body: {
      webhook_channel_id: e
    },
    oldFormErrors: true,
    rejectWithError: false
  }),
  async fetchChannelFollowerStats(e) {
    i.Z.dispatch({
      type: "CHANNEL_FOLLOWER_STATS_FETCH_START"
    });
    try {
      let t = await r.tn.get({
        url: o.ANM.CHANNEL_FOLLOWER_STATS(e),
        body: {
          channel_id: e
        },
        oldFormErrors: true,
        rejectWithError: true
      });
      i.Z.dispatch({
        type: "CHANNEL_FOLLOWER_STATS_FETCH_SUCCESS",
        stats: t.body,
        channelId: e
      })
    } catch (t) {
      i.Z.dispatch({
        type: "CHANNEL_FOLLOWER_STATS_FETCH_FAILURE",
        channelId: e
      })
    }
  },
  dismissPublishBump(e) {
    i.Z.dispatch({
      type: "CHANNEL_FOLLOWING_PUBLISH_BUMP_DISMISSED",
      messageId: e
    })
  },
  permanentlyHidePublishBump(e) {
    i.Z.dispatch({
      type: "CHANNEL_FOLLOWING_PUBLISH_BUMP_HIDE_PERMANENTLY",
      channelId: e
    })
  }
}