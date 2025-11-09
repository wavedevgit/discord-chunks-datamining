/** Chunk was on 30025 **/
/** chunk id: 16853, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => a
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk481060 = require("./481060.js"),
  Chunk643560 = require("./643560.jsx");
let a = e => {
  let {
    entry: t,
    hideEditButton: n,
    children: a,
    onRequestOpen: s,
    onRequestClose: o,
    targetElementRef: c
  } = e;
  return (0, r.jsx)(i.yRy, {
    targetElementRef: c,
    onRequestOpen: s,
    onRequestClose: o,
    animation: i.yRy.Animation.NONE,
    position: "bottom",
    spacing: 4,
    align: "right",
    renderPopout: e => {
      let {
        closePopout: i
      } = e;
      return (0, r.jsx)(l.default, {
        entry: t,
        closePopout: i,
        hideEditButton: n
      })
    },
    children: a
  })
}