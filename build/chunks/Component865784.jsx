/** Chunk was on web.js **/
/** chunk id: 865784, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => _,
  M: () => h
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk793574 = require("./793574.js"),
  Chunk865116 = require("./865116.js"),
  Chunk928658 = require("./928658.js"),
  Chunk447872 = require("./447872.js"),
  Chunk961350 = require("./961350.js"),
  Chunk287809 = require("./287809.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");

function _(e) {
  let {
    user: t,
    guildId: n,
    color: o,
    onAction: d,
    location: _ = s.A.CONTEXT_MENU,
    appContext: h
  } = e, m = (0, c.So)(_), g = (0, i.bG)([u.default], () => u.default.getId() === t.id);
  return !m || g || t.isNonUserBot() ? null : (0, r.jsx)(a.Drp, {
    id: "report-user",
    color: o,
    label: p.intl.string(p.t.A1MM3D),
    action: () => (0, l.NW)(t, n === f.ME ? true : n, d, h)
  })
}

function h(e) {
  let {
    user: t,
    guildId: n,
    color: s,
    onAction: c,
    appContext: u
  } = e, p = (0, i.bG)([o.Ay], () => o.Ay.get("iar_testing")), _ = (0, i.bG)([d.default], () => d.default.getCurrentUser());
  return null != _ && (t.id === _.id || t.isNonUserBot() || !_.isStaff() || !p) ? null : (0, r.jsx)(a.Drp, {
    id: "staff-test-report-user",
    color: s,
    label: "[STAFF] Test Profile Report",
    action: () => (0, l.RR)(t, n === f.ME ? true : n, c, u)
  })
}