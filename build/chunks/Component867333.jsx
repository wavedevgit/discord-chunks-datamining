/** Chunk was on 28636 **/
/** chunk id: 867333, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => c
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  r = require.n(Chunk503698),
  Chunk397927 = require("./397927.js"),
  Chunk1305 = require("./1305.js");

function c(e) {
  let {
    loading: t,
    children: n
  } = e;
  return (0, l.jsxs)("div", {
    className: s.kL,
    children: [t ? (0, l.jsx)("div", {
      className: s.dc,
      children: (0, l.jsx)(i.y$y, {
        className: s.u1,
        type: i.y$y.Type.SPINNING_CIRCLE
      })
    }) : null, (0, l.jsx)("div", {
      className: r()({
        [s.Lq]: t
      }),
      children: n
    })]
  })
}