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
  let n = (0, l.bG)([d.default], () => d.default.getCurrentUser()),
    m = (0, o.Id)(t),
    g = (0, l.bG)([c.A], () => c.A.can(A.xBc.MANAGE_MESSAGES, t), [t]),
    {
      firstMessage: p
    } = (0, l.bG)([a.A], () => a.A.getMessage(t.id), [t.id]),
    D = g || null != n && e.canDeleteOwnMessage(n.id);
  return e.state === A.cmJ.SENDING || !D || A.MRS.UNDELETABLE.has(e.type) || !m || t.isModeratorReportChannel() && (e.id === (null == p ? true : p.id) || (0, u.A)(e)) ? null : (0, i.jsx)(s.Drp, {
    id: "delete",
    label: f.intl.string(f.t.xwMqD7),
    action: function(n) {
      e.state === A.cmJ.SEND_FAILED ? r.A.deleteMessage(t.id, e.id, true) : n.shiftKey ? r.A.deleteMessage(t.id, e.id) : E.A.confirmDelete(t, e, true)
    },
    color: "danger",
    leadingAccessory: {
      type: "icon",
      icon: s.ucK
    },
    icon: s.ucK
  })
}