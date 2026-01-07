/** Chunk was on web.js **/
/** chunk id: 865033, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => u
});
var Chunk570140 = require("./570140.js"),
  Chunk317770 = require("./317770.js"),
  Chunk358085 = require("./358085.js"),
  Chunk374023 = require("./374023.js"),
  Chunk761274 = require("./761274.js"),
  Chunk981631 = require("./981631.js");
class c extends Chunk317770.Z {
  isEnabled() {
    return (0, a.isDesktop)() && (0, a.isMac)() && !o.s.isDiscordTestSet()
  }
  _initialize() {
    this.isEnabled() && r.Z.subscribe("AUDIO_SET_MODE", this.handleAudioSetMode)
  }
  _terminate() {
    this.isEnabled() && r.Z.unsubscribe("AUDIO_SET_MODE", this.handleAudioSetMode)
  }
  handleAudioSetMode(e) {
    let {
      mode: t
    } = e;
    t === l.pM4.PUSH_TO_TALK && n(751571).Z.requestPermission(s.Eu.INPUT_MONITORING)
  }
}
let u = new c