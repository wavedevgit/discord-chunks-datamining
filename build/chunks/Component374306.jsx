/** Chunk was on 5665 **/
/** chunk id: 374306, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => m
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

function m(e) {
  let {
    channel: t
  } = e, n = (0, u.r_)(t), m = (0, i.e7)([a.Z], () => a.Z.hasHidden(t.id)), g = (0, d.c)(t.id), {
    sortOrder: b,
    tagFilter: y,
    tagSetting: _
  } = (0, c.H)(t.id), C = (0, i.e7)([s.Z, p.Z], () => !!(s.Z.getThreadIds(t.id, b, y, _).length > 0) || !!(p.Z.getThreads(t.id, b, y, _).length > 0), [t.id, b, y, _]), v = t.isMediaChannel();
  if (!n || g || v && C) return null;
  let x = m ? v ? f.intl.string(f.t["WP/IEx"]) : f.intl.string(f.t.zfq9V1) : v ? f.intl.string(f.t.p60yFx) : f.intl.string(f.t.SNOqYG);
  return (0, r.jsx)(h.JO, {
    tooltip: x,
    icon: l.d3s,
    onClick: () => o.Z.hideAdminOnboarding(t.id, !m),
    selected: !m
  })
}