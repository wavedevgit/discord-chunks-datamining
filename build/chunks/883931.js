/** Chunk was on 77223 **/
/** chunk id: 883931, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  A: () => c
}), require("./896048.js");
var Chunk64700 = require("./64700.js"),
  Chunk198982 = require("./198982.js"),
  Chunk334086 = require("./334086.js"),
  Chunk315317 = require("./315317.js");
let a = {
  onSuccess: () => {},
  permissionOverwrites: []
};

function c() {
  let [e, n] = l.useState(false), [t, c] = l.useState(null);
  return [async function(e, t) {
    let {
      onSuccess: l = a.onSuccess,
      permissionOverwrites: o = a.permissionOverwrites
    } = arguments.length > 2 && true !== arguments[2] ? arguments[2] : a;
    n(true);
    try {
      await r.XV(e, o), await r.XG(e, t), await (0, s.$)(e, l), await (0, s.c)(e, l), n(false)
    } catch (e) {
      c(new i.LG(e)), n(false)
    }
    n(false)
  }, {
    loading: e,
    error: t
  }]
}