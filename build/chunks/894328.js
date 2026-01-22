/** Chunk was on 78888 **/
/** chunk id: 894328, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  D: () => a
});
var Chunk225142 = require("./225142.js"),
  Chunk701785 = require("./701785.js"),
  Chunk374084 = require("./374084.js"),
  Chunk473529 = require("./473529.js");
async function a(e, t) {
  if (null == e || !(0, s.K)(e)) return;
  let n = i.h.getSettings(e);
  if (n === i.A && (await (0, l.ag)(e), n = i.h.getSettings(e)), n !== i.A && null != n) {
    if (null != n.newMemberActions && null != n.newMemberActions.find(e => e.channelId === t)) return r.K5.TODO;
    if (null != n.resourceChannels && null != n.resourceChannels.find(e => e.channelId === t)) return r.K5.RESOURCE
  }
}