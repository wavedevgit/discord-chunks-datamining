/** Chunk was on 67376 **/
/** chunk id: 246295, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  V: () => l
}), require("./388685.js");
var Chunk647438 = require("./647438.js"),
  Chunk388032 = require("./388032.jsx");

function l() {
  let [e, t] = Chunk647438.useState(false), [n, l] = Chunk647438.useState(false), [r, o] = Chunk647438.useState(false);
  return {
    rules: Chunk647438.useMemo(() => [{
      key: "healthy",
      title: Chunk388032.intl.string(Chunk388032.t.jIi9gq),
      body: Chunk388032.intl.string(Chunk388032.t["4uUAXh"]),
      onCheck: () => exports(!module),
      checked: module
    }, {
      key: "nonNSFW",
      title: Chunk388032.intl.string(Chunk388032.t["iwnCh+"]),
      body: Chunk388032.intl.string(Chunk388032.t.UKFzEY),
      onCheck: () => l(!require),
      checked: require
    }, {
      key: "guidelines",
      title: Chunk388032.intl.string(Chunk388032.t.cZwlWn),
      body: Chunk388032.intl.string(Chunk388032.t.u0Go2s),
      onCheck: () => o(!r),
      checked: r
    }], [r, module, require]),
    rulesAccepted: module && require && r
  }
}