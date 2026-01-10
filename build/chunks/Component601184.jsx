/** Chunk was on 76676 **/
/** chunk id: 601184, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => g
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk904245 = require("./904245.js"),
  Chunk660189 = require("./660189.js"),
  Chunk665906 = require("./665906.js"),
  Chunk496675 = require("./496675.js"),
  Chunk594174 = require("./594174.js"),
  Chunk901461 = require("./901461.js"),
  Chunk819514 = require("./819514.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function g(e, t) {
  let n = (0, l.e7)([c.default], () => c.default.getCurrentUser()),
    g = (0, o.$R)(t),
    _ = (0, l.e7)([u.Z], () => u.Z.can(f.Plq.MANAGE_MESSAGES, t), [t]),
    {
      firstMessage: S
    } = (0, l.e7)([a.Z], () => a.Z.getMessage(t.id), [t.id]),
    D = _ || null != n && e.canDeleteOwnMessage(n.id);
  return e.state === f.yb.SENDING || !D || f.V$x.UNDELETABLE.has(e.type) || !g || t.isModeratorReportChannel() && (e.id === (null == S ? true : S.id) || (0, d.Z)(e)) ? null : (0, i.jsx)(s.sNh, {
    id: "delete",
    label: m.intl.string(m.t.xwMqD7),
    action: function(n) {
      e.state === f.yb.SEND_FAILED ? r.Z.deleteMessage(t.id, e.id, true) : n.shiftKey ? r.Z.deleteMessage(t.id, e.id) : E.Z.confirmDelete(t, e, true)
    },
    color: "danger",
    icon: s.XHJ
  })
}