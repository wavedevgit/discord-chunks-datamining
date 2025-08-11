/** Chunk was on 46154 **/
/** chunk id: 13736, original params: t,n,e (module,exports,require) **/
require.d(exports, {
  Z: () => s
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk481060 = require("./481060.js"),
  Chunk787014 = require("./787014.js"),
  Chunk665906 = require("./665906.js"),
  Chunk388032 = require("./388032.jsx");

function s(t) {
  let n = (0, r.C7)(t),
    e = (0, r.$R)(t),
    s = (0, r.Gu)(t);
  return !n || !e || s || t.isModeratorReportChannel() || __OVERLAY__ ? null : (0, i.jsx)(a.sNh, {
    id: "edit-thread",
    label: t.isForumPost() ? o.intl.string(o.t.NP1yHB) : o.intl.string(o.t["2Mk1TE"]),
    action: () => {
      (0, a.pTH)(), l.ZP.open(t.id)
    }
  })
}