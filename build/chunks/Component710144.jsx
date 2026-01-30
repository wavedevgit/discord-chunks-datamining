/** Chunk was on 44411 **/
/** chunk id: 710144, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => l
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js");
let r = e => t => {
  null == t || t.stopPropagation(), e()
};

function l(e) {
  let {
    onClick: t,
    className: n,
    children: l
  } = e, o = s.useRef(null);
  return (0, i.jsx)("div", {
    onClick: t,
    ref: o,
    className: n,
    children: l({
      areaRef: o,
      handleStopPropagation: r
    })
  })
}