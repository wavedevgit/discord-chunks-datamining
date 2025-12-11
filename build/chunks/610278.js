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
  let e = Chunk591472.Z.getConnectedFrame();
  if (null == module) {
    let e = p;
    null != module && Chunk366050.Z.isOpen(module) && (Chunk570140.Z.wait(() => Chunk519938.xv(module)), p = null);
    return
  }
  var t = f(module);
  if (Chunk366050.Z.isOpen(exports)) returnfalse;
  if (null != p) {
    let e = p;
    Chunk570140.Z.wait(() => Chunk519938.xv(module))
  }
  return Chunk570140.Z.wait(() => Chunk519938.bA(exports, Chunk981631.NYg.FRAME, {})), void(p = exports)
}

function h() {
  if ((0, Chunk958185.Z)({
      LayerStore: Chunk819640.Z,
      PopoutWindowStore: Chunk928518.Z
    })) {
    let e = p;
    null != module && Chunk366050.Z.isOpen(module) && Chunk570140.Z.wait(() => Chunk519938.Cp(module));
    return
  }
  let e = p;
  null != module && Chunk366050.Z.isOpen(module) && Chunk570140.Z.wait(() => Chunk519938.$Z(module))
}
class m extends Chunk317770.Z {
  _initialize() {
    Chunk591472.Z.addChangeListener(g), Chunk819640.Z.addChangeListener(h)
  }
  _terminate() {
    Chunk591472.Z.removeChangeListener(g), Chunk819640.Z.removeChangeListener(h)
  }
}
let b = new m