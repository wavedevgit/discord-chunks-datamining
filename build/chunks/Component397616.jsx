/** Chunk was on 74379 **/
/** chunk id: 397616, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => d
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk493683 = require("./493683.js"),
  Chunk592125 = require("./592125.js"),
  Chunk594174 = require("./594174.js"),
  Chunk388032 = require("./388032.jsx");

function d(e, n) {
  var t;
  let d = (0, i.e7)([a.default], () => a.default.getCurrentUser(), []),
    u = (0, i.e7)([s.Z], () => s.Z.getChannel(n), [n]);
  return null == u || u.isOwner(e) || null == d || !u.isOwner(d.id) || !(null == (t = u.recipients) ? true : t.includes(e)) ? null : (0, r.jsx)(l.sNh, {
    id: "remove",
    label: c.intl.string(c.t.n5zMIy),
    action: () => o.Z.removeRecipient(n, e),
    color: "danger"
  })
}