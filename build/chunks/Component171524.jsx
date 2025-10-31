/** Chunk was on 77033 **/
/** chunk id: 171524, original params: e,n,l (module,exports,require) **/
require.d(exports, {
  n: () => r
});
var Chunk951288 = require("./951288.js"),
  Chunk73346 = require("./73346.js"),
  Chunk104869 = require("./104869.js");

function r(e) {
  let {
    applicationId: n,
    backgroundImageAssetId: l
  } = e, r = null != l ? (0, i._W)(n, l, 1024) : null;
  return null == r ? null : (0, t.jsx)("div", {
    className: a.backgroundContainer,
    children: (0, t.jsx)("div", {
      className: a.backgroundImage,
      style: {
        backgroundImage: "url(".concat(r, ")")
      }
    })
  })
}