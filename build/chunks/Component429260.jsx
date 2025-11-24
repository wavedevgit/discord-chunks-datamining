/** Chunk was on 37220 **/
/** chunk id: 429260, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  ZP: () => S,
  eH: () => Z,
  wY: () => P
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk442837 = require("./442837.js"),
  Chunk704215 = require("./704215.js"),
  Chunk481060 = require("./481060.js"),
  Chunk493773 = require("./493773.js"),
  Chunk377171 = require("./377171.js"),
  Chunk432877 = require("./432877.js"),
  Chunk266454 = require("./266454.js"),
  Chunk243778 = require("./243778.jsx"),
  Chunk726521 = require("./726521.js"),
  Chunk993706 = require("./993706.js"),
  Chunk982168 = require("./982168.js"),
  Chunk216572 = require("./216572.js"),
  Chunk914010 = require("./914010.js"),
  Chunk594174 = require("./594174.js"),
  Chunk970257 = require("./970257.js"),
  Chunk921944 = require("./921944.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk342153 = require("./342153.js");

function S(e) {
  let t = (0, i.e7)([m.Z], () => m.Z.getGuildId()),
    n = (0, p.Q_)(t);
  return (0, O.a4)(e) ? (0, r.jsx)(a.sNh, {
    id: "report",
    label: n ? v.intl.string(v.t.n5EBAJ) : v.intl.string(v.t.GwbdGe),
    action: () => (0, f.ak)(e, "web_message_context_menu"),
    icon: n ? a.gw7 : a.U65,
    color: "danger"
  }) : null
}

function E() {
  return (0, Chunk54381.jsx)(Chunk243778.ZP, {
    contentTypes: [Chunk704215.z.REPORT_TO_MOD_NEW_TAG],
    children: e => {
      let {
        visibleContent: t
      } = e;
      return t === l.z.REPORT_TO_MOD_NEW_TAG ? (0, r.jsx)(a.IGR, {
        color: s.Z.BG_BRAND,
        text: v.intl.string(v.t.y2b7CA)
      }) : (0, r.jsx)(a.U65, {
        color: "currentColor",
        size: "refresh_sm"
      })
    }
  })
}

function P(e) {
  let t = (0, i.e7)([g.Z], () => g.Z.hasReportedMessage(e.channel_id, e.id)),
    n = (0, b.sP)(e);
  return ((0, o.zq)(() => {
    n && (0, u.Q3)(l.z.REPORT_TO_MOD_NEW_TAG, {
      dismissAction: h.L.AUTO_DISMISS
    })
  }), n) ? (0, r.jsx)(a.sNh, {
    id: "report-to-mod",
    label: t ? v.intl.string(j.default["8wsdng"]) : v.intl.string(j.default["1D+vqy"]),
    action: () => {
      (0, u.Q3)(l.z.REPORT_TO_MOD_NEW_TAG, {
        dismissAction: h.L.USER_DISMISS
      }), (0, f.tV)(e)
    },
    icon: (0, r.jsx)(E, {}),
    disabled: t
  }) : null
}

function Z(e) {
  let t = (0, i.e7)([c.ZP], () => c.ZP.get("iar_testing")),
    n = (0, i.e7)([y.default], () => y.default.getCurrentUser());
  return (0, O.a4)(e) && null != n && n.isStaff() && t ? (0, r.jsx)(a.sNh, {
    id: "staff-test-message-report",
    label: "[STAFF] Test Message Report",
    action: () => (0, f.Jw)(e, "web_message_context_menu"),
    icon: a.U65,
    color: "danger"
  }) : null
}