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
    i.Z.wait(() => a.xv(e))
  }
  i.Z.wait(() => a.bA(t, y.NYg.ACTIVITY, {
    channel: e
  })), r = t
}

function v() {
  let e = r;
  null != e && u.Z.isOpen(e) && (i.Z.wait(() => a.xv(e)), r = null)
}

function S(e) {
  let t = null != e ? e : r;
  null != t && u.Z.isOpen(t) && i.Z.wait(() => a.Cp(t))
}

function I(e) {
  let t = null != e ? e : r;
  null != t && u.Z.isOpen(t) && i.Z.wait(() => a.$Z(t))
}

function T() {
  let e = h.ZP.getConnectedActivityLocation(),
    t = null != e ? h.ZP.getSelfEmbeddedActivityForLocation(e) : null,
    n = (0, g.p)(e),
    r = l.Z.getChannel(n);
  return null == t || null == r ? v() : O(r, (0, E.Z)(t.location.id, t.applicationId))
}

function C() {
  return (0, b.Z)({
    LayerStore: c.Z,
    PopoutWindowStore: s.Z
  }) ? S() : I()
}
class A extends Chunk317770.Z {
  _initialize() {
    f.Z.addChangeListener(T), p.Z.addChangeListener(T), d.Z.addChangeListener(T), _.Z.addChangeListener(T), s.Z.addChangeListener(T), h.ZP.addChangeListener(T), c.Z.addChangeListener(C)
  }
  _terminate() {
    f.Z.removeChangeListener(T), p.Z.removeChangeListener(T), d.Z.removeChangeListener(T), _.Z.removeChangeListener(T), s.Z.removeChangeListener(T), h.ZP.removeChangeListener(T), c.Z.removeChangeListener(C)
  }
}
let N = new A