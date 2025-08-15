/** Chunk was on 12756 **/
/** chunk id: 890814, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => l
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk443933 = require("./443933.js");

function l(e) {
  let {
    games: t,
    renderGame: n
  } = e;
  return (0, r.jsx)("ul", {
    className: i.coverList,
    children: t.map((e, t) => (0, r.jsx)("li", {
      children: n(e)
    }, "".concat(e.applicationId, "-").concat(t)))
  })
}