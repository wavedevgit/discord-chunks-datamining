/** Chunk was on 30378 **/
/** chunk id: 790359, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => l
}), require("./704826.js"), require("./35282.js");
var Chunk951288 = require("./951288.js"),
  Chunk481060 = require("./481060.js"),
  Chunk203377 = require("./203377.js");

function l(e) {
  let {
    value: t,
    onChange: n,
    error: l,
    disabled: a,
    autoFocus: c = false
  } = e;
  return (0, r.jsx)(i.oil, {
    leading: "".concat(s.mf, "/"),
    value: t,
    onChange: e => {
      n(e.replace(/ /g, "-"))
    },
    maxLength: 25,
    error: l,
    disabled: a,
    autoFocus: c
  })
}