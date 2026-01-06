/** Chunk was on 89250 **/
/** chunk id: 13736, original params: t,n,e (module,exports,require) **/
require.d(exports, {
  Z: () => o
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk481060 = require("./481060.js"),
  Chunk787014 = require("./787014.js"),
  Chunk665906 = require("./665906.js"),
  Chunk388032 = require("./388032.jsx");

function o(t) {
  let n = (0, r.C7)(t),
    e = (0, r.$R)(t),
    o = (0, r.Gu)(t);
  return !n || !e || o || t.isModeratorReportChannel() || __OVERLAY__ ? null : (0, i.jsx)(l.sNh, {
    id: "edit-thread",
    label: t.isForumPost() ? s.intl.string(s.t.NP1yHG) : s.intl.string(s.t["2Mk1TP"]),
    action: () => {
      (0, l.pTH)(), a.ZP.open(t.id)
    }
  })
}