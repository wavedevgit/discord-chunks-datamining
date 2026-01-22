/** Chunk was on web.js **/
/** chunk id: 151476, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => l
}), require("./896048.js");
var Chunk735438 = require("./735438.js"),
  i = require.n(Chunk735438),
  Chunk311907 = require("./311907.js"),
  Chunk430452 = require("./430452.js"),
  Chunk731854 = require("./731854.js");

function l() {
  let {
    enabled: e,
    cameraUnavailable: t
  } = (0, a.cf)([s.A], () => {
    var e, t;
    let n = null == (e = null == (t = i()(s.A.getVideoDevices()).values().first()) ? true : t.disabled) || e;
    return {
      enabled: s.A.isVideoEnabled(),
      cameraUnavailable: n || !s.A.supports(o.O5.VIDEO)
    }
  });
  return {
    enabled: e,
    cameraUnavailable: t
  }
}