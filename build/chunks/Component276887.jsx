/** Chunk was on 1636 **/
/** chunk id: 276887, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => s
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk397927 = require("./397927.js"),
  Chunk576705 = require("./576705.js"),
  Chunk519222 = require("./519222.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");

function s(e, t) {
  let n = t.getGuildId();
  return null != n && e.type === a.lAJ.USER_JOIN && i.A.canWithPartialContext(a.xBc.MANAGE_GUILD, {
    guildId: n
  }) ? (0, r.jsx)(l.Drp, {
    id: "configure",
    label: c.intl.string(c.t.NpHUi1),
    icon: l.cBN,
    action: () => (0, o.vc)(t)
  }) : null
}