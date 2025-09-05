/** Chunk was on 93886 **/
/** chunk id: 912072, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => x
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk98357 = require("./98357.js"),
  Chunk432877 = require("./432877.js"),
  Chunk551986 = require("./551986.js"),
  Chunk866403 = require("./866403.js");

function x(e) {
  let {
    devSettingsCategory: t
  } = e, n = (0, s.e7)([d.ZP], () => d.ZP.allByCategory(t), [t], s.pF), l = r.useMemo(() => n.map(e => {
    let [t, n, {
      label: r
    }] = e;
    return (0, a.jsx)(o.j7V, {
      value: n,
      onChange: e => (0, c.Z)(t, e),
      hideBorder: true,
      className: u.switch,
      children: r
    }, t)
  }), [n]);
  return (0, a.jsx)("div", {
    className: i()(m.panel, u.panel),
    children: l
  })
}