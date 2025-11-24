/** Chunk was on 77033 **/
/** chunk id: 171524, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  n: () => o
});
var Chunk54381 = require("./54381.js"),
  Chunk73346 = require("./73346.js"),
  Chunk104869 = require("./104869.js");

function o(e) {
  let {
    applicationId: n,
    backgroundImageAssetId: t
  } = e, o = null != t ? (0, i._W)(n, t, 1024) : null;
  return (0, l.jsx)("div", {
    className: a.backgroundContainer,
    children: null != o ? (0, l.jsx)("div", {
      className: a.backgroundImage,
      style: {
        backgroundImage: "url(".concat(o, ")")
      }
    }) : null
  })
}