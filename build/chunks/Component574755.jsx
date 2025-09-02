/** Chunk was on web.js **/
/** chunk id: 574755, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => S
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
  Chunk40435 = require("./40435.js"),
  Chunk749799 = require("./749799.js"),
  Chunk197571 = require("./197571.js");

function S(e) {
  let {
    className: t,
    showHeader: n = true
  } = e, S = d.tU.useSetting(), {
    enableViewerClipping: T
  } = u.Z.useExperiment({
    location: "Clips Settings"
  }, {
    autoTrackExposure: false
  }), {
    analyticsLocations: A
  } = (0, l.ZP)(), C = (0, _.Go)(), {
    viewerClipsEnabled: N
  } = (0, a.cj)([p.Z], () => p.Z.getSettings()), R = (0, h.Z)(f.Z);
  return i.useEffect(() => {
    (0, c.Q3)(o.z.CLIPS_SETTINGS_BETA_TAG)
  }), (0, r.jsxs)(l.Gt, {
    value: A,
    children: [(C || n) && (0, r.jsx)(s.hjN, {
      className: t,
      tag: s.RB0.H1,
      title: n ? (0, r.jsxs)("div", {
        className: O.headerContainer,
        children: [y.intl.string(y.t.z2jK6e), (0, r.jsx)(g.Z, {})]
      }) : null,
      children: C && (0, r.jsxs)("form", {
        onSubmit: e => e.preventDefault(),
        children: [(0, r.jsx)(E.Z, {}), (0, r.jsx)(b.Z, {})]
      })
    }), C && (0, r.jsx)(s.$i$, {}), (0, r.jsxs)(s.hjN, {
      className: n || C ? I.marginTop20 : t,
      children: [(0, r.jsx)(s.j7V, {
        hideBorder: true,
        className: v.formItem,
        value: S,
        note: y.intl.string(y.t["wW9/zc"]),
        onChange: e => m.yg({
          allowVoiceRecording: e
        }),
        children: y.intl.string(y.t.AGDDkJ)
      }), T && R && (0, r.jsx)(s.j7V, {
        hideBorder: true,
        className: v.formItem,
        value: N,
        note: y.intl.string(y.t["0vjy8P"]),
        onChange: e => m.yl({
          enabled: e,
          trackAnalytics: true
        }),
        children: y.intl.string(y.t.NWw7kZ)
      })]
    })]
  })
}