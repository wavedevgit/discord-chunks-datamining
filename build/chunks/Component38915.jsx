/** Chunk was on web.js **/
/** chunk id: 38915, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => c
}), require("./388685.js"), require("./642613.js");
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk536442 = require("./536442.js"),
  Chunk625571 = require("./625571.js");

function l(e) {
  let {
    hotspotLocation: t
  } = e, [n, l] = (0, i.Wu)([o.qc], () => [o.qc.hasHotspot(t, true), o.qc.getHotspotOverride(t)]);
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)(a.xJW, {
      title: t,
      className: s.hotspotSwitch,
      children: [n ? (0, r.jsx)(a.DY3, {
        className: s.iconContainer,
        element: "span",
        text: "Active",
        children: (0, r.jsx)(a.dz2, {
          size: "md",
          color: "currentColor",
          className: s.checkmark
        })
      }) : (0, r.jsx)(a.DY3, {
        className: s.iconContainer,
        element: "span",
        text: "Inactive",
        children: (0, r.jsx)(a.Dio, {
          size: "md",
          color: "currentColor",
          className: s.xmark
        })
      }), (0, r.jsx)(a.q4e, {
        className: s.overrideSelect,
        value: l,
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
        onChange: e => null != e ? (0, o.hv)(t, e) : (0, o.Po)(t)
      })]
    }), (0, r.jsx)(a.$i$, {})]
  })
}

function c(e) {
  let {
    className: t
  } = e;
  return (0, r.jsxs)(a.hjN, {
    title: "Hotspots",
    tag: a.RB0.H1,
    className: t,
    children: [(0, r.jsx)(a.Text, {
      className: s.helpText,
      tag: "p",
      variant: "text-sm/normal",
      children: 'All the "hotspots" in app, and their current status. Use the select menu to override them on or off.'
    }), Object.keys(o.v6).sort((e, t) => e.localeCompare(t)).map(e => (0, r.jsx)(l, {
      hotspotLocation: e
    }, e))]
  })
}