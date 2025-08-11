/** Chunk was on web.js **/
/** chunk id: 46973, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Mt: () => d,
  Sh: () => Chunk839548.S,
  TO: () => l,
  W$: () => a,
  Yn: () => Chunk65154.Yn,
  aB: () => Chunk946695.a,
  jj: () => u,
  zZ: () => s
});
var Chunk839548 = require("./839548.js"),
  Chunk946695 = require("./946695.js"),
  Chunk65154 = require("./65154.js"),
  a = function(e) {
    return e.INPUT_DEVICE = "input_device", e.STREAM = "stream", e
  }({}),
  s = function(e) {
    return e.NONE = "", e.BACKGROUND_BLUR = "background_blur", e.BACKGROUND_REPLACEMENT = "background_replacement", e
  }({}),
  l = function(e) {
    return e.CAMERA_BACKGROUND_PREVIEW = "cameraBackgroundPreview", e.CAMERA_BACKGROUND_LIVE = "cameraBackgroundLive", e
  }({});

function c(e) {
  switch (e) {
    case o.AS.NATIVE:
      return n(743426).Z;
    case o.AS.WEBRTC:
      return n(959856).Z;
    case o.AS.DUMMY:
    default:
      return n(135670).Z
  }
}

function u() {
  var e;
  return null != (e = [Chunk65154.AS.NATIVE, Chunk65154.AS.WEBRTC].find(e => c(e).supported())) ? module : Chunk65154.AS.DUMMY
}

function d(e) {
  return new(c(e))
}