/** Chunk was on 21738 **/
/** chunk id: 293495, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Ay: () => A,
  YY: () => h
});
var Chunk73153 = require("./73153.js"),
  Chunk31728 = require("./31728.js"),
  Chunk272355 = require("./272355.js"),
  Chunk227042 = require("./227042.js"),
  Chunk869146 = require("./869146.js"),
  Chunk186111 = require("./186111.js"),
  Chunk334463 = require("./334463.js"),
  Chunk91242 = require("./91242.js"),
  Chunk652215 = require("./652215.js");
let p = null;

function h(e) {
  return "framepip:".concat(e.applicationId)
}

function g() {
  let e = u.A.getConnectedFrame();
  if (null == e) {
    let e;
    return void(null != (e = p) && c.A.isOpen(e) && (r.h.wait(() => i.VN(e)), p = null))
  }
  var t = h(e);
  if (c.A.isOpen(t)) returnfalse;
  if (null != p) {
    let e = p;
    r.h.wait(() => i.VN(e))
  }
  return r.h.wait(() => i.ho(t, d.o1q.FRAME, {})), void(p = t)
}

function m() {
  let e;
  if ((0, a.A)({
      LayerStore: o.A,
      PopoutWindowStore: s.A
    })) {
    let e;
    return void(null != (e = p) && c.A.isOpen(e) && r.h.wait(() => i.jD(e)))
  }
  null != (e = p) && c.A.isOpen(e) && r.h.wait(() => i.WU(e))
}
class f extends Chunk272355.A {
  _initialize() {
    u.A.addChangeListener(g), o.A.addChangeListener(m)
  }
  _terminate() {
    u.A.removeChangeListener(g), o.A.removeChangeListener(m)
  }
}
let A = new f