/** Chunk was on 87154 **/
/** chunk id: 837949, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => O
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk430824 = require("./430824.js"),
  Chunk594174 = require("./594174.js"),
  Chunk724213 = require("./724213.js"),
  Chunk398758 = require("./398758.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function O(e) {
  let t = (0, u.DM)(e),
    r = (0, i.e7)([o.Z], () => o.Z.getGuild(e)),
    O = (0, i.e7)([c.default], () => c.default.getCurrentUser());
  return null != O && null != r && (r.features.has(s.GuildFeatures.COMMUNITY) || O.isStaff()) ? (0, n.jsx)(l.S89, {
    id: "opt-in",
    label: b.intl.string(b.t.FB2ZZV),
    checked: !t,
    action: () => {
      (0, a.kH)(e)
    }
  }) : null
}