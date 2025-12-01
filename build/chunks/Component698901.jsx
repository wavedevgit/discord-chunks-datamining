/** Chunk was on 837 **/
/** chunk id: 698901, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => c
}), require("./388685.js"), require("./642613.js");
var Chunk54381 = require("./54381.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk536442 = require("./536442.js"),
  Chunk983380 = require("./983380.js");

function o(e) {
  let {
    hotspotLocation: t
  } = e, [n, o] = (0, l.Wu)([r.qc], () => [r.qc.hasHotspot(t, true), r.qc.getHotspotOverride(t)]);
  return (0, a.jsx)(i.q4e, {
    label: t,
    helperText: n ? "Active" : true,
    errorMessage: n ? "Inactive" : true,
    className: s.overrideSelect,
    value: o,
    options: [{
      value: true,
      label: "No Override"
    }, {
      value: true,
      label: "Force Active"
    }, {
      value: false,
      label: "Force Inactive"
    }],
    onChange: e => null != e ? (0, r.hv)(t, e) : (0, r.Po)(t)
  })
}

function c() {
  return (0, Chunk54381.jsx)(Chunk481060.C3N, {
    label: "Hotspots",
    description: "All the 'hotspots' in app, and their current status. Use the select menu to override them on or off.",
    className: Chunk983380.hotspotsSection,
    children: (0, Chunk54381.jsx)(Chunk481060.Kqy, {
      gap: 20,
      children: Object.keys(Chunk536442.v6).sort((e, t) => e.localeCompare(t)).map(e => (0, a.jsx)(o, {
        hotspotLocation: e
      }, e))
    })
  })
}