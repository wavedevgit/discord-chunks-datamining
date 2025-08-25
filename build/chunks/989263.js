/** Chunk was on web.js **/
/** chunk id: 989263, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  $: () => c,
  v: () => l
});
var Chunk131704 = require("./131704.js"),
  Chunk592125 = require("./592125.js"),
  Chunk496675 = require("./496675.js"),
  Chunk981631 = require("./981631.js");
let s = Chunk981631.S7T.VIEW_CHANNEL | Chunk981631.S7T.READ_MESSAGE_HISTORY;

function l(e) {
  return null != e && (e.type === a.d4z.DM || e.type === a.d4z.GROUP_DM || (0, r.Qm)(e.type) && o.Z.canBasicChannel(s, e))
}

function c(e) {
  return null != e && l(i.Z.getBasicChannel(e))
}