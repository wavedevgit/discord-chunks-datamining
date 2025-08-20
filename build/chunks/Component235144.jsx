/** Chunk was on web.js **/
/** chunk id: 235144, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => p
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk846027 = require("./846027.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk131951 = require("./131951.js"),
  Chunk321614 = require("./321614.js"),
  Chunk345655 = require("./345655.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk197571 = require("./197571.js");

function p() {
  let {
    analyticsLocations: e
  } = (0, Chunk906732.ZP)(), t = (0, Chunk442837.e7)([Chunk131951.Z], () => Chunk131951.Z.getActiveInputProfile()), {
    enabledInputProfiles: n
  } = (0, Chunk321614.c)({
    location: "UserSettingsInputProfile",
    autoTrackExposure: false
  }), p = Chunk647438.useCallback(t => {
    let {
      value: n
    } = t;
    s.Z.setActiveInputProfile(n, {
      analyticsLocations: e
    })
  }, [module]), h = [{
    value: Chunk345655._.VOICE_ISOLATION,
    name: Chunk388032.intl.string(Chunk388032.t.cjPbpa),
    desc: Chunk388032.intl.string(Chunk388032.t.CzhvnJ)
  }, {
    value: Chunk345655._.STUDIO,
    name: Chunk388032.intl.string(Chunk388032.t.VZPR0d),
    desc: Chunk388032.intl.string(Chunk388032.t.ZaJksb)
  }, {
    value: Chunk345655._.CUSTOM,
    name: Chunk388032.intl.string(Chunk388032.t["N/PQjo"]),
    desc: Chunk388032.intl.string(Chunk388032.t.SnBmub)
  }].filter(e => {
    let {
      value: t
    } = e;
    return n.includes(t)
  });
  return (0, Chunk951288.jsx)(Chunk481060.xJW, {
    title: Chunk388032.intl.string(Chunk388032.t.LM3U3t),
    className: Chunk197571.marginBottom20,
    children: (0, Chunk951288.jsx)(Chunk481060.FXm, {
      onChange: p,
      options: h,
      value: null != exports ? exports : Chunk345655._.CUSTOM
    })
  })
}