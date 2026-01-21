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
  if (null == t || !h.Z.isOpen(t)) returnfalse;
  i.Z.wait(() => l.xv(t)), null == (e = m.Z.getRTCConnection()) || e.setPipOpen(false), r = null
}

function y() {
  var e;
  let t = m.Z.getChannelId(),
    n = r === t;
  if (function() {
      let e = m.Z.getChannelId(),
        t = b.Z.getChannelId();
      if (!g.Z.supports(I.AN.VIDEO) || u.Z.getWindowOpen(O.KJ3.CHANNEL_CALL_POPOUT)) returntrue;
      let n = null != e && d.Z.getAllActiveStreams().some(t => !s.Z.isParticipantPoppedOut(e, (0, c.V9)(t)));
      if (!(null != e && Object.values(_.Z.getVideoVoiceStatesForChannel(e)).some(t => {
          let {
            userId: n
          } = t;
          return !g.Z.isLocalVideoDisabled(n) && !s.Z.isParticipantPoppedOut(e, n)
        }) || n)) returntrue;
      let r = f.Z.hasLayers();
      return !(r && f.Z.getLayers().includes(O.S9g.RTC_DEBUG)) && (!!r || e === t)
    }()) return v();
  if (n || v(), null == t) returnfalse;
  let a = p.Z.getChannel(t);
  return !(null == a || h.Z.isOpen(t)) && (i.Z.wait(() => l.bA(a.id, O.NYg.VIDEO, {
    channel: a
  })), null == (e = m.Z.getRTCConnection()) || e.setPipOpen(true), void(r = t))
}
class C extends Chunk317770.Z {
  _initialize() {
    b.Z.addChangeListener(y), E.Z.addChangeListener(y), m.Z.addChangeListener(y), _.Z.addChangeListener(y), f.Z.addChangeListener(y), d.Z.addChangeListener(y), u.Z.addChangeListener(y), g.Z.addChangeListener(y), o.ZP.addChangeListener(y), s.Z.addChangeListener(y)
  }
  _terminate() {
    b.Z.removeChangeListener(y), E.Z.removeChangeListener(y), m.Z.removeChangeListener(y), _.Z.removeChangeListener(y), f.Z.removeChangeListener(y), d.Z.removeChangeListener(y), u.Z.removeChangeListener(y), g.Z.removeChangeListener(y), o.ZP.removeChangeListener(y), s.Z.removeChangeListener(y)
  }
}
let S = new C