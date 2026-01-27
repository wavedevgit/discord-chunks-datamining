/** Chunk was on web.js **/
/** chunk id: 323484, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  $: () => d
});
var Chunk870383 = require("./870383.js"),
  Chunk734057 = require("./734057.js"),
  Chunk287809 = require("./287809.js"),
  Chunk562153 = require("./562153.js"),
  Chunk427262 = require("./427262.js"),
  Chunk835002 = require("./835002.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk641131 = require("./641131.js");

function d(e, t, n) {
  var d;
  let f = a.default.getUser(t),
    p = i.A.getChannel(n),
    _ = null != (d = o.Ay.getName(null == p ? true : p.guild_id, null == p ? true : p.id, f)) ? d : s.Ay.getGlobalName(f);
  switch (e) {
    case l.OB.IGNORE_SUCCESS:
      return c.intl.formatToPlainString(c.t["+joqrP"], {
        username: _
      });
    case l.OB.UNIGNORE_SUCCESS:
      return c.intl.formatToPlainString(c.t.THExKa, {
        username: _
      });
    case l.OB.BLOCK_SUCCESS:
      return c.intl.formatToPlainString(c.t.XXPrIs, {
        username: _
      });
    case l.OB.UNBLOCK_SUCCESS:
      return c.intl.formatToPlainString(c.t.uExcGX, {
        username: _
      });
    case l.OB.MUTE_SUCCESS:
      return c.intl.formatToPlainString(c.t.X4NtYb, {
        username: _
      });
    case l.OB.UNMUTE_SUCCESS:
      return c.intl.formatToPlainString(c.t.tRaBfY, {
        username: _
      });
    case l.OB.REPORT_SUCCESS:
      return c.intl.formatToPlainString(c.t.FOptFU, {
        username: _
      });
    case l.OB.TIGGER_PAWTECT_ERROR:
      return c.intl.string(c.t.c6kn6F);
    case l.OB.TIGGER_PAWTECT_VERIFIED:
      return (0, r.H)(c.intl.string(c.t.XwKo1k), c.intl.string(c.t["7nKAXx"]));
    case l.OB.GENERIC_ERROR:
      return c.intl.string(c.t.zBpoc7);
    case l.OB.REPORT_TO_MOD_SUCCESS:
      return c.intl.string(u.default.iBypeZ);
    case l.OB.SAFETY_FEEDBACK_SUCCESS:
      return c.intl.string(c.t.TcFR5k);
    case l.OB.EXISTING_USER_AGE_GATE_SUCCESS:
      return c.intl.string(c.t["susqq/"]);
    default:
      return c.intl.string(c.t["+c5xtT"])
  }
}