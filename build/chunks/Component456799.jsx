/** Chunk was on 10150 **/
/** chunk id: 456799, original params: e,t,s (module,exports,require) **/
require.d(exports, {
  Z: () => o
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk188764 = require("./188764.js");
let o = function(e) {
  let {
    allowClicks: t = false,
    children: s,
    withBorder: r = false
  } = e;
  return (0, n.jsx)(i.Rny, {
    children: (0, n.jsx)(i.Zbd, {
      className: a()(l.componentPreviewWrapper, {
        [l.componentPreviewWrapperBordered]: r
      }),
      outline: r,
      children: (0, n.jsx)("div", {
        className: l.componentPreview,
        onClickCapture: t ? true : function(e) {
          e.stopPropagation()
        },
        children: s
      })
    })
  })
}