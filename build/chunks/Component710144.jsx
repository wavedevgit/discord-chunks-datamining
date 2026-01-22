/** Chunk was on web.js **/
/** chunk id: 710144, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => s
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js");
let a = e => t => {
  null == t || t.stopPropagation(), e()
};

function s(e) {
  let {
    onClick: t,
    className: n,
    children: s
  } = e, o = i.useRef(null);
  return (0, r.jsx)("div", {
    onClick: t,
    ref: o,
    className: n,
    children: s({
      areaRef: o,
      handleStopPropagation: a
    })
  })
}