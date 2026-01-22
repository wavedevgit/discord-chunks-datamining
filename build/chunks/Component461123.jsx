/** Chunk was on 40556 **/
/** chunk id: 461123, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => d
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk397927 = require("./397927.js"),
  Chunk804724 = require("./804724.jsx"),
  Chunk236972 = require("./236972.js"),
  Chunk637368 = require("./637368.jsx"),
  Chunk985018 = require("./985018.jsx"),
  Chunk83363 = require("./83363.js");
let d = Chunk64700.memo(function(e) {
  let {
    sound: t,
    volume: n,
    disabled: i = false,
    onChange: d
  } = e, {
    file: f
  } = (0, s.L)();
  return (0, l.jsx)(a.D0$, {
    label: o.intl.string(o.t.CCRKNz),
    children: (0, l.jsxs)("div", {
      className: c.UV,
      children: [null != t && (0, l.jsx)(u.A, {
        sound: t,
        volume: n,
        disabled: i
      }), null == t && null != f && (0, l.jsx)(r.A, {
        className: c.lF,
        volume: n,
        disabled: i,
        onChange: d
      })]
    })
  })
})