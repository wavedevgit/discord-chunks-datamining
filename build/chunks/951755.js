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
    this.subscription = l.Z.subscribe(this.handleExperimentUpdated)
  }
  _terminate() {
    var e, t;
    null == (e = (t = this).subscription) || e.call(t), this.subscription = true
  }
  updateSoundpack() {
    let e = a.Z.getSoundpack(),
      t = a.Z.getLastSoundpackExperimentId(),
      n = s.Z.experiment.definition.id,
      r = l.Z.isEligible();
    r || null == t && e === u.Y.CLASSIC ? r && null != s.Z.soundpack && n !== t && e !== s.Z.soundpack && (0, i.c)(s.Z.soundpack, n) : (0, i.c)(u.Y.CLASSIC, null)
  }
  updateRingtone() {
    if (l.Z.isEligible()) {
      let e = (0, o.Z)(a.Z.getSoundpack());
      null != e.call_ringing && (0, c._)("call_ringing", e.call_ringing + ".mp3")
    } else(0, c._)("call_ringing", "call_ringing.mp3")
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