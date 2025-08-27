/** Chunk was on web.js **/
/** chunk id: 38915, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => u
}), require("./388685.js"), require("./642613.js");
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk442837 = require("./442837.js"),
  Chunk28664 = require("./28664.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk536442 = require("./536442.js"),
  Chunk625571 = require("./625571.js");

function c(e) {
  let {
    hotspotLocation: t
  } = e, [n, c] = (0, i.Wu)([s.qc], () => [s.qc.hasHotspot(t, true), s.qc.getHotspotOverride(t)]);
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)(o.xJW, {
      title: t,
      className: l.hotspotSwitch,
      children: [n ? (0, r.jsx)(a.u, {
        asContainer: true,
        tag: "span",
        text: "Active",
        children: (0, r.jsx)(o.dz2, {
          size: "md",
          color: "currentColor",
          className: l.checkmark
        })
      }) : (0, r.jsx)(a.u, {
        asContainer: true,
        tag: "span",
        text: "Inactive",
        children: (0, r.jsx)(o.Dio, {
          size: "md",
          color: "currentColor",
          className: l.xmark
        })
      }), (0, r.jsx)(o.q4e, {
        className: l.overrideSelect,
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
    }), (0, r.jsx)(o.$i$, {})]
  })
}

function u(e) {
  let {
    className: t
  } = e;
  return (0, r.jsxs)(o.hjN, {
    title: "Hotspots",
    tag: o.RB0.H1,
    className: t,
    children: [(0, r.jsx)(o.Text, {
      className: l.helpText,
      tag: "p",
      variant: "text-sm/normal",
      children: 'All the "hotspots" in app, and their current status. Use the select menu to override them on or off.'
    }), Object.keys(s.v6).sort((e, t) => e.localeCompare(t)).map(e => (0, r.jsx)(c, {
      hotspotLocation: e
    }, e))]
  })
}