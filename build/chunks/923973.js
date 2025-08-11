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
  } = (0, Chunk442837.cj)([Chunk131951.Z], () => {
    var e, t;
    let n = null == (t = null == (e = i()(Chunk131951.Z.getVideoDevices()).values().first()) ? true : module.disabled) || exports;
    return {
      enabled: Chunk131951.Z.isVideoEnabled(),
      cameraUnavailable: require || !Chunk131951.Z.supports(Chunk65154.AN.VIDEO)
    }
  });
  return {
    enabled: module,
    cameraUnavailable: exports
  }
}