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
  Chunk197571 = require("./197571.js");

function _() {
  let {
    analyticsLocations: e
  } = (0, Chunk906732.ZP)(), t = (0, Chunk442837.e7)([Chunk131951.Z], () => Chunk131951.Z.getActiveInputProfile()), {
    enabledInputProfiles: n
  } = (0, Chunk846071.G)({
    location: "UserSettingsInputProfile"
  }), _ = Chunk473749.useCallback(t => {
    let {
      value: n
    } = t;
    s.Z.setActiveInputProfile(n, {
      analyticsLocations: e
    })
  }, [module]), m = [{
    value: Chunk345655._.VOICE_ISOLATION,
    name: Chunk388032.intl.string(Chunk388032.t.cjPbpT),
    desc: Chunk388032.intl.string(Chunk388032.t.CzhvnE)
  }, {
    value: Chunk345655._.STUDIO,
    name: Chunk388032.intl.string(Chunk388032.t.VZPR0R),
    desc: Chunk388032.intl.string(Chunk388032.t.ZaJksS)
  }, {
    value: Chunk345655._.CUSTOM,
    name: Chunk388032.intl.string(Chunk388032.t["N/PQjv"]),
    desc: Chunk388032.intl.string(Chunk388032.t.SnBmuY)
  }].filter(e => {
    let {
      value: t
    } = e;
    return n.includes(t)
  });
  return (0, Chunk54381.jsx)("div", {
    className: Chunk197571.marginBottom20,
    children: (0, Chunk54381.jsx)(Chunk481060.FXm, {
      label: Chunk388032.intl.string(Chunk388032.t.LM3U3k),
      onChange: e => _({
        value: e
      }),
      options: m,
      value: null != exports ? exports : Chunk345655._.CUSTOM
    })
  })
}