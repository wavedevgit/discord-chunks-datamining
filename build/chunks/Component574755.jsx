/** Chunk was on web.js **/
/** chunk id: 574755, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => O
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk704215 = require("./704215.js"),
  Chunk481060 = require("./481060.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk266454 = require("./266454.js"),
  Chunk441167 = require("./441167.js"),
  Chunk695346 = require("./695346.js"),
  Chunk131951 = require("./131951.js"),
  Chunk924557 = require("./924557.js"),
  Chunk435064 = require("./435064.js"),
  Chunk779618 = require("./779618.js"),
  Chunk39604 = require("./39604.js"),
  Chunk703288 = require("./703288.jsx"),
  Chunk491758 = require("./491758.jsx"),
  Chunk233685 = require("./233685.jsx"),
  Chunk388032 = require("./388032.jsx");

function O(e) {
  let {
    className: t,
    showHeader: n = true
  } = e, O = d.tU.useSetting(), {
    enableViewerClipping: v
  } = u.Z.useExperiment({
    location: "Clips Settings"
  }, {
    autoTrackExposure: false
  }), {
    analyticsLocations: I
  } = (0, l.ZP)(), S = (0, _.Go)(), {
    viewerClipsEnabled: T
  } = (0, a.cj)([p.Z], () => p.Z.getSettings()), A = (0, h.Z)(f.Z);
  return i.useEffect(() => {
    (0, c.Q3)(o.z.CLIPS_SETTINGS_BETA_TAG)
  }), (0, r.jsx)(l.Gt, {
    value: I,
    children: (0, r.jsxs)(s.Kqy, {
      gap: 20,
      children: [(S || n) && (0, r.jsxs)("div", {
        className: t,
        children: [n ? (0, r.jsxs)(s.Heading, {
          variant: "heading-lg/semibold",
          children: [y.intl.string(y.t.z2jK6X), " ", (0, r.jsx)(g.Z, {})]
        }) : null, S && (0, r.jsx)("form", {
          onSubmit: e => e.preventDefault(),
          children: (0, r.jsxs)(s.Kqy, {
            gap: 24,
            children: [(0, r.jsx)(E.Z, {}), (0, r.jsx)(b.Z, {})]
          })
        })]
      }), S && (0, r.jsx)(s.izJ, {}), (0, r.jsxs)(s.Kqy, {
        gap: 16,
        children: [(0, r.jsx)(s.rsf, {
          label: y.intl.string(y.t.AGDDkH),
          description: y.intl.string(y.t["wW9/zQ"]),
          checked: O,
          onChange: e => m.yg({
            allowVoiceRecording: e
          })
        }), v && A && (0, r.jsx)(s.rsf, {
          label: y.intl.string(y.t.NWw7kY),
          description: y.intl.string(y.t["0vjy8N"]),
          checked: T,
          onChange: e => m.yl({
            enabled: e,
            trackAnalytics: true
          })
        })]
      })]
    })
  })
}