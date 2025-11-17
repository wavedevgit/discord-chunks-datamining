/** Chunk was on 13474 **/
/** chunk id: 317568, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => u
});
var Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk451478 = require("./451478.js");
let u = () => {
  let e = (0, Chunk442837.e7)([Chunk451478.Z], () => Chunk451478.Z.isFocused());
  Chunk473749.useEffect(() => {
    module || Chunk570140.Z.dispatch({
      type: "POTIONS_SET_CONFETTI_MODE",
      enabled: false
    })
  }, [module])
}