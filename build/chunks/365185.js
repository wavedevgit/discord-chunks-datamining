/** Chunk was on web.js **/
/** chunk id: 365185, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => o
});
var Chunk311907 = require("./311907.js"),
  Chunk517164 = require("./517164.js"),
  Chunk99753 = require("./99753.js"),
  Chunk424994 = require("./424994.js");

function o(e) {
  let {
    activity: t,
    user: n
  } = e, o = (0, r.bG)([a.A], () => {
    a.A.getMatchingInboxEntry({
      activity: t,
      userId: n.id,
      feedId: s.X1.GLOBAL_FEED
    })
  }, [t, n.id]), l = (0, r.bG)([i.A], () => i.A.getMatchingOutboxEntry({
    activity: t,
    userId: n.id
  }), [t, n.id]);
  return null != o ? o : l
}