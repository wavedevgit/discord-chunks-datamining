/** Chunk was on web.js **/
/** chunk id: 585250, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => l
}), require("./896048.js");
var Chunk439372 = require("./439372.js"),
  Chunk383501 = require("./383501.js"),
  Chunk313961 = require("./313961.js");

function s(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class o extends Chunk439372.A {
  handleFocusParticipant() {
    let e = i.A.getChannelId();
    if (null != e) {
      var t, n;
      let r = a.A.getSelectedParticipantId(e),
        s = a.A.getVideoParticipants(e);
      null == (n = i.A.getRTCConnection()) || n.setSelectedParticipant(null == (t = s.find(e => e.id === r && !e.localVideoDisabled)) ? true : t.id)
    }
  }
  constructor(...e) {
    super(...e), s(this, "stores", new Map().set(a.A, this.handleFocusParticipant))
  }
}
let l = new o