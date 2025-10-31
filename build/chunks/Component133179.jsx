/** Chunk was on 47863 **/
/** chunk id: 133179, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => c
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk600164 = require("./600164.jsx"),
  Chunk336606 = require("./336606.js");

function c(e) {
  let {
    source: t,
    selectedSource: n
  } = e, {
    id: i,
    name: c,
    url: d
  } = t, u = (null == n ? true : n.id) === i;
  return (0, r.jsxs)(s.Z, {
    direction: s.Z.Direction.VERTICAL,
    justify: s.Z.Justify.CENTER,
    align: s.Z.Align.CENTER,
    children: [(0, r.jsx)(s.Z, {
      justify: s.Z.Justify.CENTER,
      align: s.Z.Align.CENTER,
      children: (0, r.jsx)("div", {
        style: {
          backgroundImage: "url(".concat(d, ")")
        },
        className: l()(a.sourceThumbnail, {
          [a.selected]: u
        })
      })
    }), (0, r.jsx)(o.Text, {
      className: l()(a.sourceName, {
        [a.selected]: u
      }),
      variant: "text-sm/normal",
      children: c
    })]
  })
}