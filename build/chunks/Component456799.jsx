/** Chunk was on 50433 **/
/** chunk id: 456799, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => l
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk188764 = require("./188764.js");
let l = function(e) {
  let {
    allowClicks: t = false,
    children: n,
    withBorder: s = false
  } = e;
  return (0, r.jsx)(a.Rny, {
    children: (0, r.jsx)(a.Zbd, {
      className: o()(i.componentPreviewWrapper, {
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