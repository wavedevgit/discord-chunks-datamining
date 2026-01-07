/** Chunk was on 67376 **/
/** chunk id: 246295, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  V: () => l
}), require("./388685.js");
var Chunk473749 = require("./473749.js"),
  Chunk388032 = require("./388032.jsx");

function l() {
  let [e, t] = i.useState(false), [n, l] = i.useState(false), [r, o] = i.useState(false);
  return {
    rules: i.useMemo(() => [{
      key: "healthy",
      title: c.intl.string(c.t.jIi9gq),
      body: c.intl.string(c.t["4uUAXh"]),
      onCheck: () => t(!e),
      checked: e
    }, {
      key: "nonNSFW",
      title: c.intl.string(c.t["iwnCh+"]),
      body: c.intl.string(c.t.UKFzEY),
      onCheck: () => l(!n),
      checked: n
    }, {
      key: "guidelines",
      title: c.intl.string(c.t.cZwlWn),
      body: c.intl.string(c.t.u0Go2s),
      onCheck: () => o(!r),
      checked: r
    }], [r, e, n]),
    rulesAccepted: e && n && r
  }
}