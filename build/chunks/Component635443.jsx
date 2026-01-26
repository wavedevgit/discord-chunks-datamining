/** Chunk was on 62891 **/
/** chunk id: 635443, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => c
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk308528 = require("./308528.js"),
  Chunk734057 = require("./734057.js"),
  Chunk287809 = require("./287809.js"),
  Chunk985018 = require("./985018.jsx");

function c(e, t) {
  var n;
  let c = (0, r.bG)([a.default], () => a.default.getCurrentUser(), []),
    u = (0, r.bG)([s.A], () => s.A.getChannel(t), [t]);
  return null == u || u.isOwner(e) || null == c || !u.isOwner(c.id) || !(null == (n = u.recipients) ? true : n.includes(e)) ? null : (0, i.jsx)(l.Drp, {
    id: "remove",
    label: d.intl.string(d.t["n5zMI+"]),
    action: () => o.A.removeRecipient(t, e),
    color: "danger"
  })
}