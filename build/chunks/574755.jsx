/** Chunk was on 75708 **/
/** chunk id: 574755, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => v
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk442837 = require("./442837.js"),
  Chunk704215 = require("./704215.js"),
  Chunk481060 = require("./481060.js"),
  Chunk906732 = require("./906732.js"),
  Chunk266454 = require("./266454.js"),
  Chunk441167 = require("./441167.js"),
  Chunk695346 = require("./695346.js"),
  Chunk131951 = require("./131951.js"),
  Chunk924557 = require("./924557.js"),
  Chunk435064 = require("./435064.js"),
  Chunk779618 = require("./779618.js"),
  Chunk39604 = require("./39604.js"),
  Chunk703288 = require("./703288.js"),
  Chunk491758 = require("./491758.jsx"),
  Chunk233685 = require("./233685.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk922284 = require("./922284.js"),
  Chunk802454 = require("./802454.js"),
  Chunk20493 = require("./20493.js");

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
  } = (0, o.ZP)(), I = (0, p.Go)(), {
    viewerClipsEnabled: N
  } = (0, s.cj)([g.Z], () => g.Z.getSettings()), y = (0, h.Z)(m.Z);
  return r.useEffect(() => {
    (0, c.Q3)(a.z.CLIPS_SETTINGS_BETA_TAG)
  }), <o.Gt value={T}>{(I || n) && <l.hjN className={t} tag={l.RB0.H1} title={n ? (0, i.jsxs)("div", {
        className: E.headerContainer,
        children: [j.intl.string(j.t.z2jK6e), (0, i.jsx)(b.Z, {})]
      }) : null}>{I && (0, i.jsxs)("form", {
        onSubmit: e => e.preventDefault(),
        children: [(0, i.jsx)(x.Z, {}), (0, i.jsx)(_.Z, {})]
      })}</l.hjN>}{I && <l.$i$ />}{<l.hjN className={n || I ? O.marginTop20 : t}>{<l.j7V hideBorder={true} className={C.formItem} value={v} note={j.intl.string(j.t["wW9/zc"])} onChange={e => f.yg({
          allowVoiceRecording: e
        })}>{j.intl.string(j.t.AGDDkJ)}</l.j7V>}{S && y && <l.j7V hideBorder={true} className={C.formItem} value={N} note={j.intl.string(j.t["0vjy8P"])} onChange={e => f.yl({
          enabled: e,
          trackAnalytics: true
        })}>{j.intl.string(j.t.NWw7kZ)}</l.j7V>}</l.hjN>}</o.Gt>
}