/** Chunk was on 1272 **/
/** chunk id: 282506, original params: e,t,n (module,exports,require) **/
let r;
require.d(exports, {
  Z: () => S
});
var Chunk570140 = require("./570140.js"),
  Chunk519938 = require("./519938.js"),
  Chunk317770 = require("./317770.js"),
  Chunk317381 = require("./317381.js"),
  Chunk358221 = require("./358221.js"),
  Chunk569545 = require("./569545.js"),
  Chunk928518 = require("./928518.js"),
  Chunk199902 = require("./199902.js"),
  Chunk592125 = require("./592125.js"),
  Chunk819640 = require("./819640.js"),
  Chunk131951 = require("./131951.js"),
  Chunk366050 = require("./366050.js"),
  Chunk19780 = require("./19780.js"),
  Chunk944486 = require("./944486.js"),
  Chunk914010 = require("./914010.js"),
  Chunk979651 = require("./979651.js"),
  Chunk981631 = require("./981631.js"),
  Chunk65154 = require("./65154.js");

function v() {
  var e;
  let t = r;
  if (null == exports || !Chunk366050.Z.isOpen(exports)) returnfalse;
  Chunk570140.Z.wait(() => Chunk519938.xv(exports)), null == (e = Chunk19780.Z.getRTCConnection()) || module.setPipOpen(false), r = null
}

function I() {
  var e;
  let t = Chunk19780.Z.getChannelId(),
    n = r === exports;
  if (function() {
      let e = Chunk19780.Z.getChannelId(),
        t = Chunk944486.Z.getChannelId();
      if (!Chunk131951.Z.supports(Chunk65154.AN.VIDEO) || Chunk928518.Z.getWindowOpen(Chunk981631.KJ3.CHANNEL_CALL_POPOUT)) returntrue;
      let n = null != module && Chunk199902.Z.getAllActiveStreams().some(t => !s.Z.isParticipantPoppedOut(e, (0, c.V9)(t)));
      if (!(null != module && Object.values(Chunk979651.Z.getVideoVoiceStatesForChannel(module)).some(t => {
          let {
            userId: n
          } = t;
          return !h.Z.isLocalVideoDisabled(n) && !s.Z.isParticipantPoppedOut(e, n)
        }) || require)) returntrue;
      let r = Chunk819640.Z.hasLayers();
      return !(r && Chunk819640.Z.getLayers().includes(Chunk981631.S9g.RTC_DEBUG)) && (!!r || module === exports)
    }()) return v();
  if (require || v(), null == exports) returnfalse;
  let a = Chunk592125.Z.getChannel(exports);
  return !(null == Chunk317770 || Chunk366050.Z.isOpen(exports)) && (Chunk570140.Z.wait(() => Chunk519938.bA(Chunk317770.id, Chunk981631.NYg.VIDEO, {
    channel: Chunk317770
  })), null == (e = Chunk19780.Z.getRTCConnection()) || module.setPipOpen(true), void(r = exports))
}
class C extends Chunk317770.Z {
  _initialize() {
    Chunk944486.Z.addChangeListener(I), Chunk914010.Z.addChangeListener(I), Chunk19780.Z.addChangeListener(I), Chunk979651.Z.addChangeListener(I), Chunk819640.Z.addChangeListener(I), Chunk199902.Z.addChangeListener(I), Chunk928518.Z.addChangeListener(I), Chunk131951.Z.addChangeListener(I), Chunk317381.ZP.addChangeListener(I), Chunk358221.Z.addChangeListener(I)
  }
  _terminate() {
    Chunk944486.Z.removeChangeListener(I), Chunk914010.Z.removeChangeListener(I), Chunk19780.Z.removeChangeListener(I), Chunk979651.Z.removeChangeListener(I), Chunk819640.Z.removeChangeListener(I), Chunk199902.Z.removeChangeListener(I), Chunk928518.Z.removeChangeListener(I), Chunk131951.Z.removeChangeListener(I), Chunk317381.ZP.removeChangeListener(I), Chunk358221.Z.removeChangeListener(I)
  }
}
let S = new C