/** Chunk was on 30202 **/
/** chunk id: 275909, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => o
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk283029 = require("./283029.jsx"),
  Chunk681500 = require("./681500.js");
let o = function(e) {
  let {
    className: t,
    hasCooldown: r,
    isCanceled: o,
    useReducedMotion: c
  } = e;
  return (0, i.jsxs)("div", {
    className: s()(l.boostIconContainer, t),
    children: [o ? (0, i.jsx)("img", {
      className: s()(l.boostIcon, l.boostIconCanceled),
      src: n(457026),
      alt: ""
    }) : (0, i.jsx)(a.Z, {
      className: l.boostIcon,
      boostInCooldown: r,
      useReducedMotion: c
    }), !o && r && (0, i.jsx)("img", {
      className: l.snowflake,
      src: n(765028),
      alt: ""
    })]
  })
}