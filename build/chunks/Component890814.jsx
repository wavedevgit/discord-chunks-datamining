/** Chunk was on 38058 **/
/** chunk id: 890814, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => a
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk956636 = require("./956636.js");

function a(e) {
  let {
    games: t,
    renderGame: n
  } = e;
  return (0, r.jsx)("ul", {
    className: i.coverList,
    children: t.map((e, t) => (0, r.jsx)("li", {
      children: n(e, t)
    }, e.applicationId))
  })
}