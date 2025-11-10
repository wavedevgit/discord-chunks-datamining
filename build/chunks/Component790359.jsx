/** Chunk was on 81242 **/
/** chunk id: 790359, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => o
}), require("./704826.js"), require("./35282.js");
var Chunk951288 = require("./951288.js"),
  Chunk481060 = require("./481060.js"),
  Chunk203377 = require("./203377.js");

function o(e) {
  let {
    value: t,
    onChange: n,
    error: o,
    disabled: l,
    autoFocus: i = false
  } = e;
  return (0, r.jsx)(a.oil, {
    leading: "".concat(s.mf, "/"),
    value: t,
    onChange: e => {
      n(e.replace(/ /g, "-"))
    },
    maxLength: 25,
    error: o,
    disabled: l,
    autoFocus: i
  })
}