/** Chunk was on 9536 **/
/** chunk id: 782604, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => g
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk570140 = require("./570140.js"),
  Chunk524329 = require("./524329.js"),
  Chunk823379 = require("./823379.js"),
  Chunk999382 = require("./999382.js"),
  Chunk263155 = require("./263155.jsx");
let g = () => {
  let {
    guild: e
  } = (0, Chunk442837.e7)([Chunk999382.Z], () => Chunk999382.Z.getProps()), [t, n] = Chunk473749.useState(0);
  switch (Chunk473749.useEffect(() => {
      null != module && Chunk570140.Z.wait(() => {
        (0, Chunk524329.RM)(module.id).then(() => {
          require("./1.js")
        })
      })
    }, [module]), exports) {
    case 0:
      return (0, Chunk54381.jsx)(Chunk481060.$jN, {
        type: Chunk481060.$jN.Type.SPINNING_CIRCLE
      });
    case 1:
      return (0, Chunk54381.jsx)(Chunk263155.Z, {
        guild: module
      });
    default:
      return (0, Chunk823379.vE)(exports)
  }
}