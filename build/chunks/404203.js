/** Chunk was on 40580 (29804edbfa36af1f.js) **/
"use strict";
r.d(t, {
  Z: () => o
});
var n = r(200651),
  s = r(192379);
let i = e => t => {
  null == t || t.stopPropagation(), e()
};

function o(e) {
  let {
    onClick: t,
    className: r,
    children: o
  } = e, l = s.useRef(null);
  return (0, n.jsx)("div", {
    onClick: t,
    ref: l,
    className: r,
    children: o({
      areaRef: l,
      handleStopPropagation: i
    })
  })
}