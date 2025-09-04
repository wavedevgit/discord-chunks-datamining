/** Chunk was on 27978 **/
/** chunk id: 362762, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => d
});
var r, i, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk981631 = require("./981631.js");
let a = null,
  c = {};
class u extends(i = Chunk442837.ZP.Store) {
  getState(e) {
    return c[e]
  }
  getHighestState() {
    return a
  }
}(r = "displayName") in u ? Object.defineProperty(u, r, {
  value: "CodedLinkNativeAppStateStore",
  enumerable: true,
  configurable: true,
  writable: true
}) : u[r] = "CodedLinkNativeAppStateStore";
let d = new u(Chunk570140.Z, {
  NATIVE_APP_MODAL_OPENING: function(e) {
    let {
      code: t
    } = e;
    c[t] = o.kEZ.OPENING, null === a && (a = o.kEZ.OPENING)
  },
  NATIVE_APP_MODAL_OPENED: function(e) {
    let {
      code: t
    } = e;
    c[t] = o.kEZ.OPEN, a = o.kEZ.OPEN
  },
  NATIVE_APP_MODAL_OPEN_FAILED: function(e) {
    let {
      code: t
    } = e;
    c[t] = o.kEZ.OPEN_FAIL, (null === a || a === o.kEZ.OPENING) && (a = o.kEZ.OPEN_FAIL)
  }
})