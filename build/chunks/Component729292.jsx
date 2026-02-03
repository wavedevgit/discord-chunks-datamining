/** Chunk was on 56159 **/
/** chunk id: 729292, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => i
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk651930 = require("./651930.jsx"),
  Chunk554311 = require("./554311.js");

function i(e) {
  let {
    selectedGame: t,
    setSelectedGame: n,
    placeholder: i
  } = e, u = (0, a.Un)(), o = (0, a.qo)(t);
  return (0, l.jsx)(r.i, {
    games: u,
    selectedGame: null != o ? o : null,
    onGameSelected: e => {
      null != e ? n((0, a.Xm)(e)) : n(null)
    },
    placeholder: i
  })
}