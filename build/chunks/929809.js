/** Chunk was on 27978 **/
/** chunk id: 929809, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  H: () => l,
  c: () => i
});
var Chunk570140 = require("./570140.js");

function i(e) {
  r.Z.wait(() => r.Z.dispatch({
    type: "NUF_NEW_USER",
    newUserType: e
  }))
}

function l() {
  Chunk570140.Z.wait(() => Chunk570140.Z.dispatch({
    type: "NUF_COMPLETE"
  }))
}