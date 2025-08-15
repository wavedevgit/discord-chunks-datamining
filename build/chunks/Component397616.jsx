/** Chunk was on 78086 **/
/** chunk id: 397616, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => u
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk493683 = require("./493683.js"),
  Chunk592125 = require("./592125.js"),
  Chunk594174 = require("./594174.js"),
  Chunk388032 = require("./388032.jsx");

function u(e, n) {
  var t;
  let u = (0, i.e7)([c.default], () => c.default.getCurrentUser(), []),
    d = (0, i.e7)([a.Z], () => a.Z.getChannel(n), [n]);
  return null == d || d.isOwner(e) || null == u || !d.isOwner(u.id) || !(null == (t = d.recipients) ? true : t.includes(e)) ? null : (0, r.jsx)(l.sNh, {
    id: "remove",
    label: s.intl.string(s.t.n5zMIy),
    action: () => o.Z.removeRecipient(n, e),
    color: "danger"
  })
}