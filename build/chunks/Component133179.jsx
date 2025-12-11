/** Chunk was on 44183 **/
/** chunk id: 133179, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => c
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk600164 = require("./600164.jsx"),
  Chunk2688 = require("./2688.js");

function c(e) {
  let {
    source: t,
    selectedSource: n
  } = e, {
    id: i,
    name: c,
    url: d
  } = t, u = (null == n ? true : n.id) === i;
  return (0, r.jsxs)(o.Z, {
    direction: o.Z.Direction.VERTICAL,
    justify: o.Z.Justify.CENTER,
    align: o.Z.Align.CENTER,
    children: [(0, r.jsx)(o.Z, {
      justify: o.Z.Justify.CENTER,
      align: o.Z.Align.CENTER,
      children: (0, r.jsx)("div", {
        style: {
          backgroundImage: "url(".concat(d, ")")
        },
        className: l()(a.sourceThumbnail, {
          [a.selected]: u
        })
      })
    }), (0, r.jsx)(s.Text, {
      className: l()(a.sourceName, {
        [a.selected]: u
      }),
      variant: "text-sm/normal",
      children: c
    })]
  })
}