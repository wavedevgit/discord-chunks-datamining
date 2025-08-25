/** Chunk was on web.js **/
/** chunk id: 399654, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  a: () => u
});
var Chunk544891 = require("./544891.js"),
  Chunk570140 = require("./570140.js"),
  Chunk706454 = require("./706454.js"),
  Chunk70956 = require("./70956.js"),
  Chunk844439 = require("./844439.js"),
  Chunk981631 = require("./981631.js");
let c = 10 * Chunk70956.Z.Millis.MINUTE;
async function u(e) {
  let {
    channelId: t,
    location: n,
    withCommands: a
  } = e;
  if (null == t) return;
  let u = Date.now(),
    d = s.ZP.getFetchState({
      location: n,
      channelId: t,
      withCommands: a
    }),
    f = s.ZP.getLastFetchTimeMs({
      location: n,
      channelId: t,
      withCommands: a
    });
  if (d !== s.M.FETCHING && (null == f || !(f + c > u))) {
    i.Z.dispatch({
      type: "APP_RECOMMENDATIONS_FETCH_RECOMMENDATIONS",
      location: n,
      channelId: t,
      withCommands: a
    });
    try {
      var _;
      let e = await r.tn.get({
        url: l.ANM.APP_RECOMMENDATIONS,
        query: {
          locale: o.default.locale,
          channel_id: t,
          location: n,
          with_commands: a
        },
        rejectWithError: false
      });
      i.Z.dispatch({
        type: "APP_RECOMMENDATIONS_FETCH_RECOMMENDATIONS_SUCCESS",
        location: n,
        channelId: t,
        recommendations: null != (_ = e.body) ? _ : [],
        withCommands: a
      })
    } catch (e) {
      i.Z.dispatch({
        type: "APP_RECOMMENDATIONS_FETCH_RECOMMENDATIONS_FAILURE",
        location: n,
        channelId: t,
        withCommands: a
      })
    }
  }
}