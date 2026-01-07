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

function y() {
  var e;
  let t = r;
  if (null == t || !m.Z.isOpen(t)) returnfalse;
  i.Z.wait(() => l.xv(t)), null == (e = h.Z.getRTCConnection()) || e.setPipOpen(false), r = null
}

function I() {
  var e;
  let t = h.Z.getChannelId(),
    n = r === t;
  if (function() {
      let e = h.Z.getChannelId(),
        t = b.Z.getChannelId();
      if (!g.Z.supports(v.AN.VIDEO) || u.Z.getWindowOpen(O.KJ3.CHANNEL_CALL_POPOUT)) returntrue;
      let n = null != e && d.Z.getAllActiveStreams().some(t => !s.Z.isParticipantPoppedOut(e, (0, c.V9)(t)));
      if (!(null != e && Object.values(E.Z.getVideoVoiceStatesForChannel(e)).some(t => {
          let {
            userId: n
          } = t;
          return !g.Z.isLocalVideoDisabled(n) && !s.Z.isParticipantPoppedOut(e, n)
        }) || n)) returntrue;
      let r = f.Z.hasLayers();
      return !(r && f.Z.getLayers().includes(O.S9g.RTC_DEBUG)) && (!!r || e === t)
    }()) return y();
  if (n || y(), null == t) returnfalse;
  let a = p.Z.getChannel(t);
  return !(null == a || m.Z.isOpen(t)) && (i.Z.wait(() => l.bA(a.id, O.NYg.VIDEO, {
    channel: a
  })), null == (e = h.Z.getRTCConnection()) || e.setPipOpen(true), void(r = t))
}
class C extends Chunk317770.Z {
  _initialize() {
    b.Z.addChangeListener(I), _.Z.addChangeListener(I), h.Z.addChangeListener(I), E.Z.addChangeListener(I), f.Z.addChangeListener(I), d.Z.addChangeListener(I), u.Z.addChangeListener(I), g.Z.addChangeListener(I), o.ZP.addChangeListener(I), s.Z.addChangeListener(I)
  }
  _terminate() {
    b.Z.removeChangeListener(I), _.Z.removeChangeListener(I), h.Z.removeChangeListener(I), E.Z.removeChangeListener(I), f.Z.removeChangeListener(I), d.Z.removeChangeListener(I), u.Z.removeChangeListener(I), g.Z.removeChangeListener(I), o.ZP.removeChangeListener(I), s.Z.removeChangeListener(I)
  }
}
let S = new C