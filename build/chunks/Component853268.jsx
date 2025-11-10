/** Chunk was on 63490 **/
/** chunk id: 853268, original params: e,c,s (module,exports,require) **/
require.d(exports, {
  default: () => d
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk755721 = require("./755721.js"),
  Chunk600164 = require("./600164.jsx"),
  Chunk388905 = require("./388905.jsx"),
  Chunk285722 = require("./285722.js"),
  Chunk197571 = require("./197571.js");

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