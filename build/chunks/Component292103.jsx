/** Chunk was on 1636 **/
/** chunk id: 292103, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Ay: () => v,
  S_: () => h,
  zo: () => j
}), require("./896048.js");
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk311907 = require("./311907.js"),
  Chunk554146 = require("./554146.js"),
  Chunk397927 = require("./397927.js"),
  Chunk964486 = require("./964486.js"),
  Chunk865116 = require("./865116.js"),
  Chunk379848 = require("./379848.jsx"),
  Chunk928658 = require("./928658.js"),
  Chunk400528 = require("./400528.js"),
  Chunk376708 = require("./376708.js"),
  Chunk715757 = require("./715757.js"),
  Chunk967198 = require("./967198.js"),
  Chunk287809 = require("./287809.js"),
  Chunk628691 = require("./628691.js"),
  Chunk49999 = require("./49999.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk641131 = require("./641131.js");

function v(e) {
  let t = (0, i.bG)([f.A], () => f.A.getGuildId()),
    n = (0, p.Qo)(t);
  return (0, b.ul)(e) ? (0, r.jsx)(a.Drp, {
    id: "report",
    label: n ? m.intl.string(m.t.n5EBAJ) : m.intl.string(m.t.GwbdGe),
    action: () => (0, d.V2)(e, "web_message_context_menu"),
    icon: n ? a.pVd : a.iFK,
    leadingAccessory: {
      type: "icon",
      icon: n ? a.pVd : a.iFK
    },
    color: "danger"
  }) : null
}

function j(e) {
  let t = (0, i.bG)([u.A], () => u.A.hasReportedMessage(e.channel_id, e.id)),
    n = (0, g.KB)(e),
    c = n ? [l.M.REPORT_TO_MOD_NEW_TAG] : [],
    [p, f] = (0, s.kn)(c);
  return ((0, o.l0)(() => {
    n && f(A.i.AUTO_DISMISS)
  }), n) ? (0, r.jsx)(a.Drp, {
    id: "report-to-mod",
    label: t ? m.intl.string(O.default["8wsdng"]) : m.intl.string(O.default["1D+vqy"]),
    action: () => {
      f(A.i.USER_DISMISS), (0, d.dy)(e)
    },
    icon: a.iFK,
    disabled: t,
    leadingAccessory: {
      type: "icon",
      icon: a.iFK
    },
    badge: p === l.M.REPORT_TO_MOD_NEW_TAG ? "new" : true,
    color: "danger"
  }) : null
}

function h(e) {
  let t = (0, i.bG)([c.Ay], () => c.Ay.get("iar_testing")),
    n = (0, i.bG)([y.default], () => y.default.getCurrentUser());
  return (0, b.ul)(e) && null != n && n.isStaff() && t ? (0, r.jsx)(a.Drp, {
    id: "staff-test-message-report",
    label: "[STAFF] Test Message Report",
    action: () => (0, d.Rj)(e, "web_message_context_menu"),
    icon: a.iFK,
    leadingAccessory: {
      type: "icon",
      icon: a.iFK
    },
    color: "danger"
  }) : null
}