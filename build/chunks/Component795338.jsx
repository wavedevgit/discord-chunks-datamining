/** Chunk was on 26628 **/
/** chunk id: 795338, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  g: () => d,
  m: () => h
});
var Chunk255367 = require("./255367.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk494497 = require("./494497.js"),
  Chunk156732 = require("./156732.js"),
  Chunk535396 = require("./535396.js"),
  Chunk115094 = require("./115094.js"),
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

function h(e) {
  let {
    className: t,
    powerup: n,
    isHovering: i
  } = e, u = (0, s.Z)(n, i);
  switch (n.type) {
    case a.Us.LEVEL:
      return (0, r.jsx)(d, {});
    case a.Us.PERK:
      return (0, r.jsx)("img", {
        alt: "",
        src: u,
        className: l()(c.background, {
          [c.gradientRoleColorsImage]: n.skuId === o.If
        }, t)
      })
  }
}