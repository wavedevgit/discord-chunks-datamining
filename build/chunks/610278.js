/** Chunk was on 1272 **/
/** chunk id: 610278, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  ZP: () => b,
  ro: () => f
});
var Chunk570140 = require("./570140.js"),
  Chunk519938 = require("./519938.js"),
  Chunk317770 = require("./317770.js"),
  Chunk958185 = require("./958185.js"),
  Chunk928518 = require("./928518.js"),
  Chunk819640 = require("./819640.js"),
  Chunk366050 = require("./366050.js"),
  Chunk591472 = require("./591472.js"),
  Chunk981631 = require("./981631.js");
let p = null;

function f(e) {
  return "framepip:".concat(e.applicationId)
}

function g() {
  let e = u.Z.getConnectedFrame();
  if (null == e) {
    let e = p;
    null != e && c.Z.isOpen(e) && (r.Z.wait(() => i.xv(e)), p = null);
    return
  }
  var t = f(e);
  if (c.Z.isOpen(t)) returnfalse;
  if (null != p) {
    let e = p;
    r.Z.wait(() => i.xv(e))
  }
  return r.Z.wait(() => i.bA(t, d.NYg.FRAME, {})), void(p = t)
}

function m() {
  if ((0, a.Z)({
      LayerStore: s.Z,
      PopoutWindowStore: o.Z
    })) {
    let e = p;
    null != e && c.Z.isOpen(e) && r.Z.wait(() => i.Cp(e));
    return
  }
  let e = p;
  null != e && c.Z.isOpen(e) && r.Z.wait(() => i.$Z(e))
}
class h extends Chunk317770.Z {
  _initialize() {
    u.Z.addChangeListener(g), s.Z.addChangeListener(m)
  }
  _terminate() {
    u.Z.removeChangeListener(g), s.Z.removeChangeListener(m)
  }
}
let b = new h