/** Chunk was on 97492 **/
/** chunk id: 899584, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => b
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

function b(e) {
  let {
    channel: t
  } = e, n = (0, u.S4)(t), b = (0, l.bG)([a.A], () => a.A.hasHidden(t.id)), g = (0, d.l)(t.id), {
    sortOrder: m,
    tagFilter: A,
    tagSetting: y
  } = (0, c.R)(t.id), O = (0, l.bG)([o.A, f.A], () => !!(o.A.getThreadIds(t.id, m, A, y).length > 0) || !!(f.A.getThreads(t.id, m, A, y).length > 0), [t.id, m, A, y]), j = t.isMediaChannel();
  if (!n || g || j && O) return null;
  let v = b ? j ? h.intl.string(h.t["WP/IE1"]) : h.intl.string(h.t.zfq9V4) : j ? h.intl.string(h.t.p60yF1) : h.intl.string(h.t.SNOqYC);
  return (0, r.jsx)(p.In, {
    tooltip: v,
    icon: i.mir,
    onClick: () => s.A.hideAdminOnboarding(t.id, !b),
    selected: !b
  })
}