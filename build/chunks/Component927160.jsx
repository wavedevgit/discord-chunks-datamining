/** Chunk was on 42926 **/
/** chunk id: 927160, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => l
}), require("./704826.js"), require("./35282.js");
var Chunk255367 = require("./255367.js"),
  Chunk263145 = require("./263145.jsx"),
  Chunk203377 = require("./203377.js");

function l(e) {
  let {
    value: t,
    onChange: n,
    error: l,
    disabled: a,
    className: c,
    autoFocus: u = false
  } = e;
  return (0, r.jsx)(s.Z, {
    prefix: "".concat(i.mf, "/"),
    value: t,
    onChange: e => {
      n(e.replace(/ /g, "-"))
    },
    maxLength: 25,
    error: l,
    disabled: a,
    className: c,
    autoFocus: u
  })
}