/** Chunk was on web.js **/
/** chunk id: 941389, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => c
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk481060 = require("./481060.js"),
  Chunk496675 = require("./496675.js"),
  Chunk996861 = require("./996861.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function c(e, t) {
  let n = t.getGuildId();
  return null != n && e.type === s.uaV.USER_JOIN && o.Z.canWithPartialContext(s.Plq.MANAGE_GUILD, {
    guildId: n
  }) ? <i.sNh id={"configure"} label={l.intl.string(l.t.NpHUi4)} icon={i.idN} action={() => (0, a.zW)(t)} /> : null
}