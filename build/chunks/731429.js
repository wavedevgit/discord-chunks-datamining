/** Chunk was on web.js **/
/** chunk id: 731429, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  K: () => u
});
var Chunk703656 = require("./703656.js"),
  Chunk260483 = require("./260483.js"),
  Chunk144140 = require("./144140.js"),
  Chunk131704 = require("./131704.js"),
  Chunk496675 = require("./496675.js"),
  Chunk709054 = require("./709054.js"),
  Chunk981631 = require("./981631.js");

function u(e) {
  var t, n, u, d, f;
  let p = arguments.length > 1 && true !== arguments[1] && arguments[1];
  return null != e && o.Ec.has(e.type) ? {
    location: p ? (0, r.At)() : true,
    thread_approximate_member_count: i.Z.getMemberCount(e.id),
    thread_approximate_message_count: a.Z.getCount(e.id),
    thread_archived: (null == (t = e.threadMetadata) ? true : t.archived) === true,
    thread_locked: null != (d = null == (n = e.threadMetadata) ? true : n.locked) && d,
    thread_auto_archive_duration_minutes: null != (f = null == (u = e.threadMetadata) ? true : u.autoArchiveDuration) ? f : 0,
    thread_approximate_creation_date: l.default.extractTimestamp(e.id),
    can_send_message: s.Z.can(c.Plq.SEND_MESSAGES, e),
    parent_channel_type: e.parentChannelThreadType
  } : null
}