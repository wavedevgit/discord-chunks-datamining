/** Chunk was on 1272 **/
/** chunk id: 230623, original params: e,t,n (module,exports,require) **/
let r;
require.d(exports, {
  ZP: () => y
});
var Chunk570140 = require("./570140.js"),
  Chunk519938 = require("./519938.js"),
  Chunk317770 = require("./317770.js"),
  Chunk522474 = require("./522474.js"),
  Chunk592125 = require("./592125.js"),
  Chunk819640 = require("./819640.js"),
  Chunk366050 = require("./366050.js"),
  Chunk19780 = require("./19780.js"),
  Chunk944486 = require("./944486.js"),
  Chunk914010 = require("./914010.js"),
  Chunk979651 = require("./979651.js"),
  Chunk805422 = require("./805422.js"),
  Chunk981631 = require("./981631.js");

function b(e) {
  return "haven:".concat(e)
}

function E() {
  let e = r;
  if (null == e) returnfalse;
  let t = b(e);
  if (!u.Z.isOpen(t)) returnfalse;
  let n = u.Z.pipHavenWindow;
  if (null == n || n.id !== t) return r = null, false;
  i.Z.wait(() => l.xv(t)), r = null
}

function _() {
  return c.Z.hasLayers()
}

function O() {
  let e = d.Z.getChannelId(),
    t = null != e ? s.Z.getChannel(e) : null;
  if (function() {
      let e = d.Z.getChannelId(),
        t = p.Z.getChannelId();
      return !!(null == e || !h.Z.isUserConnected(e) || e === t || o.Z.getWindowOpen(m.KJ3.CHANNEL_CALL_POPOUT))
    }()) return E();
  if (null != t && h.Z.isUserConnected(t.id)) {
    if (r !== t.id) {
      let e = b(t.id);
      if (u.Z.isOpen(e)) returnfalse;
      if (null != r) {
        let e = r;
        i.Z.wait(() => l.xv(e))
      }
      return i.Z.wait(() => {
        l.bA(e, m.NYg.HAVEN, {
          channel: t
        }), _() && l.Cp(e)
      }), r = t.id, true
    }
    returnfalse
  }
  return E()
}

function I() {
  if (_()) {
    let e = r;
    if (null == e) return;
    let t = b(e);
    u.Z.isOpen(t) && i.Z.wait(() => l.Cp(t));
    return
  }
  let e = r;
  if (null == e) return;
  let t = b(e);
  u.Z.isOpen(t) && i.Z.wait(() => l.$Z(t))
}
class v extends Chunk317770.Z {
  _initialize() {
    p.Z.addChangeListener(O), f.Z.addChangeListener(O), d.Z.addChangeListener(O), g.Z.addChangeListener(O), c.Z.addChangeListener(I), h.Z.addChangeListener(O), o.Z.addChangeListener(O)
  }
  _terminate() {
    p.Z.removeChangeListener(O), f.Z.removeChangeListener(O), d.Z.removeChangeListener(O), g.Z.removeChangeListener(O), c.Z.removeChangeListener(I), h.Z.removeChangeListener(O), o.Z.removeChangeListener(O)
  }
}
let y = new v