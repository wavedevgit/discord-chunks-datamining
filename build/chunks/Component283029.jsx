/** Chunk was on 66181 **/
/** chunk id: 283029, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => l
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk609894 = require("./609894.js");
let l = function(e) {
  let {
    className: t,
    imageClassName: r,
    boostInCooldown: l,
    useReducedMotion: o
  } = e;
  return (0, i.jsx)("div", {
    className: s()(a.imageWrapper, t, {
      [a.cooldown]: l
    }),
    children: (0, i.jsx)("img", {
      className: s()(a.image, r, {
        [a.cooldownImage]: l
      }),
      src: l ? n(971149) : o ? n(908635) : n(83957),
      alt: ""
    })
  })
}