/** Chunk was on web.js **/
/** chunk id: 649700, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => s
});
var Chunk442837 = require("./442837.js"),
  Chunk353647 = require("./353647.js"),
  Chunk146282 = require("./146282.js"),
  Chunk206583 = require("./206583.js");

function s(e) {
  let {
    activity: t,
    user: n
  } = e, s = (0, r.e7)([a.Z], () => {
    a.Z.getMatchingInboxEntry({
      activity: t,
      userId: n.id,
      feedId: o.YN.GLOBAL_FEED
    })
  }, [t, n.id]), l = (0, r.e7)([i.Z], () => i.Z.getMatchingOutboxEntry({
    activity: t,
    userId: n.id
  }), [t, n.id]);
  return null != s ? s : l
}