/** Chunk was on web.js **/
/** chunk id: 14516, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => l
}), require("./388685.js");
var Chunk147913 = require("./147913.js"),
  Chunk19780 = require("./19780.js"),
  Chunk358221 = require("./358221.js");

function o(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class s extends Chunk147913.Z {
  handleFocusParticipant() {
    let e = i.Z.getChannelId();
    if (null != e) {
      var t, n;
      let r = a.Z.getSelectedParticipantId(e),
        o = a.Z.getVideoParticipants(e);
      null == (n = i.Z.getRTCConnection()) || n.setSelectedParticipant(null == (t = o.find(e => e.id === r && !e.localVideoDisabled)) ? true : t.id)
    }
  }
  constructor(...e) {
    super(...e), o(this, "stores", new Map().set(a.Z, this.handleFocusParticipant))
  }
}
let l = new s