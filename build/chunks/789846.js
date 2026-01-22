/** Chunk was on web.js **/
/** chunk id: 789846, original params: e,t,n (module,exports,re quire) **/
"use strict";

function r(e) {
  return null != e.attachments && e.attachments.length > 0 || null != e.embeds && e.embeds.length > 0 || null != e.components && e.components.length > 0
}

function i(e) {
  if (null == e) returnfalse;
  let t = "messageSnapshots" in e ? e.messageSnapshots : e.message_snapshots;
  return r(e) || null != t && (null == t ? true : t.some(e => r(e.message)))
}
require.d(exports, {
  b: () => i
})