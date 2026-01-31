/** Chunk was on 17534 **/
/** chunk id: 899584, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => f
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk947094 = require("./947094.js"),
  Chunk919577 = require("./919577.js"),
  Chunk207777 = require("./207777.js"),
  Chunk422844 = require("./422844.js"),
  Chunk435470 = require("./435470.js"),
  Chunk892110 = require("./892110.js"),
  Chunk45494 = require("./45494.js"),
  Chunk58736 = require("./58736.jsx"),
  Chunk985018 = require("./985018.jsx");

function f(e) {
  let {
    channel: t
  } = e, n = (0, u.S4)(t), f = (0, l.bG)([s.A], () => s.A.hasHidden(t.id)), m = (0, d.l)(t.id), {
    sortOrder: b,
    tagFilter: A,
    tagSetting: y
  } = (0, c.R)(t.id), O = (0, l.bG)([o.A, h.A], () => !!(o.A.getThreadIds(t.id, b, A, y).length > 0) || !!(h.A.getThreads(t.id, b, A, y).length > 0), [t.id, b, A, y]), _ = t.isMediaChannel();
  if (!n || m || _ && O) return null;
  let j = f ? _ ? g.intl.string(g.t["WP/IE1"]) : g.intl.string(g.t.zfq9V4) : _ ? g.intl.string(g.t.p60yF1) : g.intl.string(g.t.SNOqYC);
  return (0, r.jsx)(p.In, {
    tooltip: j,
    icon: i.mir,
    onClick: () => a.A.hideAdminOnboarding(t.id, !f),
    selected: !f
  })
}