/** Chunk was on 27978 **/
/** chunk id: 362762, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => h
});
var r, i, l, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk981631 = require("./981631.js");
let c = null,
  u = {};
class d extends(l = Chunk442837.ZP.Store) {
  getState(e) {
    return u[e]
  }
  getHighestState() {
    return c
  }
}
i = "CodedLinkNativeAppStateStore", (r = "displayName") in d ? Object.defineProperty(d, r, {
  value: i,
  enumerable: true,
  configurable: true,
  writable: true
}) : d[r] = i;
let h = new d(Chunk570140.Z, {
  NATIVE_APP_MODAL_OPENING: function(e) {
    let {
      code: t
    } = e;
    u[t] = a.kEZ.OPENING, null === c && (c = a.kEZ.OPENING)
  },
  NATIVE_APP_MODAL_OPENED: function(e) {
    let {
      code: t
    } = e;
    u[t] = a.kEZ.OPEN, c = a.kEZ.OPEN
  },
  NATIVE_APP_MODAL_OPEN_FAILED: function(e) {
    let {
      code: t
    } = e;
    u[t] = a.kEZ.OPEN_FAIL, (null === c || c === a.kEZ.OPENING) && (c = a.kEZ.OPEN_FAIL)
  }
})