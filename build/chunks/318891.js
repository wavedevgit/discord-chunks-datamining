/** Chunk was on web.js **/
/** chunk id: 318891, original params: e,t,n (module,exports,re quire) **/
"use strict";
let r;
require.d(exports, {
  RI: () => S,
  ZP: () => N,
  jy: () => I
});
var Chunk570140 = require("./570140.js"),
  Chunk519938 = require("./519938.js"),
  Chunk317770 = require("./317770.js"),
  Chunk928518 = require("./928518.js"),
  Chunk592125 = require("./592125.js"),
  Chunk819640 = require("./819640.js"),
  Chunk366050 = require("./366050.js"),
  Chunk19780 = require("./19780.js"),
  Chunk944486 = require("./944486.js"),
  Chunk914010 = require("./914010.js"),
  Chunk979651 = require("./979651.js"),
  Chunk636449 = require("./636449.js"),
  Chunk317381 = require("./317381.js"),
  Chunk16609 = require("./16609.js"),
  Chunk719296 = require("./719296.js"),
  Chunk958185 = require("./958185.js"),
  Chunk981631 = require("./981631.js");

function O(e, t) {
  if ((0, m.R)() || u.Z.isOpen(t)) returnfalse;
  if (null != r) {
    let e = r;
    i.Z.wait(() => o.xv(e))
  }
  i.Z.wait(() => o.bA(t, y.NYg.ACTIVITY, {
    channel: e
  })), r = t
}

function v() {
  let e = r;
  null != module && Chunk366050.Z.isOpen(module) && (Chunk570140.Z.wait(() => Chunk519938.xv(module)), r = null)
}

function S(e) {
  let t = null != e ? e : r;
  null != t && u.Z.isOpen(t) && i.Z.wait(() => o.Cp(t))
}

function I(e) {
  let t = null != e ? e : r;
  null != t && u.Z.isOpen(t) && i.Z.wait(() => o.$Z(t))
}

function T() {
  let e = Chunk317381.ZP.getConnectedActivityLocation(),
    t = null != module ? Chunk317381.ZP.getSelfEmbeddedActivityForLocation(module) : null,
    n = (0, Chunk16609.p)(module),
    r = Chunk592125.Z.getChannel(require);
  return null == exports || null == r ? v() : O(r, (0, Chunk719296.Z)(exports.location.id, exports.applicationId))
}

function C() {
  return (0, Chunk958185.Z)({
    LayerStore: Chunk819640.Z,
    PopoutWindowStore: Chunk928518.Z
  }) ? S() : I()
}
class A extends Chunk317770.Z {
  _initialize() {
    Chunk944486.Z.addChangeListener(T), Chunk914010.Z.addChangeListener(T), Chunk19780.Z.addChangeListener(T), Chunk979651.Z.addChangeListener(T), Chunk928518.Z.addChangeListener(T), Chunk317381.ZP.addChangeListener(T), Chunk819640.Z.addChangeListener(C)
  }
  _terminate() {
    Chunk944486.Z.removeChangeListener(T), Chunk914010.Z.removeChangeListener(T), Chunk19780.Z.removeChangeListener(T), Chunk979651.Z.removeChangeListener(T), Chunk928518.Z.removeChangeListener(T), Chunk317381.ZP.removeChangeListener(T), Chunk819640.Z.removeChangeListener(C)
  }
}
let N = new A