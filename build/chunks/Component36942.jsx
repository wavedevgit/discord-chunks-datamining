/** Chunk was on 59735 **/
/** chunk id: 36942, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  A: () => b
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

function b(e) {
  let t = arguments.length > 1 && true !== arguments[1] && arguments[1],
    r = (0, u.jN)(e),
    b = (0, i.bG)([c.A], () => c.A.getGuild(e)),
    O = (0, i.bG)([l.default], () => l.default.getCurrentUser());
  return null != O && null != b && (b.features.has(s.GuildFeatures.COMMUNITY) || O.isStaff()) ? (0, n.jsx)(o.sLh, {
    id: "opt-in",
    label: p.intl.string(p.t.FB2ZZV),
    leadingAccessory: t ? {
      type: "icon",
      icon: o.bMW
    } : true,
    checked: !r,
    action: () => {
      (0, a.Lu)(e)
    }
  }) : null
}