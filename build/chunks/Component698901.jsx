/** Chunk was on 85991 **/
/** chunk id: 698901, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => d
}), require("./388685.js"), require("./642613.js");
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk442837 = require("./442837.js"),
  Chunk28664 = require("./28664.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk536442 = require("./536442.js"),
  Chunk983380 = require("./983380.js");

function c(e) {
  let {
    hotspotLocation: t
  } = e, [n, c] = (0, r.Wu)([s.qc], () => [s.qc.hasHotspot(t, true), s.qc.getHotspotOverride(t)]);
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsxs)(l.xJW, {
      title: t,
      className: o.hotspotSwitch,
      children: [n ? (0, a.jsx)(i.u, {
        asContainer: true,
        tag: "span",
        text: "Active",
        children: (0, a.jsx)(l.dz2, {
          size: "md",
          color: "currentColor",
          className: o.checkmark
        })
      }) : (0, a.jsx)(i.u, {
        asContainer: true,
        tag: "span",
        text: "Inactive",
        children: (0, a.jsx)(l.Dio, {
          size: "md",
          color: "currentColor",
          className: o.xmark
        })
      }), (0, a.jsx)(l.q4e, {
        className: o.overrideSelect,
        value: c,
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
      })]
    }), (0, a.jsx)(l.$i$, {})]
  })
}

function d() {
  return (0, Chunk951288.jsxs)(Chunk481060.hjN, {
    title: "Hotspots",
    tag: Chunk481060.RB0.H1,
    className: Chunk983380.hotspotsSection,
    children: [(0, Chunk951288.jsx)(Chunk481060.Text, {
      className: Chunk983380.helpText,
      tag: "p",
      variant: "text-sm/normal",
      children: 'All the "hotspots" in app, and their current status. Use the select menu to override them on or off.'
    }), Object.keys(Chunk536442.v6).sort((e, t) => e.localeCompare(t)).map(e => (0, a.jsx)(c, {
      hotspotLocation: e
    }, e))]
  })
}