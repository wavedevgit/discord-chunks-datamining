/** Chunk was on 77223 **/
/** chunk id: 883931, original params: e,n,l (module,exports,require) **/
require.d(exports, {
  A: () => c
}), require("./896048.js");
var Chunk64700 = require("./64700.js"),
  Chunk198982 = require("./198982.js"),
  Chunk334086 = require("./334086.js"),
  Chunk315317 = require("./315317.js");
let r = {
  onSuccess: () => {},
  permissionOverwrites: []
};

function c() {
  let [e, n] = t.useState(false), [l, c] = t.useState(null);
  return [async function(e, l) {
    let {
      onSuccess: t = r.onSuccess,
      permissionOverwrites: o = r.permissionOverwrites
    } = arguments.length > 2 && true !== arguments[2] ? arguments[2] : r;
    n(true);
    try {
      await a.XV(e, o), await a.XG(e, l), await (0, s.$)(e, t), await (0, s.c)(e, t), n(false)
    } catch (e) {
      c(new i.LG(e)), n(false)
    }
    n(false)
  }, {
    loading: e,
    error: l
  }]
}