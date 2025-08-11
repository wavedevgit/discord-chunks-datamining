/** Chunk was on 67544 **/
/** chunk id: 26141, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => a
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk115092 = require("./115092.js");

function a(e) {
  let {
    sources: t,
    interval: n,
    isPaused: a,
    onLoopEnd: i,
    className: c,
    imageRef: l
  } = e, [u, d] = (0, s.useState)(0);
  return (0, s.useEffect)(() => {
    d(0)
  }, [t]), (0, o.Z)({
    onInterval: () => {
      u === t.length - 1 ? (null == i || i(), d(0)) : d(u + 1)
    },
    interval: n,
    isPaused: a
  }), (0, r.jsx)("img", {
    ref: l,
    className: c,
    src: t[u],
    alt: ""
  }, "1")
}