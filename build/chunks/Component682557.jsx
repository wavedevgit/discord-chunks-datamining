/** Chunk was on 1113 **/
/** chunk id: 682557, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => s
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk397927 = require("./397927.js"),
  Chunk283354 = require("./283354.jsx");
let s = e => {
  let {
    entry: t,
    hideEditButton: n,
    children: s,
    onRequestOpen: a,
    onRequestClose: o,
    targetElementRef: c
  } = e;
  return (0, r.jsx)(l.YNO, {
    targetElementRef: c,
    onRequestOpen: a,
    onRequestClose: o,
    animation: l.YNO.Animation.NONE,
    position: "bottom",
    spacing: 4,
    align: "right",
    renderPopout: e => {
      let {
        closePopout: l
      } = e;
      return (0, r.jsx)(i.default, {
        entry: t,
        closePopout: l,
        hideEditButton: n
      })
    },
    children: s
  })
}