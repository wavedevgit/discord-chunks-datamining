/** Chunk was on 63490 **/
/** chunk id: 853268, original params: c,e,s (module,exports,require) **/
require.d(exports, {
  default: () => r
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk755721 = require("./755721.js"),
  Chunk600164 = require("./600164.jsx"),
  Chunk388905 = require("./388905.jsx"),
  Chunk500365 = require("./500365.js"),
  Chunk478411 = require("./478411.js");

function r(c) {
  let {
    value: e,
    onChange: s,
    subText: a,
    muted: r,
    marginTopStyle: d,
    subtextClassName: o
  } = c;
  return (0, n.jsx)(u.Z, {
    className: null != d ? d : h.marginTop20,
    align: u.Z.Align.CENTER,
    children: (0, n.jsx)(t.$q, {
      value: e,
      type: t.M0.INVERTED,
      onChange: (c, e) => s(e),
      className: b.checkbox,
      children: (0, n.jsx)(l.i_, {
        className: i()(o, {
          [b.subText]: !r
        }),
        children: a
      })
    })
  })
}