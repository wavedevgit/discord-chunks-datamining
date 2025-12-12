/** Chunk was on web.js **/
/** chunk id: 404203, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => a
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js");
let o = e => t => {
  null == t || t.stopPropagation(), e()
};

function a(e) {
  let {
    onClick: t,
    className: n,
    children: a
  } = e, s = i.useRef(null);
  return (0, r.jsx)("div", {
    onClick: t,
    ref: s,
    className: n,
    children: a({
      areaRef: s,
      handleStopPropagation: o
    })
  })
}