/** Chunk was on 78374 **/
/** chunk id: 362762, original params: a,l,t (module,exports,require) **/
require.d(exports, {
  Z: () => n
});
var s, e, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk981631 = require("./981631.js");
let f = null,
  d = {};
class o extends(e = Chunk442837.ZP.Store) {
  getState(a) {
    return d[a]
  }
  getHighestState() {
    return f
  }
}(s = "displayName") in o ? Object.defineProperty(o, s, {
  value: "CodedLinkNativeAppStateStore",
  enumerable: true,
  configurable: true,
  writable: true
}) : o[s] = "CodedLinkNativeAppStateStore";
let n = new o(Chunk570140.Z, {
  NATIVE_APP_MODAL_OPENING: function(a) {
    let {
      code: l
    } = a;
    d[l] = r.kEZ.OPENING, null === f && (f = r.kEZ.OPENING)
  },
  NATIVE_APP_MODAL_OPENED: function(a) {
    let {
      code: l
    } = a;
    d[l] = r.kEZ.OPEN, f = r.kEZ.OPEN
  },
  NATIVE_APP_MODAL_OPEN_FAILED: function(a) {
    let {
      code: l
    } = a;
    d[l] = r.kEZ.OPEN_FAIL, (null === f || f === r.kEZ.OPENING) && (f = r.kEZ.OPEN_FAIL)
  }
})