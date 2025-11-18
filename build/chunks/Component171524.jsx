/** Chunk was on 77033 **/
/** chunk id: 171524, original params: n,e,l (module,exports,require) **/
require.d(exports, {
  n: () => d
});
var Chunk54381 = require("./54381.js"),
  Chunk73346 = require("./73346.js"),
  Chunk835388 = require("./835388.js");

function d(n) {
  let {
    applicationId: e,
    backgroundImageAssetId: l
  } = n, d = null != l ? (0, i._W)(e, l, 1024) : null;
  return null == d ? null : (0, t.jsx)("div", {
    className: a.backgroundContainer,
    children: (0, t.jsx)("div", {
      className: a.backgroundImage,
      style: {
        backgroundImage: "url(".concat(d, ")")
      }
    })
  })
}