/** Chunk was on 20501 **/
/** chunk id: 38915, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => c
}), require("./388685.js"), require("./642613.js");
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk536442 = require("./536442.js"),
  Chunk100537 = require("./100537.js");

function o(e) {
  let {
    hotspotLocation: t
  } = e, [n, o] = (0, r.Wu)([a.qc], () => [a.qc.hasHotspot(t, true), a.qc.getHotspotOverride(t)]);
  return (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsxs)(s.xJW, {
      title: t,
      className: l.hotspotSwitch,
      children: [n ? (0, i.jsx)(s.DY3, {
        className: l.iconContainer,
        element: "span",
        text: "Active",
        children: (0, i.jsx)(s.dz2, {
          size: "md",
          color: "currentColor",
          className: l.checkmark
        })
      }) : (0, i.jsx)(s.DY3, {
        className: l.iconContainer,
        element: "span",
        text: "Inactive",
        children: (0, i.jsx)(s.Dio, {
          size: "md",
          color: "currentColor",
          className: l.xmark
        })
      }), (0, i.jsx)(s.q4e, {
        className: l.overrideSelect,
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
        onChange: e => null != e ? (0, a.hv)(t, e) : (0, a.Po)(t)
      })]
    }), (0, i.jsx)(s.$i$, {})]
  })
}

function c(e) {
  let {
    className: t
  } = e;
  return (0, i.jsxs)(s.hjN, {
    title: "Hotspots",
    tag: s.RB0.H1,
    className: t,
    children: [(0, i.jsx)(s.Text, {
      className: l.helpText,
      tag: "p",
      variant: "text-sm/normal",
      children: 'All the "hotspots" in app, and their current status. Use the select menu to override them on or off.'
    }), Object.keys(a.v6).sort((e, t) => e.localeCompare(t)).map(e => (0, i.jsx)(o, {
      hotspotLocation: e
    }, e))]
  })
}