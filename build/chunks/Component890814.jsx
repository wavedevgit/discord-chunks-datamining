/** Chunk was on 39442 **/
/** chunk id: 890814, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => a
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk498825 = require("./498825.js");

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