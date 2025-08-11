/** Chunk was on web.js **/
/** chunk id: 709054, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.r(exports), require.d(exports, {
  DISCORD_EPOCH: () => Chunk67423.cj,
  SnowflakeSequence: () => Chunk67423.Tk,
  default: () => s
});
var Chunk392711 = require("./392711.js"),
  i = require.n(Chunk392711),
  Chunk67423 = require("./67423.js");

function a(e) {
  return e
}
let s = {
  age: function(e) {
    return o.B_(e)
  },
  extractTimestamp: function(e) {
    return o.Lm(e)
  },
  compare: function(e, t) {
    return o.qu(e, t)
  },
  atPreviousMillisecond: function(e) {
    return o.cO(e)
  },
  atNextMillisecond: function(e) {
    return o.sd(e)
  },
  fromTimestamp: function(e) {
    return o.Ol(e)
  },
  fromTimestampWithSequence: function(e, t) {
    return o.P4(e, t)
  },
  keys: function(e) {
    return Object.keys(e)
  },
  forEach: function(e, t) {
    i().forEach(e, (e, n) => t(e, n))
  },
  forEachKey: function(e, t) {
    for (let n in e) t(n)
  },
  entries: function(e) {
    return Object.entries(e)
  },
  isProbablyAValidSnowflake: function(e) {
    return o.qi(e)
  },
  castChannelIdAsMessageId: function(e) {
    return a(e)
  },
  castMessageIdAsChannelId: function(e) {
    return a(e)
  },
  castGuildIdAsEveryoneGuildRoleId: function(e) {
    return a(e)
  },
  cast: a
}