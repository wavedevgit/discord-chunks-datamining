/** Chunk was on 1636 **/
/** chunk id: 292103, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Ay: () => h,
  S_: () => _,
  zo: () => S
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk311907 = require("./311907.js"),
  Chunk554146 = require("./554146.js"),
  Chunk827734 = require("./827734.js"),
  Chunk397927 = require("./397927.js"),
  Chunk964486 = require("./964486.js"),
  Chunk865116 = require("./865116.js"),
  Chunk826673 = require("./826673.js"),
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

function h(e) {
  let t = (0, i.bG)([b.A], () => b.A.getGuildId()),
    n = (0, y.Qo)(t);
  return (0, m.ul)(e) ? (0, r.jsx)(o.Drp, {
    id: "report",
    label: n ? v.intl.string(v.t.n5EBAJ) : v.intl.string(v.t.GwbdGe),
    action: () => (0, g.V2)(e, "web_message_context_menu"),
    icon: n ? o.pVd : o.iFK,
    leadingAccessory: {
      type: "icon",
      icon: n ? o.pVd : o.iFK
    },
    color: "danger"
  }) : null
}

function E() {
  return (0, r.jsx)(u.Ay, {
    contentTypes: [l.M.REPORT_TO_MOD_NEW_TAG],
    children: e => {
      let {
        visibleContent: t
      } = e;
      return t === l.M.REPORT_TO_MOD_NEW_TAG ? (0, r.jsx)(o.LpS, {
        color: a.A.colors.BACKGROUND_BRAND.css,
        text: v.intl.string(v.t.y2b7CA)
      }) : (0, r.jsx)(o.iFK, {
        color: "currentColor",
        size: "refresh_sm"
      })
    }
  })
}

function S(e) {
  let t = (0, i.bG)([p.A], () => p.A.hasReportedMessage(e.channel_id, e.id)),
    n = (0, f.KB)(e);
  return ((0, c.l0)(() => {
    n && (0, d.Dr)(l.M.REPORT_TO_MOD_NEW_TAG, {
      dismissAction: O.i.AUTO_DISMISS
    })
  }), n) ? (0, r.jsx)(o.Drp, {
    id: "report-to-mod",
    label: t ? v.intl.string(j.default["8wsdng"]) : v.intl.string(j.default["1D+vqy"]),
    action: () => {
      (0, d.Dr)(l.M.REPORT_TO_MOD_NEW_TAG, {
        dismissAction: O.i.USER_DISMISS
      }), (0, g.dy)(e)
    },
    icon: (0, r.jsx)(E, {}),
    disabled: t,
    leadingAccessory: {
      type: "icon",
      icon: o.iFK
    }
  }) : null
}

function _(e) {
  let t = (0, i.bG)([s.Ay], () => s.Ay.get("iar_testing")),
    n = (0, i.bG)([A.default], () => A.default.getCurrentUser());
  return (0, m.ul)(e) && null != n && n.isStaff() && t ? (0, r.jsx)(o.Drp, {
    id: "staff-test-message-report",
    label: "[STAFF] Test Message Report",
    action: () => (0, g.Rj)(e, "web_message_context_menu"),
    icon: o.iFK,
    leadingAccessory: {
      type: "icon",
      icon: o.iFK
    },
    color: "danger"
  }) : null
}