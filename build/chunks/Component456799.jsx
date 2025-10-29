/** Chunk was on 34297 **/
/** chunk id: 456799, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => l
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk188764 = require("./188764.js");
let l = function(e) {
  let {
    allowClicks: t = false,
    children: n,
    withBorder: s = false
  } = e;
  return (0, r.jsx)(o.Rny, {
    children: (0, r.jsx)(o.Zbd, {
      className: a()(i.componentPreviewWrapper, {
        [i.componentPreviewWrapperBordered]: s
      }),
      outline: s,
      children: (0, r.jsx)("div", {
        className: i.componentPreview,
        onClickCapture: t ? true : function(e) {
          e.stopPropagation()
        },
        children: n
      })
    })
  })
}