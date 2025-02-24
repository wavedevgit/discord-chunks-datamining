/** Chunk was on web (https://canary.discord.comweb.38a06e56c3da3c7f.js.js) **/
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