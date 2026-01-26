/** Chunk was on 65298 **/
/** chunk id: 615112, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => d
}), require("./896048.js"), require("./638769.js");
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk450510 = require("./450510.js"),
  Chunk298922 = require("./298922.js"),
  Chunk661251 = require("./661251.js");

function c(e) {
  let {
    hotspotLocation: t
  } = e, [n, s] = (0, l.yK)([i.HP], () => [i.HP.hasHotspot(t, true), i.HP.getHotspotOverride(t)]);
  return (0, a.jsx)(r.l6P, {
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
    onSelectionChange: e => null != e ? (0, i.Kl)(t, e) : (0, i.LF)(t),
    selectionMode: "single",
    fullWidth: true
  })
}

function d() {
  return (0, a.jsx)(r.IpV, {
    className: o.nd,
    children: (0, a.jsx)(r.nVY, {
      label: "Hotspots",
      description: "All the 'hotspots' in app, and their current status. Use the select menu to override them on or off.",
      className: s.IN,
      children: (0, a.jsx)(r.BJc, {
        gap: 20,
        children: Object.keys(i._2).sort((e, t) => e.localeCompare(t)).map(e => (0, a.jsx)(c, {
          hotspotLocation: e
        }, e))
      })
    })
  })
}