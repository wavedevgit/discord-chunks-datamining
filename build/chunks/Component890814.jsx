/** Chunk was on 83789 **/
/** chunk id: 890814, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => l
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk956636 = require("./956636.js");

function l(e) {
  let {
    games: t,
    renderGame: r
  } = e;
  return (0, n.jsx)("ul", {
    className: i.coverList,
    children: t.map((e, t) => (0, n.jsx)("li", {
      children: r(e)
    }, "".concat(e.applicationId, "-").concat(t)))
  })
}