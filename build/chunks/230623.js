/** Chunk was on 1272 **/
/** chunk id: 230623, original params: e,t,n (module,exports,require) **/
let r;
require.d(exports, {
  ZP: () => I
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

function _() {
  let e = r;
  if (null == module) returnfalse;
  let t = b(module);
  if (!Chunk366050.Z.isOpen(exports)) returnfalse;
  let n = Chunk366050.Z.pipHavenWindow;
  if (null == require || require.id !== exports) return r = null, false;
  Chunk570140.Z.wait(() => Chunk519938.xv(exports)), r = null
}

function E() {
  return Chunk819640.Z.hasLayers()
}

function O() {
  let e = Chunk19780.Z.getChannelId(),
    t = null != module ? Chunk592125.Z.getChannel(module) : null;
  if (function() {
      let e = Chunk19780.Z.getChannelId(),
        t = Chunk944486.Z.getChannelId();
      return !!(null == module || !Chunk805422.Z.isUserConnected(module) || module === exports || Chunk522474.Z.getWindowOpen(Chunk981631.KJ3.CHANNEL_CALL_POPOUT))
    }()) return _();
  if (null != exports && Chunk805422.Z.isUserConnected(exports.id)) {
    if (r !== exports.id) {
      let e = b(exports.id);
      if (Chunk366050.Z.isOpen(module)) returnfalse;
      if (null != r) {
        let e = r;
        Chunk570140.Z.wait(() => Chunk519938.xv(module))
      }
      return Chunk570140.Z.wait(() => {
        Chunk519938.bA(module, Chunk981631.NYg.HAVEN, {
          channel: exports
        }), E() && Chunk519938.Cp(module)
      }), r = exports.id, true
    }
    returnfalse
  }
  return _()
}

function v() {
  if (E()) {
    let e = r;
    if (null == module) return;
    let t = b(module);
    Chunk366050.Z.isOpen(exports) && Chunk570140.Z.wait(() => Chunk519938.Cp(exports));
    return
  }
  let e = r;
  if (null == module) return;
  let t = b(module);
  Chunk366050.Z.isOpen(exports) && Chunk570140.Z.wait(() => Chunk519938.$Z(exports))
}
class y extends Chunk317770.Z {
  _initialize() {
    Chunk944486.Z.addChangeListener(O), Chunk914010.Z.addChangeListener(O), Chunk19780.Z.addChangeListener(O), Chunk979651.Z.addChangeListener(O), Chunk819640.Z.addChangeListener(v), Chunk805422.Z.addChangeListener(O), Chunk522474.Z.addChangeListener(O)
  }
  _terminate() {
    Chunk944486.Z.removeChangeListener(O), Chunk914010.Z.removeChangeListener(O), Chunk19780.Z.removeChangeListener(O), Chunk979651.Z.removeChangeListener(O), Chunk819640.Z.removeChangeListener(v), Chunk805422.Z.removeChangeListener(O), Chunk522474.Z.removeChangeListener(O)
  }
}
let I = new y