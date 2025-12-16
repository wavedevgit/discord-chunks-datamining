/** Chunk was on 29725 **/
/** chunk id: 698901, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => u
}), require("./388685.js"), require("./642613.js");
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk442837 = require("./442837.js"),
  Chunk199849 = require("./199849.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk536442 = require("./536442.js"),
  Chunk2968 = require("./2968.js"),
  Chunk663618 = require("./663618.js");

function d(e) {
  let {
    hotspotLocation: t
  } = e, [n, i] = (0, r.Wu)([s.qc], () => [s.qc.hasHotspot(t, true), s.qc.getHotspotOverride(t)]);
  return (0, a.jsx)(l.y6, {
    label: t,
    helperText: n ? "Active" : true,
    errorMessage: n ? "Inactive" : true,
    className: o.overrideSelect,
    value: i,
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
    onChange: e => null != e ? (0, s.hv)(t, e) : (0, s.Po)(t)
  })
}

function u() {
  return (0, Chunk54381.jsx)(Chunk481060.zJl, {
    className: Chunk663618.panel,
    children: (0, Chunk54381.jsx)(Chunk481060.C3N, {
      label: "Hotspots",
      description: "All the 'hotspots' in app, and their current status. Use the select menu to override them on or off.",
      className: Chunk2968.hotspotsSection,
      children: (0, Chunk54381.jsx)(Chunk481060.Kqy, {
        gap: 20,
        children: Object.keys(Chunk536442.v6).sort((e, t) => e.localeCompare(t)).map(e => (0, a.jsx)(d, {
          hotspotLocation: e
        }, e))
      })
    })
  })
}