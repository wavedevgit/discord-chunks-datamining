/** Chunk was on 59735 **/
/** chunk id: 36942, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  A: () => O
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk71393 = require("./71393.js"),
  Chunk287809 = require("./287809.js"),
  Chunk234053 = require("./234053.js"),
  Chunk395504 = require("./395504.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");

function O(e) {
  let t = (0, u.jN)(e),
    r = (0, i.bG)([o.A], () => o.A.getGuild(e)),
    O = (0, i.bG)([c.default], () => c.default.getCurrentUser());
  return null != O && null != r && (r.features.has(s.GuildFeatures.COMMUNITY) || O.isStaff()) ? (0, n.jsx)(l.sLh, {
    id: "opt-in",
    label: b.intl.string(b.t.FB2ZZV),
    checked: !t,
    action: () => {
      (0, a.Lu)(e)
    }
  }) : null
}