/** Chunk was on 87557 **/
/** chunk id: 821052, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => o
});
var Chunk627968 = require("./627968.js"),
  Chunk554146 = require("./554146.js"),
  Chunk397927 = require("./397927.js"),
  Chunk771781 = require("./771781.js"),
  Chunk963763 = require("./963763.jsx");

function o(e) {
  let {
    searchQuery: t = ""
  } = e, n = (0, i.Ay)(e => e.recentlyShown).map(e => l.M[e]).filter(e => e.toLowerCase().includes(t.toLowerCase())).slice(0, 3);
  return 0 === n.length ? null : (0, a.jsx)(r.nVY, {
    label: "Recently Shown",
    children: (0, a.jsx)(s.A, {
      items: n
    })
  })
}