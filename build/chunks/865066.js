/** Chunk was on web.js **/
/** chunk id: 865066, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  nZ: () => a,
  sU: () => o
});
var Chunk481060 = require("./481060.js"),
  Chunk765504 = require("./765504.js");

function a() {
  return Chunk765504.Z.getConfig({
    location: "testing"
  }).force
}

function o() {
  (0, Chunk481060.showToast)((0, Chunk481060.createToast)("We need to actually hook it up lol.", Chunk481060.ToastType.SUCCESS))
}