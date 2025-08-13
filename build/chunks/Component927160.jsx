/** Chunk was on 5533 **/
/** chunk id: 927160, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => a
}), require("./704826.js"), require("./35282.js");
var Chunk255367 = require("./255367.js"),
  Chunk263145 = require("./263145.jsx"),
  Chunk203377 = require("./203377.js");

function a(e) {
  let {
    value: t,
    onChange: n,
    error: a,
    disabled: s,
    className: o,
    autoFocus: c = false
  } = e;
  return (0, r.jsx)(i.Z, {
    prefix: "".concat(l.mf, "/"),
    value: t,
    onChange: e => {
      n(e.replace(/ /g, "-"))
    },
    maxLength: 25,
    error: a,
    disabled: s,
    className: o,
    autoFocus: c
  })
}