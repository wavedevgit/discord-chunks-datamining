/** Chunk was on web.js **/
/** chunk id: 321256, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => p
}), require("./896048.js");
var Chunk439372 = require("./439372.js"),
  Chunk965957 = require("./965957.js"),
  Chunk312671 = require("./312671.js"),
  Chunk458640 = require("./458640.js"),
  Chunk223567 = require("./223567.js"),
  Chunk552122 = require("./552122.js"),
  Chunk768612 = require("./768612.js"),
  Chunk235079 = require("./235079.js");

function d(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class f extends Chunk439372.A {
  _initialize() {
    this.subscription = l.A.subscribe(this.handleExperimentUpdated)
  }
  _terminate() {
    var e, t;
    null == (e = (t = this).subscription) || e.call(t), this.subscription = true
  }
  updateSoundpack() {
    let e = a.A.getSoundpack(),
      t = a.A.getLastSoundpackExperimentId(),
      n = o.A.experiment.definition.id,
      r = l.A.isEligible();
    r || null == t && e === u.i.CLASSIC ? r && null != o.A.soundpack && n !== t && e !== o.A.soundpack && (0, i.p)(o.A.soundpack, n) : (0, i.p)(u.i.CLASSIC, null)
  }
  updateRingtone() {
    if (l.A.isEligible()) {
      let e = (0, s.A)(a.A.getSoundpack());
      null != e.call_ringing && (0, c.n)("call_ringing", e.call_ringing + ".mp3")
    } else(0, c.n)("call_ringing", "call_ringing.mp3")
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