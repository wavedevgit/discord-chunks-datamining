/** Chunk was on 23628 **/
/** chunk id: 154395, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A7: () => u,
  O7: () => c,
  bq: () => a
}), require("./896048.js");
var Chunk64700 = require("./64700.js"),
  Chunk172218 = require("./172218.js"),
  Chunk311907 = require("./311907.js"),
  Chunk475743 = require("./475743.js"),
  Chunk531685 = require("./531685.js");
let a = 2;

function c() {
  let [e, t] = r.useState(false), n = e !== (0, i.A)(e);
  return {
    visible: e,
    visibleChanged: n,
    targetRef: (0, l.K)(e => t(e), .6)
  }
}

function u() {
  let e = (0, o.bG)([s.A], () => s.A.isFocused()),
    t = e !== (0, i.A)(e);
  return {
    focused: e,
    focusedChanged: t
  }
}