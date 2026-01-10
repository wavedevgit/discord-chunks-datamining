/** Chunk was on 92091 **/
/** chunk id: 13736, original params: t,n,i (module,exports,require) **/
require.d(exports, {
  Z: () => d
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk481060 = require("./481060.js"),
  Chunk787014 = require("./787014.js"),
  Chunk665906 = require("./665906.js"),
  Chunk388032 = require("./388032.jsx");

function d(t) {
  let n = (0, a.C7)(t),
    i = (0, a.$R)(t),
    d = (0, a.Gu)(t);
  return !n || !i || d || t.isModeratorReportChannel() || __OVERLAY__ ? null : (0, e.jsx)(l.sNh, {
    id: "edit-thread",
    label: t.isForumPost() ? s.intl.string(s.t.NP1yHG) : s.intl.string(s.t["2Mk1TP"]),
    action: () => {
      (0, l.pTH)(), r.ZP.open(t.id)
    }
  })
}