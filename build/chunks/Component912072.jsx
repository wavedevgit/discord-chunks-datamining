/** Chunk was on 45476 **/
/** chunk id: 912072, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => p
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  r = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk98357 = require("./98357.js"),
  Chunk432877 = require("./432877.js"),
  Chunk344832 = require("./344832.js"),
  Chunk451429 = require("./451429.js");

function p(e) {
  let {
    devSettingsCategory: t
  } = e, n = (0, s.e7)([d.ZP], () => d.ZP.allByCategory(t), [t], s.pF), i = l.useMemo(() => n.map(e => {
    let [t, n, {
      label: l
    }] = e;
    return (0, a.jsx)(o.rsf, {
      label: l,
      description: t,
      checked: n,
      onChange: e => (0, c.Z)(t, e)
    }, t)
  }), [n]);
  return (0, a.jsx)("div", {
    className: r()(m.panel, u.panel),
    children: i
  })
}