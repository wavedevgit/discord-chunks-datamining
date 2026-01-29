/** Chunk was on 87557 **/
/** chunk id: 64343, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => c
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk554146 = require("./554146.js"),
  Chunk397927 = require("./397927.js"),
  Chunk771781 = require("./771781.js"),
  Chunk739560 = require("./739560.js"),
  Chunk963763 = require("./963763.jsx");

function c(e) {
  let {
    searchQuery: t = ""
  } = e, n = (0, i.Ay)(e => e.recentlyShown), [c, d] = (0, s.A)(), u = c.filter(e => e.toLowerCase().includes(t.toLowerCase())).filter(e => !n.includes(l.M[e])).slice(0, 3);
  return 0 === u.length ? null : (0, a.jsx)(r.nVY, {
    label: "Recent Overrides",
    children: (0, a.jsx)(o.A, {
      items: u
    })
  })
}