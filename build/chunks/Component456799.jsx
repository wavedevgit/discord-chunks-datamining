/** Chunk was on 84249 **/
/** chunk id: 456799, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => o
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk607814 = require("./607814.js");
let o = function(e) {
  let {
    allowClicks: t = false,
    children: n,
    withBorder: r = false
  } = e;
  return (0, a.jsx)(l.Rny, {
    children: (0, a.jsx)(l.Zbd, {
      className: i()(s.componentPreviewWrapper, {
        [s.componentPreviewWrapperBordered]: r
      }),
      outline: r,
      children: (0, a.jsx)("div", {
        className: s.componentPreview,
        onClickCapture: t ? true : function(e) {
          e.stopPropagation()
        },
        children: n
      })
    })
  })
}