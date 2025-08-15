/** Chunk was on 27978 **/
/** chunk id: 853268, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => d
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk600164 = require("./600164.jsx"),
  Chunk388905 = require("./388905.jsx"),
  Chunk285722 = require("./285722.js"),
  Chunk197571 = require("./197571.js");

function d(e) {
  let {
    value: t,
    onChange: n,
    subText: i,
    muted: d,
    marginTopStyle: h,
    subtextClassName: p
  } = e;
  return (0, r.jsx)(s.Z, {
    className: null != h ? h : u.marginTop20,
    align: s.Z.Align.CENTER,
    children: (0, r.jsx)(a.XZJ, {
      value: t,
      type: a.XZJ.Types.INVERTED,
      onChange: (e, t) => n(t),
      className: c.checkbox,
      children: (0, r.jsx)(o.i_, {
        className: l()(p, {
          [c.subText]: !d
        }),
        children: i
      })
    })
  })
}