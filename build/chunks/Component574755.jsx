/** Chunk was on 30202 **/
/** chunk id: 574755, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => v
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
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

function v(e) {
  let {
    className: t,
    showHeader: n = true
  } = e, v = u.tU.useSetting(), {
    enableViewerClipping: S
  } = d.Z.useExperiment({
    location: "Clips Settings"
  }, {
    autoTrackExposure: false
  }), {
    analyticsLocations: T
  } = (0, o.ZP)(), N = (0, p.Go)(), {
    viewerClipsEnabled: I
  } = (0, s.cj)([g.Z], () => g.Z.getSettings()), y = (0, h.Z)(m.Z);
  return r.useEffect(() => {
    (0, c.Q3)(a.z.CLIPS_SETTINGS_BETA_TAG)
  }), (0, i.jsxs)(o.Gt, {
    value: T,
    children: [(N || n) && (0, i.jsx)(l.hjN, {
      className: t,
      tag: l.RB0.H1,
      title: n ? (0, i.jsxs)("div", {
        className: E.headerContainer,
        children: [j.intl.string(j.t.z2jK6e), (0, i.jsx)(b.Z, {})]
      }) : null,
      children: N && (0, i.jsxs)("form", {
        onSubmit: e => e.preventDefault(),
        children: [(0, i.jsx)(x.Z, {}), (0, i.jsx)(_.Z, {})]
      })
    }), N && (0, i.jsx)(l.$i$, {}), (0, i.jsxs)(l.hjN, {
      className: n || N ? O.marginTop20 : t,
      children: [(0, i.jsx)(l.j7V, {
        hideBorder: true,
        className: C.formItem,
        value: v,
        note: j.intl.string(j.t["wW9/zc"]),
        onChange: e => f.yg({
          allowVoiceRecording: e
        }),
        children: j.intl.string(j.t.AGDDkJ)
      }), S && y && (0, i.jsx)(l.j7V, {
        hideBorder: true,
        className: C.formItem,
        value: I,
        note: j.intl.string(j.t["0vjy8P"]),
        onChange: e => f.yl({
          enabled: e,
          trackAnalytics: true
        }),
        children: j.intl.string(j.t.NWw7kZ)
      })]
    })]
  })
}