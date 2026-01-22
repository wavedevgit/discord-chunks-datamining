/** Chunk was on 57287 **/
/** chunk id: 979807, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => d
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk394953 = require("./394953.js"),
  Chunk976860 = require("./976860.js"),
  Chunk967198 = require("./967198.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");

function d(e) {
  let t = (0, i.bG)([o.A], () => o.A.getGuildId()),
    n = (0, a.lI)();
  return __OVERLAY__ || t !== u.YYv && !n ? null : (0, r.jsx)(l.Drp, {
    id: "go-to-original-guild",
    label: s.intl.string(s.t.WYj55Y),
    action: function() {
      (0, c.uh)(e.guild_id, e.id)
    }
  })
}