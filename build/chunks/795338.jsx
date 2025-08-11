/** Chunk was on 34779 **/
/** chunk id: 795338, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  g: () => u,
  m: () => d
});
var Chunk255367 = require("./255367.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk156732 = require("./156732.js"),
  Chunk535396 = require("./535396.js"),
  Chunk4308 = require("./4308.js"),
  Chunk942570 = require("./942570.js");

function u(e) {
  let {
    className: t
  } = e;
  return <img className={t} alt={""} src={c} />
}

function d(e) {
  let {
    className: t,
    powerup: n,
    isHovering: i
  } = e, c = (0, o.Z)(n, i);
  switch (n.type) {
    case s.Us.LEVEL:
      return <u />;
    case s.Us.PERK:
      return <img alt={""} src={c} className={l()(a.background, {
          [a.gradientRoleColorsImage]: n.skuId === s.If
        }, t)} />
  }
}