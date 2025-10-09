/** Chunk was on 91053 **/
/** chunk id: 374306, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => g
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
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
    tagFilter: y,
    tagSetting: _
  } = (0, c.H)(t.id), j = (0, i.e7)([o.Z, h.Z], () => !!(o.Z.getThreadIds(t.id, b, y, _).length > 0) || !!(h.Z.getThreads(t.id, b, y, _).length > 0), [t.id, b, y, _]), x = t.isMediaChannel();
  if (!n || m || x && j) return null;
  let O = g ? x ? f.intl.string(f.t["WP/IEx"]) : f.intl.string(f.t.zfq9V1) : x ? f.intl.string(f.t.p60yFx) : f.intl.string(f.t.SNOqYG);
  return (0, r.jsx)(p.JO, {
    tooltip: O,
    icon: l.d3s,
    onClick: () => s.Z.hideAdminOnboarding(t.id, !g),
    selected: !g
  })
}