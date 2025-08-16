/** Chunk was on 64099 **/
/** chunk id: 597, original params: t,n,e (module,exports,require) **/
require.d(exports, {
  c: () => s
});
var Chunk954955 = require("./954955.js"),
  d = require.n(Chunk954955),
  Chunk544891 = require("./544891.js"),
  Chunk570140 = require("./570140.js"),
  Chunk75666 = require("./75666.js"),
  Chunk981631 = require("./981631.js");
let s = d()(async t => {
  try {
    l.Z.dispatch({
      type: "EVENT_DIRECTORY_FETCH_START"
    });
    let n = await a.tn.get({
      url: r.ANM.DIRECTORY_CHANNEL_ENTRIES(t),
      query: {
        type: _.C2.GUILD_SCHEDULED_EVENT
      },
      rejectWithError: true
    });
    l.Z.dispatch({
      type: "EVENT_DIRECTORY_FETCH_SUCCESS",
      channelId: t,
      entries: n.body
    })
  } catch (t) {
    l.Z.dispatch({
      type: "EVENT_DIRECTORY_FETCH_FAILURE"
    })
  }
}, 200)