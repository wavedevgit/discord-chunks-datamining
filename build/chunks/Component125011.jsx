/** Chunk was on 1272 **/
/** chunk id: 125011, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => c
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk70097 = require("./70097.jsx"),
  Chunk883079 = require("./883079.js"),
  Chunk201284 = require("./201284.js");
let c = e => {
  let {
    className: t,
    isAnimated: n = false,
    questName: i
  } = e, c = n ? o.Z : o.Z + "?format=webp";
  return (0, r.jsx)("div", {
    className: l()(s.container, t),
    children: n ? (0, r.jsx)(a.Z, {
      autoPlay: true,
      loop: true,
      muted: true,
      preload: "auto",
      playsInline: true,
      className: s.asset,
      controls: false,
      children: (0, r.jsx)("source", {
        src: c,
        type: "video/webm"
      })
    }) : (0, r.jsx)("img", {
      className: s.asset,
      src: c,
      alt: i
    })
  })
}