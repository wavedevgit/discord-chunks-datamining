/** Chunk was on web.js **/
/** chunk id: 404203, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => o
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js");
let a = e => t => {
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
      handleStopPropagation: a
    })
  })
}