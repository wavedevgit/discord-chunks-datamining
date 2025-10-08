/** Chunk was on 38029 **/
/** chunk id: 435883, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  q: () => u
});
var Chunk951288 = require("./951288.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk757746 = require("./757746.js"),
  Chunk73346 = require("./73346.js"),
  Chunk551760 = require("./551760.js");

function u(e) {
  var t;
  let {
    sku: n,
    className: r
  } = e, {
    data: u
  } = (0, a.Z)(null == n ? true : n.id), c = (null == u ? true : u.headerBackground) != null && (null == n ? true : n.applicationId) != null ? (0, s._W)(n.applicationId, u.headerBackground, 256) : true;
  return null != c && (0, i.jsx)("img", {
    className: l()(o.skuImage, r),
    src: c,
    alt: null != (t = null == n ? true : n.name) ? t : ""
  })
}