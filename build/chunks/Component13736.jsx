/** Chunk was on 86357 **/
/** chunk id: 13736, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => s
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk481060 = require("./481060.js"),
  Chunk787014 = require("./787014.js"),
  Chunk665906 = require("./665906.js"),
  Chunk388032 = require("./388032.jsx");

function s(e) {
  let t = (0, a.C7)(e),
    n = (0, a.$R)(e),
    s = (0, a.Gu)(e);
  return !t || !n || s || e.isModeratorReportChannel() || __OVERLAY__ ? null : (0, r.jsx)(i.sNh, {
    id: "edit-thread",
    label: e.isForumPost() ? o.intl.string(o.t.NP1yHB) : o.intl.string(o.t["2Mk1TE"]),
    action: () => {
      (0, i.pTH)(), l.ZP.open(e.id)
    }
  })
}