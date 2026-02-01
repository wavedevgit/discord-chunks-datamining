/** Chunk was on 60118 **/
/** chunk id: 507247, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => i
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk676283 = require("./676283.js");

function i(e) {
  let {
    games: t,
    renderGame: n
  } = e;
  return (0, r.jsx)("ul", {
    className: l.G,
    children: t.map((e, t) => (0, r.jsx)("li", {
      children: n(e, t)
    }, e.applicationId))
  })
}