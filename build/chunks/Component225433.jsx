/** Chunk was on 81498 **/
/** chunk id: 225433, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => c
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk903443 = require("./903443.js");
let u = Object.freeze({
  DEFAULT: Chunk903443.default,
  FILLED: Chunk903443.filled
});

function c(e) {
  let {
    className: t,
    onClick: n,
    "aria-label": r,
    look: c = u.DEFAULT
  } = e;
  return (0, i.jsx)(l.P3F, {
    "aria-label": null != r ? r : o.intl.string(o.t.N86XcH),
    className: s()(a.button, c, t),
    onClick: n
  })
}
c.Looks = u