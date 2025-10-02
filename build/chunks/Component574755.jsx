/** Chunk was on web.js **/
/** chunk id: 574755, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => v
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
  Chunk388032 = require("./388032.jsx"),
  Chunk40435 = require("./40435.js");

function v(e) {
  let {
    className: t,
    showHeader: n = true
  } = e, v = d.tU.useSetting(), {
    enableViewerClipping: I
  } = u.Z.useExperiment({
    location: "Clips Settings"
  }, {
    autoTrackExposure: false
  }), {
    analyticsLocations: T
  } = (0, l.ZP)(), S = (0, _.Go)(), {
    viewerClipsEnabled: A
  } = (0, a.cj)([p.Z], () => p.Z.getSettings()), C = (0, h.Z)(f.Z);
  return i.useEffect(() => {
    (0, c.Q3)(o.z.CLIPS_SETTINGS_BETA_TAG)
  }), (0, r.jsx)(l.Gt, {
    value: T,
    children: (0, r.jsxs)(s.Kqy, {
      gap: 20,
      children: [(S || n) && (0, r.jsx)(s.hjN, {
        className: t,
        tag: s.RB0.H1,
        title: n ? (0, r.jsxs)("div", {
          className: O.headerContainer,
          children: [y.intl.string(y.t.z2jK6e), (0, r.jsx)(g.Z, {})]
        }) : null,
        children: S && (0, r.jsx)("form", {
          onSubmit: e => e.preventDefault(),
          children: (0, r.jsxs)(s.Kqy, {
            gap: 24,
            children: [(0, r.jsx)(E.Z, {}), (0, r.jsx)(b.Z, {})]
          })
        })
      }), S && (0, r.jsx)(s.izJ, {}), (0, r.jsxs)(s.Kqy, {
        gap: 16,
        children: [(0, r.jsx)(s.rsf, {
          label: y.intl.string(y.t.AGDDkJ),
          description: y.intl.string(y.t["wW9/zc"]),
          checked: v,
          onChange: e => m.yg({
            allowVoiceRecording: e
          })
        }), I && C && (0, r.jsx)(s.rsf, {
          label: y.intl.string(y.t.NWw7kZ),
          description: y.intl.string(y.t["0vjy8P"]),
          checked: A,
          onChange: e => m.yl({
            enabled: e,
            trackAnalytics: true
          })
        })]
      })]
    })
  })
}