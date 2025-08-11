/** Chunk was on web.js **/
/** chunk id: 418088, original params: e,t,n (module,exports,re quire) **/
"use strict";

function r(e, t) {
  return {
    id: e.id,
    topic: e.topic,
    summShort: e.summ_short,
    people: Array.from(new Set(e.people)),
    startId: e.start_id,
    endId: e.end_id,
    count: e.count,
    channelId: t,
    source: e.source,
    type: e.type
  }
}
require.d(exports, {
  b: () => r
}), require("./388685.js")