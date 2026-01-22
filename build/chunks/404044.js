/** Chunk was on web.js **/
/** chunk id: 404044, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => u
});
var Chunk73153 = require("./73153.js"),
  Chunk272355 = require("./272355.js"),
  Chunk723702 = require("./723702.js"),
  Chunk536194 = require("./536194.js"),
  Chunk765682 = require("./765682.js"),
  Chunk652215 = require("./652215.js");
class c extends Chunk272355.A {
  isEnabled() {
    return (0, a.isDesktop)() && (0, a.isMac)() && !s.P.isDiscordTestSet()
  }
  _initialize() {
    this.isEnabled() && r.h.subscribe("AUDIO_SET_MODE", this.handleAudioSetMode)
  }
  _terminate() {
    this.isEnabled() && r.h.unsubscribe("AUDIO_SET_MODE", this.handleAudioSetMode)
  }
  handleAudioSetMode(e) {
    let {
      mode: t
    } = e;
    t === l.TBI.PUSH_TO_TALK && n(674966).A.requestPermission(o.iL.INPUT_MONITORING)
  }
}
let u = new c