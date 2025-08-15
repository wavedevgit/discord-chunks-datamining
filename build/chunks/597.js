/** Chunk was on 86357 **/
/** chunk id: 597, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  c: () => c
});
var Chunk954955 = require("./954955.js"),
  i = require.n(Chunk954955),
  Chunk544891 = require("./544891.js"),
  Chunk570140 = require("./570140.js"),
  Chunk75666 = require("./75666.js"),
  Chunk981631 = require("./981631.js");
let c = i()(async e => {
  try {
    a.Z.dispatch({
      type: "EVENT_DIRECTORY_FETCH_START"
    });
    let t = await l.tn.get({
      url: s.ANM.DIRECTORY_CHANNEL_ENTRIES(e),
      query: {
        type: o.C2.GUILD_SCHEDULED_EVENT
      },
      rejectWithError: true
    });
    a.Z.dispatch({
      type: "EVENT_DIRECTORY_FETCH_SUCCESS",
      channelId: e,
      entries: t.body
    })
  } catch (e) {
    a.Z.dispatch({
      type: "EVENT_DIRECTORY_FETCH_FAILURE"
    })
  }
}, 200)