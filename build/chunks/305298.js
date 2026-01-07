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
  let [e, n] = i.useState(false), [t, c] = i.useState(null);
  return [async function(e, t) {
    let {
      onSuccess: i = s.onSuccess,
      permissionOverwrites: o = s.permissionOverwrites
    } = arguments.length > 2 && true !== arguments[2] ? arguments[2] : s;
    n(true);
    try {
      await r.GV(e, o), await r.iQ(e, t), await (0, a.o)(e, i), await (0, a.T)(e, i), n(false)
    } catch (e) {
      c(new l.Hx(e)), n(false)
    }
    n(false)
  }, {
    loading: e,
    error: t
  }]
}