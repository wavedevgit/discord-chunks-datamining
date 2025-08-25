/** Chunk was on 21585 **/
/** chunk id: 890814, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => i
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk956636 = require("./956636.js");

function i(e) {
  let {
    games: t,
    renderGame: r
  } = e;
  return (0, n.jsx)("ul", {
    className: l.coverList,
    children: t.map((e, t) => (0, n.jsx)("li", {
      children: r(e)
    }, "".concat(e.applicationId, "-").concat(t)))
  })
}