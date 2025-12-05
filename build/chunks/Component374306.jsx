/** Chunk was on 89522 **/
/** chunk id: 374306, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => g
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk961675 = require("./961675.js"),
  Chunk883429 = require("./883429.js"),
  Chunk238349 = require("./238349.js"),
  Chunk109434 = require("./109434.js"),
  Chunk456269 = require("./456269.js"),
  Chunk432771 = require("./432771.js"),
  Chunk920303 = require("./920303.js"),
  Chunk665149 = require("./665149.jsx"),
  Chunk388032 = require("./388032.jsx");

function g(e) {
  let {
    channel: t
  } = e, n = (0, d.r_)(t), g = (0, i.e7)([a.Z], () => a.Z.hasHidden(t.id)), m = (0, u.c)(t.id), {
    sortOrder: b,
    tagFilter: _,
    tagSetting: y
  } = (0, c.H)(t.id), O = (0, i.e7)([o.Z, p.Z], () => !!(o.Z.getThreadIds(t.id, b, _, y).length > 0) || !!(p.Z.getThreads(t.id, b, _, y).length > 0), [t.id, b, _, y]), x = t.isMediaChannel();
  if (!n || m || x && O) return null;
  let j = g ? x ? f.intl.string(f.t["WP/IE1"]) : f.intl.string(f.t.zfq9V4) : x ? f.intl.string(f.t.p60yF1) : f.intl.string(f.t.SNOqYC);
  return (0, r.jsx)(h.JO, {
    tooltip: j,
    icon: l.d3s,
    onClick: () => s.Z.hideAdminOnboarding(t.id, !g),
    selected: !g
  })
}