/** Chunk was on 39048 **/
/** chunk id: 123488, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => g
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk73153 = require("./73153.js"),
  Chunk447696 = require("./447696.js"),
  Chunk403362 = require("./403362.js"),
  Chunk555337 = require("./555337.js"),
  Chunk92911 = require("./92911.jsx");
let g = () => {
  let {
    guild: e
  } = (0, l.bG)([d.A], () => d.A.getProps()), [t, n] = i.useState(0);
  switch (i.useEffect(() => {
      null != e && a.h.wait(() => {
        (0, o.Fy)(e.id).then(() => {
          n(1)
        })
      })
    }, [e]), t) {
    case 0:
      return (0, r.jsx)(s.y$y, {
        type: s.y$y.Type.SPINNING_CIRCLE
      });
    case 1:
      return (0, r.jsx)(u.A, {
        guild: e
      });
    default:
      return (0, c.xb)(t)
  }
}