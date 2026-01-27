/** Chunk was on web.js **/
/** chunk id: 315206, original params: e,t,n (module,exports,re quire) **/
"use strict";
let r;
require.d(exports, {
  Ay: () => N,
  bK: () => A,
  cK: () => I
});
var Chunk73153 = require("./73153.js"),
  Chunk31728 = require("./31728.js"),
  Chunk272355 = require("./272355.js"),
  Chunk869146 = require("./869146.js"),
  Chunk734057 = require("./734057.js"),
  Chunk186111 = require("./186111.js"),
  Chunk334463 = require("./334463.js"),
  Chunk383501 = require("./383501.js"),
  Chunk309010 = require("./309010.js"),
  Chunk967198 = require("./967198.js"),
  Chunk977997 = require("./977997.js"),
  Chunk646865 = require("./646865.js"),
  Chunk933958 = require("./933958.js"),
  Chunk969151 = require("./969151.js"),
  Chunk594007 = require("./594007.js"),
  Chunk227042 = require("./227042.js"),
  Chunk652215 = require("./652215.js");

function O(e, t) {
  if ((0, h.f)() || u.A.isOpen(t)) returnfalse;
  if (null != r) {
    let e = r;
    i.h.wait(() => a.VN(e))
  }
  i.h.wait(() => a.ho(t, b.o1q.ACTIVITY, {
    channel: e
  })), r = t
}

function v() {
  let e = r;
  null != e && u.A.isOpen(e) && (i.h.wait(() => a.VN(e)), r = null)
}

function A(e) {
  let t = null != e ? e : r;
  null != t && u.A.isOpen(t) && i.h.wait(() => a.jD(t))
}

function I(e) {
  let t = null != e ? e : r;
  null != t && u.A.isOpen(t) && i.h.wait(() => a.WU(t))
}

function S() {
  let e = m.Ay.getConnectedActivityLocation(),
    t = null != e ? m.Ay.getSelfEmbeddedActivityForLocation(e) : null,
    n = (0, g.H)(e),
    r = l.A.getChannel(n);
  return null == t || null == r ? v() : O(r, (0, E.A)(t.location.id, t.applicationId))
}

function T() {
  return (0, y.A)({
    LayerStore: c.A,
    PopoutWindowStore: s.A
  }) ? A() : I()
}
class C extends Chunk272355.A {
  _initialize() {
    f.A.addChangeListener(S), p.A.addChangeListener(S), d.A.addChangeListener(S), _.A.addChangeListener(S), s.A.addChangeListener(S), m.Ay.addChangeListener(S), c.A.addChangeListener(T)
  }
  _terminate() {
    f.A.removeChangeListener(S), p.A.removeChangeListener(S), d.A.removeChangeListener(S), _.A.removeChangeListener(S), s.A.removeChangeListener(S), m.Ay.removeChangeListener(S), c.A.removeChangeListener(T)
  }
}
let N = new C