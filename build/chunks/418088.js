/** Chunk was on web (https://canary.discord.comweb.38a06e56c3da3c7f.js.js) **/
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
n.d(t, {
  b: () => r
}), n(47120)