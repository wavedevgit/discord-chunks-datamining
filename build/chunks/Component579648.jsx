/** Chunk was on 40725 **/
/** chunk id: 579648, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => m
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
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
  } = (0, Chunk442837.e7)([Chunk999382.Z], () => Chunk999382.Z.getProps()), [t, n] = Chunk73800.useState(0);
  switch (Chunk73800.useEffect(() => {
      null != module && Chunk570140.Z.wait(() => {
        (0, Chunk524329.RM)(module.id).then(() => {
          require("./1.js")
        })
      })
    }, [module]), exports) {
    case 0:
      return (0, Chunk255367.jsx)(Chunk481060.$jN, {
        type: Chunk481060.$jN.Type.SPINNING_CIRCLE
      });
    case 1:
      return (0, Chunk255367.jsx)(Chunk413584.Z, {
        guild: module
      });
    default:
      return (0, Chunk823379.vE)(exports)
  }
}