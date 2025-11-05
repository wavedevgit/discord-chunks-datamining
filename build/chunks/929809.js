/** Chunk was on 13532 **/
/** chunk id: 929809, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  H: () => l,
  c: () => o
});
var Chunk570140 = require("./570140.js");

function o(e) {
  n.Z.wait(() => n.Z.dispatch({
    type: "NUF_NEW_USER",
    newUserType: e
  }))
}

function l() {
  Chunk570140.Z.wait(() => Chunk570140.Z.dispatch({
    type: "NUF_COMPLETE"
  }))
}