/** Chunk was on 77033 **/
/** chunk id: 171524, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  n: () => s
});
var Chunk54381 = require("./54381.js"),
  Chunk73346 = require("./73346.js"),
  Chunk164670 = require("./164670.js"),
  Chunk848824 = require("./848824.js");

function s(e) {
  let {
    applicationId: n,
    backgroundImageAssetId: t
  } = e, s = null != t ? (0, i._W)(n, t, 1024, a._Z) : null;
  return (0, l.jsx)("div", {
    className: o.backgroundContainer,
    children: null != s ? (0, l.jsx)("div", {
      className: o.backgroundImage,
      style: {
        backgroundImage: "url(".concat(s, ")")
      }
    }) : null
  })
}