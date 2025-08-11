/** Chunk was on web.js **/
/** chunk id: 429260, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  ZP: () => v,
  eH: () => S,
  wY: () => T
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
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
  Chunk130883 = require("./130883.js");

function v(e) {
  let t = (0, i.e7)([m.Z], () => m.Z.getGuildId()),
    n = (0, h.Q_)(t);
  return (0, E.a4)(e) ? <a.sNh id={"report"} label={n ? y.intl.string(y.t.n5EBAA) : y.intl.string(y.t.GwbdGR)} action={() => (0, f.ak)(e, "web_message_context_menu")} icon={n ? a.gw7 : a.U65} color={"danger"} /> : null
}

function I() {
  return <Chunk243778.ZP contentTypes={[Chunk704215.z.REPORT_TO_MOD_NEW_TAG]}>{e => {
      let {
        visibleContent: t
      } = e;
      return t === o.z.REPORT_TO_MOD_NEW_TAG ? (0, r.jsx)(a.IGR, {
        color: l.Z.BG_BRAND,
        text: y.intl.string(y.t.y2b7CA)
      }) : (0, r.jsx)(a.U65, {
        color: "currentColor",
        size: "refresh_sm"
      })
    }}</Chunk243778.ZP>
}

function T(e) {
  let t = (0, i.e7)([_.Z], () => _.Z.hasReportedMessage(e.channel_id, e.id)),
    n = (0, p.sP)(e);
  return ((0, s.zq)(() => {
    n && (0, u.Q3)(o.z.REPORT_TO_MOD_NEW_TAG, {
      dismissAction: b.L.AUTO_DISMISS
    })
  }), n) ? <a.sNh id={"report-to-mod"} label={t ? y.intl.string(O.default["8wsdnp"]) : y.intl.string(O.default["1D+vq6"])} action={() => {
      (0, u.Q3)(o.z.REPORT_TO_MOD_NEW_TAG, {
        dismissAction: b.L.USER_DISMISS
      }), (0, f.tV)(e)
    }} icon={(0, r.jsx)(I, {})} disabled={t} /> : null
}

function S(e) {
  let t = (0, i.e7)([c.ZP], () => c.ZP.get("iar_testing")),
    n = (0, i.e7)([g.default], () => g.default.getCurrentUser());
  return (0, E.a4)(e) && null != n && n.isStaff() && t ? <a.sNh id={"staff-test-message-report"} label={"[STAFF] Test Message Report"} action={() => (0, f.Jw)(e, "web_message_context_menu")} icon={a.U65} color={"danger"} /> : null
}