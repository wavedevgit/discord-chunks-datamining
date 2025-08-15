/** Chunk was on 22878 **/
/** chunk id: 399654, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  a: () => s
});
var Chunk544891 = require("./544891.js"),
  Chunk570140 = require("./570140.js"),
  Chunk706454 = require("./706454.js"),
  Chunk70956 = require("./70956.js"),
  Chunk844439 = require("./844439.js"),
  Chunk981631 = require("./981631.js");
let u = 10 * Chunk70956.Z.Millis.MINUTE;
async function s(e) {
  let {
    channelId: t,
    location: n,
    withCommands: o
  } = e;
  if (null == t) return;
  let s = Date.now(),
    d = a.ZP.getFetchState({
      location: n,
      channelId: t,
      withCommands: o
    }),
    m = a.ZP.getLastFetchTimeMs({
      location: n,
      channelId: t,
      withCommands: o
    });
  if (d !== a.M.FETCHING && (null == m || !(m + u > s))) {
    l.Z.dispatch({
      type: "APP_RECOMMENDATIONS_FETCH_RECOMMENDATIONS",
      location: n,
      channelId: t,
      withCommands: o
    });
    try {
      var p;
      let e = await r.tn.get({
        url: c.ANM.APP_RECOMMENDATIONS,
        query: {
          locale: i.default.locale,
          channel_id: t,
          location: n,
          with_commands: o
        },
        rejectWithError: false
      });
      l.Z.dispatch({
        type: "APP_RECOMMENDATIONS_FETCH_RECOMMENDATIONS_SUCCESS",
        location: n,
        channelId: t,
        recommendations: null != (p = e.body) ? p : [],
        withCommands: o
      })
    } catch (e) {
      l.Z.dispatch({
        type: "APP_RECOMMENDATIONS_FETCH_RECOMMENDATIONS_FAILURE",
        location: n,
        channelId: t,
        withCommands: o
      })
    }
  }
}