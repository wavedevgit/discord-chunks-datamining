/** Chunk was on web.js **/
/** chunk id: 332456, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  C: () => u
});
var Chunk976860 = require("./976860.js"),
  Chunk802958 = require("./802958.js"),
  Chunk456874 = require("./456874.js"),
  Chunk95701 = require("./95701.js"),
  Chunk576705 = require("./576705.js"),
  Chunk661191 = require("./661191.js"),
  Chunk652215 = require("./652215.js");

function u(e) {
  var t, n, u, d, f;
  let p = arguments.length > 1 && true !== arguments[1] && arguments[1];
  return null != e && o.Le.has(e.type) ? {
    location: p ? (0, r.PR)() : true,
    thread_approximate_member_count: i.A.getMemberCount(e.id),
    thread_approximate_message_count: a.A.getCount(e.id),
    thread_archived: (null == (u = e.threadMetadata) ? true : u.archived) === true,
    thread_locked: null != (t = null == (d = e.threadMetadata) ? true : d.locked) && t,
    thread_auto_archive_duration_minutes: null != (n = null == (f = e.threadMetadata) ? true : f.autoArchiveDuration) ? n : 0,
    thread_approximate_creation_date: l.default.extractTimestamp(e.id),
    can_send_message: s.A.can(c.xBc.SEND_MESSAGES, e),
    parent_channel_type: e.parentChannelThreadType
  } : null
}