/** Chunk was on 21738 **/
/** chunk id: 986880, original params: e,t,n (module,exports,require) **/
let r;
require.d(exports, {
  Ay: () => I
});
var Chunk73153 = require("./73153.js"),
  Chunk31728 = require("./31728.js"),
  Chunk272355 = require("./272355.js"),
  Chunk87001 = require("./87001.js"),
  Chunk734057 = require("./734057.js"),
  Chunk186111 = require("./186111.js"),
  Chunk334463 = require("./334463.js"),
  Chunk383501 = require("./383501.js"),
  Chunk309010 = require("./309010.js"),
  Chunk967198 = require("./967198.js"),
  Chunk977997 = require("./977997.js"),
  Chunk998740 = require("./998740.js"),
  Chunk652215 = require("./652215.js");

function m(e) {
  return "haven:".concat(e)
}

function b() {
  let e = r;
  if (null == e) returnfalse;
  let t = m(e);
  if (!u.A.isOpen(t)) returnfalse;
  let n = u.A.pipHavenWindow;
  if (null == n || n.id !== t) return r = null, false;
  i.h.wait(() => l.VN(t)), r = null
}

function _() {
  return c.A.hasLayers()
}

function E() {
  let e, t, n = d.A.getChannelId(),
    a = null != n ? o.A.getChannel(n) : null;
  if (e = d.A.getChannelId(), t = p.A.getChannelId(), null == e || !A.A.isUserConnected(e) || e === t || s.A.getWindowOpen(g.MLl.CHANNEL_CALL_POPOUT) || 0) return b();
  if (null != a && A.A.isUserConnected(a.id)) {
    if (r !== a.id) {
      let e = m(a.id);
      if (u.A.isOpen(e)) returnfalse;
      if (null != r) {
        let e = r;
        i.h.wait(() => l.VN(e))
      }
      return i.h.wait(() => {
        l.ho(e, g.o1q.HAVEN, {
          channel: a
        }), _() && l.jD(e)
      }), r = a.id, true
    }
    returnfalse
  }
  return b()
}

function O() {
  if (_()) {
    let e = r;
    if (null == e) return;
    let t = m(e);
    u.A.isOpen(t) && i.h.wait(() => l.jD(t));
    return
  }
  let e = r;
  if (null == e) return;
  let t = m(e);
  u.A.isOpen(t) && i.h.wait(() => l.WU(t))
}
class y extends Chunk272355.A {
  _initialize() {
    p.A.addChangeListener(E), f.A.addChangeListener(E), d.A.addChangeListener(E), h.A.addChangeListener(E), c.A.addChangeListener(O), A.A.addChangeListener(E), s.A.addChangeListener(E)
  }
  _terminate() {
    p.A.removeChangeListener(E), f.A.removeChangeListener(E), d.A.removeChangeListener(E), h.A.removeChangeListener(E), c.A.removeChangeListener(O), A.A.removeChangeListener(E), s.A.removeChangeListener(E)
  }
}
let I = new y