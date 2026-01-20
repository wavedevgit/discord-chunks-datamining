/** Chunk was on 22979 **/
/** chunk id: 698901, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => d
}), require("./388685.js"), require("./642613.js");
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk536442 = require("./536442.js"),
  Chunk2968 = require("./2968.js"),
  Chunk663618 = require("./663618.js");

function c(e) {
  let {
    hotspotLocation: t
  } = e, [n, s] = (0, r.Wu)([l.qc], () => [l.qc.hasHotspot(t, true), l.qc.getHotspotOverride(t)]);
  return (0, a.jsx)(i.PhF, {
    label: t,
    errorMessage: n ? "Inactive" : true,
    successMessage: n ? "Active" : true,
    value: s,
    options: [{
      id: "none",
      value: true,
      label: "No Override"
    }, {
      id: "active",
      value: true,
      label: "Force Active"
    }, {
      id: "inactive",
      value: false,
      label: "Force Inactive"
    }],
    onSelectionChange: e => null != e ? (0, l.hv)(t, e) : (0, l.Po)(t),
    selectionMode: "single",
    fullWidth: true
  })
}

function d() {
  return (0, a.jsx)(i.zJl, {
    className: o.panel,
    children: (0, a.jsx)(i.C3N, {
      label: "Hotspots",
      description: "All the 'hotspots' in app, and their current status. Use the select menu to override them on or off.",
      className: s.hotspotsSection,
      children: (0, a.jsx)(i.Kqy, {
        gap: 20,
        children: Object.keys(l.v6).sort((e, t) => e.localeCompare(t)).map(e => (0, a.jsx)(c, {
          hotspotLocation: e
        }, e))
      })
    })
  })
}