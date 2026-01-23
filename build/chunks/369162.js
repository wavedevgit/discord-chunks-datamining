/** Chunk was on 35125 **/
/** chunk id: 369162, original params: e,t,i (module,exports,require) **/
require.d(exports, {
  P: () => c
}), require("./896048.js");
var Chunk64700 = require("./64700.js"),
  Chunk985018 = require("./985018.jsx");

function c() {
  let [e, t] = n.useState(false), [i, c] = n.useState(false), [r, o] = n.useState(false);
  return {
    rules: n.useMemo(() => [{
      key: "healthy",
      title: l.intl.string(l.t.jIi9gq),
      body: l.intl.string(l.t["4uUAXh"]),
      onCheck: () => t(!e),
      checked: e
    }, {
      key: "nonNSFW",
      title: l.intl.string(l.t["iwnCh+"]),
      body: l.intl.string(l.t.UKFzEY),
      onCheck: () => c(!i),
      checked: i
    }, {
      key: "guidelines",
      title: l.intl.string(l.t.cZwlWn),
      body: l.intl.string(l.t.u0Go2s),
      onCheck: () => o(!r),
      checked: r
    }], [r, e, i]),
    rulesAccepted: e && i && r
  }
}