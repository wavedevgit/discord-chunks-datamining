/** Chunk was on 63490 **/
/** chunk id: 853268, original params: e,c,s (module,exports,require) **/
require.d(exports, {
  default: () => d
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk755721 = require("./755721.js"),
  Chunk600164 = require("./600164.jsx"),
  Chunk388905 = require("./388905.jsx"),
  Chunk867274 = require("./867274.js"),
  Chunk10198 = require("./10198.js");

function d(e) {
  let {
    value: c,
    onChange: s,
    subText: a,
    muted: d,
    marginTopStyle: o,
    subtextClassName: b
  } = e;
  return (0, n.jsx)(u.Z, {
    className: null != o ? o : r.marginTop20,
    align: u.Z.Align.CENTER,
    children: (0, n.jsx)(t.$q, {
      value: c,
      type: t.M0.INVERTED,
      onChange: (e, c) => s(c),
      className: h.checkbox,
      children: (0, n.jsx)(l.i_, {
        className: i()(b, {
          [h.subText]: !d
        }),
        children: a
      })
    })
  })
}