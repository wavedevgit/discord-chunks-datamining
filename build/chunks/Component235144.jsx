/** Chunk was on web.js **/
/** chunk id: 235144, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => _
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk846027 = require("./846027.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk131951 = require("./131951.js"),
  Chunk846071 = require("./846071.js"),
  Chunk345655 = require("./345655.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk478411 = require("./478411.js");

function _() {
  let {
    analyticsLocations: e
  } = (0, l.ZP)(), t = (0, a.e7)([c.Z], () => c.Z.getActiveInputProfile()), {
    enabledInputProfiles: n
  } = (0, u.G)({
    location: "UserSettingsInputProfile"
  }), _ = i.useCallback(t => {
    let {
      value: n
    } = t;
    s.Z.setActiveInputProfile(n, {
      analyticsLocations: e
    })
  }, [e]), h = [{
    value: d._.VOICE_ISOLATION,
    name: f.intl.string(f.t.cjPbpT),
    desc: f.intl.string(f.t.CzhvnE)
  }, {
    value: d._.STUDIO,
    name: f.intl.string(f.t.VZPR0R),
    desc: f.intl.string(f.t.ZaJksS)
  }, {
    value: d._.CUSTOM,
    name: f.intl.string(f.t["N/PQjv"]),
    desc: f.intl.string(f.t.SnBmuY)
  }].filter(e => {
    let {
      value: t
    } = e;
    return n.includes(t)
  });
  return (0, r.jsx)("div", {
    className: p.marginBottom20,
    children: (0, r.jsx)(o.FXm, {
      label: f.intl.string(f.t.LM3U3k),
      onChange: e => _({
        value: e
      }),
      options: h,
      value: null != t ? t : d._.CUSTOM
    })
  })
}