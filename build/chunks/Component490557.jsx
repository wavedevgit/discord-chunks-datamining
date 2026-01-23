/** Chunk was on 97492 **/
/** chunk id: 490557, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  b: () => d,
  l: () => p
});
var Chunk627968 = require("./627968.js"),
  Chunk503698 = require("./503698.js"),
  i = require.n(Chunk503698),
  Chunk512750 = require("./512750.js"),
  Chunk990208 = require("./990208.js"),
  Chunk568065 = require("./568065.js"),
  Chunk291305 = require("./291305.js"),
  Chunk107836 = require("./107836.js");

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
    isHovering: l
  } = e, u = (0, a.A)(n, l);
  switch (n.type) {
    case o.o9.LEVEL:
      return (0, r.jsx)(d, {});
    case o.o9.PERK:
      return (0, r.jsx)("img", {
        alt: "",
        src: u,
        className: i()(c.T, {
          [c.W]: n.skuId === s.aN
        }, t)
      })
  }
}