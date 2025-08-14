/** Chunk was on 77512 **/
/** chunk id: 404203, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => o
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js");
let l = e => t => {
  null == t || t.stopPropagation(), e()
};

function o(e) {
  let {
    onClick: t,
    className: n,
    children: o
  } = e, s = i.useRef(null);
  return (0, r.jsx)("div", {
    onClick: t,
    ref: s,
    className: n,
    children: o({
      areaRef: s,
      handleStopPropagation: l
    })
  })
}