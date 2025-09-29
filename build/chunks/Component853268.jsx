/** Chunk was on 27978 **/
/** chunk id: 853268, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => d
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk755721 = require("./755721.js"),
  Chunk600164 = require("./600164.jsx"),
  Chunk388905 = require("./388905.jsx"),
  Chunk867274 = require("./867274.js"),
  Chunk10198 = require("./10198.js");

function d(e) {
  let {
    value: t,
    onChange: n,
    subText: i,
    muted: d,
    marginTopStyle: h,
    subtextClassName: g
  } = e;
  return (0, r.jsx)(o.Z, {
    className: null != h ? h : u.marginTop20,
    align: o.Z.Align.CENTER,
    children: (0, r.jsx)(s.$q, {
      value: t,
      type: s.M0.INVERTED,
      onChange: (e, t) => n(t),
      className: c.checkbox,
      children: (0, r.jsx)(a.i_, {
        className: l()(g, {
          [c.subText]: !d
        }),
        children: i
      })
    })
  })
}