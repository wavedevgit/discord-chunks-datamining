/** Chunk was on 22477 **/
/** chunk id: 589939, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => o
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  r = require.n(Chunk503698),
  Chunk397927 = require("./397927.js"),
  Chunk350246 = require("./350246.js");
let o = function(e) {
  let {
    allowClicks: t = false,
    children: n,
    withBorder: l = false
  } = e;
  return (0, a.jsx)(i.M1G, {
    children: (0, a.jsx)(i.ZpM, {
      className: r()(s.Rx, {
        [s.aK]: l
      }),
      outline: l,
      children: (0, a.jsx)("div", {
        className: s.AZ,
        onClickCapture: t ? true : function(e) {
          e.stopPropagation()
        },
        children: n
      })
    })
  })
}