/** Chunk was on 94531 **/
/** chunk id: 942614, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  C: () => o,
  D: () => l
});
var Chunk73153 = require("./73153.js");

function o(e) {
  n.h.wait(() => n.h.dispatch({
    type: "NUF_NEW_USER",
    newUserType: e
  }))
}

function l() {
  n.h.wait(() => n.h.dispatch({
    type: "NUF_COMPLETE"
  }))
}