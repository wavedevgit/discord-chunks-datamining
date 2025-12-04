/** Chunk was on 86915 **/
/** chunk id: 693196, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  T: () => s
});
var Chunk526120 = require("./526120.js"),
  Chunk563534 = require("./563534.js"),
  Chunk734893 = require("./734893.js"),
  Chunk931261 = require("./931261.js");
async function s(e, t) {
  if (null == e || !(0, a.s)(e)) return;
  let n = l.Z.getSettings(e);
  if (n === l.P && (await (0, i.cP)(e), n = l.Z.getSettings(e)), n !== l.P && null != n) {
    if (null != n.newMemberActions && null != n.newMemberActions.find(e => e.channelId === t)) return r.j.TODO;
    if (null != n.resourceChannels && null != n.resourceChannels.find(e => e.channelId === t)) return r.j.RESOURCE
  }
}