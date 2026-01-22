/** Chunk was on 21738 **/
/** chunk id: 264580, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => c,
  q: () => o
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk397927 = require("./397927.js"),
  Chunk915089 = require("./915089.js"),
  Chunk850474 = require("./850474.js");

function o(e) {
  let {
    children: t,
    id: n
  } = e;
  return (0, r.jsx)(l.Text, {
    className: s.g,
    color: "text-subtle",
    id: n,
    variant: "text-sm/semibold",
    children: t
  })
}
let c = function(e) {
  let {
    children: t,
    renderPopout: n
  } = e, o = (0, a.GV)(), c = i.useRef(null);
  return (0, r.jsx)(l.YNO, {
    align: "right",
    position: "bottom",
    renderPopout: e => (0, r.jsx)(l.lGe, {
      className: s.S,
      "aria-labelledby": o,
      children: n(e, o)
    }),
    scrollBehavior: "close",
    targetElementRef: c,
    children: e => t(e, c)
  })
}