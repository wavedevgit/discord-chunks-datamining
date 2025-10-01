/** Chunk was on 56035 **/
/** chunk id: 671895, original params: e,n,t (module,exports,require) **/
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
  Chunk47903 = require("./47903.js");
let d = Chunk647438.memo(function(e) {
  let {
    sound: n,
    volume: t,
    disabled: l = false,
    onChange: d
  } = e, {
    file: f
  } = (0, o.p)();
  return (0, a.jsx)(i.hjN, {
    className: c.section,
    title: u.intl.string(u.t.CCRKNz),
    children: (0, a.jsxs)("div", {
      className: c.fakeInput,
      children: [null != n && (0, a.jsx)(s.Z, {
        sound: n,
        volume: t,
        disabled: l
      }), null == n && null != f && (0, a.jsx)(r.Z, {
        className: c.audioTrimmer,
        volume: t,
        disabled: l,
        onChange: d
      })]
    })
  })
})