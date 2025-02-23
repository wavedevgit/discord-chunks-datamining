/** Chunk was on web (https://canary.discord.comweb.9f0be545d3e34886.js.js) **/
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