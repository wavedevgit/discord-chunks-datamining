/** Chunk was on web.js **/
/** chunk id: 923973, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => l
}), require("./388685.js");
var Chunk392711 = require("./392711.js"),
  i = require.n(Chunk392711),
  Chunk442837 = require("./442837.js"),
  Chunk131951 = require("./131951.js"),
  Chunk65154 = require("./65154.js");

function l() {
  let {
    enabled: e,
    cameraUnavailable: t
  } = (0, a.cj)([o.Z], () => {
    var e, t;
    let n = null == (t = null == (e = i()(o.Z.getVideoDevices()).values().first()) ? true : e.disabled) || t;
    return {
      enabled: o.Z.isVideoEnabled(),
      cameraUnavailable: n || !o.Z.supports(s.AN.VIDEO)
    }
  });
  return {
    enabled: e,
    cameraUnavailable: t
  }
}