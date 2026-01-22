/** Chunk was on web.js **/
/** chunk id: 790599, original params: e,t,n (module,exports,re quire) **/
"use strict";
require("./65821.js");
var Chunk823598 = require("./823598.js"),
  Chunk626584 = require("./626584.js"),
  Chunk723702 = require("./723702.js"),
  Chunk837921 = require("./837921.js");
(0, Chunk823598.WQ)({
  supported() {
    try {
      if (__OVERLAY__);
      else if (a.isPlatformEmbedded) {
        let e = (0, r.lE)();
        if (null == e.VoiceConnection) throw Error("voe function missing");
        returntrue
      }
    } catch (e) {
      new i.A("injectMediaEngine").error("Potentially corrupt installation:", e.message)
    }
    returnfalse
  },
  supportsFeature: e => s.Ay.supportsFeature(e),
  setProcessPriority(e) {
    s.Ay.getDiscordUtils().setProcessPriority(e)
  },
  getVoiceEngine: () => s.Ay.getVoiceEngine(),
  getVoiceFilters: () => s.Ay.getVoiceFilters()
})