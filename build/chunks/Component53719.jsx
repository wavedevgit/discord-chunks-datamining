/** Chunk was on 9207 **/
/** chunk id: 53719, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => c
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  l = require.n(Chunk503698),
  Chunk990078 = require("./990078.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk290223 = require("./290223.js");

function c(e) {
  let {
    icon: t,
    tooltip: n,
    onClick: i,
    className: c
  } = e;
  return (0, r.jsx)(s.m, {
    text: n,
    children: (0, r.jsx)(a.DUT, {
      "aria-label": n,
      onClick: e => {
        e.preventDefault(), e.stopPropagation(), i(e)
      },
      className: l()(o.hP, c),
      children: (0, r.jsx)(t, {
        className: o.Kk,
        color: "currentColor"
      })
    })
  })
}