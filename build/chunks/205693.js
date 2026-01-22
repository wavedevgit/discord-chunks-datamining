/** Chunk was on web.js **/
/** chunk id: 205693, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Qo: () => s,
  Tr: () => l,
  WI: () => u,
  bg: () => i.b,
  gO: () => o,
  hB: () => d,
  x: () => a.x,
  yq: () => r.y
});
var Chunk904986 = require("./904986.js"),
  Chunk651139 = require("./651139.js"),
  Chunk731854 = require("./731854.js"),
  s = function(e) {
    return e.INPUT_DEVICE = "input_device", e.STREAM = "stream", e
  }({}),
  o = function(e) {
    return e.NONE = "", e.BACKGROUND_BLUR = "background_blur", e.BACKGROUND_REPLACEMENT = "background_replacement", e
  }({}),
  l = function(e) {
    return e.CAMERA_BACKGROUND_PREVIEW = "cameraBackgroundPreview", e.CAMERA_BACKGROUND_LIVE = "cameraBackgroundLive", e
  }({});

function c(e) {
  switch (e) {
    case a.Ku.NATIVE:
      return n(531417).A;
    case a.Ku.WEBRTC:
      return n(93507).A;
    case a.Ku.DUMMY:
    default:
      return n(432351).A
  }
}

function u() {
  var e;
  return null != (e = [a.Ku.NATIVE, a.Ku.WEBRTC].find(e => c(e).supported())) ? e : a.Ku.DUMMY
}

function d(e) {
  return new(c(e))
}