/** Chunk was on web (https://canary.discord.comweb.6d4953f88f353958.js.js) **/
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