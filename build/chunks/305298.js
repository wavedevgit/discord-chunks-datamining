/** Chunk was on 84722 **/
/** chunk id: 305298, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => c
}), require("./388685.js");
var Chunk473749 = require("./473749.js"),
  Chunk881052 = require("./881052.js"),
  Chunk430927 = require("./430927.js"),
  Chunk610665 = require("./610665.js");
let s = {
  onSuccess: () => {},
  permissionOverwrites: []
};

function c() {
  let [e, n] = Chunk473749.useState(false), [t, c] = Chunk473749.useState(null);
  return [async function(e, t) {
    let {
      onSuccess: l = s.onSuccess,
      permissionOverwrites: o = s.permissionOverwrites
    } = arguments.length > 2 && true !== arguments[2] ? arguments[2] : s;
    n(true);
    try {
      await r.GV(e, o), await r.iQ(e, t), await (0, a.o)(e, l), await (0, a.T)(e, l), n(false)
    } catch (e) {
      c(new i.Hx(e)), n(false)
    }
    n(false)
  }, {
    loading: module,
    error: require
  }]
}