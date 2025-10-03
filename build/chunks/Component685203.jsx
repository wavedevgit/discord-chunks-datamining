/** Chunk was on web.js **/
/** chunk id: 685203, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  a: () => c
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk28664 = require("./28664.jsx"),
  Chunk755721 = require("./755721.js"),
  Chunk877757 = require("./877757.js");

function c(e) {
  let {
    children: t,
    onClick: n,
    className: i,
    tooltip: c
  } = e;
  return (0, r.jsx)(o.u, {
    text: c,
    children: (0, r.jsx)(s.zx, {
      onClick: e => {
        null == n || n(e)
      },
      innerClassName: l.buttonReset,
      color: a()(l.cta, i),
      size: s.zx.Sizes.MIN,
      children: t
    })
  })
}