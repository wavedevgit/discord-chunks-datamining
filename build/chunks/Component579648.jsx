/** Chunk was on 88479 **/
/** chunk id: 579648, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => m
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk570140 = require("./570140.js"),
  Chunk524329 = require("./524329.js"),
  Chunk823379 = require("./823379.js"),
  Chunk999382 = require("./999382.js"),
  Chunk413584 = require("./413584.jsx");
let m = () => {
  let {
    guild: e
  } = (0, Chunk442837.e7)([Chunk999382.Z], () => Chunk999382.Z.getProps()), [t, n] = Chunk647438.useState(0);
  switch (Chunk647438.useEffect(() => {
      null != module && Chunk570140.Z.wait(() => {
        (0, Chunk524329.RM)(module.id).then(() => {
          require("./1.js")
        })
      })
    }, [module]), exports) {
    case 0:
      return (0, Chunk951288.jsx)(Chunk481060.$jN, {
        type: Chunk481060.$jN.Type.SPINNING_CIRCLE
      });
    case 1:
      return (0, Chunk951288.jsx)(Chunk413584.Z, {
        guild: module
      });
    default:
      return (0, Chunk823379.vE)(exports)
  }
}