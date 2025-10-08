/** Chunk was on 46592 **/
/** chunk id: 890814, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => a
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk82977 = require("./82977.js");

function a(e) {
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