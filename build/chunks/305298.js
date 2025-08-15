/** Chunk was on 84722 **/
/** chunk id: 305298, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => c
}), require("./388685.js");
var Chunk647438 = require("./647438.js"),
  Chunk881052 = require("./881052.js"),
  Chunk430927 = require("./430927.js"),
  Chunk610665 = require("./610665.js");
let s = {
  onSuccess: () => {},
  permissionOverwrites: []
};

function c() {
  let [e, n] = Chunk647438.useState(false), [t, c] = Chunk647438.useState(null);
  return [async function(e, t) {
    let {
      onSuccess: i = s.onSuccess,
      permissionOverwrites: o = s.permissionOverwrites
    } = arguments.length > 2 && true !== arguments[2] ? arguments[2] : s;
    n(true);
    try {
      await a.GV(e, o), await a.iQ(e, t), await (0, r.o)(e, i), await (0, r.T)(e, i), n(false)
    } catch (e) {
      c(new l.Hx(e)), n(false)
    }
    n(false)
  }, {
    loading: module,
    error: require
  }]
}