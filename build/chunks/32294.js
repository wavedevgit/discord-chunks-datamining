/** Chunk was on 21738 **/
/** chunk id: 32294, original params: e,t,n (module,exports,require) **/
let r;
require.d(exports, {
  A: () => S
});
var Chunk73153 = require("./73153.js"),
  Chunk31728 = require("./31728.js"),
  Chunk272355 = require("./272355.js"),
  Chunk933958 = require("./933958.js"),
  Chunk313961 = require("./313961.js"),
  Chunk652896 = require("./652896.js"),
  Chunk869146 = require("./869146.js"),
  Chunk616356 = require("./616356.js"),
  Chunk734057 = require("./734057.js"),
  Chunk186111 = require("./186111.js"),
  Chunk430452 = require("./430452.js"),
  Chunk334463 = require("./334463.js"),
  Chunk383501 = require("./383501.js"),
  Chunk309010 = require("./309010.js"),
  Chunk967198 = require("./967198.js"),
  Chunk977997 = require("./977997.js"),
  Chunk652215 = require("./652215.js"),
  Chunk731854 = require("./731854.js");

function y() {
  var e;
  let t = r;
  if (null == t || !A.A.isOpen(t)) returnfalse;
  i.h.wait(() => l.VN(t)), null == (e = g.A.getRTCConnection()) || e.setPipOpen(false), r = null
}

function I() {
  var e;
  let t = g.A.getChannelId(),
    n = r === t;
  if (function() {
      let e = g.A.getChannelId(),
        t = m.A.getChannelId();
      if (!h.A.supports(O.O5.VIDEO) || u.A.getWindowOpen(E.MLl.CHANNEL_CALL_POPOUT)) returntrue;
      let n = null != e && d.A.getAllActiveStreams().some(t => !o.A.isParticipantPoppedOut(e, (0, c._z)(t)));
      if (!(null != e && Object.values(_.A.getVideoVoiceStatesForChannel(e)).some(t => {
          let {
            userId: n
          } = t;
          return !h.A.isLocalVideoDisabled(n) && !o.A.isParticipantPoppedOut(e, n)
        }) || n)) returntrue;
      let r = f.A.hasLayers();
      return !(r && f.A.getLayers().includes(E.zgK.RTC_DEBUG)) && (!!r || e === t)
    }()) return y();
  if (n || y(), null == t) returnfalse;
  let a = p.A.getChannel(t);
  return !(null == a || A.A.isOpen(t)) && (i.h.wait(() => l.ho(a.id, E.o1q.VIDEO, {
    channel: a
  })), null == (e = g.A.getRTCConnection()) || e.setPipOpen(true), void(r = t))
}
class v extends Chunk272355.A {
  _initialize() {
    m.A.addChangeListener(I), b.A.addChangeListener(I), g.A.addChangeListener(I), _.A.addChangeListener(I), f.A.addChangeListener(I), d.A.addChangeListener(I), u.A.addChangeListener(I), h.A.addChangeListener(I), s.Ay.addChangeListener(I), o.A.addChangeListener(I)
  }
  _terminate() {
    m.A.removeChangeListener(I), b.A.removeChangeListener(I), g.A.removeChangeListener(I), _.A.removeChangeListener(I), f.A.removeChangeListener(I), d.A.removeChangeListener(I), u.A.removeChangeListener(I), h.A.removeChangeListener(I), s.Ay.removeChangeListener(I), o.A.removeChangeListener(I)
  }
}
let S = new v