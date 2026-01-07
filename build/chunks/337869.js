/** Chunk was on web.js **/
/** chunk id: 337869, original params: e,t,n (module,exports,re quire) **/
"use strict";
require("./415506.js");
var Chunk992774 = require("./992774.js"),
  Chunk710845 = require("./710845.js"),
  Chunk358085 = require("./358085.js"),
  Chunk998502 = require("./998502.js");
(0, Chunk992774.f3)({
  supported() {
    try {
      if (__OVERLAY__);
      else if (a.isPlatformEmbedded) {
        let e = (0, r.zS)();
        if (null == e.VoiceConnection) throw Error("voe function missing");
        returntrue
      }
    } catch (e) {
      new i.Z("injectMediaEngine").error("Potentially corrupt installation:", e.message)
    }
    returnfalse
  },
  supportsFeature: e => o.ZP.supportsFeature(e),
  setProcessPriority(e) {
    o.ZP.getDiscordUtils().setProcessPriority(e)
  },
  getVoiceEngine: () => o.ZP.getVoiceEngine(),
  getVoiceFilters: () => o.ZP.getVoiceFilters()
})