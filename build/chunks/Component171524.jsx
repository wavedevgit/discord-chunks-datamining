/** Chunk was on 77033 **/
/** chunk id: 171524, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  n: () => i
});
var Chunk951288 = require("./951288.js"),
  Chunk73346 = require("./73346.js"),
  Chunk835388 = require("./835388.js");

function i(e) {
  let {
    applicationId: t,
    backgroundImageAssetId: n
  } = e, i = null != n ? (0, l._W)(t, n, 1024) : null;
  return null == i ? null : (0, a.jsx)("div", {
    className: r.backgroundContainer,
    children: (0, a.jsx)("div", {
      className: r.backgroundImage,
      style: {
        backgroundImage: "url(".concat(i, ")")
      }
    })
  })
}