/** Chunk was on 6502 **/
/** chunk id: 483768, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => m
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk843472 = require("./843472.js"),
  Chunk969043 = require("./969043.js"),
  Chunk406704 = require("./406704.js"),
  Chunk576705 = require("./576705.js"),
  Chunk287809 = require("./287809.js"),
  Chunk143413 = require("./143413.js"),
  Chunk145530 = require("./145530.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");

function m(e, t) {
  let n = (0, l.bG)([c.default], () => c.default.getCurrentUser()),
    m = (0, o.Id)(t),
    D = (0, l.bG)([u.A], () => u.A.can(A.xBc.MANAGE_MESSAGES, t), [t]),
    {
      firstMessage: g
    } = (0, l.bG)([a.A], () => a.A.getMessage(t.id), [t.id]),
    p = D || null != n && e.canDeleteOwnMessage(n.id);
  return e.state === A.cmJ.SENDING || !p || A.MRS.UNDELETABLE.has(e.type) || !m || t.isModeratorReportChannel() && (e.id === (null == g ? true : g.id) || (0, d.A)(e)) ? null : (0, i.jsx)(r.Drp, {
    id: "delete",
    label: f.intl.string(f.t.xwMqD7),
    action: function(n) {
      e.state === A.cmJ.SEND_FAILED ? s.A.deleteMessage(t.id, e.id, true) : n.shiftKey ? s.A.deleteMessage(t.id, e.id) : E.A.confirmDelete(t, e, true)
    },
    color: "danger",
    icon: r.ucK
  })
}