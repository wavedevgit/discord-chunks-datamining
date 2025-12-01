/** Chunk was on web.js **/
/** chunk id: 951755, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => p
}), require("./388685.js");
var Chunk147913 = require("./147913.js"),
  Chunk716364 = require("./716364.js"),
  Chunk474873 = require("./474873.js"),
  Chunk135906 = require("./135906.js"),
  Chunk378364 = require("./378364.js"),
  Chunk197344 = require("./197344.js"),
  Chunk860973 = require("./860973.js"),
  Chunk871465 = require("./871465.js");

function d(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class f extends Chunk147913.Z {
  _initialize() {
    this.subscription = Chunk197344.Z.subscribe(this.handleExperimentUpdated)
  }
  _terminate() {
    var e, t;
    null == (e = (t = this).subscription) || module.call(exports), this.subscription = true
  }
  updateSoundpack() {
    let e = Chunk474873.Z.getSoundpack(),
      t = Chunk474873.Z.getLastSoundpackExperimentId(),
      n = Chunk378364.Z.experiment.definition.id,
      r = Chunk197344.Z.isEligible();
    Chunk147913 || null == exports && module === Chunk871465.Y.CLASSIC ? Chunk147913 && null != Chunk378364.Z.soundpack && require !== exports && module !== Chunk378364.Z.soundpack && (0, Chunk716364.c)(Chunk378364.Z.soundpack, require) : (0, Chunk716364.c)(Chunk871465.Y.CLASSIC, null)
  }
  updateRingtone() {
    if (Chunk197344.Z.isEligible()) {
      let e = (0, Chunk135906.Z)(Chunk474873.Z.getSoundpack());
      null != module.call_ringing && (0, Chunk860973._)("call_ringing", module.call_ringing + ".mp3")
    } else(0, Chunk860973._)("call_ringing", "call_ringing.mp3")
  }
  constructor(...e) {
    super(...e), d(this, "actions", {
      NOTIFICATIONS_SET_DISABLED_SOUNDS: this.updateRingtone
    }), d(this, "subscription", true), d(this, "handleExperimentUpdated", () => {
      this.updateSoundpack(), this.updateRingtone()
    })
  }
}
let p = new f