/** Chunk was on 29725 **/
/** chunk id: 912072, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => p
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk98357 = require("./98357.js"),
  Chunk432877 = require("./432877.js"),
  Chunk352318 = require("./352318.js"),
  Chunk663618 = require("./663618.js");

function p(e) {
  let {
    devSettingsCategory: t
  } = e, n = (0, s.e7)([d.ZP], () => d.ZP.allByCategory(t), [t], s.pF), l = r.useMemo(() => n.map(e => {
    let [t, n, {
      label: r
    }] = e;
    return (0, a.jsx)(o.rsf, {
      label: r,
      description: t,
      checked: n,
      onChange: e => (0, c.Z)(t, e)
    }, t)
  }), [n]);
  return (0, a.jsx)("div", {
    className: i()(m.panel, u.panel),
    children: l
  })
}