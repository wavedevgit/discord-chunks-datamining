/** Chunk was on web.js **/
/** chunk id: 275909, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => l
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk283029 = require("./283029.jsx"),
  Chunk681500 = require("./681500.js");
let l = function(e) {
  let {
    className: t,
    hasCooldown: i,
    isCanceled: l,
    useReducedMotion: c
  } = e;
  return (0, r.jsxs)("div", {
    className: o()(s.boostIconContainer, t),
    children: [l ? (0, r.jsx)("img", {
      className: o()(s.boostIcon, s.boostIconCanceled),
      src: n(457026),
      alt: ""
    }) : (0, r.jsx)(a.Z, {
      className: s.boostIcon,
      boostInCooldown: i,
      useReducedMotion: c
    }), !l && i && (0, r.jsx)("img", {
      className: s.snowflake,
      src: n(765028),
      alt: ""
    })]
  })
}