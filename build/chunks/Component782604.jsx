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
  } = (0, l.e7)([d.Z], () => d.Z.getProps()), [t, n] = i.useState(0);
  switch (i.useEffect(() => {
      null != e && s.Z.wait(() => {
        (0, o.RM)(e.id).then(() => {
          n(1)
        })
      })
    }, [e]), t) {
    case 0:
      return (0, r.jsx)(a.$jN, {
        type: a.$jN.Type.SPINNING_CIRCLE
      });
    case 1:
      return (0, r.jsx)(u.Z, {
        guild: e
      });
    default:
      return (0, c.vE)(t)
  }
}