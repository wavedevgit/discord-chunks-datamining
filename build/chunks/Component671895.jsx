/** Chunk was on 56035 **/
/** chunk id: 671895, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => d
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk481060 = require("./481060.js"),
  Chunk87686 = require("./87686.jsx"),
  Chunk586826 = require("./586826.js"),
  Chunk507419 = require("./507419.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk852545 = require("./852545.js");
let d = Chunk473749.memo(function(e) {
  let {
    sound: n,
    volume: t,
    disabled: a = false,
    onChange: d
  } = e, {
    file: f
  } = (0, s.p)();
  return (0, l.jsx)(i.gNt, {
    label: u.intl.string(u.t.CCRKNz),
    children: (0, l.jsxs)("div", {
      className: c.fakeInput,
      children: [null != n && (0, l.jsx)(o.Z, {
        sound: n,
        volume: t,
        disabled: a
      }), null == n && null != f && (0, l.jsx)(r.Z, {
        className: c.audioTrimmer,
        volume: t,
        disabled: a,
        onChange: d
      })]
    })
  })
})