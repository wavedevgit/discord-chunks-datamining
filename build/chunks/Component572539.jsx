/** Chunk was on 96888 **/
/** chunk id: 572539, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => s
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk259580 = require("./259580.jsx"),
  Chunk489546 = require("./489546.js");

function s(e) {
  let {
    options: t,
    onClick: n,
    className: l,
    hideCaret: s
  } = e;
  return (0, a.jsx)("div", {
    className: i()(d.root, l),
    children: t.map((e, t) => (0, a.jsxs)(r.P3F, {
      onClick: () => n(e),
      className: i()(d.option, e.className),
      children: [(0, a.jsx)(r.Text, {
        className: d.text,
        color: "none",
        variant: "text-md/normal",
        children: e.label
      }), !(null == s ? true : s(e)) && (0, a.jsx)(o.Z, {
        className: d.caret,
        direction: o.Z.Directions.RIGHT
      })]
    }, t))
  })
}