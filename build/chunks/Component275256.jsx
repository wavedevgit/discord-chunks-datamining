/** Chunk was on 58529 **/
/** chunk id: 275256, original params: a,e,s (module,exports,require) **/
require.r(exports), require.d(exports, {
  default: () => u
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk366523 = require("./366523.jsx"),
  Chunk706522 = require("./706522.js");

function u(a) {
  var e;
  let {
    imageUrl: s,
    backgroundImageUrl: u,
    altText: d,
    customClassNames: o
  } = a;
  return null == s ? null : (0, l.jsx)(r.A, {
    cardImage: s,
    cardBackgroundImage: u,
    altText: d,
    shape: null != o ? "custom" : "square",
    containerClassName: null != (e = null == o ? true : o.containerClassName) ? e : n.w,
    backgroundImageClassName: null == o ? true : o.backgroundImageClassName,
    foregroundImageClassName: null == o ? true : o.foregroundImageClassName
  })
}