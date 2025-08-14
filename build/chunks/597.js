/** Chunk was on 79589 **/
/** chunk id: 597, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  c: () => l
});
var Chunk954955 = require("./954955.js"),
  o = require.n(Chunk954955),
  Chunk544891 = require("./544891.js"),
  Chunk570140 = require("./570140.js"),
  Chunk75666 = require("./75666.js"),
  Chunk981631 = require("./981631.js");
let l = o()(async e => {
  try {
    a.Z.dispatch({
      type: "EVENT_DIRECTORY_FETCH_START"
    });
    let n = await c.tn.get({
      url: _.ANM.DIRECTORY_CHANNEL_ENTRIES(e),
      query: {
        type: r.C2.GUILD_SCHEDULED_EVENT
      },
      rejectWithError: true
    });
    a.Z.dispatch({
      type: "EVENT_DIRECTORY_FETCH_SUCCESS",
      channelId: e,
      entries: n.body
    })
  } catch (e) {
    a.Z.dispatch({
      type: "EVENT_DIRECTORY_FETCH_FAILURE"
    })
  }
}, 200)