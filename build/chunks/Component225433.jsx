/** Chunk was on web.js **/
/** chunk id: 225433, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => u
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk903443 = require("./903443.js");
let c = Object.freeze({
  DEFAULT: Chunk903443.default,
  FILLED: Chunk903443.filled
});

function u(e) {
  let {
    className: t,
    onClick: n,
    "aria-label": i,
    look: u = c.DEFAULT
  } = e;
  return (0, r.jsx)(a.P3F, {
    "aria-label": null != i ? i : s.intl.string(s.t.N86XcH),
    className: o()(l.button, u, t),
    onClick: n
  })
}
u.Looks = c