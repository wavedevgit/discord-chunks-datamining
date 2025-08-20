/** Chunk was on web.js **/
/** chunk id: 58765, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => a
});
var Chunk111672 = require("./111672.js"),
  Chunk358085 = require("./358085.js");

function a() {
  let {
    sidechainAvailable: e
  } = Chunk111672.Z.useExperiment({
    location: "UserSettingsVoiceProcessing"
  });
  return module && !(0, Chunk358085.isWeb)()
}