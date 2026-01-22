/** Chunk was on 21738 **/
/** chunk id: 247455, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => c
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  l = require.n(Chunk503698),
  Chunk607470 = require("./607470.jsx"),
  Chunk778827 = require("./778827.js"),
  Chunk181713 = require("./181713.js");
let c = e => {
  let {
    className: t,
    isAnimated: n = false,
    questName: i
  } = e, c = n ? o.A : o.A + "?format=webp";
  return (0, r.jsx)("div", {
    className: l()(s.k, t),
    children: n ? (0, r.jsx)(a.A, {
      autoPlay: true,
      loop: true,
      muted: true,
      preload: "auto",
      playsInline: true,
      className: s.L,
      controls: false,
      children: (0, r.jsx)("source", {
        src: c,
        type: "video/webm"
      })
    }) : (0, r.jsx)("img", {
      className: s.L,
      src: c,
      alt: i
    })
  })
}