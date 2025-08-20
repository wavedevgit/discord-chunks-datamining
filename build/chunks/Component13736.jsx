/** Chunk was on 99534 **/
/** chunk id: 13736, original params: t,n,i (module,exports,require) **/
require.d(exports, {
  Z: () => o
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk481060 = require("./481060.js"),
  Chunk787014 = require("./787014.js"),
  Chunk665906 = require("./665906.js"),
  Chunk388032 = require("./388032.jsx");

function o(t) {
  let n = (0, a.C7)(t),
    i = (0, a.$R)(t),
    o = (0, a.Gu)(t);
  return !n || !i || o || t.isModeratorReportChannel() || __OVERLAY__ ? null : (0, e.jsx)(l.sNh, {
    id: "edit-thread",
    label: t.isForumPost() ? d.intl.string(d.t.NP1yHB) : d.intl.string(d.t["2Mk1TE"]),
    action: () => {
      (0, l.pTH)(), r.ZP.open(t.id)
    }
  })
}