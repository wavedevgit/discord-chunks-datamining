/** Chunk was on 60677 **/
/** chunk id: 397616, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => c
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk493683 = require("./493683.js"),
  Chunk592125 = require("./592125.js"),
  Chunk594174 = require("./594174.js"),
  Chunk388032 = require("./388032.jsx");

function c(e, t) {
  var n;
  let c = (0, r.e7)([a.default], () => a.default.getCurrentUser(), []),
    u = (0, r.e7)([s.Z], () => s.Z.getChannel(t), [t]);
  return null == u || u.isOwner(e) || null == c || !u.isOwner(c.id) || !(null == (n = u.recipients) ? true : n.includes(e)) ? null : (0, i.jsx)(l.sNh, {
    id: "remove",
    label: d.intl.string(d.t["n5zMI+"]),
    action: () => o.Z.removeRecipient(t, e),
    color: "danger"
  })
}