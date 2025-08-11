/** Chunk was on web.js **/
/** chunk id: 633182, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  o: () => u
});
var Chunk592125 = require("./592125.js"),
  Chunk594174 = require("./594174.js"),
  Chunk5192 = require("./5192.js"),
  Chunk51144 = require("./51144.js"),
  Chunk484710 = require("./484710.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk130883 = require("./130883.js");

function u(e, t, n) {
  var u;
  let d = i.default.getUser(t),
    f = r.Z.getChannel(n),
    _ = null != (u = o.ZP.getName(null == f ? true : f.guild_id, null == f ? true : f.id, d)) ? u : a.ZP.getGlobalName(d);
  switch (e) {
    case s.wQ.IGNORE_SUCCESS:
      return l.intl.formatToPlainString(l.t["+joqrK"], {
        username: _
      });
    case s.wQ.UNIGNORE_SUCCESS:
      return l.intl.formatToPlainString(l.t.THExKS, {
        username: _
      });
    case s.wQ.BLOCK_SUCCESS:
      return l.intl.formatToPlainString(l.t.XXPrIi, {
        username: _
      });
    case s.wQ.UNBLOCK_SUCCESS:
      return l.intl.formatToPlainString(l.t.uExcGR, {
        username: _
      });
    case s.wQ.MUTE_SUCCESS:
      return l.intl.formatToPlainString(l.t.X4NtYW, {
        username: _
      });
    case s.wQ.UNMUTE_SUCCESS:
      return l.intl.formatToPlainString(l.t.tRaBfX, {
        username: _
      });
    case s.wQ.REPORT_SUCCESS:
      return l.intl.formatToPlainString(l.t.FOptFR, {
        username: _
      });
    case s.wQ.TIGGER_PAWTECT_ERROR:
      return l.intl.string(l.t.c6kn6O);
    case s.wQ.TIGGER_PAWTECT_VERIFIED:
      return l.intl.string(l.t.XwKo1t);
    case s.wQ.GENERIC_ERROR:
      return l.intl.string(l.t.zBpoc3);
    case s.wQ.REPORT_TO_MOD_SUCCESS:
      return l.intl.string(c.default.iBypeX);
    default:
      return l.intl.string(l.t["+c5xtb"])
  }
}