/** Chunk was on 97116 **/
/** chunk id: 572539, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => d
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk259580 = require("./259580.jsx"),
  Chunk489546 = require("./489546.js");

function d(e) {
  let {
    options: t,
    onClick: n,
    className: a,
    hideCaret: d
  } = e;
  return (0, l.jsx)("div", {
    className: i()(u.root, a),
    children: t.map((e, t) => (0, l.jsxs)(r.P3F, {
      onClick: () => n(e),
      className: i()(u.option, e.className),
      children: [(0, l.jsx)(r.Text, {
        className: u.text,
        color: "none",
        variant: "text-md/normal",
        children: e.label
      }), !(null == d ? true : d(e)) && (0, l.jsx)(s.Z, {
        className: u.caret,
        direction: s.Z.Directions.RIGHT
      })]
    }, t))
  })
}