/** Chunk was on 56035 **/
/** chunk id: 671895, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => d
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk481060 = require("./481060.js"),
  Chunk87686 = require("./87686.jsx"),
  Chunk586826 = require("./586826.js"),
  Chunk507419 = require("./507419.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk852545 = require("./852545.js");
let d = Chunk647438.memo(function(e) {
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