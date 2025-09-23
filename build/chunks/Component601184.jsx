/** Chunk was on 38342 **/
/** chunk id: 601184, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => _
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk904245 = require("./904245.js"),
  Chunk257559 = require("./257559.jsx"),
  Chunk660189 = require("./660189.js"),
  Chunk665906 = require("./665906.js"),
  Chunk496675 = require("./496675.js"),
  Chunk594174 = require("./594174.js"),
  Chunk901461 = require("./901461.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function _(e, t) {
  let n = (0, l.e7)([d.default], () => d.default.getCurrentUser()),
    _ = (0, u.$R)(t),
    g = (0, l.e7)([c.Z], () => c.Z.can(f.Plq.MANAGE_MESSAGES, t), [t]),
    {
      firstMessage: S
    } = (0, l.e7)([o.Z], () => o.Z.getMessage(t.id), [t.id]),
    N = g || null != n && e.canDeleteOwnMessage(n.id);
  return e.state === f.yb.SENDING || !N || f.V$x.UNDELETABLE.has(e.type) || !_ || t.isModeratorReportChannel() && (e.id === (null == S ? true : S.id) || (0, E.Z)(e)) ? null : (0, i.jsx)(r.sNh, {
    id: "delete",
    label: m.intl.string(m.t.xwMqDw),
    action: function(n) {
      e.state === f.yb.SEND_FAILED ? s.Z.deleteMessage(t.id, e.id, true) : n.shiftKey ? s.Z.deleteMessage(t.id, e.id) : a.Z.confirmDelete(t, e, true)
    },
    color: "danger",
    icon: r.XHJ
  })
}