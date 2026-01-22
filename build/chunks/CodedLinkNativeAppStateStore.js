/** Chunk was on 94531 **/
/** chunk id: 10088, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  A: () => f
});
var n, o, Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk652215 = require("./652215.js");
let i = null,
  a = {};
class p extends(o = Chunk311907.Ay.Store) {
  getState(e) {
    return a[e]
  }
  getHighestState() {
    return i
  }
}(n = "displayName") in p ? Object.defineProperty(p, n, {
  value: "CodedLinkNativeAppStateStore",
  enumerable: true,
  configurable: true,
  writable: true
}) : p[n] = "CodedLinkNativeAppStateStore";
let f = new p(Chunk73153.h, {
  NATIVE_APP_MODAL_OPENING: function(e) {
    let {
      code: t
    } = e;
    a[t] = u.fAW.OPENING, null === i && (i = u.fAW.OPENING)
  },
  NATIVE_APP_MODAL_OPENED: function(e) {
    let {
      code: t
    } = e;
    a[t] = u.fAW.OPEN, i = u.fAW.OPEN
  },
  NATIVE_APP_MODAL_OPEN_FAILED: function(e) {
    let {
      code: t
    } = e;
    a[t] = u.fAW.OPEN_FAIL, (null === i || i === u.fAW.OPENING) && (i = u.fAW.OPEN_FAIL)
  }
})