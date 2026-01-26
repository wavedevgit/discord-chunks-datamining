/** Chunk was on 67564 **/
/** chunk id: 899584, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => g
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

function g(e) {
  let {
    channel: t
  } = e, n = (0, u.S4)(t), g = (0, l.bG)([s.A], () => s.A.hasHidden(t.id)), m = (0, d.l)(t.id), {
    sortOrder: b,
    tagFilter: A,
    tagSetting: y
  } = (0, c.R)(t.id), _ = (0, l.bG)([o.A, p.A], () => !!(o.A.getThreadIds(t.id, b, A, y).length > 0) || !!(p.A.getThreads(t.id, b, A, y).length > 0), [t.id, b, A, y]), O = t.isMediaChannel();
  if (!n || m || O && _) return null;
  let j = g ? O ? f.intl.string(f.t["WP/IE1"]) : f.intl.string(f.t.zfq9V4) : O ? f.intl.string(f.t.p60yF1) : f.intl.string(f.t.SNOqYC);
  return (0, r.jsx)(h.In, {
    tooltip: j,
    icon: i.mir,
    onClick: () => a.A.hideAdminOnboarding(t.id, !g),
    selected: !g
  })
}