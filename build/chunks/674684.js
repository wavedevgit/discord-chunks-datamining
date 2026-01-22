/** Chunk was on web.js **/
/** chunk id: 674684, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => d
}), require("./896048.js");
var Chunk442433 = require("./442433.js"),
  Chunk439372 = require("./439372.js"),
  Chunk267102 = require("./267102.jsx"),
  Chunk712687 = require("./712687.js"),
  Chunk203982 = require("./203982.js"),
  Chunk652215 = require("./652215.js");

function c(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class u extends Chunk439372.A {
  constructor(...e) {
    super(...e), c(this, "actions", {
      OVERLAY_SET_INPUT_LOCKED: () => {
        null != s.A.getContextMenu() && (0, r.Z_)();
        let e = (0, a.rH)();
        null != e && e.windowDispatch.dispatch(l.jej.POPOUT_CLOSE), o._.dispatch(l.jej.MODAL_CLOSE)
      }
    })
  }
}
let d = new u