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
  Chunk826688 = require("./826688.js");

function u(e, t, n) {
  var u;
  let d = i.default.getUser(t),
    f = r.Z.getChannel(n),
    _ = null != (u = a.ZP.getName(null == f ? true : f.guild_id, null == f ? true : f.id, d)) ? u : o.ZP.getGlobalName(d);
  switch (e) {
    case s.wQ.IGNORE_SUCCESS:
      return l.intl.formatToPlainString(l.t["+joqrP"], {
        username: _
      });
    case s.wQ.UNIGNORE_SUCCESS:
      return l.intl.formatToPlainString(l.t.THExKa, {
        username: _
      });
    case s.wQ.BLOCK_SUCCESS:
      return l.intl.formatToPlainString(l.t.XXPrIs, {
        username: _
      });
    case s.wQ.UNBLOCK_SUCCESS:
      return l.intl.formatToPlainString(l.t.uExcGX, {
        username: _
      });
    case s.wQ.MUTE_SUCCESS:
      return l.intl.formatToPlainString(l.t.X4NtYb, {
        username: _
      });
    case s.wQ.UNMUTE_SUCCESS:
      return l.intl.formatToPlainString(l.t.tRaBfY, {
        username: _
      });
    case s.wQ.REPORT_SUCCESS:
      return l.intl.formatToPlainString(l.t.FOptFU, {
        username: _
      });
    case s.wQ.TIGGER_PAWTECT_ERROR:
      return l.intl.string(l.t.c6kn6F);
    case s.wQ.TIGGER_PAWTECT_VERIFIED:
      return l.intl.string(l.t.XwKo1k);
    case s.wQ.GENERIC_ERROR:
      return l.intl.string(l.t.zBpoc7);
    case s.wQ.REPORT_TO_MOD_SUCCESS:
      return l.intl.string(c.default.iBypeZ);
    case s.wQ.SAFETY_FEEDBACK_SUCCESS:
      return l.intl.string(l.t.TcFR5k);
    case s.wQ.EXISTING_USER_AGE_GATE_SUCCESS:
      return l.intl.string(l.t["susqq/"]);
    default:
      return l.intl.string(l.t["+c5xtT"])
  }
}