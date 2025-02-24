/** Chunk was on web (https://canary.discord.comweb.ada7066db2976a65.js.js) **/
"use strict";
n.d(t, {
  r: () => a
});
var r = n(709054);
let i = 0,
  o = new r.SnowflakeSequence;

function a() {
  let e = Date.now();
  return i !== e && (o.reset(), i = e), r.default.fromTimestampWithSequence(e, o)
}