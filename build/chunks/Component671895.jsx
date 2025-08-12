/** Chunk was on 56035 **/
/** chunk id: 671895, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => d
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk481060 = require("./481060.js"),
  Chunk87686 = require("./87686.jsx"),
  Chunk586826 = require("./586826.js"),
  Chunk507419 = require("./507419.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk210548 = require("./210548.js");
let d = Chunk73800.memo(function(e) {
  let {
    sound: t,
    volume: n,
    disabled: a = false,
    onChange: d
  } = e, {
    file: f
  } = (0, s.p)();
  return (0, l.jsx)(i.hjN, {
    className: c.section,
    title: u.intl.string(u.t.CCRKNz),
    children: (0, l.jsxs)("div", {
      className: c.fakeInput,
      children: [null != t && (0, l.jsx)(o.Z, {
        sound: t,
        volume: n,
        disabled: a
      }), null == t && null != f && (0, l.jsx)(r.Z, {
        className: c.audioTrimmer,
        volume: n,
        disabled: a,
        onChange: d
      })]
    })
  })
})