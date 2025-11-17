/** Chunk was on web.js **/
/** chunk id: 622724, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  T: () => h,
  Z: () => p
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk100527 = require("./100527.js"),
  Chunk432877 = require("./432877.js"),
  Chunk726521 = require("./726521.js"),
  Chunk87620 = require("./87620.js"),
  Chunk314897 = require("./314897.js"),
  Chunk594174 = require("./594174.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function p(e) {
  let {
    user: t,
    guildId: n,
    color: s,
    onAction: d,
    location: p = o.Z.CONTEXT_MENU,
    appContext: h
  } = e, m = (0, c.oV)(p), g = (0, i.e7)([u.default], () => u.default.getId() === t.id);
  return !m || g || t.isNonUserBot() ? null : (0, r.jsx)(a.sNh, {
    id: "report-user",
    color: s,
    label: _.intl.string(_.t.A1MM3D),
    action: () => (0, l.pX)(t, n === f.ME ? true : n, d, h)
  })
}

function h(e) {
  let {
    user: t,
    guildId: n,
    color: o,
    onAction: c,
    appContext: u
  } = e, _ = (0, i.e7)([s.ZP], () => s.ZP.get("iar_testing")), p = (0, i.e7)([d.default], () => d.default.getCurrentUser());
  return null != p && (t.id === p.id || t.isNonUserBot() || !p.isStaff() || !_) ? null : (0, r.jsx)(a.sNh, {
    id: "staff-test-report-user",
    color: o,
    label: "[STAFF] Test Profile Report",
    action: () => (0, l.I6)(t, n === f.ME ? true : n, c, u)
  })
}