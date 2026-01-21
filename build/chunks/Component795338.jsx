/** Chunk was on 82124 **/
/** chunk id: 795338, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  g: () => d,
  m: () => p
});
var Chunk54381 = require("./54381.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk494497 = require("./494497.js"),
  Chunk156732 = require("./156732.js"),
  Chunk535396 = require("./535396.js"),
  Chunk896481 = require("./896481.js"),
  Chunk942570 = require("./942570.js");

function d(e) {
  let {
    className: t
  } = e;
  return (0, r.jsx)("img", {
    className: t,
    alt: "",
    src: u
  })
}

function p(e) {
  let {
    className: t,
    powerup: n,
    isHovering: i
  } = e, u = (0, o.Z)(n, i);
  switch (n.type) {
    case s.Us.LEVEL:
      return (0, r.jsx)(d, {});
    case s.Us.PERK:
      return (0, r.jsx)("img", {
        alt: "",
        src: u,
        className: l()(c.background, {
          [c.gradientRoleColorsImage]: n.skuId === a.If
        }, t)
      })
  }
}