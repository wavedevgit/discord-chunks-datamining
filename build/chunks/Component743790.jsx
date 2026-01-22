/** Chunk was on web.js **/
/** chunk id: 743790, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  $: () => u
});
var Chunk627968 = require("./627968.js"),
  Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk397927 = require("./397927.js"),
  Chunk573435 = require("./573435.jsx"),
  Chunk260509 = require("./260509.js"),
  Chunk369752 = require("./369752.js");

function u(e) {
  let {
    guild: t,
    size: n
  } = e, i = (0, l.Iv)(t, n, false, true), u = (0, l.Rb)(t);
  return (0, r.jsx)(o.Ay, {
    className: c.zc,
    mask: o.Ay.Masks.SQUIRCLE,
    width: n,
    height: n,
    children: null != i ? (0, r.jsx)("img", {
      src: i,
      alt: t.name,
      height: n,
      width: n
    }) : (0, r.jsx)("div", {
      className: c.FS,
      children: (0, r.jsx)(s.Text, {
        className: a()({
          [c.ri]: 20 === n
        }),
        color: "text-subtle",
        variant: "text-md/semibold",
        children: u
      })
    })
  })
}