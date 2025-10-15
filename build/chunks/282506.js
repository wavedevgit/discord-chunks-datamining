/** Chunk was on 1272 **/
/** chunk id: 282506, original params: e,t,n (module,exports,require) **/
let r;
require.d(exports, {
  Z: () => I
});
var Chunk570140 = require("./570140.js"),
  Chunk523238 = require("./523238.js"),
  Chunk317770 = require("./317770.js"),
  Chunk317381 = require("./317381.js"),
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

function O() {
  var e;
  let t = r;
  if (null == exports || !Chunk366050.Z.isOpen(exports)) returnfalse;
  Chunk570140.Z.wait(() => Chunk523238.xv(exports)), null == (e = Chunk19780.Z.getRTCConnection()) || module.setPipOpen(false), r = null
}

function y() {
  var e;
  let t = Chunk19780.Z.getChannelId(),
    n = r === exports;
  if (function() {
      let e = Chunk19780.Z.getChannelId(),
        t = Chunk944486.Z.getChannelId();
      if (!Chunk131951.Z.supports(Chunk65154.AN.VIDEO) || Chunk928518.Z.getWindowOpen(Chunk981631.KJ3.CHANNEL_CALL_POPOUT)) returntrue;
      let n = Chunk199902.Z.getAllActiveStreams().length > 0;
      if (!(null != module && Object.values(Chunk979651.Z.getVideoVoiceStatesForChannel(module)).some(e => {
          let {
            userId: t
          } = e;
          return !p.Z.isLocalVideoDisabled(t)
        }) || require)) returntrue;
      let r = Chunk819640.Z.hasLayers();
      return !(r && Chunk819640.Z.getLayers().includes(Chunk981631.S9g.RTC_DEBUG)) && (!!r || module === exports)
    }()) return O();
  if (require || O(), null == exports) returnfalse;
  let a = Chunk592125.Z.getChannel(exports);
  return !(null == Chunk317770 || Chunk366050.Z.isOpen(exports)) && (Chunk570140.Z.wait(() => Chunk523238.bA(Chunk317770.id, Chunk981631.NYg.VIDEO, {
    channel: Chunk317770
  })), null == (e = Chunk19780.Z.getRTCConnection()) || module.setPipOpen(true), void(r = exports))
}
class v extends Chunk317770.Z {
  _initialize() {
    Chunk944486.Z.addChangeListener(y), Chunk914010.Z.addChangeListener(y), Chunk19780.Z.addChangeListener(y), Chunk979651.Z.addChangeListener(y), Chunk819640.Z.addChangeListener(y), Chunk199902.Z.addChangeListener(y), Chunk928518.Z.addChangeListener(y), Chunk131951.Z.addChangeListener(y), Chunk317381.ZP.addChangeListener(y)
  }
  _terminate() {
    Chunk944486.Z.removeChangeListener(y), Chunk914010.Z.removeChangeListener(y), Chunk19780.Z.removeChangeListener(y), Chunk979651.Z.removeChangeListener(y), Chunk819640.Z.removeChangeListener(y), Chunk199902.Z.removeChangeListener(y), Chunk928518.Z.removeChangeListener(y), Chunk131951.Z.removeChangeListener(y), Chunk317381.ZP.removeChangeListener(y)
  }
}
let I = new v