/** Chunk was on 81498 **/
/** chunk id: 404203, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => l
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js");
let s = e => t => {
  null == t || t.stopPropagation(), e()
};

function l(e) {
  let {
    onClick: t,
    className: n,
    children: l
  } = e, o = r.useRef(null);
  return (0, i.jsx)("div", {
    onClick: t,
    ref: o,
    className: n,
    children: l({
      areaRef: o,
      handleStopPropagation: s
    })
  })
}