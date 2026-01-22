/** Chunk was on web.js **/
/** chunk id: 323484, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  $: () => u
});
var Chunk734057 = require("./734057.js"),
  Chunk287809 = require("./287809.js"),
  Chunk562153 = require("./562153.js"),
  Chunk427262 = require("./427262.js"),
  Chunk835002 = require("./835002.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk641131 = require("./641131.js");

function u(e, t, n) {
  var u;
  let d = i.default.getUser(t),
    f = r.A.getChannel(n),
    p = null != (u = a.Ay.getName(null == f ? true : f.guild_id, null == f ? true : f.id, d)) ? u : s.Ay.getGlobalName(d);
  switch (e) {
    case o.OB.IGNORE_SUCCESS:
      return l.intl.formatToPlainString(l.t["+joqrP"], {
        username: p
      });
    case o.OB.UNIGNORE_SUCCESS:
      return l.intl.formatToPlainString(l.t.THExKa, {
        username: p
      });
    case o.OB.BLOCK_SUCCESS:
      return l.intl.formatToPlainString(l.t.XXPrIs, {
        username: p
      });
    case o.OB.UNBLOCK_SUCCESS:
      return l.intl.formatToPlainString(l.t.uExcGX, {
        username: p
      });
    case o.OB.MUTE_SUCCESS:
      return l.intl.formatToPlainString(l.t.X4NtYb, {
        username: p
      });
    case o.OB.UNMUTE_SUCCESS:
      return l.intl.formatToPlainString(l.t.tRaBfY, {
        username: p
      });
    case o.OB.REPORT_SUCCESS:
      return l.intl.formatToPlainString(l.t.FOptFU, {
        username: p
      });
    case o.OB.TIGGER_PAWTECT_ERROR:
      return l.intl.string(l.t.c6kn6F);
    case o.OB.TIGGER_PAWTECT_VERIFIED:
      return l.intl.string(l.t.XwKo1k);
    case o.OB.GENERIC_ERROR:
      return l.intl.string(l.t.zBpoc7);
    case o.OB.REPORT_TO_MOD_SUCCESS:
      return l.intl.string(c.default.iBypeZ);
    case o.OB.SAFETY_FEEDBACK_SUCCESS:
      return l.intl.string(l.t.TcFR5k);
    case o.OB.EXISTING_USER_AGE_GATE_SUCCESS:
      return l.intl.string(l.t["susqq/"]);
    default:
      return l.intl.string(l.t["+c5xtT"])
  }
}