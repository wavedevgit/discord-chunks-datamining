/** Chunk was on web.js **/
/** chunk id: 28391, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => u
});
var Chunk87051 = require("./87051.js"),
  Chunk9156 = require("./9156.js"),
  Chunk621600 = require("./621600.js"),
  Chunk113449 = require("./113449.js"),
  Chunk981631 = require("./981631.js"),
  Chunk490897 = require("./490897.js"),
  Chunk526761 = require("./526761.js");

function u(e, t, n) {
  r.Z.updateChannelOverrideSettings(e, t, {
    flags: (0, a.pq)(i.ZP.getChannelIdFlags(e, t), n)
  }, o.UE.unreads(n === c.ic.UNREADS_ALL_MESSAGES ? l.i.ALL_MESSAGES : l.i.ONLY_MENTIONS), {
    object: s.qAy.NOTIFICATION_SETTING_UNREAD_NOTICE
  })
}