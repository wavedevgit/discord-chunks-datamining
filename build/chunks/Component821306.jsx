/** Chunk was on 22477 **/
/** chunk id: 821306, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => p
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  r = require.n(Chunk503698),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk263834 = require("./263834.js"),
  Chunk865116 = require("./865116.js"),
  Chunk759136 = require("./759136.js"),
  Chunk661251 = require("./661251.js");

function p(e) {
  let {
    devSettingsCategory: t
  } = e, n = (0, s.bG)([d.Ay], () => d.Ay.allByCategory(t), [t], s.My), i = l.useMemo(() => n.map(e => {
    let [t, n, {
      label: l
    }] = e;
    return (0, a.jsx)(o.dOG, {
      label: l,
      description: t,
      checked: n,
      onChange: e => (0, c.L)(t, e)
    }, t)
  }), [n]);
  return (0, a.jsx)("div", {
    className: r()(m.nd, u.n),
    children: i
  })
}